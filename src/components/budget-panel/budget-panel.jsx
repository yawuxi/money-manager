// react
import { useState, useContext } from 'react';


// additional functional
import dataContext from '../../context';
import useTitle from '../../hooks/title.hook';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import nextId from 'react-id-generator';

// components

// styles
import './budget-panel.scss'
import './budget-add-modal.scss'

function BudgetPanel({ type }) {
  const { data, setData } = useContext(dataContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { setTitleByType } = useTitle()

  let budgetList = [];

  // * methods
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = (e) => {
    if (e.currentTarget === e.target) {
      setIsModalOpen(false)
    }
  }

  const onRemoveItem = (id, type) => {
    setData(state => {
      switch (type) {
        case 'incomes':
          // localStorage
          localStorage.setItem('data', JSON.stringify({ ...data, incomes: JSON.parse(localStorage.getItem('data')).incomes.filter(item => item.id !== id) }))
          // state
          return { ...state, incomes: state.incomes.filter(item => item.id !== id) }
        case 'expenses':
          // localStorage
          localStorage.setItem('data', JSON.stringify({ ...data, expenses: JSON.parse(localStorage.getItem('data')).expenses.filter(item => item.id !== id) }))
          // state
          return { ...state, expenses: state.expenses.filter(item => item.id !== id) }
        default:
          return state
      }
    })
  }

  // * conditionalsRender
  const buttonClass = type === 'incomes' ? 'budget-panel__button incomes-box-shadow' : 'budget-panel__button expenses-box-shadow'
  const listClass = type === 'incomes' ? 'budget-panel-list incomes-scroll' : 'budget-panel-list expenses-scroll'

  // * framer-motion
  const liVariants = {
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * .20 }
    }),
    hidden: {
      y: -35,
      opacity: 0,
    },
  }

  // * listRender
  if (type === 'incomes') {
    data.incomes.map((item, i) => {
      budgetList.push(
        <motion.li
          key={i}
          className="budget-panel-list__item incomes-hover"
          variants={liVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          custom={i}>
          <h3 className="budget-panel-list__title">Amount</h3>
          <p className="budget-panel-list__value incomes-glowing">{item.amount + '$'}</p>
          <h3 className="budget-panel-list__title">Category</h3>
          <p className="budget-panel-list__value">{item.category}</p>
          <button className="budget-panel-list__remove" onClick={() => onRemoveItem(item.id, 'incomes')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 11V16M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6ZM7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147V3.147ZM2 6H22H2ZM10 11V16V11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.li>
      )
    })
  } else {
    data.expenses.map((item, i) => {
      budgetList.push(
        <motion.li
          key={i}
          className="budget-panel-list__item expenses-hover"
          variants={liVariants}
          initial='hidden'
          animate='visible'
          custom={i}>
          <h3 className="budget-panel-list__title">Amount</h3>
          <p className="budget-panel-list__value expenses-glowing">{item.amount + '$'}</p>
          <h3 className="budget-panel-list__title">Category</h3>
          <p className="budget-panel-list__value">{item.category}</p>
          <button className="budget-panel-list__remove" onClick={() => onRemoveItem(item.id, 'expenses')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 11V16M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6ZM7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147V3.147ZM2 6H22H2ZM10 11V16V11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.li>
      )
    })
  }

  return (
    <>
      <motion.div
        className="budget-panel p-15"
        animate={{ translateY: ['-125%', '0%'] }}
        transition={{ delay: 0.05 }}
        exit={{ translateY: ['0%', '-125%'], transition: 0.5 }}
      >
        <header className="budget-panel__header">
          <h2 className="budget-panel__title title">Your {setTitleByType(type)}</h2>
          <button className={buttonClass} onClick={() => openModal()}></button>
        </header>
        <div className="divider"></div>
        <ul className={listClass}>
          {budgetList}
        </ul>
      </motion.div>
      {isModalOpen ? <BudgetAddModal type={type} closeModal={closeModal} /> : null}
    </>
  );
}

function BudgetAddModal({ type, closeModal }) {
  const { data, setData } = useContext(dataContext)
  const { setTitleByType } = useTitle()

  // * formik
  const formik = useFormik({
    initialValues: {
      amount: '',
      category: type === 'incomes' ? data.incomesCategories[0] : data.expensesCategories[0],
    },
    validationSchema: Yup.object({
      amount: Yup.string().required('Укажите сумму!'),
      category: Yup.string().required('Выберите категорию!')
    }),
    onSubmit: ({ amount, category }, e) => onAdd(amount, category, e)
  })

  // * methods
  function onAdd(amount, category, e) {
    if (type === 'incomes' && amount !== '') {
      closeModal(e)
      setData(state => ({
        ...state,
        incomes: [...state.incomes, { amount, category, id: nextId() }]
      }))

      // & localStorage
      const newIncomesForLS = {
        ...data,
        incomes: [...data.incomes, { amount, category, id: nextId() }]
      }
      localStorage.setItem('data', JSON.stringify(newIncomesForLS))
    }

    if (type === 'expenses' && amount !== '') {
      closeModal(e)
      setData(state => ({
        ...state,
        expenses: [...state.expenses, { amount, category, id: nextId() }]
      }))

      // & localStorage
      const newExpensesForLS = {
        ...data,
        expenses: [...data.expenses, { amount, category, id: nextId() }]
      }
      localStorage.setItem('data', JSON.stringify(newExpensesForLS))
    }
  }

  // * conditionalsRender
  const inputColor = type === 'incomes' ? { color: '#21bf73' } : { color: '#fd5e53' }
  const buttonClass = type === 'incomes' ? 'budget-add-modal__add incomes-box-shadow' : 'budget-add-modal__add expenses-box-shadow'

  return (
    <div className="budget-add-modal" onClick={closeModal} >
      <div className="budget-add-modal__content p-15">
        <header>
          <h2 className="budget-add-modal__title title">Add {setTitleByType(type)}</h2>
          <button onClick={closeModal}></button>
        </header>
        <form onSubmit={formik.handleSubmit}>
          <label>
            Amount
            <input
              type="number"
              name="amount"
              style={inputColor}
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <div style={{ color: 'red' }}>{formik.errors.amount}</div> : null}
          </label>
          <label>
            Category
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {
                type === 'incomes' ? data.incomesCategories.map(item => <option key={item} value={item}>{item}</option>) : data.expensesCategories.map(item => <option key={item} value={item}>{item}</option>)
              }
            </select>
            {formik.errors.category && formik.touched.category ? <div style={{ color: 'red' }}>{formik.errors.category}</div> : null}
          </label>
          <button className={buttonClass} type='submit'>ADD</button>
        </form>
      </div>
    </div >
  );
}

export default BudgetPanel