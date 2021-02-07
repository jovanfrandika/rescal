import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='font-sans min-h-screen bg-yellow-300'>
      {children}
    </div>
  )
}

export default Layout;