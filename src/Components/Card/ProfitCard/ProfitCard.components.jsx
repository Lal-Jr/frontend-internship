import React from "react";
import {
	TextWrapper,
	LargeText,
	SmallTextWrapper,
	Dot,
	SmallText,
	Line,
	Date,
} from "./ProfitCard.styles";

function ProfitCard() {
	return (
		<>
			<TextWrapper>
				<LargeText></LargeText>
				<SmallTextWrapper>
					<Dot />
					<SmallText></SmallText>
				</SmallTextWrapper>
				<SmallTextWrapper>
					<Dot />
					<SmallText></SmallText>
				</SmallTextWrapper>
			</TextWrapper>
			<Line />
			<Date></Date>
		</>
	);
}

export default ProfitCard;
