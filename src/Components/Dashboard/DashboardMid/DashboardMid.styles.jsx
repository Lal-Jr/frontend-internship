import styled from "styled-components";
import { VscSettings } from "react-icons/vsc";
import { FiArrowUpRight } from "react-icons/fi";

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: start;
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	margin-top: 75px;
`;

export const Title = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

export const Date = styled.div`
	color: #d7d7d7;
	font-size: 14px;
	padding: 0 10px 2px;
`;

export const Settings = styled(VscSettings)`
	transform: rotate(90deg);
	margin: 0 0 2px 45px;
	font-size: 20px;
	font-weight: 900;
	color: #d7d7d7;
`;

export const CardWrapper = styled.div`
	display: flex;
	margin-top: 30px;
`;

export const Arrow = styled(FiArrowUpRight)`
	font-size: 28px;
	margin-left: 500px;
`;
