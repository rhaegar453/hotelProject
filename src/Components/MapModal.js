import React, {Component} from 'react';
import Map from './Map';
import {Modal} from 'reactstrap';

class MapModal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Modal isOpen={true}>
                    <Map></Map>
                </Modal>
            </div>
        );
    }
}
export default MapModal;