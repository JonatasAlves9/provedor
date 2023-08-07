import React from 'react';
import Head from '@/presentation/config/layout/head/Head';
import Content from '@/presentation/config/layout/content/Content';

// THIS PAGE REPRESENTS THE BUILD PATTERN FOR NEW LAYOUTS/SCREENS, FOR STRUCTURE EXTRACTION ONLY (NOT COMPONENT USAGE).

export const PageBuilder = ({...props}) => {
  return (
    <React.Fragment>
      <Head title='Title Page' />
      <Content>
        <p>Starter Page for general layout</p>
      </Content>
    </React.Fragment>
  );
};
