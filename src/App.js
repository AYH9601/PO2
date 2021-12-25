import "./css/style.css";
import {Header, Footer} from "./component/common";
import Main from "./component/Main"

import {Route} from "react-router-dom";

import Location from "./sub/Location";
import Department from "./sub/Department";
import Board from "./sub/Board";
import Gallery from "./sub/Gallery";
import Youtube from "./sub/Youtube";
import Membership from "./sub/Membership";


function App() {
	return (
		<div className="App">
			<figure>
				<Header></Header>
				<Route exact path="/location" component={Location}></Route>

				<Route exact path="/main" component={Main}></Route>

				<Route exact path="/department" component={Department}></Route>
				<Route exact path="/board" component={Board}></Route>
				<Route exact path="/gallery" component={Gallery}></Route>
				<Route exact path="/youtube" component={Youtube}></Route>
				<Route exact path="/membership" component={Membership}></Route>

				<Footer></Footer>
			</figure>
		</div>
	);
}

export default App;
