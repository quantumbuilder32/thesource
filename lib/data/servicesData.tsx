export type serviceType = {
  svg: JSX.Element,
  name: string,
  image: string,
  supportedTextCont: JSX.Element
}

export const allServicesData: { [key: string]: serviceType[] } = {
  "maintenance": [
    {
      name: "Landscaping",
      image: require(`@/public/maintenance/Landscaping.jpg`).default.src,
      supportedTextCont:
        <div>
          <p>Enhance the curb appeal of your property with our professional landscaping services. From lawn maintenance to garden design, we create beautiful outdoor spaces that reflect your style and enhance the value of your property.</p>
        </div>,
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 96c0-53 43-96 96-96h38.4C439.9 0 480 40.1 480 89.6V176v16V376c0 75.1-60.9 136-136 136s-136-60.9-136-136V296c0-22.1-17.9-40-40-40s-40 17.9-40 40V464c0 26.5-21.5 48-48 48s-48-21.5-48-48V296c0-75.1 60.9-136 136-136s136 60.9 136 136v80c0 22.1 17.9 40 40 40s40-17.9 40-40V192H352c-53 0-96-43-96-96zm144-8a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" /></svg>
    },
    {
      name: "Ground Personnel",
      image: require(`@/public/maintenance/Ground Personne.jpg`).default.src,
      supportedTextCont: <div><p>Our experienced ground personnel are equipped to handle a wide range of tasks to keep your property well-maintained. From debris removal to landscaping upkeep, we take care of the details so you can focus on enjoying your space.</p></div>,
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M213.2 32H288V96c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.3 17.1 60.3 42.6l42.7 120.6c-10.9-2.1-22.2-3.2-33.8-3.2c-59.5 0-112.1 29.6-144 74.8V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32c2.3 0 4.6-.3 6.8-.7c-4.5 15.5-6.8 31.8-6.8 48.7c0 5.4 .2 10.7 .7 16l-.7 0c-17.7 0-32 14.3-32 32v64H86.6C56.5 480 32 455.5 32 425.4c0-6.2 1.1-12.4 3.1-18.2L152.9 74.6C162 49.1 186.1 32 213.2 32zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" /></svg>
    },
    {
      name: "Natural Maintenance",
      image: require(`@/public/maintenance/Natural Maintenance.jpg`).default.src,
      supportedTextCont: <div><p>Maintain the natural beauty of your surroundings with our natural maintenance services. We specialize in preserving and enhancing natural features such as ponds, trees, and native vegetation, ensuring a harmonious balance between your property and its environment.</p></div>,
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M240.8 4.8C250.3 10.6 256 20.9 256 32v72h89c3.6-13.8 16.1-24 31-24h88c26.5 0 48 21.5 48 48s-21.5 48-48 48H376c-14.9 0-27.4-10.2-31-24H256v72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V256zM32 384h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32zm192 0H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32z" /></svg>
    },
    {
      name: "Pressure Washing",
      image: require(`@/public/maintenance/Pressure Washing.jpg`).default.src,
      supportedTextCont: <div><p>Restore the appearance of your property&apos;s exterior surfaces with our professional pressure washing services. From sidewalks and driveways to siding and fences, we remove dirt, grime, and stains, leaving your property looking fresh and revitalized.</p></div>,
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32s14.3 32 32 32s32-14.3 32-32c0-53-43-96-96-96s-96 43-96 96V288H160V264c0-30.9-25.1-56-56-56H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v24H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H256 480c17.7 0 32-14.3 32-32s-14.3-32-32-32H400V264c0-4.4 3.6-8 8-8h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H408c-30.9 0-56 25.1-56 56v24H288V96zM480 416V384H32v32c0 53 43 96 96 96H384c53 0 96-43 96-96z" /></svg>
    },
  ],
  "custodial": [
    {
      name: "House Cleaning",
      image: require(`@/public/custodial/House Cleaning.jpg`).default.src,
      supportedTextCont:
        <div>
          <p>From dusting and vacuuming to mopping and disinfecting, our house cleaning services cover everything needed to keep your home sparkling clean. We pay attention to detail and use eco-friendly products to create a healthy living environment for you and your family.</p>
        </div>,
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
    },
    {
      name: "Indoor Cleaning",
      image: require(`@/public/custodial/Indoor Cleaning.jpg`).default.src,
      supportedTextCont:
        <div>
          <p>Our indoor cleaning services extend beyond residential properties to include commercial spaces, offices, and more. Whether it&apos;s routine maintenance or deep cleaning, we tailor our services to meet the unique needs of each space, leaving it spotless and inviting.</p>
        </div>,
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" /></svg>
    }
  ],
  "management": [
    {
      name: "CAM Service",
      image: require(`@/public/management/CAM Service.jpg`).default.src,
      supportedTextCont:
        <div>
          <p>We handle all aspects of common area maintenance, including landscaping, parking lot maintenance, and janitorial services. Our goal is to create clean, safe, and inviting common areas that enhance the overall appeal of your property.</p>
        </div>,
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z" /></svg>
    },
    {
      name: "Office Service",
      image: require(`@/public/management/Office Service.jpg`).default.src,
      supportedTextCont:
        <div>
          <p>Our office service solutions are designed to streamline administrative tasks and ensure the efficient operation of your office space. From mail handling and package delivery to facility maintenance coordination, we provide comprehensive support to keep your office running smoothly.</p>
        </div>,
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" /></svg>
    }
  ]
}

