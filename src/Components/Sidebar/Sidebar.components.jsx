import React from "react";
import { BsTriangleFill, BsSquareFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { SidebarContainer, DotContainer, Dot, Icon } from "./Sidebar.styles";

const Sidebar = () => {
	return (
		<>
			<SidebarContainer>
				<DotContainer>
					<Dot style={{ color: "#dba060" }}>.</Dot>
					<Dot style={{ color: "#b5d0c1" }}>.</Dot>
					<Dot style={{ color: "#ffb6c1" }}>.</Dot>
				</DotContainer>
				<Icon style={{ background: "#c0e8ff" }}>
					<BsTriangleFill />
				</Icon>
				<Icon style={{ background: "#d1ffd5" }}>
					<BsSquareFill />
				</Icon>
				<Icon style={{ background: "#4c4c4c" }}>
					<GoPlus />
				</Icon>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
