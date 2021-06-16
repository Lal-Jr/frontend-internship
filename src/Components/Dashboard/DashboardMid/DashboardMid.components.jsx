import React from "react";
import ProfitCard from "../../Card/ProfitCard/ProfitCard.components";
import ExpenseCard from "../../Card/ExpenseCard/ExpenseCard.components";
import {
	ContentWrapper,
	Content,
	TitleWrapper,
	Title,
	Date,
	Settings,
	CardWrapper,
	Arrow,
} from "./DashboardMid.styles";

const DashboardMid = () => {
	return (
		<>
			<ContentWrapper>
				<Content>
					<TitleWrapper>
						<Title></Title>
						<Date></Date>
						<Settings />
					</TitleWrapper>
					<CardWrapper>
						<ProfitCard />
					</CardWrapper>
				</Content>
				<Content>
					<TitleWrapper>
						<Title></Title>
						<Arrow />
					</TitleWrapper>
					<CardWrapper>
						<ExpenseCard />
						<ExpenseCard />
						<ExpenseCard />
					</CardWrapper>
				</Content>
			</ContentWrapper>
		</>
	);
};

export default DashboardMid;
