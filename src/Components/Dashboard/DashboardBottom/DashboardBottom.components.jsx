import React from "react";
import InvoiceCard from "../../Card/InvoiceCard/InvoiceCard.components";
import BlackCard from "../../Card/BlackCard/BlackCard.components";
import {
	ContentWrapper,
	Content,
	HeadingWrapper,
	TitleWrapper,
	Title,
	SmallText,
	IconWrapper,
	Settings,
	Arrow,
	CardWrapper,
} from "./DashboardBottom.styles";

const DashboardBottom = () => {
	return (
		<>
			<ContentWrapper>
				<Content>
					<HeadingWrapper>
						<TitleWrapper>
							<Title>Invoices</Title>
							<SmallText>recently created</SmallText>
						</TitleWrapper>
						<IconWrapper>
							<Settings />
							<Arrow />
						</IconWrapper>
					</HeadingWrapper>
					<CardWrapper>
						<InvoiceCard index="true" />
						<InvoiceCard
							invoiceNumber="#00106"
							invoiceItem="Mindtickle"
							invoiceDate="2 Sep,2020"
							invoiceStatus="Viewed"
							invoiceAmount="$3,500"
						/>
						<InvoiceCard
							invoiceNumber="#00105"
							invoiceItem="Cleancloud"
							invoiceDate="1 Sep,2020"
							invoiceStatus="Sent"
							invoiceAmount="$2,000"
						/>
					</CardWrapper>
				</Content>
				<Content>
					<BlackCard />
				</Content>
			</ContentWrapper>
		</>
	);
};

export default DashboardBottom;
