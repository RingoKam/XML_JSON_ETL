import React from "react";
import FileDrop from "./FileDrop";
import FileEditor from "./FileEditor";
import Split from "./transform/split";
import Transform from "./transform/transform";
import { Switch, Route, Redirect } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }

  onDrop = acceptedFiles => {
    this.setState({
      file: acceptedFiles
    });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Switch>
            <Route
              path="/drop-file"
              render={({ history }) => (
                <FileDrop
                  onDrop={this.onDrop}
                  toEdit={() => history.push("/edit-file")}
                />
              )}
            />
            <Route
              path="/edit-file"
              render={({ history }) => (
                <FileEditor
                  toUpload={() => history.push("/drop-file")}
                  updateFile={newFile => {
                    this.setState({ file: newFile });
                  }}
                  file={this.state.file}
                />
              )}
            />
            <Redirect from="/" to="/drop-file" />
          </Switch>
        </div>
        <div className="transform-script">
          <h2>Transform</h2>
          <Transform input={this.state.file} />
        </div>
      </React.Fragment>
    );
  }
}

export default AppComponent;
