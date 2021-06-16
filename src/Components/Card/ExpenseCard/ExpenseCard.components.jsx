import React from "react";
import {
	TextWrapper,
	LargeText,
	Date,
	IconWrapper,
	Icon,
	IconText,
} from "./ExpenseCard.styles";
function ExpenseCard() {
	return (
		<>
			<TextWrapper>
				<LargeText></LargeText>
				<Date></Date>
			</TextWrapper>
			<IconWrapper>
				<Icon></Icon>
				<IconText></IconText>
			</IconWrapper>
		</>
	);
}

export default ExpenseCard;
