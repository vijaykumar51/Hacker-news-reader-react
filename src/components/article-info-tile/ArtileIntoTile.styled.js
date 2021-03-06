import styled from "styled-components";

export const StyledArticleInfoTile = styled.div`

	padding: 14px 0;
	width: 100%;

	.upper-row,
	.bottom-row {
		display: flex;
		flex-wrap: wrap;
	}

	.upper-row {
		margin-bottom: 4px;
	}

	.upper-row .title {
		color: #000;
		font-size: 16px;
		font-weight: 500;
	}

	.upper-row .article-link {
		text-decoration: none;
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
		margin-left: 3px;
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}

	.time-ago {
		margin-left: 15px;
	}



`