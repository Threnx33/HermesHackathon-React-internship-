import React from "react";
import { AiOutlineInfoCircle, AiOutlineClockCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import { BiPencil } from "react-icons/bi";

export const NavbarData = [
  {
    title: "Despre",
    icon: <AiOutlineInfoCircle />,
    link: "/1",
  },
  {
    title: "Orar",
    icon: <AiOutlineClockCircle />,
    link: "/2",
  },
  {
    title: "Parteneri",
    icon: <FiUsers />,
    link: "/3",
  },
  {
    title: "Înscrie-te",
    icon: <BiPencil />,
    link: "/4",
  },
  {
    title: "Contact",
    icon: <TiContacts />,
    link: "/5",
  },
];
