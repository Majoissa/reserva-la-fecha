import { ChakraProvider, Box } from "@chakra-ui/react";
import React from "react";
import MarYGonza from "./Components/MarYGonza/MarYGonza";
import { Route } from "wouter";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Route path="/Boda/MarYGonza" component={MarYGonza} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
