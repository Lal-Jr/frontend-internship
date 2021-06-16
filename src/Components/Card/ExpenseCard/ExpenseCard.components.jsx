import React from "react";
import {
	CardContainer,
	ContentWrapper,
	TextWrapper,
	LargeText,
	Date,
	Clip,
	IconWrapper,
	Icon,
	IconText,
} from "./ExpenseCard.styles";

const ExpenseCard = ({ money, date, icon, icontext, color }) => {
	return (
		<>
			<CardContainer style={{ background: { color } }}>
				<ContentWrapper>
					<TextWrapper>
						<LargeText>{money}</LargeText>
						<Date>{date}</Date>
					</TextWrapper>
					<Clip />
				</ContentWrapper>
				<IconWrapper>
					<Icon>{icon}</Icon>
					<IconText>{icontext}</IconText>
				</IconWrapper>
			</CardContainer>
		</>
	);
};

export default ExpenseCard;
