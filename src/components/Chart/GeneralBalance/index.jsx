import React from 'react';
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';
import propTypes from 'prop-types';

import Loading from '../../Loading';

import {
  getYears,
  getRevenues,
  getEbitdas,
  getOperatingExpenses,
  getConsolidatedIncome,
  defineNumberOfYears,
} from '../chartFunctions';

function generateData(companyStock, numberOfYears) {
  return {
    datasets: [
      {
        label: 'Receita',
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(126,182,234,1)',
        yAxisID: 'left-y-axis',
        data: getRevenues(companyStock, numberOfYears).reverse(),
      },
      {
        label: 'EBITDA',
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(246,160,74,1)',
        data: getEbitdas(companyStock, numberOfYears).reverse(),
      },
      {
        label: 'Despesas Operacionais',
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(67,67,67,1)',
        data: getOperatingExpenses(companyStock, numberOfYears).reverse(),
      },
      {
        label: 'Consolidated Income',
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(138,43,226, 1)',
        data: getConsolidatedIncome(companyStock, numberOfYears).reverse(),
      },
    ],
    labels: getYears(companyStock, numberOfYears).reverse(),
  };
}

const GeneralBalance = ({ companyStock }) => {
  const numberOfYears = defineNumberOfYears(companyStock);
  if ((companyStock).length > 0) {
    return (
      <>
        <h1 className="chart-title">Balanço Geral</h1>
        <Bar
          data={generateData(companyStock, numberOfYears)}
          height={100}
          options={{
            tooltips: {
              callbacks: {
                label(tooltipItem, mainData) {
                  return `${mainData.datasets[tooltipItem.datasetIndex].label}: ${numeral(tooltipItem.value).format('$ 0,0')}`;
                },
              },
            },
            elements: {
              line: {
                tension: 0,
              },
            },
            spanGaps: true,
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Demonstrações de resultados anuais',
              fontStyle: 'normal',
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
                      return numeral(value).format('$ 0,0');
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
