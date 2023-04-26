import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
// import Landing from "./components/Landing";
// import Specials from "./components/Specials";
// import Testimonials from "./components/Testimonials";
// import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        {/* <Landing />
      <Specials />
      <Testimonials />
      <About />*/}
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
