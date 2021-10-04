import styled from "styled-components";

export const StyledHeaderNav = styled.section`

	display: flex;
	margin-left: 40px;

	.nav-item {
		border-right: 1px solid #fff;
		color: #fff;
		cursor: pointer;
		margin-left: 10px;
		padding-right: 10px;
		text-decoration: none;
	}

	.nav-item:last-child {
		border-right: none;
	}

	.active-link {
		text-decoration: underline;
	}
`