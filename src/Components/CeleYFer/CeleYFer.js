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
import { CiClock2 } from "react-icons/ci";
import FloatingButton from "../FloatingButton/FloatingButton";

const CeleYFer = () => {
  const qr = require("./qr_cele_fer.png");
  const iglesia = require("./CeleYfer.jpeg");
  const salon = require("./CeleYFer2.jpeg");
 
  const couplePhoto = require("./novios.jpg");
  
  const fotos = [couplePhoto];

  return (
    <Box>
      <FloatingButton
        audioSrc="/celeyfer.mp3"
        bgcolor={"#0C2A52"}
        color={"#153e75"}
        iconcolor={"#bee3f8"}
      />
      <Main />
      <Motivation
        title="Queremos que seas parte de nuestro día"
        phrase={'"Antes de encontrarnos, Dios ya había trazado nuestros caminos. En Su tiempo perfecto, Su luz nos reunió y hoy celebramos el amor que Él bendijo."'}
        bgcolor={"#bee3f8"}
        titleColor={"#2c5282"}
        praseColor={"#153e75"}
        font={'"Montserrat", sans-serif;'}
        icon={<IoIosHeart color="#2c5282" size="40px" />}
      />
      <CountdownTimer
        targetDate="2026-04-25T21:00:00"
        color={"#2c5282"}
        font={'"Montserrat", sans-serif;'}
        titlefont={'"Ms Madi", cursive;'}
        cardBg={"#2c5282"}
        cardColor={"white"}
        text={"Faltan"}
        icon={<CiClock2 fontSize={"70px"} color={"#2c5282"} />}
        bgColor={"#ffffff"}
      />
      <EventLocation
        foto1={iglesia}
        foto2={salon}
        lugar={"Capilla Santa Teresita del Niño Jesús"}
        fecha={"25/04/2026"}
        hora={"21:00 hs."}
        fiesta={"Fiesta - Salón La Estación Garden"}
        horafiesta={"22:30 hs."}
        ubi1={"https://maps.app.goo.gl/VHxTyg73XouWxdTP7"}
        ubi2={"https://maps.app.goo.gl/sHYdAr6mc9aLp4kQ7"}
        iconColor={"#2c5282"}
        textColor={"#153e75"}
        font={'"Montserrat", sans-serif;'}
        bg = {"Transparent"}
      />
      <EventAssistance
        phrase={"¡Esperamos poder contar con tu presencia!"}
        confirm={"Confirma tu asistencia antes del 31/03/2026"}
        url={"https://docs.google.com/forms/d/e/1FAIpQLScIZLBfT4ON3_dEs0qYg5_imwG5WGI4sp5OxQZ2sVro554HZw/viewform?pli=1"}
        drescode={"Dresscode"}
        text={"Formal - Elegante"}
        bgColor={"#ffffff"}
        titleColor={"#2c5282"}
        iconColor={"#2c5282"}
        subColor={"#153e75"}
        font={'"Montserrat", sans-serif;'}
        icon={<BsCalendarHeart color="#2c5282" size="50px" />}
      />

      <PresentInfo
        text={
          "Tu presencia es el regalo más importante para nosotros. Pero si deseas celebrar con un detalle adicional, puedes ayudarnos con nuestra Luna de Miel."
        }
        text2={"CBU en ver más"}
        text3={"Buzón en el salón"}
        color={"#2c5282"}
        titleColor={"#2c5282"}
        textColor={"#153e75"}
        cbu={"Cvu: 0000003100028605363193"} 
        alias={"Alias: celeyfer2026"} 
        banco={"Mercado Pago"}
        cuil={"Titular: María Celeste Rodríguez Dominetti"}
        font={'"Montserrat", sans-serif;'}
      />

      <SocialNetwork
        text={"¡Instagram, álbum de fotos y mucho más!"}
        description={
          "Seguinos en Instagram, usá nuestros hashtags y compartí fotos del evento"
        }
        insta={"@cele_dominetti @fer.carranza22"}
        tags={"#Cele&Fer"}
        qr={
          "Escaneá el código QR o presiona el botón y sube fotos y videos en nuestro álbum ♥"
        }
        img={qr}
        url={"https://drive.google.com/drive/u/5/folders/1zcaE_vPGRmNhiJGj8gwWok13aJ5HYB9z?q=sharedwith:public%20parent:1zcaE_vPGRmNhiJGj8gwWok13aJ5HYB9z"}
        bgColor={"#bee3f8"}
        titleFont={'"Montserrat", sans-serif;'}
        fontColor={"#2c5282"}
        iconColor={"#2c5282"}
      />
      <Footer
        text={
          "¡Estamos muy agradecidos por compartir con ustedes este momento tan especial!"
        }
        bgColor={"#2c5282"}
        font={'"Montserrat", sans-serif;'}
        colorFont={"white"}
      />
    </Box>
  );
};

export default CeleYFer;
