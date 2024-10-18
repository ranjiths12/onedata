import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Bill from './Bill';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'; // Import Bootstrap Button for consistency

const BillPreview = ({ onClose }) => {
    const applicationList = useSelector((state) => state.application.applicationList);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999, backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px' }}>
            <Button onClick={onClose} className="btn btn-danger" style={{ position: 'absolute', top: 20, right: 20 }}>Close</Button>
            <PDFViewer width="100%" height="1000">
                <Bill applicationList={applicationList} />
            </PDFViewer>
        </div>
    );
};

export default BillPreview;
