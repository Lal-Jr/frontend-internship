import React from "react";
import * as BsIcons from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { SideBar, DotWrapper, Dot, Icon } from "./Sidebar.styles";

const Sidebar = () => {
	return (
		<>
			<SideBar>
				<DotWrapper>
					<Dot style={{ color: "#dba060" }}>.</Dot>
					<Dot style={{ color: "#b5d0c1" }}>.</Dot>
					<Dot style={{ color: "#ffb6c1" }}>.</Dot>
				</DotWrapper>
				<Icon style={{ background: "#c0e8ff" }}>
					<BsIcons.BsTriangleFill />
				</Icon>
				<Icon style={{ background: "#d1ffd5" }}>
					<BsIcons.BsSquareFill />
				</Icon>
				<Icon style={{ background: "#4c4c4c" }}>
					<GoPlus />
				</Icon>
			</SideBar>
		</>
	);
};

export default Sidebar;
