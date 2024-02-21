import ImageCarousel from "@/components/imagecarousel/ImageCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <ImageCarousel />

      <section style={{ backgroundColor: "var(--primaryColor)", color: "#fff", paddingBlock: "5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ flex: "1 1 300px" }}>
            <h1>Why The Source?</h1>
            <p>At The Source, we take pride in being your trusted partner for all your property maintenance needs. With years of experience in the industry, our team of skilled professionals is committed to delivering exceptional service and quality workmanship.</p>
          </div>

          <p style={{ flex: "1 1 300px" }}>Whether it&apos;s fixing, painting, or cleaning, we approach every project with dedication and attention to detail. We prioritize customer satisfaction above all else, ensuring that your property is well-maintained and exceeds your expectations. Choose The Source for reliable, efficient, and cost-effective maintenance solutions that you can trust.</p>
        </div>
      </section>

      <h2 style={{ aspectRatio: "1/1", padding: "2rem", borderRadius: "50%", backgroundColor: "#000", position: "absolute", left: "50%", translate: "-50% -50%", display: "grid", alignItems: "center", justifyItems: "center", color: "#fff", zIndex: 2 }}>WE HELP</h2>

      <section>
        <div style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "min(350px, 90%)", gap: "1rem", overflowX: "auto", scrollSnapType: "x mandatory" }}>
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
          ].map(eachItem => {
            return (
              <div style={{ color: "#fff", display: "grid", gridTemplateRows: "1.3fr 1fr", scrollSnapAlign: "start" }}>
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
    </main>
  );
}
