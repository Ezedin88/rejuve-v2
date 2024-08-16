
import { getMenuNav } from '@/app/lib/client';
import React from 'react';
import HeaderContent from './HeaderContent';

const Header = async () => {

  const menuItems = await getMenuNav();

  return (

    <header className="w-full h-20 border border-horizontalLine/50 bg-primaryWhite fixed top-0 z-50">
      <HeaderContent megaMenuList={menuItems} />
    </header>
  );
};

export default Header;
