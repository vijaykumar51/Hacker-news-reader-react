import { Link } from "react-router-dom";
import { StyledPaginator } from "./Paginator.styled";

export default function Paginator({ currentPage, listType }) {

	return (
		<StyledPaginator>
			<Link className="link" to={`/${listType}/${1 + currentPage}`}> More &gt; </Link>
		</StyledPaginator>
	)
}