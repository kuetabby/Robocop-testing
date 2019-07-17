import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import "./App.css";
import RoboList from "../components/RoboList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobot: () => dispatch(requestRobots())
  };
};

function App(props){
	const { searchField, robots ,isPending, onSearchChange, onRequestRobot  } = props;
	useEffect(() =>{
		onRequestRobot()
	},[])

  const filterRobots = () => {
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

    return (
      <div className="tc">
        <h1 className="f2"> Robocop </h1>
        <SearchBox searchChange={onSearchChange} values={searchField} />

        <Scroll>
          {isPending ? (
            <h1>Loading...</h1>
          ) : (
            <RoboList robots={filterRobots()} />
          )}
        </Scroll>
      </div>
    );
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
