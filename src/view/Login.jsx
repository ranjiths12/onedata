import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { TextInputForm } from '../components/Forms';
import { Buttons } from '../components/Buttons';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import users from '../data/LoginData';
import NotifyData from '../components/NotifyData';
import { Helmet } from 'react-helmet';
const Login = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };
  const validateInputs = () => {
    if (!mobileNumber) return NotifyData('Mobile is required', "error");
    if (mobileNumber.length !== 10) return NotifyData('Please provide a valid 10-digit mobile number', "error");
    if (!password) return NotifyData('Password is required', "error");
    if (password.length !== 8) return NotifyData('Please provide an 8-character password', "error");
    return true;
  };
  const handleLogin = () => {
    if (!validateInputs()) return;
    const user = users.find(u => u.mobile_number === mobileNumber);
    if (user && user.password === password) {
      NotifyData('Login Successfull', "success")
      navigate('/dashboard');
    } else {
      NotifyData("Invalid mobile number or password", "error")
    }
  };

  return (
    <div className='pad_120'>
      <Helmet>
        <title>Login - Job Portal</title> 
      </Helmet>
      <Container>
        <Row className='justify-content-center'>
          <Col lg='8' md='8' xs='12'>
            <div className='login-box'>
              <Row className='justify-content-center'>
                <Col lg='6' md='12' xs="12">
                  <div className='text-center'>
                    <img src={require('../assets/images/login_two.png')} className='img-fluid' alt='one data' />
                  </div>
                </Col>
                <Col lg='6' md='12' xs="12" className='align-self-center'>
                  <Row>
                    <Col lg='12' md='12' xs="12">
                      <div>
                        <h2 className='bold'>Welcome Back</h2>
                        <p className='regular'>Enter Your Mobile No and Password to access your account</p>
                      </div>
                    </Col>
                    <Col lg='12' md='12' xs="12" className='py-3'>
                      <TextInputForm
                        textlabel="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </Col>
                    <Col lg='12' md='12' xs="12" className='py-3'>
                      <TextInputForm
                        textlabel="Password"
                        classname='form-control-padright'
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        suffix_icon={
                          <>
                            {showPassword ? (
                              <VscEyeClosed onClick={togglePasswordVisibility} />
                            ) : (
                              <VscEye onClick={togglePasswordVisibility} />
                            )}
                          </>
                        }
                      />
                    </Col>
                    <Col lg='12' md='12' xs="12" className='py-3'>
                      <Buttons label="Login" classname="login-btn" OnClick={handleLogin} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
