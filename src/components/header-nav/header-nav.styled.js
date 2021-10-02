import styled from "styled-components";

export const StyledHeaderNav = styled.section`

	display: flex;
	margin-left: 40px;

	.nav-item {
		border-right: 1px solid #fff;
		padding-left: 10px;
		padding-right: 10px;
	}

	.nav-item:last-child {
		border-right: none;
	}
`