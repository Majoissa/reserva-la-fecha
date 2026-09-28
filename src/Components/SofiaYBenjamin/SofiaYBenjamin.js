import React from "react";
import Main from "./Main";
import { Box, Image } from "@chakra-ui/react";
import Motivation from "../Motivation/Motivation";
import EventLocation from "../EventLocation/EventLocation";
import EventAssistance from "../EventAssistance/EventAssistance";
import PresentInfo from "../PresentInfo/PresentInfo";
import Footer from "../Footer/Footer";
import { FaRegCalendarAlt } from "react-icons/fa";

import CountdownTimer from "../CountDown/CountDown";
import { PiClockDuotone } from "react-icons/pi";
import FloatingButton from "../FloatingButton/FloatingButton";
import PhotoGrid from "../grid/PhotoGrid";
import ordinaryMusic from "./ordinary.mp3";
import alianzasImg from "./alianzas.jpeg";
import ramoImg from "./ramo.PNG";
import FallingFlowers from "./FallingFlowers";
import fondo from "./fondo sofia.jpeg";

const fotosNosotros = [
  require('./1.jpeg'), require('./2.jpeg'), require('./3.jpeg'), require('./4.jpeg'),
  require('./5.jpeg'), require('./6.jpeg'), require('./7.jpeg'), require('./8.jpeg'),
  require('./9.jpeg'), require('./10.jpeg'), require('./11.jpeg'), require('./12.jpeg'),
  require('./13.jpeg'), require('./14.jpeg'), require('./15.jpeg'), require('./16.jpeg'),
  require('./17.jpeg'), require('./18.jpeg'), require('./19.jpeg'), require('./20.jpeg'),
  require('./21.jpeg'), require('./22.jpeg'), require('./25.jpeg'), require('./26.jpeg')
];

const SofiaYBenjamin = () => {
  return (
    <Box>
      <FloatingButton
        audioSrc={ordinaryMusic}
        bgcolor={"#4A0F61"}
        color={"#8C2155"}
        iconcolor={"white"}
      />
      <Main />
      <Box position="relative" bg="white" py={4}>
        <FallingFlowers count={4} />
        <Box position="relative" zIndex={1}>
          <Motivation
            phrase={'"El amor todo lo soporta, todo lo cree, todo lo espera y todo lo resiste. El amor verdadero nunca deja de ser" 1 Corintios 13:4-8'}
            bgcolor={"transparent"}
          titleColor={"#4A0F61"}
          praseColor={"#4A0F61"}
          font={'"Lato", sans-serif'}
          titleFont={'"Raleway", sans-serif'}
          icon={<Image src={alianzasImg} alt="Alianzas" w="120px" opacity={0.8} />}
          bottomImage={<Image src={ramoImg} alt="Ramo" w={{ base: "60%", md: "50%" }} transform="rotate(-15deg)" opacity={0.9} />}
        />
        </Box>
      </Box>
      <Box position="relative" bg="white" py={4}>
        <Box position="relative" zIndex={1}>
      <EventLocation
        title1={"Misa"}
        title2={"Fiesta y civil"}
        lugar={"Capilla de Nuestra Señora del Rosario de San Nicolás"}
        fecha={"21/11/2026"}
        hora={"17:45 hs."}
        fiesta={"Espacio Tafi 1"}
        horafiesta={"19:00 hs."}
        ubi1={"https://share.google/js3CxD8io19Qj0uLU"}
        ubi2={"https://share.google/aFWwwCU67r7dz380Q"}
        iconColor={"#8C2155"}
        textColor={"#4A0F61"}
        font={'"Lato", sans-serif'}
        titleFont={'"Raleway", sans-serif'}
        bg={"transparent"}
      />
        </Box>
      </Box>
      <Box position="relative" py={4}>
        <FallingFlowers count={4} />
        <Box position="relative" zIndex={1}>
        <CountdownTimer
        targetDate="2026-11-21T17:45:00"
        color={"#4A0F61"}
        font={'"Lato", sans-serif'}
        titlefont={'"Raleway", sans-serif'}
        cardBg={"white"}
        cardColor={"#4A0F61"}
        text={"Cuenta regresiva"}
        icon={<PiClockDuotone fontSize={"45px"} color={"#8C2155"} opacity={0.8} />}
      />
        </Box>
      </Box>
      <PhotoGrid
        fotos={fotosNosotros}
        bgColor={"white"}
        fontFamily={'"Raleway", sans-serif'}
        textColor={"#4A0F61"}
      />
      <Box position="relative" bg="white" py={4}>
        <FallingFlowers count={5} />
        <Box position="relative" zIndex={1}>
        <EventAssistance
        phrase={"¡Esperamos poder contar con tu presencia!"}
        confirm={"Confirma tu asistencia"}
        url={"https://docs.google.com/forms/d/e/1FAIpQLSdOrxwQMk_xs3JBaHAiv372Eh84ca4_qO7SxGPKQ5U46TK07Q/viewform?pli=1"}
        drescode={"Dresscode"}
        text={"Formal - elegante"}
        mujeres={"¡ATENCIÓN MUJERES!"}
        prohibido={
          "No usar estos colores: blanco, natural, cobre, dorado y azul."
        }
        bgColor={"white"}
        iconColor={"#8C2155"}
        titleColor={"#4A0F61"}
        subColor={"#4A0F61"}
        font={'"Lato", sans-serif'}
        titleFont={'"Raleway", sans-serif'}
        icon={<FaRegCalendarAlt color="#8C2155" size={"35px"} opacity={0.8} />}
      />
        </Box>
      </Box>
      <Box position="relative" bgImage={`url('${fondo}')`} bgSize="cover" bgPosition="center" py={4}>
        <Box position="relative" zIndex={1}>
        <PresentInfo
        text={
          "Tu presencia es el regalo más importante para nosotros. Pero si deseas celebrar con un detalle adicional, puedes ayudarnos con nuestra Luna de Miel."
        }
        color={"#4A0F61"}
        titleColor={"#4A0F61"}
        textColor={"#4A0F61"}
        cuenta={"Caja de ahorro en pesos: 1159219232"}
        cbu={"CBU: 4530000800011592192329"}
        alias={"Alias: sofi.benja.2026"}
        banco={"Naranja X - Titular: Oscar Benjamin Villafane Assef"}
        cuil={"CUIL: 20405330378"}
        font={'"Lato", sans-serif'}
        titleFont={'"Raleway", sans-serif'}
      />
        </Box>
      </Box>
      <Footer
        text={
          "¡Estamos muy agradecidos por compartir con ustedes este momento tan especial!"
        }
        bgColor={"#8C2155"}
        font={'"Lato", sans-serif'}
        colorFont={"white"}
      />
    </Box>
  );
};

export default SofiaYBenjamin;
