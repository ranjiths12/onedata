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
        console.log("Skill IDs:", skillIds); // Debugging line
        return skillIds.map(id => {
            const skill = skills.find(skill => skill.id === id);
            console.log("Found Skill:", skill); // Debugging line
            return skill ? skill.name : ''; // Fallback to empty if not found
        }).filter(Boolean).join(', '); // Filter out any empty strings
    };

    const handleClose = () => setShow(false);
    const validateForm=()=>{
        if(appformData.firstName===""||appformData.lastName===""||appformData.email===""||
            appformData.skills.length===0||appformData.aboutSelf===""){
                NotifyData("Please fill all the fields");
                return false;
            }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addApplication(appformData));
        validateForm()
        handleClose();
        NotifyData("Your Applications is Submited")
        console.log('Form submitted:', appformData);
    };

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <div id='main'>
            <div className='main-content'>
                <Container>
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
