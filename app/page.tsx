// app/page.tsx

import HeroSection from "./components/HeroSection";
import Advertise from "./components/Advertise";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";
import ImageList from "./components/ImageList";
export default function Page() {
  return (
    <div>
      {/* Uncomment the components below to include them in the page */}
      <Advertise />
      <HeroSection />
      <AboutUs />
      <Location />
      <ImageList />
    </div>
  );
}
