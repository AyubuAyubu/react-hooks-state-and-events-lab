import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
	const [currentMode, setTheme] = useState();

	function changeCurrentMode() {
		setTheme(!currentMode)
	}

  
  const appColor = currentMode ? "App dark" : "App light";

  return (
	 <div className={appColor}>
		<header>
		  <h2>Shopster</h2>
		  <button onClick={changeCurrentMode} >Dark Mode</button>
		</header>
		<ShoppingList items={itemData} />
	 </div>
  );
}

export default App;