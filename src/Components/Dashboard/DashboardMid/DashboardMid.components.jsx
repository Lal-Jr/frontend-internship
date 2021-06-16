import React from "react";
import ProfitCard from "../../Card/ProfitCard/ProfitCard.components";
import ExpenseCard from "../../Card/ExpenseCard/ExpenseCard.components";
import { SiPaloaltosoftware } from "react-icons/si";
import { TiGroup } from "react-icons/ti";
import { AiFillApple } from "react-icons/ai";
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
						<Title>Total Profit</Title>
						<Date>September 2020</Date>
						<Settings />
					</TitleWrapper>
					<CardWrapper>
						<ProfitCard />
					</CardWrapper>
				</Content>
				<Content>
					<TitleWrapper>
						<Title>Expenses</Title>
						<Arrow />
					</TitleWrapper>
					<CardWrapper>
						<ExpenseCard
							money="$20.00"
							date="23 Sep,2020"
							icon={<SiPaloaltosoftware />}
							icontext="Software"
							color={"#f0f4ff"}
						/>
						<ExpenseCard
							money="$30.00"
							date="26 Sep,2020"
							icon={<TiGroup />}
							icontext="Management"
							color={"#eefcef"}
						/>
						<ExpenseCard
							money="$60.00"
							date="28 Sep,2020"
							icon={<AiFillApple />}
							icontext="Support"
							color={"#e5f5fa"}
						/>
					</CardWrapper>
				</Content>
			</ContentWrapper>
		</>
	);
};

export default DashboardMid;
