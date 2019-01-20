import React, { Component } from "react";
import { connect } from "react-redux";
import {
  paginateDecrement,
  paginateIncrement
} from "../Store/Actions/uiActions";
import { fetchAll } from "../Store/Actions/apiFetch";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  PageDecrement = () => {
    this.props.paginateDecrement();
    this.props.fetchAll(this.props.pageValue);
  };
  PageIncrement = () => {
    this.props.paginateIncrement();
    this.props.fetchAll(this.props.pageValue);
  };
  render() {
    const backwardComponet =
      this.props.pageValue == 0 ? null : (
        <span onClick={this.PageDecrement}>
          <i
            className="fas fa-caret-square-left fa-3x"
            style={{ marginLeft: "30px" }}
          />
        </span>
      );
      const forwardComponent=this.props.restaurants==0||this.props.restaurants.length<10?null:(<span onClick={this.PageIncrement}>
        <i
          className="fas fa-caret-square-right fa-3x"
          style={{ marginLeft: "30px" }}
        />
      </span>);
    return (
      <div>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "30px" }}
        >
          {backwardComponet}
          {forwardComponent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.api.restaurants,
    pageValue: state.ui.pageValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    paginateIncrement: () => dispatch(paginateIncrement()),
    paginateDecrement: () => dispatch(paginateDecrement()),
    fetchAll: id => dispatch(fetchAll(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
