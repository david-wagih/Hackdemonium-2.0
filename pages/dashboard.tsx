import React from "react";
import Dashboardnavbar from "../components/dashboard/dashboardnavbar";
import Goals from "../components/dashboard/goals";
import Badges from "../components/dashboard/badges";
export default function dashboard() {
  return (
    <>
      <Dashboardnavbar />
      <Goals />
      <Badges />
    </>
  );
}
