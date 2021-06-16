import styled from "styled-components";
import { BsCircleFill } from "react-icons/bs";

export const CardContainer = styled.div`
	height: 250px;
	width: 350px;
	border-radius: 20px;
	background: #faf8f3;
	padding: 25px;
	display: flex;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LargeText = styled.div`
	font-size: 28px;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const SmallTextWrapper = styled.div`
	display: flex;
	margin: 5px 0;
	justify-content: start;
	align-items: center;
`;

export const Dot = styled(BsCircleFill)`
	font-size: 8px;
`;

export const SmallText = styled.div`
	font-size: 14px;
	font-weight: bold;
	margin-left: 10px;
`;

export const Line = styled.div`
	height: 200px;
	width: 2px;
	background: black;
	margin-left: 75px;
`;

export const Text = styled.div`
	margin: 185px 0 0 30px;
`;
