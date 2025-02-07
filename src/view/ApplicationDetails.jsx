import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Buttons } from '../components/Buttons';
import CustomModal from '../components/Modal';
import ApplicationForm from './creations/ApplicationForm';
import { IoMdArrowRoundBack } from "react-icons/io";
import { addApplication } from '../slices/ApplicationSlices';
import skills from '../data/Skills'; 
import NotifyData from '../components/NotifyData';
import { Helmet } from 'react-helmet';
import JobportalHeader from '../components/JobportalHeader';

const ApplicationDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const jobList = useSelector((state) => state.job.jobList);
    const job = jobList.find((job) => job.id === parseInt(id));
    const dispatch = useDispatch(); 

    const [appformData, setappFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        skills: [],
        aboutSelf: '',
    });

    const [show, setShow] = useState(false);

    if (!job) {
        return <div>Job not found.</div>;
    }

    const handleOpen = () => {
        setShow(true);
        setappFormData({
            firstName: '', 
            lastName: '',
            email: '',
            skills: [],
            aboutSelf: '',
        });
    };

    // Enhanced skill retrieval
    const getSkillNames = (skillIds) => {
        console.log("Skill IDs:", skillIds);
        return skillIds.map(id => {
            const skill = skills.find(skill => skill.id === id);
            console.log("Found Skill:", skill); 
            return skill ? skill.name : ''; 
        }).filter(Boolean).join(', '); 
    };

    const handleClose = () => setShow(false);
    const validateForm=()=>{
        if (!appformData.firstName) return NotifyData('Required First Name', "error");
    if (!appformData.lastName) return NotifyData('Required Last Name', "error");
    if (!appformData.email) return NotifyData('Required Email Name', "error");
    if (appformData.skills.length === 0) return NotifyData('Required Skills', "error");
    if (!appformData.aboutSelf) return NotifyData('Required About Me', "error");
    return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        dispatch(addApplication(appformData));
        handleClose();
        NotifyData("Your Applications is Submited")
        console.log('Form submitted:', appformData);
    };

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <div>
            <Helmet>
                <title>Application Details</title> 
            </Helmet>
            <JobportalHeader/>
            <div className='main-content'>
                <Container fluid>
                    <Row>
                        <Col lg='12'>
                            <Buttons classname="icon-only" label={<><IoMdArrowRoundBack /></>} OnClick={handleBack} />
                        </Col>
                        <Col xs={12} className='py-3'>
                            <h2>Job Details</h2>
                            <h5><strong>Job Role:</strong> {job.jobTitle}</h5>
                            <h6><strong>Company Name:</strong> {job.companyName}</h6>
                            <p><strong>Description:</strong> {job.jobDescription}</p>
                            <p><strong>Experience:</strong> {job.experienceRequired} years of experience in {job.jobTitle}.</p>
                            <p><strong>Skills:</strong> {getSkillNames(job.skills)}</p>
                            <Buttons label="Apply Job" classname="crud-btn" OnClick={handleOpen} />
                        </Col>
                    </Row>
                </Container>
                <CustomModal
                    show={show}
                    setShow={setShow}
                    pageTitle="Apply Job"
                    showButton={true}
                    submitButton={true}
                    label="Submit"
                    CancelLabel="Cancel"
                    BodyComponent={<ApplicationForm appformData={appformData} setappFormData={setappFormData} />}
                    OnClick={handleSubmit}
                    Size="xl"
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                />
            </div>
        </div>
    );
};

export default ApplicationDetails;
