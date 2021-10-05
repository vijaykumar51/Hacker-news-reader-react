import styled from "styled-components";
import { StyledArticleInfoTile } from "../../components/article-info-tile/ArtileIntoTile.styled";

export const StyledArticle = styled.div`
	padding: 10px 30px;

	${StyledArticleInfoTile} {
		border-bottom: 2px solid #b92b27;
	}

	.content {
		font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
		line-height: 1.3;
		margin-top: 20px;
		text-align: left;
	}

	.comments {
		margin-top: 50px;
	}
`