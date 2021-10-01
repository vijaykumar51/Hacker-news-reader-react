import { StyledHeaderNav } from "./header-nav.styled";

export default function HeaderNav() {
	return (
		<StyledHeaderNav>
			<div className="nav-item">New</div>
			<div className="nav-item">Show</div>
			<div className="nav-item">Ask</div>
			<div className="nav-item">Jobs</div>
		</StyledHeaderNav>
	)
}