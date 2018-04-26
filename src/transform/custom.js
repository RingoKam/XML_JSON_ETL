import React from "react";

class Split extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onValueChange = event => {
    this.setState({
      splitBy: event.target.value
    });
  };

  render() {
    return (
      <div>
        <label>
          Custom
        </label>
        <textarea>
          CUSTOM STUFF HERE...
        </textarea>
      </div>
    );
  }
}

export default Split;
