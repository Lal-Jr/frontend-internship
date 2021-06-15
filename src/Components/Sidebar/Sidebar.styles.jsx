import styled from "styled-components";

export const SidebarContainer = styled.div`
	height: 100vh;
	width: 80px;
	background: #000;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;

export const DotContainer = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export const Dot = styled.div`
	color: #fff;
	margin: 10px 5px;
`;

export const Icon = styled.h1`
	color: #000;
	margin: 10px;
	padding: 20px;
	cursor: pointer;
	background: #fff;
	border-radius: 50%;
	font-size: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
