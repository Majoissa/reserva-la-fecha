import React from "react";
import Main from "./Main";
import { Box } from "@chakra-ui/react";
import Motivation from "../Motivation/Motivation";
import EventLocation from "../EventLocation/EventLocation";
import EventAssistance from "../EventAssistance/EventAssistance";
import PresentInfo from "../PresentInfo/PresentInfo";
import SocialNetwork from "../SocialNetworks/SocialNetworks";
import Footer from "../Footer/Footer";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";
import CountdownTimer from "../CountDown/CountDown";
import { PiClockDuotone } from "react-icons/pi";
import FloatingButton from "../FloatingButton/FloatingButton";
import PhotoGrid from "../grid/PhotoGrid";

const MarYGonza = () => {
  const iglesia = require("./iglesia.jpg");
  const salon = require("./salon.jpg");
  const qr = require("./qrcode.png");
  const fotos = [
    require("./novios.jpeg"),
    require("./novios2.jpeg"),
    require("./novios3.jpeg"),
    require("./novios4.jpeg"),
    require("./novios5.jpeg"),
    require("./novios6.jpeg"),
    require("./novios7.jpeg"),
    require("./novios8.jpeg"),
    require("./novios9.jpeg"),
  ];
  return (
    <Box>
      <FloatingButton
        audioSrc="/interstellar.mp3"
        bgcolor={"#d1b8a1"}
        color={"#af9c8e"}
        iconcolor={"white"}
      />
      <Main />
      <Motivation
        title="Queremos que seas parte de nuestro día"
        phrase={
          "No hay mejor compañía que la que estuvo en el camino para celebrar en la meta"
        }
        bgcolor={"#f3ebe6"}
        titleColor={"#af9c8e"}
        praseColor={"#d1b8a1"}
        font={'"Josefin Sans", sans-serif'}
        icon={<GiLinkedRings color="#af9c8e" size="50px" />}
      />
      <EventLocation
        foto1={iglesia}
        foto2={salon}
        lugar={"Parroquia Nuestra Señora del Valle"}
        fecha={"21/04/2026"}
        hora={"13:00 hs."}
        fiesta={"Civil y Fiesta - La Caballeriza"}
        horafiesta={"14:00 hs."}
        ubi1={"https://goo.gl/maps/nZNCxySq6ewf3nMH7"}
        ubi2={"https://goo.gl/maps/XhozesZMgvLbjVXU7"}
        iconColor={"#af9c8e"}
        textColor={"#d1b8a1"}
        font={'"Josefin Sans", sans-serif'}
      />
      <CountdownTimer
        targetDate="2026-03-17T13:00:00"
        color={"#af9c8e"}
        font={'"Josefin Sans", sans-serif'}
        titlefont={'"Josefin Sans", sans-serif'}
        cardBg={"White"}
        cardColor={"#af9c8e"}
        text={"Cuenta regresiva"}
        icon={<PiClockDuotone fontSize={"70px"} color={"#af9c8e"} />}
        bgColor={"#f3ebe6"}
      />
      <EventAssistance
        phrase={"¡Esperamos poder contar con tu presencia!"}
        confirm={"Confirma tu asistencia antes del 20/01/2026"}
        url={"https://forms.gle/UsPPDQSExwq1McaV9"}
        drescode={"Dresscode"}
        text={"Formal- elegante"}
        mujeres={"¡ATENCIÓN MUJERES!"}
        prohibido={
          "No usar estos colores: blanco, natural, cobre, dorado y azul."
        }
        bgColor={"white"}
        iconColor={"#d1b8a1"}
        titleColor={"#af9c8e"}
        subColor={"#d1b8a1"}
        font={'"Josefin Sans", sans-serif'}
        icon={<FaRegCalendarAlt color="#af9c8e" size={"50px"} />}
      />
      <PresentInfo
        text={
          "Tu presencia es el regalo más importante para nosotros. Pero si deseas celebrar con un detalle adicional, puedes ayudarnos con nuestra Luna de Miel."
        }
        color={"#d1b8a1"}
        titleColor={"#af9c8e"}
        textColor={"#af9c8e"}
        cbu={"CVU: 0000184305010004094797"}
        alias={"Alias: martinamaquillaje24"}
        banco={"Banco: AstroPay (o bind pagos)"}
        font={'"Josefin Sans", sans-serif'}
      />
      <PhotoGrid
        fotos={fotos}
        bgColor={"white"}
        fontFamily={'"Parisienne", cursive'}
        textColor={"#af9c8e"}
      />
      <Footer
        text={
          "¡Estamos muy agradecidos por compartir con ustedes este momento tan especial!"
        }
        bgColor={"#f3ebe6"}
        font={'"Josefin Sans", sans-serif'}
        colorFont={"#af9c8e"}
      />
    </Box>
  );
};

export default MarYGonza;
