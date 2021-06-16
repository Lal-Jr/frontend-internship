import styled from "styled-components";
import { VscSettings } from "react-icons/vsc";
import { FiArrowUpRight } from "react-icons/fi";

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: start;
`;
export const Content = styled.div``;

export const HeadingWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin: 65px 0 20px 0;
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: start;
	align-items: flex-end;
`;

export const Title = styled.div`
	font-size: 24px;
`;

export const SmallText = styled.div`
	margin-left: 10px;
	padding-bottom: 2px;
	font-size: 14px;
	color: #d7d7d7;
`;

export const IconWrapper = styled.div`
	margin-right: 20px;
	display: flex;
	justify-content: space-between;
`;

export const Settings = styled(VscSettings)`
	transform: rotate(90deg);
	font-size: 24px;
`;

export const CardWrapper = styled.div`
	display: flex;
`;

export const Arrow = styled(FiArrowUpRight)`
	font-size: 24px;
	margin-left: 15px;
`;
