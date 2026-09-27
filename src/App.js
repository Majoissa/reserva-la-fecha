import { ChakraProvider, Box } from "@chakra-ui/react";
import React from "react";
import MajoYTulio from "./Components/MajoYtulio/MajoYTulio";
import SofiaYBenjamin from "./Components/SofiaYBenjamin/SofiaYBenjamin";
import { Route } from "wouter";

function App() {
  return (
    <ChakraProvider>
      <Box>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/Boda/MajoYTulio" component={MajoYTulio} />
        <Route path="/SofiaYBenja" component={SofiaYBenjamin} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