export const servicesSummaryData = [
  {
    link: "/services/maintenance",
    title: "Maintenance",
    img: require(`@/public/management/Office Service.jpg`).default.src,
    summary: "Our maintenance services cover a wide range of tasks to keep your property in top condition. From landscaping to pressure washing, we ensure every aspect of your property is well-maintained and pristine."
  },
  {
    link: "/services/custodial",
    title: "Custodial",
    img: require(`@/public/custodial service.jpeg`).default.src,
    summary: "With our custodial services, we handle all indoor cleaning tasks with precision and care. From regular house cleaning to deep cleaning, we leave your interior spaces spotless and inviting."
  },
  {
    link: "/services/management",
    title: "Management",
    img: require(`@/public/management service.jpg`).default.src,
    summary: "Our management services provide comprehensive solutions for property management needs. From CAM services to office management, we ensure smooth operations and tenant satisfaction."
  },
  {
    link: "/services/propertySolutions",
    title: "Property Solutions",
    img: require(`@/public/propery solutions service.jpg`).default.src,
    summary: "Discover comprehensive property solutions tailored to meet your needs. We provide expert solutions to keep your property in top condition and ensure tenant satisfaction."
  }
]

export const moreServices = [
  "Property Debris Removal",
  "Home Renovation Debris Cleanup",
  "On Call House Cleaning",
  "Commercial Cleanup",
]





export type whyChooseUsType = {
  catchPhrase: string,
  summary: string,
  reasons: JSX.Element[]
}
export const whyChooseUsData: { [key: string]: whyChooseUsType } = {
  "maintenance": {
    catchPhrase: "Why Choose The Source for Your Property Maintenance Needs?",
    reasons: [<p key={1}>Our skilled technicians have years of experience and are dedicated to delivering high-quality results.</p>, <p key={2}>We create customized maintenance plans to address the specific needs of your property, ensuring optimal care and attention.</p>, <p key={3}>We understand the importance of prompt maintenance, and we strive to complete all tasks efficiently and on schedule.</p>, <p key={4}>From routine upkeep to intricate repairs, we pay close attention to detail to ensure every aspect of your property is well-maintained.</p>, <p key={5}>We prioritize eco-friendly practices and products to minimize our environmental impact and promote sustainability.</p>],
    summary: "At The Source, we offer comprehensive maintenance services to ensure the longevity and functionality of your property's exterior features. From landscaping to pressure washing, we provide expert solutions tailored to your needs."
  },
  "custodial": {
    catchPhrase: "Discover the Difference: Opt for The Source's Custodial Services!",
    reasons: [<p key={1}>Our team of cleaning professionals is trained, experienced, and committed to delivering exceptional results.</p>, <p key={2}>We offer flexible scheduling options to accommodate your needs, whether it&apos;s a one-time cleaning or regular maintenance.</p>, <p key={3}>We use safe and effective cleaning products and techniques to protect indoor air quality and ensure a healthy environment.</p>, <p key={4}>We tailor our cleaning services to meet your specific preferences and requirements, ensuring your complete satisfaction.</p>, <p key={5}>We believe in transparent communication and strive to keep you informed every step of the way, from booking your service to completion.</p>],
    summary: "At The Source, we provide comprehensive custodial services to maintain a clean and healthy indoor environment. From house cleaning to office maintenance, we ensure that every space is spotless and inviting."
  },
  "management": {
    catchPhrase: "Take the Stress Out of Property Management with The Source!",
    reasons: [<p key={1}>Our team of property management experts has extensive experience in the industry and is dedicated to maximizing the value and performance of your property.</p>, <p key={2}>We employ proactive maintenance strategies to address issues before they escalate, minimizing costly repairs and disruptions.</p>, <p key={3}>We have a network of reliable contractors and service providers that we work with to ensure prompt and efficient maintenance and repairs.</p>, <p key={4}>We provide transparent reporting and regular updates to keep you informed about the status of your property and any maintenance activities.</p>, <p key={5}>We develop customized management plans tailored to your unique needs and goals, ensuring that your property receives the attention and care it deserves.</p>],
    summary: "At The Source, we offer professional property management services to ensure the efficient operation and maintenance of your residential or commercial property. From CAM services to office management, we provide comprehensive solutions to meet your needs."
  }
}

