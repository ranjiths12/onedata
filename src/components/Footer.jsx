import React from 'react'
import { Buttons } from './Buttons'

const Footer = ({LabelOne,LabelTwo,LabelOneClick,LabelTwoClick}) => {
  return (
    <>
        <div className='d-flex justify-content-center'>
            <div className='mx-2'>
                <Buttons label={LabelOne} OnClick={LabelOneClick} classname="crud-btn"/>
            </div>
            <div className='mx-2'>
                <Buttons label={LabelTwo} OnClick={LabelTwoClick} classname="crud-btn"/>
            </div>
        </div>
    </>
  )
}

export default Footer