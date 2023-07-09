import React, { useEffect } from 'react';
import correctStylesheetsOrder from '@/common/correctStylesheetsOrder';
import Cursor from '@/components/Common/Cursor';
import ProgressScroll from '@/components/Common/ProgressScroll';

const DefaultLayout = ({ children, lightMode }) => {

  return (
    <>
      <Cursor />
      <ProgressScroll />
      {children}
    </>
  );
};

export default DefaultLayout;
