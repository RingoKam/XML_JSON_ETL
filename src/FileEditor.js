import React from "react";
import CodeMirror from "react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";

const FileEditor = props => {
  const updateCode = newCode => {
    props.updateFile(newCode);
  };

  const options = {
    lineNumbers: true,
    mode: "xml",
    readOnly: true
  };

  return (
    <React.Fragment>
      <h1>Code goes here</h1>
      <button onClick={props.toUpload}>ToUpload</button>
      <CodeMirror value={props.file} onChange={updateCode} options={options} />
    </React.Fragment>
  );
};

export default FileEditor;
