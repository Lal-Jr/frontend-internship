import styled from "styled-components";

export const CardContainer = styled.div`
	height: 250px;
	width: 450px;
	border-radius: 20px;
	background: #000;
	margin-top: 70px;
	padding: 25px;
	display: flex;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	overflow: hidden;
`;

export const DotWrapper = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export const Dot = styled.p`
	color: #fff;
	margin: 5px;
	font-size: 30px;
`;

export const Text = styled.div`
	color: #fff;
	padding-right: 250px;
	line-height: 1.5;
`;

export const Circle1 = styled.div`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	border: 5px solid #fff;
	border-color: transparent transparent #fff #fff;
	position: absolute;
	left: 87%;
	bottom: 12%;
`;

export const Circle2 = styled.div`
	height: 500px;
	width: 500px;
	border-radius: 50%;
	border: 5px solid #fff;
	border-color: transparent transparent #fff transparent;
	position: absolute;
	left: 80%;
	bottom: 20%;
`;

export const Circle3 = styled.div`
	height: 300px;
	width: 200px;
	border-radius: 50%;
	border: 5px solid #fff;
	border-color: transparent transparent #fff #fff;
	position: absolute;
	left: 94%;
	bottom: 5%;
`;
