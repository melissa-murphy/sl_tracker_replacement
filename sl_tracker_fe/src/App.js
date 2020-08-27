import React from "react";
import { CssBaseline } from "./mui-components/utils";
import { Layout } from "./layout/Layout";

// TODO: add react-window? This is a load-on-demand library for handling large datasets and load time; only what is viewable within the "window" is loaded

function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Layout />
		</div>
	);
}

export default App;
