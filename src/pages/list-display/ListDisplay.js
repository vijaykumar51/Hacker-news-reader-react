import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleInfoTile from "../../components/article-info-tile/ArticleInfoTile";
import Paginator from "../../components/paginator/Paginator";
import { getItems } from "../../services/http/ItemsService";
import { StyledListDisplay } from "./ListDisplay.styled";

const ListDisplay = ({ listType }) => {
	const { pageNumber } = useParams();
	const [itemList, setItemList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	//TODO: check proper way of loading state in the component
	useEffect(() => {
		setCurrentPage(Number(pageNumber));
	}, [pageNumber])

	useEffect(() => {
		getItems(listType, currentPage).then(data => setItemList(data));
	}, [listType, currentPage])

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
			<Paginator currentPage={currentPage} listType={listType} />
		</StyledListDisplay>
	)
}

export default ListDisplay;