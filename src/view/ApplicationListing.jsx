import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import skills from '../data/Skills'; 
import { Buttons } from '../components/Buttons';
import BillPreview from '../pdf/BillPreview';
import TableUI from '../components/TableUI';
import PageTitle from '../components/PageTitle';
import { Helmet } from 'react-helmet';
import JobportalHeader from '../components/JobportalHeader';

const ApplicationListing = () => {
    const applicationList = useSelector((state) => state.application.applicationList);
    const [showPDF, setShowPDF] = useState(false);

    const getSkillNames = (skillIds) => {
        return skillIds.map(skillId => {
            const skill = skills.find(s => s.id === skillId);
            return skill ? skill.name : '';
        }).join(', ');
    };
  const ApplicationListHead =["No", "First Name", "Last Name", "Email","Skills"]
  const applicationData = applicationList.map((application, index) => ({
    values: [
      index + 1, // Assuming you want a 1-based index
      `${application.firstName}`,
      `${application.lastName}`,
      application.email,
      getSkillNames(application.skills)
    ],
  }));
    const handlePrintClick = () => {
        setShowPDF(true); // Show the PDF viewer when the button is clicked
    };

    const handleClosePDF = () => {
        setShowPDF(false); // Close the PDF viewer
    };

    return (
        <div>
            <Helmet>
            <title>Apllication Listing</title> 
            </Helmet>
            <JobportalHeader/>
            <div className='main-content'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" xs="6" className='text-end py-3 align-self-center'>
                           <PageTitle PageTitle="Application" showButton={false}/>
                        </Col>
                        <Col lg="6" md="6" xs="6" className='text-end py-3'>
                            <Buttons label="Print" classname="crud-btn" OnClick={handlePrintClick} />
                        </Col>
                        <Col xs={12} className='py-3'>
                            <TableUI headers={ApplicationListHead} body={applicationData} showActionColumn={false} />
                        </Col>
                    </Row>
                </Container>
                {showPDF && <BillPreview onClose={handleClosePDF} />} {/* Render the BillPreview if showPDF is true */}
            </div>
        </div>
    );
};

export default ApplicationListing;
