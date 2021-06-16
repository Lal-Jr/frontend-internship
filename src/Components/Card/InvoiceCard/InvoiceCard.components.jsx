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
	Icon,
} from "./InvoiceCard.styles";

const ExpenseCard = ({
	invoiceNumber,
	invoiceItem,
	invoiceDate,
	invoiceStatus,
	invoiceAmount,
	index,
	picture,
}) => {
	return (
		<>
			<CardContainer>
				<Content
					style={{
						display: index ? "flex" : "none",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Icon>{picture}</Icon>
					<LargeText>Send Invoice</LargeText>
				</Content>
				<ContentWrapper style={{ display: index ? "none" : "flex" }}>
					<SmallLine />
					<Content>
						<SmallText>{invoiceNumber}</SmallText>
						<LargeText>{invoiceItem}</LargeText>
						<SmallText>{invoiceDate}</SmallText>
					</Content>
				</ContentWrapper>
				<Line style={{ display: index ? "none" : "flex" }} />
				<ContentWrapper style={{ display: index ? "none" : "flex" }}>
					<TextWrapper>
						<LargeText>{invoiceStatus}</LargeText>
						<SmallText style={{ color: "#000" }}>
							{invoiceAmount}
						</SmallText>
					</TextWrapper>
				</ContentWrapper>
			</CardContainer>
		</>
	);
};

export default ExpenseCard;
