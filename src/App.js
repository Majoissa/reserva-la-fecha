import { ChakraProvider, Box } from "@chakra-ui/react";
import React from "react";
import MarYGonza from "./Components/MarYGonza/MarYGonza";
import MajoYTulio from "./Components/MajoYtulio/MajoYTulio";
import MartiYMatias from "./Components/MartiYMatias/MarYMatias";
import CeleYFer from "./Components/CeleYFer/CeleYFer";
import { Route } from "wouter";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Route path="/Boda/MarYGonza" component={MarYGonza} />
        <Route path="/Boda/MajoYTulio" component={MajoYTulio} />
        <Route path="/Boda/MartiYMatias" component={MartiYMatias} />
        <Route path="/Boda/CeleYFer" component={CeleYFer} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
