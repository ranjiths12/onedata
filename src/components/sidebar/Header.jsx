import React, { useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { TbUserSquareRounded } from "react-icons/tb";
import { Buttons } from '../Buttons';
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
 
  const profileDropdownRef = useRef(null);
  const handleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };
  return (
    <>
      <Navbar expand="sm" className="pos-fixed bg-white">
        <Container className="">
          <Navbar.Brand >One Data</Navbar.Brand>
          <Buttons classname="icon-only" label={<><RiMenu3Fill /></>} OnClick={handleSideBar} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="profile-dropdown" ref={profileDropdownRef}>
                <Buttons
                  classname="profile-bar mx-2"
                  label={<><span className='user-name mx-2'>Ranjith</span><TbUserSquareRounded size={25} /></>}
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
