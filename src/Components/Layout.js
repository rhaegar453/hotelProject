import React from "react";
import { Input, Row } from "react-materialize";
import SearchComponent from "./SearchComponent";
import BodyComponent from './Body';
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <SearchComponent />
        <BodyComponent/>
      </div>
    );
  }
}
