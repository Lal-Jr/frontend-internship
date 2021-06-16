import React from "react";
import {
	CardContainer,
	LargeText,
	Bar,
	BarFill,
	SmallText,
} from "./TopCard.styles";

const Card = ({ money, reason, index }) => {
	return (
		<>
			<CardContainer>
				<LargeText>{money}</LargeText>
				<Bar style={{ visibility: index ? "visible" : "hidden" }}>
					<BarFill />
				</Bar>
				<SmallText>{reason}</SmallText>
			</CardContainer>
		</>
	);
};

export default Card;
