import React from 'react';

function ContentWrapper({ children }) {
  return (
    <div className='w-full mx-auto max-w-screen-lg px-4 pt-20'>
      {children}
    </div>
  );
}

export default ContentWrapper;
