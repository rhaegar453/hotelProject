import React from 'react';
import Navigation from './Components/Navigation';
import Layout from './Components/Layout';


export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Navigation/>
                <Layout/>
            </div>
        )
    }
}