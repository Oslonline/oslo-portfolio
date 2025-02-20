import Hero from "../components/fancy/sections/Hero";
import Projects from "../components/fancy/sections/Projects";
import Footer from "../components/fancy/Footer";
import Stacks from "../components/fancy/sections/Stacks";
import ContactMe from "../components/fancy/sections/ContactMe";
import MyWorld from "../components/fancy/sections/MyWorld";

export default function Layout() {
  return (
    <>
      <div className="fixed left-0 top-0 h-full w-full">
        <div className="absolute inset-0 -z-10 min-h-full w-full bg-gray-50 bg-[radial-gradient(#D6D3D1_1px,transparent_1px)] text-zinc-950 [background-size:16px_16px]"></div>
        <div className="absolute bottom-auto left-auto right-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-[20%] translate-y-[10%] rounded-full bg-cyan-500 opacity-20 blur-[90px]"></div>
        <div className="absolute bottom-auto left-auto right-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-[70%] translate-y-[50%] rounded-full bg-indigo-500 opacity-20 blur-[90px]"></div>
      </div>
      <div className="relative">
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
      </div>
    </>
  );
}
