import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {modalToggle} from '../Store/Actions/uiActions';
import {fetchById} from '../Store/Actions/apiFetch';

const pointer = ({ text }) => <div>{text}</div>;

class modalC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: ["French", "Japanese", "Desserts"]
    };
  }
  toggle=()=>{
      this.props.modalToggle();
  }

  render() {
    return (
      <Modal isOpen={this.props.modalState}>
        <ModalHeader>{this.props.restaurantDetail.restaurant_name}<i class="fas fa-star" style={{color:"yellow"}}></i><span style={{marginLeft:"80px"}}>Rated as: {this.props.restaurantDetail.rating_text}</span></ModalHeader>
        <ModalBody>
            <div className="row">
                <div className="col-md-8">
                    <label>Address</label>
                    <p className="container">{this.props.restaurantDetail.locality_verbose}</p>
                </div>
                <div className="col-md-4">
                    <label>Voted By</label>
                    <p className="container">{this.props.restaurantDetail.votes}</p>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-8">
                    <label>Cuisines</label>
                    <div className="container">
                    </div>
                    <div className="container">
                        {this.props.restaurantDetail.cuisines}
                    </div>
                </div>
                <div className="col-md-4">
                    <label>Avg Cost for 2</label>
                    <div className="container">
                        {this.props.restaurantDetail.average_cost_for_two}
                    </div>
                </div>
            </div>
                <hr/>
            <div className="row" >
                <div className="col-md-8">
                    <label>Online Delivery</label>
                    <div className="container">
                        {this.props.restaurantDetail.has_online_delivery}
                    </div>
                </div>
                <div className="col-md-4">
                    <label>Table Booking</label>
                    <div className="container">
                        {this.props.restaurantDetail.has_table_booking}
                    </div>
                </div>
            </div>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        modalState:state.ui.modalOpen,
        restaurantDetail:state.api.selectedRes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        modalToggle:()=>dispatch(modalToggle()),
        fetchById:(id)=>dispatch(fetchById(id))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(modalC)