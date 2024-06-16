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

const MarYGonza = () => {
  const img1 = require("./novios.jpeg");
  const img2 = require("./novios2.jpeg");
  const qr = require("./qrcode.png");
  return (
    <Box>
      <Main />
      <Motivation
        title="Queremos que seas parte de nuestro día"
        phrase={'"Amar es mirar juntos en la misma dirección"'}
        bgcolor={"#eee2d3"}
        titleColor={"#194279"}
        praseColor={"#406fa2"}
        font={'"Josefin Sans", sans-serif'}
        icon={<GiLinkedRings color="#406fa2" size="50px" />}
      />
      <EventLocation
        foto1={
          "https://raw.githubusercontent.com/Majoissa/reserva-la-fecha/main/src/Components/MarYGonza/novios.jpeg"
        }
        foto2={
          "https://raw.githubusercontent.com/Majoissa/reserva-la-fecha/main/src/Components/MarYGonza/novios2.jpeg"
        }
        lugar={"Parroquia nuestra Sra. del Carmen, Famaillá"}
        fecha={"17/08/2024"}
        hora={"17:00 hs."}
        fiesta={"Civil y Fiesta - Finca Guillen"}
        horafiesta={"18:00 hs."}
        ubi1={"https://maps.app.goo.gl/dcaKaQa94cgq3hme7"}
        ubi2={"https://maps.app.goo.gl/ezwaY9KRQP7RaVNNA"}
        iconColor={"#194279"}
        textColor={"#406fa2"}
        font={'"Josefin Sans", sans-serif'}
      />
      <EventAssistance
        phrase={"¡Esperamos poder contar con tu presencia!"}
        confirm={"Confirma tu asistencia antes del 1/07/2024"}
        url={"https://forms.gle/UsPPDQSExwq1McaV9"}
        drescode={"Dresscode"}
        text={"Formal- elegante"}
        mujeres={"¡ATENCIÓN MUJERES!"}
        prohibido={
          "No usar estos colores: blanco, natural, cobre, dorado y azul."
        }
        bgColor={"#eee2d3"}
        iconColor={"#406fa2"}
        titleColor={"#194279"}
        subColor={"#406fa2"}
        font={'"Josefin Sans", sans-serif'}
        icon={<FaRegCalendarAlt color="#406fa2" size={"50px"} />}
      />
      <PresentInfo
        text={
          "Tu presencia es el regalo más importante para nosotros. Pero si deseas celebrar con un detalle adicional, puedes ayudarnos con nuestra Luna de Miel."
        }
        color={"#406fa2"}
        titleColor={"#194279"}
        textColor={"#406fa2"}
        cuenta={"CTA: 4135920-7 089-3"}
        cbu={"CBU: 0070089430004135920733"}
        alias={"Alias: MARYGON.2024"}
        banco={"Banco Galicia"}
        cuil={"CUIL: 20366679384"}
        font={'"Josefin Sans", sans-serif'}
      />
      <SocialNetwork
        text={"¡Instagram, álbum de fotos y mucho más!"}
        description={
          "Seguinos en Instagram, usá nuestros hashtags y compartí fotos del evento"
        }
        insta={"@MARIANELLATB @JGONZA.RUIZ"}
        tags={"#MarYGonza #M&G"}
        qr={
          "Escaneá el código QR o presiona el botón y sube fotos y videos en nuestro álbum ♥"
        }
        img={
          "https://raw.githubusercontent.com/Majoissa/reserva-la-fecha/main/src/Components/MarYGonza/qrcode.png"
        }
        url={"https://photos.app.goo.gl/wghEtyWdLD5CNgXr5"}
        bgColor={"#e9e9e9"}
        titleFont={'"Josefin Sans", sans-serif'}
        fontColor={"#194279"}
        iconColor={"#194279"}
      />
      <Footer
        text={
          "¡Estamos muy agradecidos por compartir con ustedes este momento tan especial!"
        }
        bgColor={"#eee2d3"}
        font={'"Josefin Sans", sans-serif'}
        colorFont={"#194279"}
      />
    </Box>
  );
};

export default MarYGonza;
