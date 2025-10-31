export interface OrganizationSchema {
  name: string;
  description?: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
    areaServed?: string;
    availableLanguage?: string[];
  };
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface ArticleSchema {
  headline: string;
  description: string;
  author: {
    name: string;
    url?: string;
  };
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  publisher: {
    name: string;
    logo?: string;
  };
}

export interface ProjectSchema {
  name: string;
  description: string;
  url: string;
  image?: string[];
  client?: string;
  dateCreated?: string;
  datePublished?: string;
  keywords?: string[];
  about?: string;
}

export function generateOrganizationSchema(data: OrganizationSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo ? {
      "@type": "ImageObject",
      url: data.logo,
    } : undefined,
    sameAs: data.sameAs,
    contactPoint: data.contactPoint ? {
      "@type": "ContactPoint",
      telephone: data.contactPoint.telephone,
      contactType: data.contactPoint.contactType,
      email: data.contactPoint.email,
      areaServed: data.contactPoint.areaServed,
      availableLanguage: data.contactPoint.availableLanguage,
    } : undefined,
    address: data.address ? {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    } : undefined,
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  };
}

export function generateArticleSchema(data: ArticleSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    author: {
      "@type": "Person",
      name: data.author.name,
      url: data.author.url,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    image: data.image,
    url: data.url,
    publisher: {
      "@type": "Organization",
      name: data.publisher.name,
      logo: data.publisher.logo ? {
        "@type": "ImageObject",
        url: data.publisher.logo,
      } : undefined,
    },
  };
}

export function generateProjectSchema(data: ProjectSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.name,
    description: data.description,
    url: data.url,
    image: data.image,
    creator: data.client,
    dateCreated: data.dateCreated,
    datePublished: data.datePublished,
    keywords: data.keywords?.join(", "),
    about: data.about,
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}
