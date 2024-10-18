import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from "../components/PageTitle";
import { ActionButton, Buttons } from '../components/Buttons';
import { TextInputForm } from '../components/Forms';
import { HiMagnifyingGlass } from "react-icons/hi2";
import JobSearchFilter from './filters/JobSearchFilter';
import CustomCanvas from '../components/OffCanvas';
import TableUI from '../components/TableUI';
import { MdOutlineDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import CustomModal from '../components/Modal';
import JobCreations from './creations/JobCreations';
import { useDispatch, useSelector } from 'react-redux';
import NotifyData from '../components/NotifyData';
import { addJob, updateJob, deleteJob, setInitialJobs } from '../slices/jobSlices';
import jobs from '../data/Jobs';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Home = () => {
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
  const jobsPerPage = 6;

  // Search Query State
  const [searchQuery, setSearchQuery] = useState('');

  // Set initial jobs from the imported jobs array
  useEffect(() => {
    dispatch(setInitialJobs(jobs));
  }, [dispatch]);

  const toggleFilter = () => {
    setIsFilterOpen(prevState => !prevState);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newJob = {
      id: editingJob ? editingJob.id : Date.now(), // Use the existing ID for updates
      companyName: formData.companyName,
      jobTitle: formData.jobTitle,
      experienceRequired: formData.experienceRequired,
      skills: formData.skills,
      jobDescription: formData.jobDescription,
    };
  
    if (formData.logo) {
      // Create a URL for the uploaded logo file
      const logoUrl = URL.createObjectURL(formData.logo);
      newJob.logo = logoUrl; // Store the logo URL in the job data
    } else if (editingJob) {
      newJob.logo = editingJob.logo; // Keep the existing logo if no new logo is uploaded
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
    setEditingJob(null); // Clear editing job
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

  
  const indexOfLastJob = currentPage * jobsPerPage; 
  const indexOfFirstJob = indexOfLastJob - jobsPerPage; 

  
  const filteredJobs = jobList.filter(job =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob); 

  const jobData = currentJobs.map((job, index) => ({
    values: [
      indexOfFirstJob + index + 1, 
      job.jobTitle,
      job.companyName,
      // job.logo ? <img src={job.logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> : "No Logo", 
      <ActionButton actionoptions={actionoptions(job)} />,
    ],
  }));

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
              <Buttons OnClick={handleOpen} label="Invite User" classname="crud-btn" />
              <CustomModal
                show={show}
                setShow={setShow}
                pageTitle={editingJob ? "Edit Job" : "Invite Job"}
                showButton={true}
                submitButton={true}
                label="Submit"
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
                value={searchQuery} // Bind search input value
                onChange={handleSearchChange} // Handle change in search input
              />
            </Col>
            <Col lg="9" className='text-end align-self-center'>
              <Buttons label="Filter" classname="crud-btn" OnClick={toggleFilter} />
            </Col>
            <Col xs='12'>
              <TableUI headers={jobHead} body={jobData} showActionColumn={true} />
            </Col>
            <Col xs='12' className="py-3">
              <div className="pagination">
                <Buttons
                  disabled={currentPage === 1} // Disable if on the first page
                  OnClick={() => handlePageChange(currentPage - 1)}
                  label={<><FiChevronLeft /></>}
                  classname="crud-btn mx-2"
                />
                <Buttons
                  disabled={currentPage === totalPages || totalPages === 0} // Disable if on the last page
                  OnClick={() => handlePageChange(currentPage + 1)}
                  label={<><FiChevronRight /></>}
                  classname="crud-btn mx-2"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <CustomCanvas
        Canvastitle="Filter"
        filterbody={<JobSearchFilter />}
        isOpen={isFilterOpen}
        Closebtn={toggleFilter}
      />
    </div>
  );
};

export default Home;
