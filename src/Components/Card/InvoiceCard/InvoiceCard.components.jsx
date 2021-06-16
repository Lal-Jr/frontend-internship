import React from "react";
import {
	CardContainer,
	ContentWrapper,
	SmallLine,
	SmallText,
	LargeText,
	Content,
	Line,
	TextWrapper,
} from "./InvoiceCard.styles";

const ExpenseCard = () => {
	return (
		<>
			<CardContainer>
				<ContentWrapper>
					<SmallLine />
					<Content>
						<SmallText></SmallText>
						<LargeText></LargeText>
						<SmallText></SmallText>
					</Content>
				</ContentWrapper>
				<Line />
				<ContentWrapper>
					<TextWrapper>
						<LargeText></LargeText>
						<SmallText></SmallText>
					</TextWrapper>
				</ContentWrapper>
			</CardContainer>
		</>
	);
};

export default ExpenseCard;
