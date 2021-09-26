import React from "react";
import { Link } from "react-router-dom";
import insuranceManagementAPI from "./apis/insuranceManagementAPI";
import "./App.css";

class Home extends React.Component {
  state = {
    policies: [],
    selectedId: 0,
  };

  dropDownHandler = (option) => {
    this.setState({ selectedId: option });
  };

  searchHandler = async (id) => {
    var resourceUrl;
    var response;
    this.setState({ policies: [] });
    if (this.state.selectedId == 0) {
      resourceUrl = "/policyDetails/" + id;
      response = await insuranceManagementAPI.get(resourceUrl);
      this.setState({ policies: response.data.policy });
    } else {
      resourceUrl = "/policyDetails/customer/" + id;
      response = await insuranceManagementAPI.get(resourceUrl);
      this.setState({ policies: response.data.policy });
    }
  };

  render() {
    return (
      <div className="container">
        <nav>BCG INSURANCE MANAGEMENT</nav>
        <center>
          <main>
            <h3>View Policy Details</h3>
            <div className="policySearch">
              <select
                class="ui selection dropdown larger"
                onChange={(event) => this.dropDownHandler(event.target.value)}
              >
                <option value="0">Policy ID</option>
                <option value="1">Customer ID</option>
              </select>
              <div class="ui input">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(event) => this.searchHandler(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="policyDetails">
              <table className="ui unstackable celled table">
                <tbody className="tableBody">
                  <tr>
                    <td className="policyHeader">Policy Id</td>
                    <td className="policyHeader">Date Of Purchase</td>
                    <td className="policyHeader">Customer Id</td>
                    <td className="policyHeader">Fuel</td>
                    <td className="policyHeader">Vehicle Segment</td>
                    <td className="policyHeader">Premium</td>
                    <td className="policyHeader">Bodily Injury Liability</td>
                    <td className="policyHeader">Personal Injury Protection</td>
                    <td className="policyHeader">Property Damage Liability</td>
                    <td className="policyHeader">Collision</td>
                    <td className="policyHeader">Comprehensive</td>
                    <td className="policyHeader">Customer Gender</td>
                    <td className="policyHeader">Customer Income Group</td>
                    <td className="policyHeader">Customer Region</td>
                    <td className="policyHeader">Customer Marital Status</td>
                    <td className="policyHeader">Action</td>
                  </tr>
                  {this.state.policies.map((record) => (
                    <tr>
                      <td>{record.policyId}</td>
                      <td>{record.dateOfPurchase}</td>
                      <td>{record.customerId}</td>
                      <td>{record.fuel}</td>
                      <td>{record.vehicleSegment}</td>
                      <td>{record.premium}</td>
                      <td>{record.bodilyInjuryLiability}</td>
                      <td>{record.personalInjuryProtection}</td>
                      <td>{record.propertyDamageLiability}</td>
                      <td>{record.collision}</td>
                      <td>{record.comprehensive}</td>
                      <td>{record.customerGender}</td>
                      <td>{record.customerIncomeGroup}</td>
                      <td>{record.customerRegion}</td>
                      <td>{record.customerMaritalStatus}</td>
                      <td>
                        <Link
                          to={{
                            pathname: "/update/",
                            query: { data: record },
                          }}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <Link
                to={{
                  pathname: "/chart/",
                }}
              >
                View No.of Policies purchased in each month
              </Link>
            </div>
          </main>
        </center>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
