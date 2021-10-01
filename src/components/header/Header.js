import { StyledHeader } from "./header.styled";
import Logo from "../logo/logo";
import Settings from "../settings/settings";
import HeaderNav from "../header-nav/header-nav";

function Header() {
	return (
		<StyledHeader>
			<Logo />
			<HeaderNav />
			<Settings />
		</StyledHeader>
	);
}

export default Header;