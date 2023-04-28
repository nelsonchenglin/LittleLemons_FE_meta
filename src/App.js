import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <Routes />
      </main>
    </ChakraProvider>
  );
}

export default App;
