import React from "react";
import Main from "./Main";
import { Box } from "@chakra-ui/react";
import Motivation from "../Motivation/Motivation";
import EventLocation from "../EventLocation/EventLocation";
import EventAssistance from "../EventAssistance/EventAssistance";
import PresentInfo from "../PresentInfo/PresentInfo";
import SocialNetwork from "../SocialNetworks/SocialNetworks";
import Footer from "../Footer/Footer";
import { IoIosHeart } from "react-icons/io";
import { BsCalendarHeart } from "react-icons/bs";
import PhotoGrid from "../grid/PhotoGrid";
import CountdownTimer from "../CountDown/CountDown";

const MajoYTulio = () => {
  const img1 = require("./novios.jpeg");
  const img2 = require("./novios2.jpeg");
  const qr = require("./majoytulioQr.png");
  const iglesia = require("./iglesia.jpg");
  const salon = require("./salon.jpeg");
  const fotos = [
    require("./foto1.jpeg"),
    require("./foto3.jpeg"),
    require("./foto4.jpeg"),
    require("./foto5.jpeg"),
    require("./foto6.jpeg"),
    require("./foto7.jpeg"),
    require("./foto8.jpeg"),
    require("./foto2.jpeg"),
    require("./foto9.jpeg"),
    require("./foto10.jpeg"),
    require("./foto11.jpeg"),
    require("./foto12.jpeg"),
    require("./foto13.jpeg"),
    require("./foto14.jpeg"),
    require("./foto15.jpeg"),
  ];
  return (
    <Box>
      <Main />
      <Motivation
        title="Queremos que seas parte de nuestro día"
        phrase={'"La medida del amor es amar sin medida" San Agustín.'}
        bgcolor={"#c5cc9d"}
        titleColor={"#474b2f"}
        praseColor={"#faffde"}
        font={'"Montserrat", sans-serif;'}
        icon={<IoIosHeart color="#faffde" size="40px" />}
      />
      <CountdownTimer
        targetDate="2024-09-24T18:00:00"
        color={"#3b5c54"}
        font={'"Montserrat", sans-serif;'}
      />
      <EventLocation
        foto1={iglesia}
        foto2={salon}
        lugar={"Iglesia Ntra. Sra. de la Caridad"}
        fecha={"28/09/2024"}
        hora={"18:00 hs."}
        fiesta={"Civil y Fiesta - salón Florentina"}
        horafiesta={"19:00 hs."}
        ubi1={"https://maps.app.goo.gl/KgCjpAJ9F1gNs6Bv5"}
        ubi2={"https://maps.app.goo.gl/aRpdndA6pcu5ZmCm7"}
        iconColor={"#677252"}
        textColor={"#4a523b"}
        font={'"Montserrat", sans-serif;'}
      />
      <EventAssistance
        phrase={"¡Esperamos poder contar con tu presencia!"}
        confirm={"Confirma tu asistencia antes del 15/08/2024"}
        url={"https://forms.gle/yngR1MhuUrqkqHNK7"}
        drescode={"Dresscode"}
        text={"Formal- elegante"}
        bgColor={"#c5cc9d"}
        titleColor={"#474b2f"}
        iconColor={"#faffde"}
        subColor={"#faffde"}
        font={'"Montserrat", sans-serif;'}
        icon={<BsCalendarHeart color="#faffde" size="50px" />}
      />

      <PresentInfo
        text={
          "Tu presencia es el regalo más importante para nosotros. Pero si deseas celebrar con un detalle adicional, puedes ayudarnos con nuestra Luna de Miel."
        }
        color={"#474b2f"}
        titleColor={"#474b2f"}
        textColor={"#474b2f"}
        cbu={"CVU: 0000003100061155039330"}
        alias={"Alias: MAJOYTULIO.24"}
        banco={"Mercado Pago"}
        cuil={"CUIT/CUIL: 27395714533"}
        font={'"Montserrat", sans-serif;'}
      />

      <PhotoGrid fotos={fotos} bgColor={"white"} />
      <SocialNetwork
        text={"¡Instagram, álbum de fotos y mucho más!"}
        description={
          "Seguinos en Instagram, usá nuestros hashtags y compartí fotos del evento"
        }
        insta={"@MAJOISSACARAM @TULIOTOLEDO2"}
        tags={"#Majo&Tulio #M&T"}
        qr={
          "Escaneá el código QR o presiona el botón y sube fotos y videos en nuestro álbum ♥"
        }
        img={qr}
        url={
          "https://drive.google.com/drive/folders/17Kv0otzS-lzFFXhhCmHqgCwpl0FbhCDG?usp=sharing"
        }
        bgColor={"#e9e9e9"}
        titleFont={'"Montserrat", sans-serif;'}
        fontColor={"#474b2f"}
        iconColor={"#474b2f"}
      />
      <Footer
        text={
          "¡Estamos muy agradecidos por compartir con ustedes este momento tan especial!"
        }
        bgColor={"#c5cc9d"}
        font={'"Montserrat", sans-serif;'}
        colorFont={"#474b2f"}
      />
    </Box>
  );
};

export default MajoYTulio;
