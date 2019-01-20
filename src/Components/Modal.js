import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { modalToggle } from "../Store/Actions/uiActions";
import { fetchById } from "../Store/Actions/apiFetch";
import Map from "./Map";

const pointer = ({ text }) => <div>{text}</div>;

class modalC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        restColor:null
    };
  }

  colorDesignator=(color)=>{
    switch(color){
        case 'Dark Green':
            console.log('Returning Dark Green');
            return '#284c13'
        case 'Green':
            return '#5abf20'
        case 'White':
            return '#FFFFFF'
        case 'Yellow':
            return '#fff711'
        case 'Orange':
            return '#f4b004'
        default:
            return '#f4b004'
    }
  }

  toggle = () => {
    this.props.modalToggle();
  };
  openMap = () => {
    console.log("Opening the map");
  };
  cuisineGenerator=(cuisines)=>{
      return this.props.restaurantDetail.cuisines.split(',')
  }
  render() {
    return (
      <Modal isOpen={this.props.modalState}>
          <div style={{ backgroundColor:`${this.colorDesignator(this.props.restaurantDetail.rating_color)}`, height:"80px", color:'black'}}>
            <div className="d-flex justify-content-between">
              <h4 style={{margin:"10px"}}>{this.props.restaurantDetail.restaurant_name} /></h4>
              <h4 style={{margin:"10px"}}><span>
                Rated as: {this.props.restaurantDetail.rating_text}
              </span></h4>
            </div>
          </div>
          <hr/>
        <ModalBody>
          <div className="d-flex justify-content-between">
            <div className="col-md-7">
              <label>
                <h4>Address</h4>
              </label>
              <div className="alert alert-danger">
              <p>{this.props.restaurantDetail.locality_verbose}</p>
              </div>
            </div>
            <div>
              <label>
                <h4>Voted By</h4>
              </label>
              <div className="container">
              <span class="badge badge-danger">
              <p style={{fontSize:"15px"}}><p className="container">{this.props.restaurantDetail.votes}</p></p>
              </span>  
            </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <label>
                <h4>Cuisines</h4>
              </label>
              <div className="container " />
              <div className="container ">
              <span class="badge badge-danger">
              <p style={{fontSize:"15px", margin:"0", padding:"5px"}}>{this.props.restaurantDetail.cuisines}</p>
              </span>
              </div>
            </div>
            <div>
              <label>
                <h4>Avg Cost for 2</h4>
              </label>
              <div className="container">
              <span class="badge badge-danger">
              <p style={{fontSize:"15px", margin:"0", padding:"5px"}}>{this.props.restaurantDetail.average_cost_for_two}</p>
              </span>
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <div>
              <label>
                <h4>Online Delivery</h4>
              </label>
              <div className="container">
              <span class="badge badge-danger">
              <p style={{fontSize:"15px", margin:"0", padding:"5px"}}>{this.props.restaurantDetail.has_online_delivery}</p>
              </span>
              </div>
            </div>
            <div>
              <label>
                <h4>Table Booking</h4>
              </label>
              <div className="container">
              <span class="badge badge-danger">
              <p style={{fontSize:"15px", margin:"0", padding:"5px"}}>{this.props.restaurantDetail.has_online_delivery}</p>
              </span>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex justify-content-between">
            <Button
              color="primary"
              style={{ marginLeft: "20px" }}
              onClick={this.toggle}
            >
              Close
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalState: state.ui.modalOpen,
    restaurantDetail: state.api.selectedRes
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
)(modalC);
