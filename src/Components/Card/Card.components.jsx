import React from "react";
import { CardContainer, LargeText, SmallText } from "./Card.styles";

const Card = ({ money, reason }) => {
	return (
		<>
			<CardContainer>
				<LargeText>{money}</LargeText>
				<SmallText>{reason}</SmallText>
			</CardContainer>
		</>
	);
};

export default Card;
