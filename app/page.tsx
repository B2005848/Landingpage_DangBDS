// app/page.tsx

import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
import Advertise from "./components/Advertise";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";

export default function Page() {
  return (
    <div>
      {/* Uncomment the components below to include them in the page */}
      <Advertise />
      <HeroSection />
      <AboutUs />
      <Location />
      {/* <Services /> */}
    </div>
  );
}
