import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import ListDisplay from "./pages/list-display/ListDisplay";
import Footer from "./components/footer/Footer";
import { ListType } from "./constants/List-Type";
import "./App.css";
import Article from "./pages/article/Article";

function PageNotFound() {
	return <div>404 Page Not Found</div>
}

export default function App() {
	return (
		<div className="app-container">
			<BrowserRouter>
				<Header />
				{/* TODO: check how to fill center height with flex */}
				<Switch>
					{/* TODO: find the impact of below line */}
					{/* <Route path="" exact component={ListDisplay} /> */}
					<Route path="/news/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.NEWS} />} />
					<Route path="/newest/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.NEW} />} />
					<Route path="/show/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.SHOW} />} />
					<Route path="/ask/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.ASK} />} />
					<Route path="/jobs/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.JOBS} />} />
					<Route path="/article/:articleId" component={Article} />
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}
