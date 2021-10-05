import { Link } from "react-router-dom";
import { StyledLogo } from "./logo.styled";

export default function Logo() {
	return (
		<StyledLogo>
			<Link to="/news/1">
				<div className="img-background"></div>
				<img src="https://angular2-hn.firebaseapp.com/assets/images/logo.svg" alt="app-logo" />
			</Link>
		</StyledLogo>
	)
}