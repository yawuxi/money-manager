// styles
import './sidebar.scss'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <h2 className="sidebar__title">Pages</h2>
        <ul>
          <li className="sidebar__item">
            <img className="sidebar__img" src="../images/overview.svg" alt="overview" />
            <h3 className="sidebar__content-title">Overview</h3>
          </li>
          <li className="sidebar__item">
            <img className="sidebar__img" src="../images/budget.svg" alt="overview" />
            <h3 className="sidebar__content-title">Budget</h3>
          </li>
        </ul>
        <h2 className="sidebar__title">Account</h2>
        <li className="sidebar__item">
          <img className="sidebar__img" src="../images/settings.svg" alt="overview" />
          <h3 className="sidebar__content-title">Settings</h3>
        </li>
      </nav>
    </aside >
  )
}

export default Sidebar