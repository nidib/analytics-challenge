import React from 'react';
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';
import propTypes from 'prop-types';

import Loading from '../../Loading';

import {
  getYears,
  getEbitdas,
  getEbitdaRatios,
  defineNumberOfYears,
} from '../chartFunctions';

function generateData(companyStock, numberOfYears) {
  return {
    datasets: [
      {
        label: 'Margem EBITDA',
        yAxisID: 'right-y-axis',
        type: 'line',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(67,67,67,1)',
        data: getEbitdaRatios(companyStock, numberOfYears).reverse(),
      },
      {
        label: 'EBITDA',
        yAxisID: 'left-y-axis',
        type: 'bar',
        data: getEbitdas(companyStock, numberOfYears).reverse(),
        backgroundColor: 'rgba(246,160,74,1)',
      },
    ],
    labels: getYears(companyStock, numberOfYears).reverse(),
  };
}

const EbitdaChart = ({ companyStock }) => {
  const numberOfYears = defineNumberOfYears(companyStock);
  if ((companyStock).length > 0) {
    return (
      <>
        <h1 className="chart-title">EBITDA</h1>
        <Bar
          data={generateData(companyStock, numberOfYears)}
          height={100}
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
                    stepSize: 10,
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

EbitdaChart.propTypes = {
  companyStock: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
};

export default EbitdaChart;
