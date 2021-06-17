import React from "react";
import { BsCloudUpload } from "react-icons/bs";
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
	Box,
} from "./InvoiceCard.styles";

const ExpenseCard = ({
	invoiceNumber,
	invoiceItem,
	invoiceDate,
	invoiceStatus,
	invoiceAmount,
	index,
}) => {
	return (
		<>
			<CardContainer
				style={{
					padding: index ? "15px" : "25px",
				}}
			>
				<Box
					style={{
						display: index ? "flex" : "none",
					}}
				>
					<Icon>
						<BsCloudUpload />
					</Icon>
					<LargeText>Upload Invoice</LargeText>
				</Box>
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
