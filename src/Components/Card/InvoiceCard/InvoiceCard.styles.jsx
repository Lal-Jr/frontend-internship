import styled from "styled-components";

export const CardContainer = styled.div`
	height: 200px;
	width: 275px;
	background: #fafafa;
	margin-right: 20px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const ContentWrapper = styled.div`
	display: flex;
`;

export const SmallLine = styled.div`
	width: 3px;
	height: 60px;
	background: red;
	margin: 5px 40px 0 0;
`;

export const SmallText = styled.div`
	margin-bottom: 5px;
	color: #d7d7d7;
`;

export const LargeText = styled.div`
	font-size: 18px;
	font-weight: 900;
	margin-bottom: 5px;
`;

export const Content = styled.div``;

export const Line = styled.div`
	height: 1px;
	width: 225px;
	border-top: 1px dashed #000;
	margin: 25px 0;
`;

export const TextWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const Icon = styled.div`
	display: grid;
	place-items: center;
	margin: 40px 0 10px;
	font-size: 48px;
	width: 100%;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justif-content: center;
	align-items: center;
	height: 200px;
	width: 245px;
	border-radius: 20px;
	border: 1px dashed #000;
`;
