import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "DataAnalytics",
    path: "/DataAnalytics",
    icon: <IoIcons.IoIosPie />,
    cName: "nav-text",
  },
  {
    title: "Entites",
    path: "/Entites",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
];