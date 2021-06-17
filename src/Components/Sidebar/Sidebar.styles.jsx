import styled from "styled-components";
import { MdPersonOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const SideBarContainer = styled.div`
	display: flex;
`;

export const SideBarMax = styled.div`
	height: 100vh;
	width: 500px;
	background: #fbfbfb;
	position: relative;
	left: 80px;
`;

export const SideBar = styled.div`
	height: 100vh;
	width: 80px;
	background: #000;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;

export const DotWrapper = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export const Dot = styled.div`
	color: #fff;
	margin: 5px;
	font-size: 30px;
`;

export const Icon = styled.h1`
	color: #000;
	margin: 7.5px;
	padding: 20px;
	cursor: pointer;
	background: #fff;
	border-radius: 50%;
	font-size: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SideBarContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 75%;
	padding: 0;
`;

export const SideBarContent = styled.div``;

export const List = styled.li`
	width: 100%;
	display: flex;
	justify-content: start;
	align-items: center;
	padding-left: 24px;
	list-style: none;
	height: 60px;
`;

export const ListItem = styled.p`
	font-size: 18px;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 16px;
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;
`;

export const Picture = styled(MdPersonOutline)`
	z-index: 998;
	color: #000;
	font-size: 50px;
`;

export const Quote = styled.div`
	padding: 10px 0;
`;

export const Name = styled.div`
	font-size: 24px;
	font-weight: 900;
`;

export const Circle = styled.div`
	height: 100px;
	width: 100px;
	background: #d7d7d7;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

export const Span = styled.span`
	margin-left: 15px;
	font-size: 18px;
`;

export const SettingsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 250px 0 0 70px;
	color: #d7d7d7;
`;

export const Settings = styled(FiSettings)`
	font-size: 18px;
`;

export const Text = styled.div`
	margin-inline: 20px;
	font-size: 18px;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
	margin-left: 40px;
	font-size: 18px;
`;
