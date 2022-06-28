// react
import { useContext } from 'react';

// additional functional
import dataContext from '../../context';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

// components

// styles
import './chart-info-panel.scss'

function ChartInfoPanel({ type = 'incomes' }) {
  // * dataFromContext
  const { data } = useContext(dataContext)

  // * chartsSettings
  const calcLabels = type === 'incomes' ? data.incomes.map(item => item.text) : data.expenses.map(item => item.text)
  const calcData = type === 'incomes' ? data.incomes.map(item => item.amount) : data.expenses.map(item => item.amount)

  const chartData = {
    labels: calcLabels,
    datasets: [
      {
        label: '# of Votes',
        data: calcData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <div className="chart-info-panel p-15">
      <div className="chart-info-panel__chart">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default ChartInfoPanel