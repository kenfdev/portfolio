import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </div>
  );
}
