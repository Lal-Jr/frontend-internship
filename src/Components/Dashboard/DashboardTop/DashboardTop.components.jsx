import React from "react";
import TopCard from "../../Card/TopCard/TopCard.components";
import {
	ContentWrapper,
	Content,
	Title,
	CardWrapper,
	Divider,
	Search,
} from "./DashboardTop.styles";

const DashboardTop = () => {
	return (
		<>
			<ContentWrapper>
				<Content>
					<Title>Invoices</Title>
					<CardWrapper>
						<TopCard money="$12,095" reason="Overdue" />
						<TopCard money="$33,363" reason="Total Outstanding" />
						<TopCard money="$4,500" reason="In draft" />
					</CardWrapper>
				</Content>
				<Content>
					<Title>Outstanding Revenue</Title>
					<CardWrapper>
						<TopCard reason="$12,095 Overdue" index="true" />
					</CardWrapper>
				</Content>
				<Divider />
				<Content>
					<Title style={{ color: "transparent" }}>`</Title>
					<CardWrapper>
						<TopCard money="$21.3k" />
					</CardWrapper>
				</Content>
				<Search />
			</ContentWrapper>
		</>
	);
};

export default DashboardTop;
