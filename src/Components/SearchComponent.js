import React from "react";
import { connect } from "react-redux";
import { fetchByName, fetchByCuisine} from "../Store/Actions/apiFetch";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTermName: "",
      searchTermCuisine:""
    };
  }

  handleSearchName = e => {
    e.preventDefault();
    this.props.searchRestaurantName(this.state.searchTermName, this.props.pageNo);
  };

  searchCuisine=(e)=>{
    e.preventDefault();
    console.log(this.state.searchTermCuisine);
    this.props.searchRestaurantByCuisine(this.state.searchTermCuisine);
  }


  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <form>
          <div className="alert alert-dismissible alert-warning">
            <h4 className="alert-heading">Search Restaurant</h4>
            <form>
              <div className="row">
                <div className="col-md-8">
                  <input
                    placeholder="Search By Name"
                    className="form-control"
                    onChange={e => {
                      this.setState({ searchTermName: e.target.value });
                    }}
                    value={this.state.searchTerm}
                  />
                </div>
                <button
                  className="btn-primary btn-lg btn"
                  style={{ marginLeft: "5px" }}
                  onClick={this.handleSearchName}
                >
                  Search
                </button>
              </div>

              </form>
              <form onSubmit={this.searchCuisine}>
              <div className="row" style={{marginTop:"20px"}}>
                <div className="col-md-8">
                  <input
                    placeholder="Search by Cuisine"
                    className="form-control"
                    onChange={e => {
                      this.setState({ searchTermCuisine:e.target.value});
                    }}
                    value={this.state.searchTermCuisine}
                  />
                </div>
                <button
                  className="btn-danger btn-lg btn"
                  style={{ marginLeft: "5px" }}
                  onChange={e=>this.setState({searchTermCuisine:e.target.value})}
                >
                  Cuisine
                </button>
              </div>
            </form>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.api.restaurants,
    loading: state.api.loading,
    pageNo: state.ui.pageValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurantName: (name, pageNo) => dispatch(fetchByName(name, pageNo)),
    searchRestaurantByCuisine:(cuisine)=>dispatch(fetchByCuisine(cuisine))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
