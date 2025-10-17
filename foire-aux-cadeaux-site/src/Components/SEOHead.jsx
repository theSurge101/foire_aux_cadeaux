import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "La Foire Aux Cadeaux 2025 - L'expérience shopping incontournable à Lomé",
  description = "Découvrez La Foire Aux Cadeaux 2025 du 19-21 Décembre à l'hôtel Sarakawa de Lomé. Plus de 100 exposants, artisans locaux, cadeaux uniques et expériences familiales.",
  image = "https://foireauxcadeaux.tg/og-image.jpg",
  url = "https://foireauxcadeaux.anaisconcept.biz",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
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
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;