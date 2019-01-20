import React from 'react';
import Navigation from './Components/Navigation';
import Layout from './Components/Layout';
import {connect} from 'react-redux';
import {Spinner } from 'reactstrap';



class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let spinner=this.props.loading;
        return(
            <div>
                <Navigation/>
                <Layout/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        loading:state.api.loading
    }
}
export default connect(mapStateToProps)(App)