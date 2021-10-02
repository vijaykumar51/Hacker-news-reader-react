import styled from "styled-components";

export const StyledArticleInfoTile = styled.div`

	.upper-row,
	.bottom-row {
		display: flex
	}

	.upper-row .title {
		color: #000;
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 4px;
	}

	.upper-row .domain {
		color: #999;
		margin-left: 5px;
	}

	.bottom-row {
		color: #696969;
		font-size: 12px;
		font-weight: 700;
	}

	.link {
		cursor: pointer;
		color: #b92b27;
	}

	.link:hover {
		text-decoration: underline;
	}

	.time-ago {
		margin-left: 15px;
	}



`