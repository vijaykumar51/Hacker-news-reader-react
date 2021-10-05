import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleInfoTile from "../../components/article-info-tile/ArticleInfoTile";
import { getItemDetails } from "../../services/http/ItemsService";
import { StyledArticle } from "./Article.styled";

export default function Article() {

	const { articleId } = useParams();

	const [articleInfo, setArticleInfo] = useState([]);

	useEffect(() => {
		getItemDetails(articleId).then(data => setArticleInfo(data));
	}, [])

	return (
		<StyledArticle>
			<ArticleInfoTile article={articleInfo}></ArticleInfoTile>
			<section className="content" dangerouslySetInnerHTML={{ __html: articleInfo.content }}></section>
		</StyledArticle>
	)
}