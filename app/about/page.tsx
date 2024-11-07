import AboutTopSection from "@/components/about/aboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutTopSection />
      <Footer />
      {/* Add other components here */}

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
