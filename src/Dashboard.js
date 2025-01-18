import React, { createContext, useState, useContext, useEffect } from "react";
import JSONTable from "./JSONTable";
import Context from "./context";
import "./styles.css";

const Dashboard = () => {
  const [jsonData, setData] = useState(null);

  const generateJSON = async () => {
    try {
      const response = await fetch(
        "https://fake-json-api.mock.beeceptor.com/users"
      );
      const respData = await response.json();
      console.log("value got : ", respData);
      setData(respData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="alignClass">
      <div className="mainDiv"> Welcome to Dashboard </div>
      <button id="generateBtn" type="submit" onClick={generateJSON}>
        Generate JSON
      </button>

      <div>
        <Context.Provider value={jsonData}>
          <JSONTable />
        </Context.Provider>
      </div>
    </div>
  );
};

export default Dashboard;
