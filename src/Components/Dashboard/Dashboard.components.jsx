import React from "react";
import Sidebar from "../Sidebar/Sidebar.components";
import TopCard from "../Card/TopCard/TopCard.components";
import {
	DashboardContainer,
	DashboardContentWrapper,
	DashboardContent,
	Title,
	CardWrapper,
	Divider,
	Search,
} from "./Dashboard.styles";

const Dashboard = () => {
	return (
		<>
			<DashboardContainer>
				<Sidebar />
				<DashboardContentWrapper>
					<DashboardContent>
						<Title>Invoices</Title>
						<CardWrapper>
							<TopCard money="$12,095" reason="Overdue" />
							<TopCard
								money="$33,363"
								reason="Total Outstanding"
							/>
							<TopCard money="$4,500" reason="In draft" />
						</CardWrapper>
					</DashboardContent>
					<DashboardContent>
						<Title>Outstanding Revenue</Title>
						<CardWrapper>
							<TopCard reason="$12,095 Overdue" index="true" />
						</CardWrapper>
					</DashboardContent>
					<Divider />
					<DashboardContent>
						<Title>.</Title>
						<CardWrapper>
							<TopCard money="$21.3k" />
						</CardWrapper>
					</DashboardContent>
					<Search />
				</DashboardContentWrapper>
			</DashboardContainer>
		</>
	);
};

export default Dashboard;
