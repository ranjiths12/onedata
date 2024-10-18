
import React from 'react';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
const TextInputForm = ({
  textlabel,
  PlaceHolder,
  value,
  name,
  classname,
  onChange,
  readOnly,
  suffix_icon,
  prefix_icon,
  type
}) => {
  return (
    <>
      {textlabel && <Form.Label className='px-2 regular'>{textlabel}</Form.Label>}
      <div className="input-container">
        {prefix_icon && <span className="prefix-icon">{prefix_icon}</span>}
          <Form.Control
            type={type}
            placeholder={PlaceHolder}
            value={value}
            name={name}
            className={classname}
            onChange={onChange}
            readOnly={readOnly}
            disabled={readOnly}
          />
        {suffix_icon && <span className="suffix-icon">{suffix_icon}</span>}
      </div>
    </>
  );
};

const TextArea=({textlabel,PlaceHolder,
  value,
  name,
  onKeyPress,
  classname,
  onChange,Row})=>{
  return(
    <div>
         <div>{textlabel && <Form.Label className='px-2 regular'>{textlabel}</Form.Label>}</div>
         <Form.Control as="textarea" rows={Row} placeholder={PlaceHolder} className="{classname}"/>
    </div>
  )
}
const DropDown = ({ textlabel, placeholder, value, onChange, options }) => {
  return (
    <>
      {textlabel && <Form.Label className='px-2 regular'>{textlabel}</Form.Label>}
      <Select
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isMulti
      />
    </>
  );
};


export { TextInputForm,TextArea,DropDown };
