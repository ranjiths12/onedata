import React from 'react'
import { useSelector } from 'react-redux';
import ApplicationListing from '.././view/ApplicationListing';
import Bill from './Bill';
const PrintList = () => {
    const applicationList = useSelector((state) => state.application.applicationList);
    return (
        <div>
            <Bill applicationList={applicationList} />
            <ApplicationListing />
        </div>
    )
}

export default PrintList