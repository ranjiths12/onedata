import React from 'react'
import { Buttons } from './Buttons';
const Dialog = ({ isVisible, onConfirm, onCancel }) => {
    if (!isVisible) return null;
  return (
    <>
         <div className="confirm-dialog-overlay">
            <div className="confirm-dialog">
                <p>Are you sure you want to close the form?</p>
                <div className='d-flex justify-content-center'>
                    <div className='mx-1'>
                      <Buttons OnClick={() => onConfirm(true)} classname="close-btn mx-2" label="Yes"/>
                    </div>
                    <div className='mx-1'>
                      <Buttons OnClick={() => onCancel(false)} classname="close-btn mx-2" label="No"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dialog