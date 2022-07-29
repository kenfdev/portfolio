import React, { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const { description, siteUrl, title, twitterUsername, defaultImage } =
    site.siteMetadata;
  const seo = {
    title: title,
    description: description,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <div>
      <Helmet title={seo.title}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </div>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        description
        siteUrl
        title
        twitterUsername
        defaultImage
      }
    }
  }
`;

export default Layout;
