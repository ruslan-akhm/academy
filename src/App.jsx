import "./App.css";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import WhySection from "./components/WhySection";
import CoursesSection from "./components/CoursesSection";
import HowSection from "./components/HowSection";
import FaqSection from "./components/FaqSection";
import EnrolSection from "./components/EnrolSection";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Nav />
            <HeroSection />
            <StatsStrip />
            <WhySection />
            <CoursesSection />
            <HowSection />
            <FaqSection />
            <EnrolSection />
            <Footer />
        </>
    );
}
