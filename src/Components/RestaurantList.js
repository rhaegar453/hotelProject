import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { modalToggle } from "../Store/Actions/uiActions";
import { fetchById } from "../Store/Actions/apiFetch";

class RestList extends React.Component {
  listItemClicked = () => {
    this.props.modalToggle();
    console.log('Fetch Started');
    this.props.fetchById(this.props.id);
    console.log('Fetch COmpleted')
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          onClick={this.listItemClicked}
        >
          {this.props.title}
          <span
            className="badge badge-primary badge-pill"
            style={{ fontSize: "20px" }}
          >
            {this.props.pillValue}
          </span>
          <Modal id={this.props.id} restaurantName="Shivaraj Bakale" />
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.api.restaurants,
    loading: state.api.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalToggle: () => dispatch(modalToggle()),
    fetchById: id => dispatch(fetchById(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestList);
