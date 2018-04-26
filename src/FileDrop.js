import React from "react";
import Dropzone from "react-dropzone";

const FileDrop = (props) => {

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        props.onDrop(fileAsBinaryString);
        props.toEdit();
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsBinaryString(file);
    });
  }

  return (
    <div>
      <h1>Drop Files Here</h1>
      <Dropzone onDrop={onDrop} accept={".xml, .json"} />
    </div>
  )
}

export default FileDrop