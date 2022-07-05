// react
import { useState, useContext } from 'react';


// additional functional
import dataContext from '../../context';
import useTitle from '../../hooks/title.hook';
import nextId from 'react-id-generator';

// components

// styles
import './budget-panel.scss'
import './budget-add-modal.scss'

function BudgetPanel({ type }) {
  const { data } = useContext(dataContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { setTitleByType } = useTitle()

  let budgetList = [];

  // * listRender
  if (type === 'incomes') {
    data.incomes.map(item => {
      budgetList.push(
        <li key={nextId()} className="budget-panel-list__item incomes-hover">
          <h3 className="budget-panel-list__title">Amount</h3>
          <p className="budget-panel-list__value incomes-glowing">{item.amount + '$'}</p>
          <h3 className="budget-panel-list__title">Category</h3>
          <p className="budget-panel-list__value">{item.category}</p>
        </li>
      )
    })
  } else {
    data.expenses.map(item => {
      budgetList.push(
        <li key={nextId()} className="budget-panel-list__item expenses-hover">
          <h3 className="budget-panel-list__title">Amount</h3>
          <p className="budget-panel-list__value expenses-glowing">{item.amount + '$'}</p>
          <h3 className="budget-panel-list__title">Category</h3>
          <p className="budget-panel-list__value">{item.category}</p>
        </li>
      )
    })
  }

  // * methods
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = (e) => {
    if (e.currentTarget === e.target) {
      setIsModalOpen(false)
    }
  }

  // * conditionalsRender
  const buttonClass = type === 'incomes' ? 'budget-panel__button incomes-box-shadow' : 'budget-panel__button expenses-box-shadow'
  const listClass = type === 'incomes' ? 'budget-panel-list incomes-scroll' : 'budget-panel-list expenses-scroll'

  return (
    <>
      <div className="budget-panel p-15">
        <header className="budget-panel__header">
          <h2 className="budget-panel__title title">Your {setTitleByType(type)}</h2>
          <button className={buttonClass} onClick={() => openModal()}></button>
        </header>
        <div className="divider"></div>
        <ul className={listClass}>
          {budgetList}
        </ul>
      </div>
      {isModalOpen ? <BudgetAddModal type={type} closeModal={closeModal} /> : null}
    </>
  );
}

function BudgetAddModal({ type, closeModal }) {
  const { data, setData } = useContext(dataContext)
  const [formValues, setFormValues] = useState({
    amount: '',
    category: type === 'incomes' ? data.incomesCategories[0] : data.expensesCategories[0],
  })
  const { setTitleByType } = useTitle()

  // * methods
  const onValueChange = (e) => {
    setFormValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const onAdd = (e) => {
    if (type === 'incomes' && formValues.amount !== '') {
      setData(state => ({
        ...state,
        incomes: [...state.incomes, { amount: formValues.amount, category: formValues.category }]
      }))

      // & localStorage
      const newIncomesForLS = {
        ...data,
        incomes: [...data.incomes, { amount: formValues.amount, category: formValues.category }]
      }
      localStorage.setItem('data', JSON.stringify(newIncomesForLS))
    }

    if (type === 'expenses' && formValues.amount !== '') {
      setData(state => ({
        ...state,
        expenses: [...state.expenses, { amount: formValues.amount, category: formValues.category }]
      }))

      // & localStorage
      const newExpensesForLS = {
        ...data,
        expenses: [...data.expenses, { amount: formValues.amount, category: formValues.category }]
      }
      localStorage.setItem('data', JSON.stringify(newExpensesForLS))
    }

    closeModal(e)
  }

  // * conditionalsRender
  const inputColor = type === 'incomes' ? { color: '#21bf73' } : { color: '#fd5e53' }
  const buttonClass = type === 'incomes' ? 'budget-add-modal__add incomes-box-shadow' : 'budget-add-modal__add expenses-box-shadow'

  return (
    <div className="budget-add-modal" onClick={closeModal}>
      <div className="budget-add-modal__content p-15">
        <header>
          <h2 className="budget-add-modal__title title">Add {setTitleByType(type)}</h2>
          <button onClick={closeModal}></button>
        </header>
        <label>
          Amount
          <input type="number" name="amount" style={inputColor} onChange={onValueChange} value={formValues.amount} />
        </label>
        <label>
          Category
          <select name="category" onChange={onValueChange} value={formValues.category}>
            {
              type === 'incomes' ? data.incomesCategories.map(item => <option key={item} value={item}>{item}</option>) : data.expensesCategories.map(item => <option key={item} value={item}>{item}</option>)
            }
          </select>
        </label>
        <button className={buttonClass} onClick={onAdd}>ADD</button>
      </div>
    </div>
  );
}

export default BudgetPanel