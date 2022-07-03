// react

// additional functional

// components
import InfoPanel from "../components/info-panel/info-panel";
import ChartInfoPanel from "../components/chart-info-panel/chart-info-panel";

// styles

function Overview() {
  return (
    <div className="overview p-15 g-15">
      <section className="overview__top-section g-15">
        <InfoPanel type='incomes' />
        <InfoPanel type='expenses' />
      </section>
      <section className="overview__bottom-section g-15">
        <ChartInfoPanel type='incomes' />
        <ChartInfoPanel type='expenses' />
      </section>
    </div>
  );
}

export default Overview