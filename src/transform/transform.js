import React from "react";
import Split from "./split";
import Custom from "./custom";

const transformOption = ["split", "custom"];

class Transform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mutation: [{ type: "split", value: {} }],
      selectedNew: transformOption[0]
    };
  }

  static getDerivedStateFromProps() {}

  transformFactory(t, tInput, tOutput) {
    switch (t) {
      case "split": {
        return <Split input={tInput} output={tOutput} />;
      }
      case "custom": {
        return <Custom input={tInput} output={tOutput} />;
      }
      default: {
        return <div>Error</div>;
      }
    }
  }

  parse(config) {
    const parser = new DOMParser();
    const parsedConfig = parser.parseFromString(`${config}`, "text/xml");
    return parsedConfig;
  }

  addNew = () => {
    this.setState({
      mutation: [
        ...this.state.mutation,
        { type: this.state.selectedNew, value: {} }
      ]
    });
  };

  onTransformChange(index, newValue) {}

  render() {
    return (
      <div>
        {this.props.input}
        <div className="transform-item">
          {this.state.mutation.map((m, index, array) =>
            this.transformFactory(
              m.type,
              index === 0
                ? this.parse(this.props.input)
                : array[index - 1].value,
              () => m.value
            )
          )}
        </div>
        <div>
          <select
            value={this.state.selectedNew}
            onChange={event => {
              this.setState({ selectedNew: event.target.value });
            }}
          >
            {transformOption.map((opt, i) => <option key={i}>{opt}</option>)}
          </select>
          <button onClick={this.addNew}>Add New (+)</button>
        </div>
      </div>
    );
  }
}

export default Transform;
