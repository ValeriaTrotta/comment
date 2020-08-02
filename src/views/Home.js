import React from "react";
import "./Home.css";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <div>
      <div className="page">
        <div className="banner">
          <div id="left"></div>
          <div id="center">
            <h4>The place where you can comment about</h4>
            <h5>anything</h5>
          </div>
          <div id="right"></div>
        </div>
        <Dashboard />
      </div>
    </div>
  );
}
