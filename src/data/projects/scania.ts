import type { Project } from '../types'

export const scania: Project = {
  id: 'scania-help-center',
  title: "Empowering Customers: Building Scania's Global Help Center",
  description:
    "Scania sought to create a structured and scalable Help Center to empower customers with autonomy, clarity, and control over their digital experience. The initiative aimed to reduce dependency on support, alleviate pressure on sales and support teams, and ensure consistently up-to-date content across global markets. By aligning with Scania's mission to deliver a premium digital experience, the Help Center was designed to foster self-service, enhance customer satisfaction, and support users in navigating Scania's digital ecosystem with confidence.",
  client: 'Scania',
  year: '2025',
  industry: 'Automotive',
  role: 'Product Owner & UX Designer',
  coverImage: '',           // add image path here, e.g. '/images/scania-cover.jpg'
  tags: ['UX', 'UI'],
  stats: [
    {
      value: '1 year',
      label: 'Length of assignment, starting as Service Designer and ending as a PO.',
    },
    {
      value: '1 000+',
      label: 'Page views on the Help Centre every month.',
    },
    {
      value: '30+',
      label: 'The number of languages the Help Centre is available for.',
    },
  ],
  sections: [
    {
      type: 'text-image',
      title: 'The Challenge',
      text: 'The challenge was real — shifting between hats while owning a product pre- and post-launch handling 10 000 monthly page views. Navigating a premium-focused enterprise while balancing stakeholder and market expectations.',
      image: '',            // add image path here
      imageAlt: 'Scania Help Center interface',
      imagePosition: 'left',
    },
    {
      type: 'text-only',
      title: 'The Outcome',
      text: 'To push boundaries further, I leveraged the incredible people around me to build my first AI chatbot POC. Bridging design thinking with technical possibilities to position the Help Centre as a leading platform in its industry.\n\nAcross a year of wearing these six hats, every accomplishment — from content frameworks to technical decisions to stakeholder alignment — converged into one comprehensive Help Centre Guidelines document. This document ensures a smooth handover, sustained progress, and continuity of the established methods and standards that will guide the platform forward.',
    },
    {
      type: 'text-image',
      title: 'The Process',
      text: 'The method six thinking hats (with a twist), developed by Edward de Bono, this framework became my guiding principle as a project owner for the Help Centre. As a project owner, I constantly switched hats across all decisions taken.\n\n· Strategic collaboration and Planning\n· Development responsibility\n· Content Creation\n· Representation and Forums\n· Market collaboration\n\nBeyond my core role, I activated my sixth hat — combining accumulated knowledge, graphic design skills, and technical expertise. I addressed core user needs by designing quick-guide images for each category, creating video tutorial thumbnails, and establishing a structured content creation framework for the Help Centre.',
      image: '',            // add image path here
      imageAlt: 'Six Thinking Hats framework applied to the Help Centre',
      imagePosition: 'right',
    },
    {
      type: 'full-image',
      image: '',            // add image path here
      imageAlt: 'Scania Help Center overview',
    },
  ],
}
