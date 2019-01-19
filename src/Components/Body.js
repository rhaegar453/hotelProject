import React ,{Component} from 'react';
import RestaurantList from './RestaurantList';
import {fetchAll} from '../Store/Actions/apiFetch';
import { connect } from 'react-redux';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchAll();
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
        fetchAll:()=>dispatch(fetchAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);