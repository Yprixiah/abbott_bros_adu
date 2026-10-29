export type AduModel = {
  slug: string;
  name: string;
  modelNumber: string;
  eyebrow: string;
  summary: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number | null;
  floorplanPreview: string;
  floorplanPdf: string;
  highlights: string[];
  gallery: {
    src: string;
    alt: string;
  }[];
  customization: {
    title: string;
    description: string;
    link?: string;
    linkLabel?: string;
  }[];
};

export const models: AduModel[] = [
  {
    slug: "olive",
    name: "The Olive",
    modelNumber: "Model 01",
    eyebrow: "Compact living",
    summary:
      "A compact, considered starting point for flexible living.",
    description:
      "The Olive is the most compact model in the Abbott Brothers collection, designed for homeowners who want a complete additional living space with a smaller footprint.",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: null,
    floorplanPreview: "/assets/floorplans/previews/olive-floorplan.webp",
    floorplanPdf: "/assets/floorplans/source/olive-floorplan.pdf",
    highlights: [
      "One-bedroom layout",
      "Integrated kitchen and living space",
      "Compact footprint",
      "Flexible backyard use",
    ],
    gallery: [
      {
        src: "/assets/images/interior-bedroom.webp",
        alt: "Warm bedroom interior with black-framed windows",
      },
      {
        src: "/assets/images/interior-bathroom.webp",
        alt: "Bright bathroom with warm stone finishes",
      },
      {
        src: "/assets/images/interior-living.webp",
        alt: "Comfortable living area with natural light",
      },
    ],
    customization: [
      {
        title: "Exterior character",
        description:
          "A defined architectural starting point designed to sit naturally within the property.",
      },
      {
        title: "Selected Interior Touches & Appliances",
        description:
          "Cabinetry, flooring, hardware, fixtures, options, and home equipment are thoughtfully designated in advance as one cohesive package, creating an elegant turn-key residence while removing tedious design decisions.",
      },
      {
        title: "Furnishing & styling",
        description:
          "A coordinated furniture and styling package developed with a professional interior designer completes the space.",
        link: "https://www.leslieannid.com/",
        linkLabel: "Leslie Ann Interior Design",
      },
    ],
  },

  {
    slug: "cypress",
    name: "The Cypress",
    modelNumber: "Model 02",
    eyebrow: "Balanced versatility",
    summary:
      "Expanded living with room for guests, work, and everyday life.",
    description:
      "The Cypress balances a generous entertaining area with a private bedroom suite, creating a versatile ADU for guests, work, recreation, or longer-term living.",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: null,
    floorplanPreview: "/assets/floorplans/previews/cypress-floorplan.webp",
    floorplanPdf: "/assets/floorplans/source/cypress-floorplan.pdf",
    highlights: [
      "One-bedroom layout",
      "Large dining and entertaining zone",
      "Dedicated living area",
      "Flexible everyday use",
    ],
    gallery: [
      {
        src: "/assets/images/interior-kitchen-entertaining.webp",
        alt: "Kitchen and entertaining area with pool table",
      },
      {
        src: "/assets/images/interior-entertaining-wide.webp",
        alt: "Wide view of the entertaining and living space",
      },
      {
        src: "/assets/images/interior-bedroom.webp",
        alt: "Warm bedroom interior with black-framed windows",
      },
    ],
    customization: [
      {
        title: "Exterior character",
        description:
          "A defined architectural starting point designed to sit naturally within the property.",
      },
      {
        title: "Selected Interior Touches & Appliances",
        description:
          "Cabinetry, flooring, hardware, fixtures, options, and home equipment are thoughtfully designated in advance as one cohesive package, creating an elegant turn-key residence while removing tedious design decisions.",
      },
      {
        title: "Furnishing & styling",
        description:
          "A coordinated furniture and styling package developed with a professional interior designer completes the space.",
        link: "https://www.leslieannid.com/",
        linkLabel: "Leslie Ann Interior Design",
      },
    ],
  },

  {
    slug: "laurel",
    name: "The Laurel",
    modelNumber: "Model 03",
    eyebrow: "Expanded living",
    summary:
      "A more expansive footprint designed around indoor-outdoor living.",
    description:
      "The Laurel is the most expansive model in the current collection, offering multiple living zones and a layout designed for homeowners who want greater flexibility and separation of space.",
    bedrooms: 2,
    bathrooms: 1.5,
    squareFeet: null,
    floorplanPreview: "/assets/floorplans/previews/laurel-floorplan.webp",
    floorplanPdf: "/assets/floorplans/source/laurel-floorplan.pdf",
    highlights: [
      "Two-bedroom layout",
      "Multiple living zones",
      "Expanded entertaining space",
      "Strong indoor-outdoor connection",
    ],
    gallery: [
      {
        src: "/assets/images/exterior-rooftop-aerial.webp",
        alt: "Aerial view of an ADU with rooftop terrace and pool",
      },
      {
        src: "/assets/images/interior-entertaining-wide.webp",
        alt: "Wide entertaining space with pool table and living area",
      },
      {
        src: "/assets/images/interior-living.webp",
        alt: "Bright living area with large black-framed windows",
      },
    ],
    customization: [
      {
        title: "Exterior character",
        description:
          "A defined architectural starting point designed to sit naturally within the property.",
      },
      {
        title: "Selected Interior Touches & Appliances",
        description:
          "Cabinetry, flooring, hardware, fixtures, options, and home equipment are thoughtfully designated in advance as one cohesive package, creating an elegant turn-key residence while removing tedious design decisions.",
      },
      {
        title: "Furnishing & styling",
        description:
          "A coordinated furniture and styling package developed with a professional interior designer completes the space.",
        link: "https://www.leslieannid.com/",
        linkLabel: "Leslie Ann Interior Design",
      },
    ],
  },
];

export function getModel(slug: string) {
  return models.find((model) => model.slug === slug);
}
