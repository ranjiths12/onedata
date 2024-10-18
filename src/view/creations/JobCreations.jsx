import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TextInputForm, DropDown } from '../../components/Forms';
import TextEditor from '../../components/TextEditor';
import skills from '../../data/Skills';

const JobCreations = ({ formData, setFormData }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    if (formData.skills) {
      const initialSkills = formData.skills.map(skillId => {
        const skill = skills.find(s => s.id === skillId);
        return skill ? { value: skill.id, label: skill.name } : null;
      }).filter(skill => skill !== null);
      setSelectedSkills(initialSkills);
    }
  }, [formData.skills]);

  const handleSkillChange = (selected) => {
    setSelectedSkills(selected);
    setFormData({
      ...formData,
      skills: selected ? selected.map(skill => skill.value) : [],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        logo: file, // Update the logo to the new file
      });
    }
  };

  const handleEditorChange = (content) => {
    const strippedText = content.replace(/<[^>]*>/g, '');
    setFormData({
      ...formData,
      jobDescription: strippedText,
    });
    
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg='4' className='py-3'>
            <TextInputForm
              textlabel="Company Name"
              PlaceHolder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </Col>
          <Col lg='4' className='py-3'>
            <TextInputForm
              textlabel="Job Title"
              PlaceHolder="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
          </Col>
          <Col lg='4' className='py-3'>
            <TextInputForm
              textlabel="Experience Required"
              PlaceHolder="Experience Required"
              name="experienceRequired"
              value={formData.experienceRequired}
              onChange={handleInputChange}
              type="number"
            />
          </Col>
          <Col lg="8" className='py-3'>
            <DropDown
              textlabel="Skills"
              placeholder="Select skills"
              value={selectedSkills}
              onChange={handleSkillChange}
              options={skills.map(skill => ({ value: skill.id, label: skill.name }))}
            />
          </Col>
          <Col lg="4" className='py-3'>
            <TextInputForm
              type="file"
              textlabel="Choose a logo"
              name="logo"
              onChange={handleFileChange} // This will handle the new logo file
            />
            {formData.logo && typeof formData.logo !== 'string' && (
              <div>
                <p>Current Logo:</p>
                <img src={URL.createObjectURL(formData.logo)} alt="Current Logo" style={{ width: '50px', height: '50px' }} />
              </div>
            )}
          </Col>
          <Col lg="12" className='py-3'>
            <TextEditor
              textlabel="Job Description"
              onChange={handleEditorChange}
              value={formData.jobDescription}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobCreations;
