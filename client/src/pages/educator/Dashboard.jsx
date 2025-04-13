import React, { useContext, useState } from "react";
import { Appcontext } from "../../context/AppContext";
import { dummyDashboardData } from "../../assets/assets";

const Dashboard = () => {
  const { currency } = useContext(Appcontext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  return <div>Dashboard</div>;
};

export default Dashboard;
