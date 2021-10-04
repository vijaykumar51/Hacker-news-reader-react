import { NavLink } from "react-router-dom";
import { StyledHeaderNav } from "./header-nav.styled";

export default function HeaderNav() {
	return (
		<StyledHeaderNav>
			<NavLink activeClassName="active-link" className="nav-item" to="/newest/1">New</NavLink>
			<NavLink activeClassName="active-link" className="nav-item" to="/show/1">Show</NavLink>
			<NavLink activeClassName="active-link" className="nav-item" to="/ask/1">Ask</NavLink>
			<NavLink activeClassName="active-link" className="nav-item" to="/jobs/1">Jobs</NavLink>
		</StyledHeaderNav>
	)
}