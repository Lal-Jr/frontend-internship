import React from "react";
import Sidebar from "../Sidebar/Sidebar.components";
import DashboardTop from "./DashboardTop/DashboardTop.components";
import DashboardMid from "./DashboardMid/DashboardMid.components";
import DashboardBottom from "./DashboardBottom/DashboardBottom.components";
import {
	DashboardContainer,
	DashboardContentWrapper,
} from "./Dashboard.styles";

const Dashboard = () => {
	return (
		<>
			<DashboardContainer>
				<Sidebar />
				<DashboardContentWrapper>
					<DashboardTop />
					<DashboardMid />
					<DashboardBottom />
				</DashboardContentWrapper>
			</DashboardContainer>
		</>
	);
};

export default Dashboard;
