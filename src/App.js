import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes />
    </ChakraProvider>
  );
}

export default App;
