import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const ContentWrapper = styled.div`
	display: flex;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
`;

export const Title = styled.h3`
	margin: 0 20px 0;
`;

export const CardWrapper = styled.div`
	display: flex;
`;

export const Divider = styled.div`
	width: 275px;
	height: 10px;
`;

export const Search = styled(FiSearch)`
	color: #000;
	font-weight: bold;
	font-size: 30px;
	margin: 37.5px 0 0 37.5px;
`;
