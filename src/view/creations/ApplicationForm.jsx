import React, { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import { DropDown, TextInputForm } from '../../components/Forms'
import TextEditor from '../../components/TextEditor'
import skills from '../../data/Skills';
const ApplicationForm = ({appformData,setappFormData}) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    useEffect(() => {
        if (appformData.skills) {
          const initialSkills = appformData.skills.map(skillId => {
            const skill = skills.find(s => s.id === skillId);
            return skill ? { value: skill.id, label: skill.name } : null;
          }).filter(skill => skill !== null);
          setSelectedSkills(initialSkills);
        }
      }, [appformData.skills]);
      const handleSkillChange = (selected) => {
        setSelectedSkills(selected);
        setappFormData({
          ...appformData,
          skills: selected ? selected.map(skill => skill.value) : [],
        });
      };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setappFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    

 
      const handleEditorChange = (content) => {
        const strippedContent = content.replace(/<[^>]+>/g, '');
        setappFormData({
            ...appformData,
            aboutSelf: strippedContent,
        });
    };
  return (
    <div>
        <Container fluid>
            <Row>
            <Col lg='4' className='py-3'>
              <TextInputForm
                textlabel="First Name"
                PlaceHolder="First Name"
                name="firstName" 
                value={appformData.firstName} 
                onChange={handleChange} 
              />
            </Col>
            <Col lg='4' className='py-3'>
              <TextInputForm
                textlabel="Last Name"
                PlaceHolder="Last Name"
                name="lastName"
                value={appformData.lastName} 
                onChange={handleChange} 
              />
            </Col>
            <Col lg='4' className='py-3'>
              <TextInputForm
                textlabel="Email"
                PlaceHolder="Email"
                name="email"
                value={appformData.email} 
                onChange={handleChange} 
              />
            </Col>
            <Col lg='12' className='py-3'>
            <DropDown
              textlabel="Skills"
              placeholder="Select skills"
              value={selectedSkills}
              onChange={handleSkillChange}
              options={skills.map(skill => ({ value: skill.id, label: skill.name }))}
            />
            </Col>
            <Col lg='12' className='py-3'>
              <TextEditor
                textlabel="About Yourself"
                name="aboutSelf" 
                value={appformData.aboutSelf} 
                onChange={handleEditorChange} 
              />
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ApplicationForm