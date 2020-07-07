import React, { Component } from "react";
import { connect } from "react-redux";
import { addLead } from "../actions/leads";

class Form extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    city: "",
    mobile_number: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (e) => {
    const { email, password, name, city, mobile_number } = this.state;
    const leads = { email, password, name, city, mobile_number };

    await this.props.addLead(leads);

    e.preventDefault();
    console.log("submit");
  };
  render() {
    const { email, password, name, city, mobile_number } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Details</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              className="form-control"
              type="text"
              name="city"
              onChange={this.onChange}
              value={city}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              className="form-control"
              type="number"
              name="mobile_number"
              onChange={this.onChange}
              value={mobile_number}
            />
          </div>
          <div className="form-group">
            <button
              onClick={this.onSubmit}
              className="btn btn-success"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
