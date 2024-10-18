import React from 'react'
import PageTitle from './PageTitle'
import Footer from './Footer'
const CustomCanvas= ({Closebtn,Canvastitle,filterbody,isOpen}) => {
  return (
    <div className={`filter-bar ${isOpen ? 'open' : ''}`} >
        <div className='border-bottom p-3'>
            <PageTitle PageTitle={Canvastitle} OnClick={Closebtn}/>
        </div>
        <div>
            {filterbody}
        </div>
        <div className='py-3'>
            <Footer LabelOne="Submit" LabelTwo="Cancel"/>
        </div>
    </div>
  )
}

export default CustomCanvas