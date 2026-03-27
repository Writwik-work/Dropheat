import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedBoxes from "./components/FeaturedBoxes/FeaturedBoxes";
import "./App.css";
import LatestBattles from "./components/LatestBattles/LatestBattles";
import FreshDeliveries from "./components/FreshDeliveries/FreshDeliveries";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <FeaturedBoxes />
      <LatestBattles />
      <FreshDeliveries />
      <Footer />
    </main>
  );
}
