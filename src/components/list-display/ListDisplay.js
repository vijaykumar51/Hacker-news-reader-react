import { useEffect, useState } from "react";
import ArticleInfoTile from "../article-info-tile/ArticleInfoTile";
import { StyledListDisplay } from "./ListDisplay.styled";
import getItems from "../../services/http/ItemsService";
import { useParams } from "react-router-dom";

const ListDisplay = ({ listType }) => {
	const { pageNumber } = useParams();
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		getItems(listType, pageNumber).then(data => setItemList(data));
	}, [listType, pageNumber])

	//TODO: check if there is a better way to write this component
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