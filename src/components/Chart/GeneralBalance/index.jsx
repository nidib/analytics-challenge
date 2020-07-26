import React from 'react';
import { Bar } from 'react-chartjs-2';
import propTypes from 'prop-types';

import Loading from '../../Loading';

import {
  lineColors,
  pointStyles,
  chartHeight,
  commonToAllCharts,
  formatToMoney,
} from '../commonChartData';

import {
  getYears,
  getRevenues,
  getEbitdas,
  getOperatingExpenses,
  getConsolidatedIncome,
  defineNumberOfYears,
} from '../commonChartFunctions';

function generateData(companiesStocks, numberOfYears) {
  const datasets = [];
  companiesStocks.forEach((companyStock, index) => {
    const datasetRevenue = {
      customID: 0,
      label: `Receita (${companyStock.symbol})`,
      type: 'line',
      pointStyle: 'trianglge',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: `${lineColors[index]}`,
      data: getRevenues(companyStock.financials, numberOfYears).reverse(),
    };
    const datasetEbitdas = {
      customID: 1,
      label: `EBITDA (${companyStock.symbol})`,
      type: 'line',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: `${lineColors[index]}`,
      data: getEbitdas(companyStock.financials, numberOfYears).reverse(),
    };
    const datasetOperatingExpenses = {
      customID: 2,
      label: `Despesas Operacionais (${companyStock.symbol})`,
      type: 'line',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: `${lineColors[index]}`,
      data: getOperatingExpenses(companyStock.financials, numberOfYears).reverse(),
    };
    const datasetConsolidatedIncome = {
      customID: 3,
      label: `Renda Consolidada (${companyStock.symbol})`,
      type: 'line',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: `${lineColors[index]}`,
      data: getConsolidatedIncome(companyStock.financials, numberOfYears).reverse(),
    };
    datasets.push(datasetRevenue, datasetEbitdas, datasetOperatingExpenses, datasetConsolidatedIncome);
  });

  let yearLabels = [];
  companiesStocks.forEach((companyStock) => {
    const currentLabels = getYears(companyStock.financials);
    if (currentLabels > yearLabels) yearLabels = currentLabels;
  });

  return {
    datasets,
    labels: yearLabels.reverse(),
  };
}

function provideKey() {
  return Math.random();
}

const GeneralBalance = ({ companyStock }) => {
  const numberOfYears = defineNumberOfYears();
  if ((companyStock).length > 0) {
    return (
      <>
        <h1 className="chart-title">Balanço Geral</h1>
        <Bar
          data={generateData(companyStock, numberOfYears)}
          height={chartHeight}
          datasetKeyProvider={provideKey}
          options={{
            ...commonToAllCharts,
            tooltips: {
              callbacks: {
                label(tooltipItem, mainData) {
                  return `${mainData.datasets[tooltipItem.datasetIndex].label}: ${formatToMoney(tooltipItem.value)}`;
                },
              },
            },
            elements: {
              line: {
                tension: 0,
              },
              point: {
                radius: 2,
                borderWidth: 4,
                pointStyle(context) {
                  return pointStyles[context.dataset.customID];
                },
              },
            },
            legend: {
              labels: {
                usePointStyle: true,
              },
              position: 'bottom',
              fullWidth: false,
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false,
                },
              }],
              yAxes: [
                {
                  id: 'left-y-axis',
                  type: 'linear',
                  position: 'left',
                  ticks: {
                    callback(value) {
                      return formatToMoney(value);
                    },
                  },
                },
              ],
            },
          }}
        />
      </>
    );
  }
  return (<Loading />);
};

GeneralBalance.propTypes = {
  companyStock: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
};

export default GeneralBalance;
