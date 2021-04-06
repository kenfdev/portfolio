import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </div>
  );
}
