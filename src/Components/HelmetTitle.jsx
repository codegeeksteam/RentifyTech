import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function HelmetTitle({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} | RenTechify</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
    </HelmetProvider>
  );
}

export default HelmetTitle;
