// @ts-nocheck
import React, {Component} from "react";


class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeDetail = () => {
      this.setState({
        color: "blue",
        brand: "Ferrary",
        model: "SF90 Spider",
        year:    2022});
    }

    componentDidMount () {
      console.log("componentDidMount")
    }
 
    componentWillUnmount () {
      console.log("componentWillUnmount")
    }

    componentDidUpdate() {
      console.log("componentDidUpdate")
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
           Color:  {this.state.color} - Model: {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeDetail}
          >Change color</button>
        </div>
      );
    }
  }

  export default Test