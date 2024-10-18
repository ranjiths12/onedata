import React, {  useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'; 
import { DropDown, TextInputForm } from '../components/Forms';
import { Buttons } from '../components/Buttons';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import skills from '../data/Skills';
import { FaAngleRight,FaAngleLeft} from "react-icons/fa6";
const Jobs = () => {
  const jobList = useSelector((state) => state.job.jobList);
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedSkills, setSelectedSkills] = useState([]); 

  // Filter jobs based on search and selected skills
  const filteredJobs = jobList.filter(job => {
    const matchesTitle = job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCompany = job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 || selectedSkills.some(skillId => job.skills.includes(skillId));

    return (matchesTitle || matchesCompany) && matchesSkills;
  });

  const totalJobs = filteredJobs.length; 
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  // Get the current jobs for the page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleViewDetails = (jobId) => {
    navigate(`/applicationdetails/${jobId}`);
  };

  // Handle pagination
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
    setCurrentPage(1); // Reset to first page on search
  };

  const handleSkillChange = (selected) => {
    setSelectedSkills(selected ? selected.map(skill => skill.value) : []);
    setCurrentPage(1); // Reset to first page when skills are selected
  };

  return (
    <div id="main">
      <div className='main-content'>
        <Container fluid>
          <Row>
            <Col xs={12} className='py-3'>
              <PageTitle PageTitle="Job Listing" showButton={false} />
            </Col>
            <Col lg="6">
              <DropDown
                textlabel="Skills"
                placeholder="Select skills"
                value={selectedSkills.map(skillId => ({
                  value: skillId,
                  label: skills.find(skill => skill.id === skillId)?.name,
                }))}
                onChange={handleSkillChange}
                options={skills.map(skill => ({ value: skill.id, label: skill.name }))}
              />
            </Col>
            <Col lg="6">
              <TextInputForm
                textlabel="Search Keywords"
                PlaceHolder="Search Keywords"
                value={searchQuery}
                onChange={handleSearchChange} // Set onChange for search input
              />
            </Col>

            {currentJobs.map((job) => (
              <Col lg='4' key={job.id}>
                <div className='job-card'>
                  <div className='job-title'>
                    <h5 className='bold'> Job Role: {job.jobTitle}</h5>
                  </div>
                  <div className='job-company'>
                    <h6 className='bold'>Company Name: {job.companyName}</h6>
                  </div>
                  <div className='job-description py-2'>
                    <p>{`${job.jobDescription.substring(0, 100)}...`}</p>
                  </div>
                  <div className='job-experience py-2'>
                    <strong>Experience:</strong> {job.experienceRequired} years in {job.jobTitle}.
                  </div>
                  <div className='py-2'>
                    <Buttons 
                      label="View" 
                      classname="crud-btn" 
                      OnClick={() => handleViewDetails(job.id)} 
                    />
                  </div>
                </div>
              </Col>
            ))}

            {/* Pagination Controls */}
            <Col xs={12} className='py-4 d-flex align-items-center justify-content-end'>
              <Buttons 
                label={<><FaAngleLeft/></>} 
                classname="icon-btn mx-1" 
                OnClick={handlePreviousPage} 
                disabled={currentPage === 1} 
              />
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <Buttons 
                label={<><FaAngleRight/></>} 
                classname="icon-btn mx-1" 
                OnClick={handleNextPage} 
                disabled={currentPage === totalPages}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Jobs;
