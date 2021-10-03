import { useEffect, useState } from "react";
import ArticleInfoTile from "../article-info-tile/ArticleInfoTile";
import { StyledListDisplay } from "./ListDisplay.styled";
import getItems from "../../services/http/ItemsService";

function ListDisplay() {

	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		getItems("news", 1).then(data => setItemList(data));
	}, []);

	return (
		<StyledListDisplay>
			<div className="list-items">
				{itemList.map((article, index) => {
					return <div className="item" key={article.id}>
						<div className="item-count">{index + 1}.</div>
						<ArticleInfoTile article={article}></ArticleInfoTile>
					</div>
				})}
			</div>
		</StyledListDisplay>
	)
}

export default ListDisplay;