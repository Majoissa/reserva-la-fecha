import { ChakraProvider, Box } from "@chakra-ui/react";
import React from "react";
import MarYGonza from "./Components/MarYGonza/MarYGonza";
import MajoYTulio from "./Components/MajoYtulio/MajoYTulio";
import { Route } from "wouter";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Route path="/Boda/MarYGonza" component={MarYGonza} />
        <Route path="/Boda/MajoYTulio" component={MajoYTulio} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
