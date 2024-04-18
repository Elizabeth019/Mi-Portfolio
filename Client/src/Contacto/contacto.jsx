import React from "react";
import { Stack, Link, Tooltip } from "@chakra-ui/react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import style from "./contacto.module.css";

function Contacto() {
  const iconColor = document.documentElement.classList.contains("dark")
    ? "teal.500"
    : "teal.200";

  return (
    <div className={style.container}>
      <h1>Contacto</h1>
      <Stack
        spacing={6}
        direction="row"
        alignItems="center"
        justifyContent="center"
        marginBottom={"1rem"}
      >
        <Link href="mailto:quimica.stands@gmail.com" textDecoration="none">
          <Tooltip label="Enviar correo electrónico" placement="top">
            <div>
              <IoMdMail fontSize="20px" color={iconColor} className={style.icono} />
            </div>
          </Tooltip>
        </Link>
        <Link
          href="https://wa.me/541534309468"
          textDecoration="none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip label="Enviar mensaje por WhatsApp" placement="top">
            <div>
              <FaWhatsapp fontSize="20px" color={iconColor} className={style.icono}/>
            </div>
          </Tooltip>
        </Link>
        <Link
          href="https://www.facebook.com/"
          textDecoration="none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip label="Ir a Facebook" placement="top">
            <div>
              <FaFacebook fontSize="20px" color={iconColor} className={style.icono}/>
            </div>
          </Tooltip>
        </Link>
        <Link
          href="https://www.instagram.com/"
          textDecoration="none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip label="Ir a Instagram" placement="top">
            <div>
              <FaInstagram fontSize="20px" color={iconColor} className={style.icono}/>
            </div>
          </Tooltip>
        </Link>
      </Stack>
    </div>
  );
}

export default Contacto;
