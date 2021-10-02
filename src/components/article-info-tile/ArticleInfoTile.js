import { StyledArticleInfoTile } from "./ArtileIntoTile.styled";

export default function ArticleInfoTile({ article }) {
	return (
		<StyledArticleInfoTile>
			<div className="upper-row">
				<div className="title">{article.title}</div>
				<div className="domain">({article.domain})</div>
			</div>
			<div className="bottom-row">
				<div className="points">{article.points} points by <span className="link">{article.user}</span></div>
				<div className="time-ago">{article.time_ago} | <span className="link">discuss</span></div>
			</div>
		</StyledArticleInfoTile>
	)
}