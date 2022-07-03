// react
import { useContext } from 'react';

// additional functional
import dataContext from '../../context';
import nextId from 'react-id-generator';
import useTitle from '../../hooks/title.hook';

// components

// styles
import './info-panel.scss'

function InfoPanel({ type = 'incomes' }) {
  const { data } = useContext(dataContext)
  const { setTitleByType } = useTitle()

  const whichScroll = type === 'incomes' ? 'info-panel-list incomes-scroll' : 'info-panel-list expenses-scroll'

  const infoPanelListItem = ({ amount, category }) => {
    const whichAmount = type === 'incomes' ? <span className="info-panel-list__amount info-panel-list__amount-incomes">{amount}</span> : <span className="info-panel-list__amount info-panel-list__amount-expenses">{amount}</span>

    return <li key={nextId()} className="info-panel-list__item">{whichAmount} from <span className="info-panel-list__text">{category}</span></li>
  }

  return (
    <div className="info-panel p-15">
      <div className="info-panel__title title">Last {setTitleByType(type)}</div>
      <div className="divider"></div>
      <ul className={whichScroll}>
        {type === 'incomes' ? data.incomes.map(item => infoPanelListItem(item)) : data.expenses.map(item => infoPanelListItem(item))}
      </ul>
    </div>
  );
}

export default InfoPanel