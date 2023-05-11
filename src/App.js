import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Routes from "./Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
