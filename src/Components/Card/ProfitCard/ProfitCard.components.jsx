import React from "react";
import {
	CardContainer,
	TextWrapper,
	LargeText,
	SmallTextWrapper,
	Dot,
	SmallText,
	Line,
	Text,
} from "./ProfitCard.styles";

const ProfitCard = () => {
	return (
		<>
			<CardContainer>
				<TextWrapper>
					<LargeText>$22.3k</LargeText>
					<SmallTextWrapper>
						<Dot style={{ color: "#fb9703" }} />
						<SmallText>$54.3k income</SmallText>
					</SmallTextWrapper>
					<SmallTextWrapper>
						<Dot style={{ color: "#000" }} />
						<SmallText>$32.1k expenses</SmallText>
					</SmallTextWrapper>
				</TextWrapper>
				<Line />
				<Text>Mo 30</Text>
			</CardContainer>
		</>
	);
};

export default ProfitCard;
