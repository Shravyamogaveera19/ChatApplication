import { Outlet } from 'react-router-dom';
import './dashboardLayout.scss';
import { useEffect } from 'react';

const DashBoardLayout = () => {
  return (
    <div>
      <div className="DashboardLayout">
        <div className="menu">MENU</div>
        <div className="content">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashBoardLayout
