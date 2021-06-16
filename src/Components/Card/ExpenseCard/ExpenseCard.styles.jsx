import styled from "styled-components";
import { BsPaperclip } from "react-icons/bs";

export const CardContainer = styled.div`
	background: #f0f4ff;
	height: 250px;
	width: 250px;
	border-radius: 20px 20px 0 0;
	margin-right: 25px;
	padding: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TextWrapper = styled.div``;

export const LargeText = styled.div`
	font-size: 24px;
`;

export const Date = styled.div`
	margin-top: 10px;
`;

export const Clip = styled(BsPaperclip)`
	font-size: 24px;
	color: #d7d7d7;
`;

export const IconWrapper = styled.div``;

export const Icon = styled.div`
	font-size: 36px;
`;

export const IconText = styled.div``;
