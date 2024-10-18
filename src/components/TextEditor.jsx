// src/TextEditor.js
import React from 'react';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const TextEditor = ({textlabel, value, onChange}) => {
  const modules = {
    toolbar: false,
  };
  return (
    <div>
    {textlabel && <Form.Label className='px-2 regular'>{textlabel}</Form.Label>}
       <ReactQuill
        placeholder="Start typing..."
        modules={modules}
        className='text-editor'
         onChange={onChange} 
      />
    </div>
  );
};

export default TextEditor;
