import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Footer from "./components/Footer";
import Stacks from "./components/sections/Stacks";
import ContactMe from "./components/sections/ContactMe";
import MyWorld from "./components/sections/MyWorld";

export default function Layout() {
  return (
    <>
      <div className="px-6 md:px-12 lg:px-20">
        <Hero />
        <MyWorld />
        <Projects />
        <Stacks />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
