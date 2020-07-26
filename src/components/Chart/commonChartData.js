export function formatToMoney(number) {
  return `$ ${parseFloat(number).toLocaleString('en-US', { type: 'currency', currency: 'USD' })}`;
}

export const lineColors = ['rgba(23, 207, 84, 1)', 'rgba(192, 79, 38, 1)', 'rgba(97, 14, 215, 1)'];
export const barColors = ['rgba(23, 207, 84, .6)', 'rgba(192, 79, 38, .6)', 'rgba(97, 14, 215, .6)'];
export const pointStyles = ['circle', 'triangle', 'rect', 'star'];

export const chartHeight = 200;

export const commonToAllCharts = {
  title: {
    display: true,
    text: 'Demonstrações de resultados anuais',
    fontStyle: 'normal',
  },
  spanGaps: true,
};

export const revenueEbitdaChartOptions = {
  tooltips: {
    callbacks: {
      label(tooltipItem, mainData) {
        if (tooltipItem.datasetIndex >= (mainData.datasets.length / 2)) {
          return `${mainData.datasets[tooltipItem.datasetIndex].label}: ${formatToMoney(tooltipItem.value)}`;
        }
        return `${mainData.datasets[tooltipItem.datasetIndex].label}: ${tooltipItem.value}%`;
      },
    },
  },
  legend: {
    position: 'bottom',
    fullWidth: false,
  },
  elements: {
    point: {
      radius: 2,
      borderWidth: 4,
      pointStyle: 'circle',
    },
  },
  ...commonToAllCharts,
};
