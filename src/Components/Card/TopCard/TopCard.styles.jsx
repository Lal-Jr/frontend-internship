import styled from "styled-components";

export const CardContainer = styled.div`
	height: 100px;
	width: 200px;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	margin: 5px 10px 10px;
	padding: 5px 10px 10px;
`;

export const LargeText = styled.h1`
	color: #000;
	font-weight: 900;
`;

export const Bar = styled.div`
	position: absolute;
	height: 40px;
	width: 500px;
	background: #f1f2f2;
	border-radius: 50px;
`;

export const BarFill = styled.div`
	position: absolute;
	height: 40px;
	width: 175px;
	background: #000;
	border-radius: 50px 0 0 50px;
`;

export const SmallText = styled.p`
	color: #d7d7d7;
`;
