import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from "../components/PageTitle";
import { ActionButton, Buttons } from '../components/Buttons';
import { TextInputForm } from '../components/Forms';
import { HiMagnifyingGlass } from "react-icons/hi2";
import TableUI from '../components/TableUI';
import { MdOutlineDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import CustomModal from '../components/Modal';
import JobCreations from './creations/JobCreations';
import { useDispatch, useSelector } from 'react-redux';
import NotifyData from '../components/NotifyData';
import { addJob, updateJob, deleteJob, setInitialJobs } from '../slices/jobSlices';
import jobs from '../data/Jobs';

const Home = () => {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.job.jobList);
  const [show, setShow] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    experienceRequired: '',
    skills: [],
    logo: null,
    jobDescription: ''
  });

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; // Number of jobs to display per page
  
  // Search Query State
  const [searchQuery, setSearchQuery] = useState('');

  // Set initial jobs from the imported jobs array
  useEffect(() => {
    dispatch(setInitialJobs(jobs));
  }, [dispatch]);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const validateInputs = () => {
    const missingFields = [];
    if (!formData.companyName) missingFields.push('Company Name');
    if (!formData.jobTitle) missingFields.push('Job Title');
    if (!formData.experienceRequired) missingFields.push('Experience Required');
    if (!formData.jobDescription) missingFields.push('Job Description');
    if (missingFields.length > 0) {
      const errorMessage = `Please fill in the following required fields: ${missingFields.join(', ')}`;
      NotifyData(errorMessage, "error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const newJob = {
      id: editingJob ? editingJob.id : Date.now(),
      companyName: formData.companyName,
      jobTitle: formData.jobTitle,
      experienceRequired: formData.experienceRequired,
      skills: formData.skills,
      jobDescription: formData.jobDescription,
    };

    if (formData.logo) {
      const logoUrl = URL.createObjectURL(formData.logo);
      newJob.logo = logoUrl;
    } else if (editingJob) {
      newJob.logo = editingJob.logo;
    }

    if (editingJob) {
      // Update job in the store
      dispatch(updateJob(newJob));
      NotifyData("Job Updated", "success");
    } else {
      // Add new job
      dispatch(addJob(newJob));
      NotifyData("New Job Added", "success");
    }

    // Reset pagination to the first page after adding/updating job
    setCurrentPage(1);
    handleClose();
  };

  const handleOpen = () => {
    setShow(true);
    setFormData({
      companyName: '',
      jobTitle: '',
      experienceRequired: '',
      skills: [],
      logo: null,
      jobDescription: ''
    });
  };

  const handleClose = () => {
    setShow(false);
    setEditingJob(null);
    setFormData({
      companyName: '',
      jobTitle: '',
      experienceRequired: '',
      skills: [],
      logo: null,
      jobDescription: ''
    });
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      companyName: job.companyName,
      jobTitle: job.jobTitle,
      experienceRequired: job.experienceRequired,
      skills: job.skills,
      logo: null,
      jobDescription: job.jobDescription
    });
    setShow(true);
  };

  const handleDlt = (jobId) => {
    dispatch(deleteJob(jobId));
    NotifyData("Job Deleted", "success");
  };

  const actionoptions = (job) => [
    { label: 'Edit', icon: <LiaEditSolid />, onClick: () => handleEdit(job) },
    { label: 'Delete', icon: <MdOutlineDelete />, onClick: () => handleDlt(job.id) },
  ];

  const jobHead = ["No", "Job Title", "Company Name"];
  
  // Filter jobs based on search query
  const filteredJobs = jobList.filter(job =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => b.id - a.id);
  
  // Get current jobs based on pagination
  const totalJobs = filteredJobs.length; // Total jobs after filtering
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Prepare job data for the table
  const jobData = currentJobs.map((job, index) => ({
    values: [
      indexOfFirstJob + index + 1,
      job.jobTitle,
      job.companyName,
      <ActionButton actionoptions={actionoptions(job)} />,
    ],
  }));

  // Calculate total pages
  const totalPages = Math.ceil(totalJobs / jobsPerPage); 

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="main">
      <div className='main-content'>
        <Container fluid>
          <Row>
            <Col lg="6" md="6" xs={12} className='align-self-center py-3'>
              <PageTitle PageTitle="Job Listing" showButton={false} />
            </Col>
            <Col lg="6" md="6" xs={12} className='text-end py-3'>
              <Buttons OnClick={handleOpen} label="Create New" classname="crud-btn" />
              <CustomModal
                show={show}
                setShow={setShow}
                pageTitle={editingJob ? "Edit Job" : "Create Job"}
                showButton={true}
                submitButton={true}
                label={editingJob ? "Update" : "Submit"}
                CancelLabel="Cancel"
                BodyComponent={<JobCreations formData={formData} setFormData={setFormData} />}
                OnClick={handleSubmit}
                Size="xl"
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
            </Col>
            <Col lg="3" className='py-3'>
              <TextInputForm
                classname="form-control-padleft"
                prefix_icon={<HiMagnifyingGlass />}
                PlaceHolder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Col>
            <Col xs='12'>
              <TableUI headers={jobHead} body={jobData} showActionColumn={true} />
            </Col>
            {/* Pagination Controls */}
            <Col xs={12} className='py-4 d-flex justify-content-between'>
              <Buttons 
                label="Previous" 
                classname="crud-btn" 
                OnClick={handlePreviousPage} 
                disabled={currentPage === 1} // Disable button if on first page
              />
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <Buttons 
                label="Next" 
                classname="crud-btn" 
                OnClick={handleNextPage} 
                disabled={currentPage === totalPages} // Disable button if on last page
              />
            </Col>
          </Row>
        </Container>
      </div>
    
    </div>
  );
};

export default Home;
