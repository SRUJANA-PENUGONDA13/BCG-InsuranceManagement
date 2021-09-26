import React, { useState } from "react";
import axios from "axios";
import insuranceManagementAPI from "./apis/insuranceManagementAPI";
import "./App.css";

class Update extends React.Component {
  state = {
    data: this.props.location.query.data,
    displayStatus: "active",
    outputMsg: "",
    count: 0,
  };
  updatePolicyDetails = async (event) => {
    event.preventDefault();
    var resourceUrl = "/policyDetails/update";
    var response = await insuranceManagementAPI.put(
      resourceUrl,
      this.state.data
    );
    this.setState({ displayStatus: "inactive" });
    this.setState({ outputMsg: "Data Updated Successfully" });
    window.location.href("/");
  };
  updateDetails = (value, name) => {
    var items = this.state.data;
    var key = name;
    items[key] = value;
    this.setState({ data: items });
  };

  render() {
    return (
      <div className="container">
        <nav>BCG INSURANCE MANAGEMENT</nav>
        <center>
          <main>
            <h3>Update Policy Details</h3>
            <form>
              <div className="policyUpdate">
                <table className="updatePolicyDetails">
                  <tr>
                    <td>
                      <label className="label" for="policyId">
                        Policy Id
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="policyId"
                        value={this.state.data.policyId}
                        readOnly
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="dateOfPurchase">
                        Date of purchase
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="dateOfPurchase"
                        value={this.state.data.dateOfPurchase}
                        readOnly
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="customerId">
                        Customer Id
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="customerId"
                        value={this.state.data.customerId}
                        readOnly
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="fuel">
                        Fuel
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="fuel"
                        placeholder={this.state.data.fuel}
                        onChange={(event) =>
                          this.updateDetails(event.target.value, "fuel")
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="vehicleSegment">
                        vehicleSegment
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="fuel"
                        placeholder={this.state.data.vehicleSegment}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "vehicleSegment"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="premium">
                        Premium
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="premium"
                        min="0"
                        max="1000000"
                        placeholder={this.state.data.premium}
                        onChange={(event) =>
                          this.updateDetails(event.target.value, "premium")
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="bodilyInjuryLiability">
                        Bodily Injury Liability
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="bodilyInjuryLiability"
                        placeholder={this.state.data.bodilyInjuryLiability}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "bodilyInjuryLiability"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="personalInjuryProtection">
                        Personal Injury Protection
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="personalInjuryProtection"
                        placeholder={this.state.data.personalInjuryProtection}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "personalInjuryProtection"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                </table>
                <table className="updatePolicyDetails">
                  <tr>
                    <td>
                      <label className="label" for="propertyDamageLiability">
                        Property Damage Liability
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="propertyDamageLiability"
                        placeholder={this.state.data.propertyDamageLiability}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "propertyDamageLiability"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="collision">
                        Collision
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="collision"
                        placeholder={this.state.data.collision}
                        onChange={(event) =>
                          this.updateDetails(event.target.value, "collision")
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="comprehensive">
                        Comprehensive
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="comprehensive"
                        placeholder={this.state.data.comprehensive}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "comprehensive"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="customerGender">
                        Customer Gender
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="customerGender"
                        placeholder={this.state.data.customerGender}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "customerGender"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="customerIncomeGroup">
                        Customer Income Group
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="customerIncomeGroup"
                        placeholder={this.state.data.customerIncomeGroup}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "customerIncomeGroup"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="customerRegion">
                        Customer Region
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="customerRegion"
                        placeholder={this.state.data.customerRegion}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "customerRegion"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label" for="customerMaritalStatus">
                        Customer Marital Status
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="customerMaritalStatus"
                        placeholder={this.state.data.customerMaritalStatus}
                        onChange={(event) =>
                          this.updateDetails(
                            event.target.value,
                            "customerMaritalStatus"
                          )
                        }
                      ></input>
                    </td>
                  </tr>
                </table>
              </div>
              <button
                className={`updateBtn ${this.state.displayStatus}`}
                type="submit"
                onClick={(event) => this.updatePolicyDetails(event)}
              >
                Update
              </button>
              <p>
                <b>{this.state.outputMsg}</b>
              </p>
            </form>
          </main>
        </center>
      </div>
    );
  }
}

export default Update;
