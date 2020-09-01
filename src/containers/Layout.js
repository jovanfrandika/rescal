import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <main>{props.children}</main>
    </React.Fragment>
  )
}

export default Layout;