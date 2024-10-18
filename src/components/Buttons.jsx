import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import Dropdown from 'react-bootstrap/Dropdown';
const Buttons = ({ label, OnClick, classname, status }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Invited':
        return 'invited';
      case 'Inactive':
        return 'inactive';
      case 'Active':
        return 'active';
      default:
        return '';
    }
  };

  return (
    <div>
      <button onClick={OnClick} className={`${classname} ${getStatusClass(status)}`} type='button'>{label}</button>
    </div>
  );
};

const ActionButton = ({ actionoptions }) => {
  return (
    <Dropdown className='icon-only'>
      <Dropdown.Toggle>
       <HiOutlineDotsVertical/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
      {actionoptions.map((actionoption, index) => (
          <Dropdown.Item key={index} onClick={actionoption.onClick}>
            {actionoption.icon && <span className='mx-3'>{actionoption.icon}</span>}
            {actionoption.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};


export { Buttons,ActionButton };