import ArticleInfoTile from "../article-info-tile/ArticleInfoTile";
import "./ListDisplay.css";

function ListDisplay() {

	const itemList = [
		{
			comments_count: 46,
			domain: "journals.asm.org",
			id: 28582500,
			points: 114,
			time: 1632037682,
			time_ago: "4 hours ago",
			title: "The Reemergent 1977 H1N1 Strain and the Gain-of-Function Debate (2015)",
			type: "link",
			url: "https://journals.asm.org/doi/10.1128/mbio.01013-15?permanently=true&",
			user: "tosh"
		},
		{
			comments_count: 0,
			domain: "hub.qovery.com",
			id: 28583258,
			points: 15,
			time: 1632048278,
			time_ago: "an hour ago",
			title: "Terraform Is Not the Golden Hammer",
			type: "link",
			url: "https://hub.qovery.com/guides/engineering/terraform-not-the-golden-hammer/",
			user: "kiyanwang"
		},
		{
			comments_count: 34,
			domain: "javascript.info",
			id: 28583069,
			points: 38,
			time: 1632045759,
			time_ago: "2 hours ago",
			title: "Currying in JavaScript",
			type: "link",
			url: "https://javascript.info/currying-partials",
			user: "corentin88"
		}
	]

	return (
		<div className="list-display">
			<div className="list-items">
				{itemList.map((article, index) => {
					return <div className="item" key={article.id}>
						<div className="item-count">{index + 1}.</div>
						<ArticleInfoTile article={article}></ArticleInfoTile>
					</div>
				})}

			</div>
			<div className="pagination-options">
				More
			</div>
		</div>
	)
}

export default ListDisplay;