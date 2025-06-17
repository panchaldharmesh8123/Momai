import Hero from "../components/Hero"
import FeaturedWorks from "../components/FeaturedWorks"
import ServicesSection from "../components/ServicesSection"
import Testimonials from "../components/Testimonials"
import ContactCta from "../components/ContactCta"

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWorks />
      <ServicesSection />
      <Testimonials />
      <ContactCta />
    </main>
  )
}

export default Home
