import Faq from "@/components/FAQ/FAQ";
import ImageCarousel from "@/components/imagecarousel/ImageCarousel";
import SecondaryButton from "@/components/reusables/buttons/secondaryButton/SecondaryButton";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import { allServicesData, servicesSummaryData } from "@/lib/data/servicesData";
import { testimonials } from "@/lib/data/testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <ImageCarousel />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingBlock: "2rem" }}>
        <div style={{ flex: "1 3 300px", position: "relative" }}>
          <Image alt={`services intro image`} src={"https://images.pexels.com/photos/450064/pexels-photo-450064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} fill={true} style={{ objectFit: "cover" }} />

          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, var(--primaryColor),var(--primaryColor), transparent)" }}></div>

          <div style={{ position: "relative", zIndex: 1, display: "grid", gap: "1rem", padding: "1rem" }}>
            <h2>Excepional</h2>
            <h1>SERVICES WE OFFER</h1>
            <p>We provide comprehensive property maintenance solutions tailored to meet your needs. From landscaping and custodial services to property management and pressure washing, our team ensures your property remains in top condition.</p>
            <SecondaryButton link="/projectGallery" text="See Our Projects" />
          </div>
        </div>

        <div className="noScrollBar snap" style={{ flex: "5 1 300px", display: "grid", gridAutoFlow: "column", gridAutoColumns: "300px", overflowX: "auto", color: "#000", gap: "1rem" }}>
          {servicesSummaryData.map((eachService, eachServiceIndex) => {
            return (
              <div key={eachServiceIndex} style={{ display: "flex", flexDirection: "column", gap: "1rem", alignContent: "flex-start", paddingInline: "1rem" }}>
                <Image alt={`${eachService.title}image`} src={eachService.img} height={200} width={200} style={{ objectFit: "cover", aspectRatio: '1.5/1', width: "100%" }} />

                <h2 style={{ textTransform: "uppercase" }}>{eachService.title}</h2>

                <p>{eachService.summary}</p>

                <SecondaryButton style={{ marginTop: "auto" }} link={eachService.link} text="View Details" />
              </div>
            )
          })}

        </div>
      </div>

      <section>
        <h1 style={{ textAlign: "center", color: "#000", marginBottom: "1rem" }}>Why Choose The Source</h1>

        <WhyChooseUs />
      </section>

      <h1 style={{ textAlign: "center", color: "#000" }}>Here To Assist</h1>

      <section>
        <div className="snap" style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "min(350px, 95%)", gap: "1rem", overflowX: "auto" }}>
          {[
            {
              title: "Homeowners",
              img: "https://images.pexels.com/photos/7578977/pexels-photo-7578977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              text: "We assist homeowners in maintaining and enhancing the condition of their properties."
            },
            {
              title: "Businesses",
              img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              text: "Our services cater to the maintenance needs of various businesses, including offices, retail establishments, restaurants, and more."
            },
            {
              title: "Property Managers",
              img: "https://images.pexels.com/photos/5816288/pexels-photo-5816288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              text: "We partner with property managers to oversee the maintenance and upkeep of residential and commercial properties."
            },
            {
              title: "Real Estate Agents",
              img: "https://images.pexels.com/photos/8470803/pexels-photo-8470803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              text: "We support real estate agents by providing maintenance services for properties on the market."
            },
            {
              title: "Facilities Managers",
              img: "https://images.pexels.com/photos/5668430/pexels-photo-5668430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              text: "We work with facilities managers responsible for maintaining public buildings, schools, healthcare facilities."
            },
          ].map((eachItem, eachItemIndex) => {
            return (
              <div key={eachItemIndex} style={{ color: "#fff", display: "grid", gridTemplateRows: "1.3fr 1fr", fontWeight: "300" }}>
                <div style={{ position: "relative", display: "grid", alignItems: "center", justifyItems: "center" }}>
                  <Image className="hoverHighlight" alt={`${eachItem.title}image`} src={eachItem.img} height={400} width={400} style={{ objectFit: "cover", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />

                  <h2 style={{ textTransform: "capitalize", position: "relative", zIndex: 1 }}>{eachItem.title}</h2>
                </div>

                <div style={{ backgroundColor: "#000", padding: "2rem 1rem", }}>
                  {eachItem.text}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <h1 style={{ textAlign: "center", color: "#000", marginBottom: "2rem" }}>Popular Questions</h1>
        <div style={{ display: "grid", maxWidth: "75ch", margin: "0 auto", padding: "1rem", boxShadow: "0px 0px 40px 20px #eee" }}>
          <Faq question="How often should I schedule maintenance for my property?"
            answer="The frequency of maintenance depends on various factors such as the type of property, its age, and specific maintenance needs. As a general rule, we recommend scheduling routine maintenance at least once or twice a year to ensure your property remains in optimal condition. However, we can tailor a maintenance schedule to suit your property's unique requirements."
          />

          <Faq question="What services do you offer?"
            answer="We offer a comprehensive range of property maintenance services, including landscaping, custodial services, property management, pressure washing, and more. Whether you need routine upkeep, repairs, or specialized services, our team is here to help keep your property looking its best."
          />

          <Faq question="How do I request a service or get a quote?"
            answer="Requesting a service or obtaining a quote is easy! You can contact us through our website or give us a call to discuss your needs. Our friendly team will guide you through the process, gather necessary information, and provide you with a personalized quote based on your requirements."
          />

          <Faq question="Are your services customizable to my specific needs?"
            answer="Yes, absolutely! We understand that every property is unique, and we offer customizable solutions to meet your specific needs and preferences. Whether you require a one-time service or ongoing maintenance, we'll work closely with you to tailor our services to your requirements and budget."
          />
        </div>
      </section>

      <section style={{ backgroundColor: "var(--backgroundColor)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "0 auto", maxWidth: "1100px" }}>
          <div style={{ flex: "4 1 400px", display: "flex", alignItems: "flex-start", gap: ".5rem" }}>
            <svg style={{ fill: "var(--fadedColor)", width: "4rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>

            <p style={{ color: "var(--lightFadedColor)", fontSize: "var(--h2FontSize)", fontFamily: "roboto" }}>{testimonials[0].testimonial}</p>
          </div>

          <div style={{ flex: "1 1 300px", color: "#fff", paddingInline: "1rem" }}>
            <p style={{ fontSize: "var(--h2FontSize)" }}>- {testimonials[0].name}</p>

            <p style={{ color: "var(--lightFadedColor)", maxWidth: "30ch" }}>{testimonials[0].jobTitle}</p>

            <Link href={""} style={{ marginBlock: "2rem", display: "inline-block", color: "var(--fadedColor)" }}>More Testimonials</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
