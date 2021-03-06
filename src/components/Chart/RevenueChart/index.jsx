import React from 'react';
import { Bar } from 'react-chartjs-2';
import propTypes from 'prop-types';

import Loading from '../../Loading';

import {
  barColors,
  lineColors,
  revenueEbitdaChartOptions,
  formatToMoney,
} from '../commonChartData';

import './styles.css';

import {
  getYears,
  getRevenues,
  getRevenueRate,
  defineNumberOfYears,
} from '../commonChartFunctions';

function generateData(companiesStocks, numberOfYears) {
  const datasets = [];
  companiesStocks.forEach((companyStock, index) => {
    const datasetRevenueGrowth = {
      label: `Crescimento da Receita (${companyStock.symbol})`,
      yAxisID: 'right-y-axis',
      type: 'line',
      data: getRevenueRate(companyStock.financials, numberOfYears).reverse(),
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: lineColors[index],
    };
    datasets.push(datasetRevenueGrowth);
  });

  companiesStocks.forEach((companyStock, index) => {
    const datasetRevenue = {
      label: `Receita (${companyStock.symbol})`,
      yAxisID: 'left-y-axis',
      type: 'bar',
      data: getRevenues(companyStock.financials, numberOfYears).reverse(),
      backgroundColor: barColors[index],
    };
    datasets.push(datasetRevenue);
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

const RevenueChart = ({ companyStock }) => {
  const numberOfYears = defineNumberOfYears();
  if ((companyStock).length > 0) {
    return (
      <>
        <h1 className="chart-title">Receita</h1>
        <Bar
          data={generateData(companyStock, numberOfYears)}
          height={180}
          datasetKeyProvider={provideKey}
          options={{
            ...revenueEbitdaChartOptions,
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
                {
                  id: 'right-y-axis',
                  type: 'linear',
                  position: 'right',
                  ticks: {
                    callback(value) {
                      return `${value}%`;
                    },
                    stepSize: 20,
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

RevenueChart.propTypes = {
  companyStock: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
};

export default RevenueChart;
