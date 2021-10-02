import styled from "styled-components";
import { StyledArticleInfoTile } from "../article-info-tile/ArtileIntoTile.styled";

export const StyledListDisplay = styled.div`
	background-color: #f5f5f5;

	.item-count {
		position: relative;
		left: -14px;
		top: 14px;
	}

	.item {
		display: flex;
		padding-left: 40px;
		padding-right: 40px;
	}

	${StyledArticleInfoTile}{
		border-bottom: 1px solid #CECECB;
	}
`