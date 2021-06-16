import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Dashboard",
		path: "/",
		icon: <IoIcons.IoRocketOutline />,
	},
	{
		title: "Clients",
		path: "/clients",
		icon: <BsIcons.BsPerson />,
	},
	{
		title: "Invoice",
		path: "/invoice",
		icon: <FaIcons.FaFileInvoiceDollar />,
	},
	{
		title: "Estimate",
		path: "/estimate",
		icon: <RiIcons.RiBillLine />,
	},
	{
		title: "My Team",
		path: "/myteam",
		icon: <IoIcons.IoPeopleOutline />,
	},
];
