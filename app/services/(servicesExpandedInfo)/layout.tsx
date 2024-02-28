import LeftSideInfo from "../LeftSideInfo";

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


export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <div style={{ color: "#000", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      <LeftSideInfo />

      <div style={{ flex: "5 1 600px" }}>
        {children}
      </div>
    </div>
  );
}
