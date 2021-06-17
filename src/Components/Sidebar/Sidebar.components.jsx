import React from "react";
import * as BsIcons from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import {
	SideBarContainer,
	SideBar,
	SideBarMax,
	DotWrapper,
	Dot,
	Icon,
	List,
	ListItem,
	SideBarContentWrapper,
	SideBarContent,
	InfoWrapper,
	Picture,
	Quote,
	Name,
	Circle,
	Span,
	SettingsWrapper,
	Settings,
	Text,
	ArrowLeft,
} from "./Sidebar.styles";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
	return (
		<>
			<SideBarContainer>
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
				<SideBarMax>
					<SideBarContentWrapper>
						<SideBarContent>
							<InfoWrapper>
								<Circle>
									<Picture />
								</Circle>
								<Quote>Welcome back,</Quote>
								<Name>Julie Bell</Name>
							</InfoWrapper>
						</SideBarContent>
						<SideBarContent>
							{SidebarData.map((item, index) => {
								return (
									<List key={index}>
										<ListItem to={item.path}>
											{item.icon}
											<Span>{item.title}</Span>
										</ListItem>
									</List>
								);
							})}
						</SideBarContent>
						<SideBarContent>
							<SettingsWrapper>
								<Settings />
								<Text>Settings</Text>
								<ArrowLeft />
							</SettingsWrapper>
						</SideBarContent>
					</SideBarContentWrapper>
				</SideBarMax>
			</SideBarContainer>
		</>
	);
};

export default Sidebar;
