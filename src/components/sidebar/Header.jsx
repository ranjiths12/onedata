import React, { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { MdLogout } from "react-icons/md";
import { TbUserSquareRounded } from "react-icons/tb";
import { Buttons } from '../Buttons';
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const profileDropdownRef = useRef(null);
  const handleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  const handleUserProfile = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  const handleClickOutside = (event) => {
    if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
      setShowProfileOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
                  OnClick={handleUserProfile} />
                <div className={`dropdown-content ${showProfileOptions ? 'show' : ''}`}>
                  <ul>
                    <li>
                      <NavLink>
                        <span className='mx-2'><MdLogout size="22" />
                        </span><span>Logout</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
