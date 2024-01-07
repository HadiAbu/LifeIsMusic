import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { logo } from '../assets';

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#112227]">
        <img src={logo} alt="logo" className="w-full h-54 object-contain" />
        {/* <NavLinks /> */}
      </div>
    </>
  );
};

export default Sidebar;
