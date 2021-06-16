import React from "react";
import {
	CardContainer,
	Wrapper,
	DotWrapper,
	Dot,
	Text,
	Circle1,
	Circle2,
	Circle3,
} from "./BlackCard.styles";

const BlackCard = () => {
	return (
		<>
			<CardContainer>
				<Wrapper>
					<DotWrapper>
						<Dot>.</Dot>
						<Dot>.</Dot>
						<Dot>.</Dot>
					</DotWrapper>
					<Text>Work Anywhere with the Invoicer Mobile Apps</Text>
				</Wrapper>
				<Wrapper>
					<Circle1 />
					<Circle2 />
					<Circle3 />
				</Wrapper>
			</CardContainer>
		</>
	);
};

export default BlackCard;
