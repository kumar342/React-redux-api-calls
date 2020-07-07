import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, delLead } from "../actions/leads";
// import { GET_LEADS } from "../actions/types";

class Lead extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    delLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead, i) => (
              <tr key={i}>
                <td>{lead._id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.city}</td>
                <td>{lead.mobile_number}</td>
                <td>
                  <button
                    onClick={this.props.delLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getLeads: (task) => dispatch(getLeads(task)),
//   };
// };

export default connect(mapStateToProps, { getLeads, delLead })(Lead);
