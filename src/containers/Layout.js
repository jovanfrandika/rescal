import React from 'react';

const Layout = (props) => {
  let layoutStyle={
    margin: '15rem 0',
  }
  return (
    <React.Fragment>
      <main style={layoutStyle}>{props.children}</main>
    </React.Fragment>
  )
}

export default Layout;