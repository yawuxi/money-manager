// react

// additional functional

// components
import InfoPanel from "../components/info-panel/info-panel";

// styles
import './pages.scss'

function Overview() {
  return (
    <div className="overview">
      <div className="overview__top p-15">
        <InfoPanel type='incomes' />
        <InfoPanel type='expenses' />
      </div>
    </div>
  );
}

export default Overview