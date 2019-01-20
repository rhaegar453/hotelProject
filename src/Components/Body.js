import React ,{Component} from 'react';
import RestaurantList from './RestaurantList';
import {fetchAll} from '../Store/Actions/apiFetch';
import { connect } from 'react-redux';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pageno:1
        }
    }
    componentDidMount(){
        this.props.fetchAll(this.state.pageno);
    }
    render(){
        return(
            <div>
                <h3>Hotels</h3>
                <hr/>
                <ul className="list-group">
                {this.props.restaurants.map(restaurant=>(
                    <RestaurantList key={restaurant.restaurant_id} id={restaurant.restaurant_id} title={restaurant.restaurant_name} pillValue={restaurant.aggregate_rating}/>
                ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        restaurants:state.api.restaurants,
        loading:state.api.loading
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchAll:(pageno)=>dispatch(fetchAll(pageno))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);