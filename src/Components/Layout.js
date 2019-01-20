import React from "react";
import { Input, Row } from "react-materialize";
import SearchComponent from "./SearchComponent";
import BodyComponent from './Body';
import Pagination from './Pagination';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <SearchComponent />
        <BodyComponent/>
        <Pagination/>
      </div>
    );
  }
}
