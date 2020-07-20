import React from 'react';
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';
import propTypes from 'prop-types';

import Loading from '../../Loading';

import './styles.css';

import {
  getYears,
  getRevenues,
  getRevenueRate,
  defineNumberOfYears,
} from '../chartFunctions';

function generateData(companyStock, numberOfYears) {
  return {
    datasets: [
      {
        label: 'Crescimento da Receita',
        yAxisID: 'right-y-axis',
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(67,67,67,1)',
        data: getRevenueRate(companyStock, numberOfYears).reverse(),
      },
      {
        label: 'Receita',
        yAxisID: 'left-y-axis',
        type: 'bar',
        data: getRevenues(companyStock, numberOfYears).reverse(),
        backgroundColor: 'rgba(126,182,234,1)',
      },
    ],
    labels: getYears(companyStock, numberOfYears).reverse(),
  };
}

function provideKey() {
  return Math.random();
}

const RevenueChart = ({ companyStock }) => {
  const numberOfYears = defineNumberOfYears(companyStock);
  if ((companyStock).length > 0) {
    return (
      <>
        <h1 className="chart-title">Receita</h1>
        <Bar
          data={generateData(companyStock, numberOfYears)}
          height={100}
          datasetKeyProvider={provideKey}
          options={{
            tooltips: {
              callbacks: {
                label(tooltipItem, mainData) {
                  if (tooltipItem.datasetIndex === 1) {
                    return `${mainData.datasets[tooltipItem.datasetIndex].label}: ${numeral(tooltipItem.value).format('$ 0,0')}`;
                  }
                  return `${mainData.datasets[tooltipItem.datasetIndex].label}: ${tooltipItem.value}%`;
                },
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
