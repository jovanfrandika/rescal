import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='mx-auto font-sans min-h-screen bg-gray-200'>
      {children}
    </div>
  )
}

export default Layout;