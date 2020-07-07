import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

export const getLeads = (task) => (dispatch) => {
  axios
    .get("http://localhost:8000/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const delLead = (_id) => (dispatch) => {
  axios
    .delete(`http://localhost:8000/:${_id}`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD,
        payload: _id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const addLead = (lead) => (dispatch) => {
  axios
    .post("http://localhost:8000/register", lead)
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
