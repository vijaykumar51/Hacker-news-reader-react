import './App.css';
import Header from './components/header/Header';
import ListDisplay from './components/list-display/ListDisplay';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ListType } from './constants/List-Type';

function PageNotFound() {
	return <div>404 Page Not Found</div>
}

export default function App() {
	return (
		<div className="app-container">
			<BrowserRouter>
				<Header />
				<Switch>
					{/* TODO: find the impact of below line */}
					{/* <Route path="" exact component={ListDisplay} /> */}
					<Route path="/news/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.NEWS} />} />
					<Route path="/newest/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.NEW} />} />
					<Route path="/show/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.SHOW} />} />
					<Route path="/ask/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.ASK} />} />
					<Route path="/jobs/:pageNumber" render={(props) => <ListDisplay {...props} listType={ListType.JOBS} />} />
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
