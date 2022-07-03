// react
import { useContext } from 'react';

// additional functional
import dataContext from '../../context';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import useTitle from '../../hooks/title.hook';

// components

// styles
import './chart-info-panel.scss'

function ChartInfoPanel({ type = 'incomes' }) {
  const { data } = useContext(dataContext)
  const { setTitleByType } = useTitle()

  // * chartsSettings
  const calcLabels = type === 'incomes' ? data.incomes.map(item => item.category) : data.expenses.map(item => item.category)
  const calcData = type === 'incomes' ? data.incomes.map(item => item.amount) : data.expenses.map(item => item.amount)

  const chartData = {
    labels: calcLabels,
    datasets: [
      {
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
      <h2 className="chart-info-panel__title title">{setTitleByType(type)} chart</h2>
      <div className="chart-info-panel__chart">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default ChartInfoPanel