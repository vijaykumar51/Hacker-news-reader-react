import styled from "styled-components";

export const StyledHeaderNav = styled.section`

	display: flex;
	margin-left: 50px;

	.nav-item {
		border-right: 1px solid #fff;
		padding-left: 5px;
		padding-right: 5px;
	}

	.nav-item:last-child {
		border-right: none;
	}
`