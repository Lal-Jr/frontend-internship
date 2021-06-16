import React from "react";
import { CardContainer, LargeText, SmallText } from "./TopCard.styles";

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
