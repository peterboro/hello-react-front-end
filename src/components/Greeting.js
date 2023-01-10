import React from "react";
import { connect } from "react-redux";
import { fetchGreeting } from "../redux/greetings/greetingActions";

class Greeting extends React.Component {
  componentDidMount() {
    this.props.fetchGreeting();
  }
  render() {
    return <h1>{this.props.greeting}</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting.greeting,
  };
};

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
