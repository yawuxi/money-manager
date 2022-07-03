function useTitle() {

  const setTitleByType = (type, requiredTitleType = 'incomes', whichClass = 'incomes') => {
    const classValue = type === whichClass ? 'incomes-glowing' : 'expenses-glowing'
    const whichTitle = type === requiredTitleType ? <span className={classValue}>{type[0].toUpperCase() + type.slice(1)}</span> : <span className={classValue}>{type[0].toUpperCase() + type.slice(1)}</span>
    return whichTitle
  }

  return { setTitleByType }
}

export default useTitle