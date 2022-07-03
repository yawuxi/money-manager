// react
import { useState, useContext } from 'react';

// additional functional
import useTitle from '../hooks/title.hook';
import dataContext from '../context'

// components

// styles

function Settings() {
  const [whichModal, setWhichModal] = useState('')
  const { data } = useContext(dataContext)

  // * methods
  const openModal = (modalType) => {
    setWhichModal(modalType)
  }

  const closeModal = (e) => {
    if (e.currentTarget === e.target) {
      setWhichModal('')
    }
  }

  return (
    <div className="settings p-15">
      <h2 className="settings__title title">App settings</h2>
      <div className="settings__content g-15">
        <div className="settings__col p-15">
          {/* incomes categories */}
          <ul className="settings-categories">
            {data.incomesCategories.map(item => {
              return (
                <li key={item} className="settings-categories__item">
                  {item}
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 11V16M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6ZM7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147V3.147ZM2 6H22H2ZM10 11V16V11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              )
            })}
          </ul>
          <button className="incomes-box-shadow" onClick={() => openModal('incomes')}>add category</button>
        </div>
        <div className="settings__col p-15">
          {/* expenses categories */}
          <ul className="settings-categories">
            {data.expensesCategories.map(item => {
              return (
                <li key={item} className="settings-categories__item">
                  {item}
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 11V16M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6ZM7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147V3.147ZM2 6H22H2ZM10 11V16V11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              )
            })}
          </ul>
          <button className="expenses-box-shadow" onClick={() => openModal('expenses')}>add category</button>
        </div>
      </div>
      {whichModal === 'incomes' ? <SettingsAddModal type={whichModal} closeModal={closeModal} /> : null}
      {whichModal === 'expenses' ? <SettingsAddModal type={whichModal} closeModal={closeModal} /> : null}
    </div>
  );
}

function SettingsAddModal({ type, closeModal }) {
  const { setData } = useContext(dataContext)
  const [category, setCategory] = useState('')
  const { setTitleByType } = useTitle()

  // * methods
  const onValueChange = (e) => {
    setCategory(e.target.value)
  }

  const onAdd = (e) => {
    if (type === 'incomes' && category !== '') {
      setData(state => ({
        ...state,
        incomesCategories: [...state.incomesCategories, category]
      }))
    }

    if (type === 'expenses' && category !== '') {
      setData(state => ({
        ...state,
        expensesCategories: [...state.expensesCategories, category]
      }))
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
          Category
          <input type="text" name="category" style={inputColor} onChange={onValueChange} value={category} />
        </label>
        <button className={buttonClass} onClick={onAdd}>ADD</button>
      </div>
    </div>
  );
}

export default Settings