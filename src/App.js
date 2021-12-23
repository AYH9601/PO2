import "./css/style.css";
import Header from "./component/common";

import {Route} from "react-router-dom";

import Department from "./sub/Department";
import Board from "./sub/Board";
import Gallery from "./sub/Gallery";
import Location from "./sub/Location";
import Membership from "./sub/Membership";
import Youtube from "./sub/Youtube";

function App() {
	return (
		<div className="App">
			<figure>
				<Header></Header>

			</figure>
		</div>
	);
}

export default App;
