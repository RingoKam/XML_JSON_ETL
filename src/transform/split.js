import React from "react";

class Split extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitBy: null,
      splitByList: null
    };
  }

  static getDerivedStateFromProps(e) {
    console.log("i got called", e);
    if (e.input) {
      const splitByList = [];
      e.input.childNodes.forEach(node => {
        splitByList.push(node.tagName);
      });
      return {
        splitByList
      };
    }
  }

  onValueChange = event => {
    const splitBy = event.target.value;
    this.setState({ splitBy });
    const result = this.props.input.getElementsByTagName(splitBy);
    console.log(result);
    this.props.output(result);
  };

  render() {
    return (
      <div>
        <pre>{this.state.splitByList}</pre>
        <label>
          Split by
          <input
            id={"split-value"}
            value={this.state.splitBy}
            onChange={this.onValueChange}
          />
        </label>
      </div>
    );
  }
}

export default Split;
