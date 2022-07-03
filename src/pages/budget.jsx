// react

// additional functional

// components
import BudgetPanel from "../components/budget-panel/budget-panel";

// styles
function Budget() {
  return (
    <div className="budget p-15 g-15">
      <BudgetPanel type='incomes' />
      <BudgetPanel type='expenses' />
    </div>
  );
}

export default Budget