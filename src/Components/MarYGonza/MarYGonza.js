import React from "react";
import Main from "./Main";
import { Box } from "@chakra-ui/react";
import Motivation from "../Motivation/Motivation";
import EventLocation from "../EventLocation/EventLocation";
import EventAssistance from "../EventAssistance/EventAssistance";
import PresentInfo from "../PresentInfo/PresentInfo";
import SocialNetwork from "../SocialNetworks/SocialNetworks";
import Footer from "../Footer/Footer";

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
      />
      <EventLocation
        foto1={img1}
        foto2={img2}
        lugar={"Parroquia nuestra Sra. del Carmen, Famaillá"}
        fecha={"17/08/2024"}
        hora={"17:00 hs."}
        fiesta={"Civil y Fiesta - Finca Guillen"}
        horafiesta={"18:00 hs."}
        ubi1={"https://maps.app.goo.gl/dcaKaQa94cgq3hme7"}
        ubi2={"https://maps.app.goo.gl/ezwaY9KRQP7RaVNNA"}
      />
      <EventAssistance
        phrase={"¡Esperamos poder contar con tu presencia!"}
        confirm={"Confirma tu asistencia antes del 1/07/2024"}
        url={"https://forms.gle/UsPPDQSExwq1McaV9"}
        drescode={"Dresscode"}
        text={"Formal- elegante"}
      />
      <PresentInfo
        text={
          "Tu presencia es el regalo más importante para nosotros. Pero si deseas celebrar con un detalle adicional, puedes ayudarnos con nuestra Luna de Miel."
        }
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
        img={qr}
        url={"https://photos.app.goo.gl/wghEtyWdLD5CNgXr5"}
      />
      <Footer
        text={
          "¡Estamos muy agradecidos por compartir con ustedes este momento tan especial!"
        }
      />
    </Box>
  );
};

export default MarYGonza;
