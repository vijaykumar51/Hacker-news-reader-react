import { Link } from "react-router-dom";
import { StyledArticleInfoTile } from "./ArtileIntoTile.styled";

export default function ArticleInfoTile({ article }) {
	const comments = article.comments_count;
	return (
		<StyledArticleInfoTile>
			<div className="upper-row">
				{getArticleTitle()}
			</div>
			<div className="bottom-row">
				<div className="points">{article.points} points by
					<Link className="link" to={`/user/${article.user}`}>{article.user}</Link>
				</div>
				<div className="time-ago">{article.time_ago} |
					<Link className="link" to={`/article/${article.id}`}>
						{comments === 0 ? "discuss" :
							comments === 1 ? `${comments} comment`
								: `${comments} comments`}
					</Link>
				</div>
			</div>
		</StyledArticleInfoTile>
	)

	// TODO: check if it makes sense to make these as 2 components - InternalLink vs ExternalLink
	function getArticleTitle() {
		if (article.domain) {
			return <>
				<a className="article-link" target="_blank" rel="noreferrer" href={article.url}>
					<div className="title">{article.title}</div>
				</a>
				<div className="domain">({article.domain})</div>
			</>
		} else {
			return <Link className="article-link" rel="noreferrer" to={`/article/${article.id}`}>
				<div className="title">{article.title}</div>
			</Link>
		}
	}
}