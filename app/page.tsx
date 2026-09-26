import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import CaseStudies from "@/components/CaseStudies";
import BookSurveySection from "@/components/BookSurveySection";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <CaseStudies />
      <BookSurveySection />
      <LocationMap />
      <Footer />
    </main>
  );
}
