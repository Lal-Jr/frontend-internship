import React from "react";
import Sidebar from "../Sidebar/Sidebar.components";
import Card from "../Card/Card.components";
import {
	DashboardContainer,
	DashboardContentWrapper,
	Title,
	CardWrapper,
} from "./Dashboard.styles";

const Dashboard = () => {
	return (
		<>
			<DashboardContainer>
				<Sidebar />
				<DashboardContentWrapper>
					<Title>Invoices</Title>
					<CardWrapper>
						<Card money="$12,095" reason="Overdue" />
						<Card money="$33,363" reason="Total Outstanding" />
						<Card money="$4,500" reason="In draft" />
					</CardWrapper>
				</DashboardContentWrapper>
				<DashboardContentWrapper>
					<Title>Outstanding Revenue</Title>
					<Card reason="$12,095 Overdue" />
				</DashboardContentWrapper>
			</DashboardContainer>
		</>
	);
};

export default Dashboard;
