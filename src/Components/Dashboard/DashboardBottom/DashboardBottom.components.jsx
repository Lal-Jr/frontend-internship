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
						<InvoiceCard />
						<InvoiceCard />
						<InvoiceCard />
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
