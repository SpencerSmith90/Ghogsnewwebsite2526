import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Groundhogs - Foundation Repair Experts in Ontario & Manitoba',
  description = 'Groundhogs provides foundation repair, waterproofing, and pier systems in Ontario & Manitoba. Permanent solutions backed by expert service.',
  keywords = 'foundation repair, waterproofing, push pier installation, Ontario, Manitoba, Winnipeg, Thunder Bay, Sudbury',
  image = 'https://groundhogs.ca/wp-content/themes/groundhogs/img/logo-footer.svg',
  url = 'https://groundhogs.ca',
  type = 'website',
  structuredData
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;