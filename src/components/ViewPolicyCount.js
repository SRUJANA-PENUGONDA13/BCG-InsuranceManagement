import React, { useState } from "react";
import { Link } from "react-router-dom";
import insuranceManagementAPI from "./apis/insuranceManagementAPI";
import Chart from "./Chart";
import "./App.css";

const ViewPolicyCount = () => {
  const [months, setMonths] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [policies, setPolicies] = useState([]);
  const getPoliciesCount = (policies) => {
    var monthsBuffer = months;
    policies.forEach((policy) => {
      var date = new Date(policy.dateOfPurchase);
      monthsBuffer[date.getMonth()] = monthsBuffer[date.getMonth()] + 1;
    });
    console.log(monthsBuffer);
    setMonths(monthsBuffer);
  };

  const searchHandler = async (id) => {
    var resourceUrl = "/policyDetails/customer/" + id;
    var response = await insuranceManagementAPI.get(resourceUrl);
    setPolicies(response.data.policy);
    getPoliciesCount(response.data.policy);
  };
  return (
    <div className="container">
      <nav>BCG INSURANCE MANAGEMENT</nav>
      <center>
        <main>
          <div className="policyCount">
            <label className="label" for="CustomerId">
              Customer Id
            </label>
            <input
              type="text"
              placeholder="Search..."
              onChange={(event) => searchHandler(event.target.value)}
            ></input>
          </div>
          <Chart months={months} />
        </main>
      </center>
    </div>
  );
};

export default ViewPolicyCount;
