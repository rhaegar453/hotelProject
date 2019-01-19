import React from "react";
import { connect } from "react-redux";
import { fetchByName } from "../Store/Actions/apiFetch";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleSearch = e => {
    e.preventDefault();
    console.log(this.state.searchTerm);
    this.props.searchRestaurant(this.state.searchTerm);
  };
  handleFilter = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <form>
          <div class="alert alert-dismissible alert-warning">
            <h4 class="alert-heading">Search Restaurant</h4>
            <form>
              <div className="row">
                <div className="col-md-8">
                  <input
                    className="form-control"
                    onChange={e => {
                      this.setState({ searchTerm: e.target.value });
                    }}
                    value={this.state.searchTerm}
                  />
                </div>
                <button
                  className="btn-primary btn-lg btn"
                  style={{ marginLeft: "5px" }}
                  onClick={this.handleSearch}
                >
                  Search
                </button>
                <button
                  className="btn-success btn-lg btn"
                  style={{ marginLeft: "5px" }}
                  onClick={this.handleFilter}
                >
                  Filter
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
    loading: state.api.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurant: name => dispatch(fetchByName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
