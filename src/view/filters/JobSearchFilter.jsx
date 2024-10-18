import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { DropDown, TextInputForm } from '../../components/Forms'

const JobSearchFilter = () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  return (
    <div>
        <Container>
            <Row>
                <Col xs={12} className='py-3'>
                    <TextInputForm  PlaceHolder="Search"/>
                </Col>
                <Col xs={12}>
                    <DropDown options={options}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default JobSearchFilter