import * as React from "react";

const HollanderSearchDropDown = () => {
/** "selected" here is state variable which will hold the
* value of currently selected dropdown.
*/
const [selected, setSelected] = React.useState("");

/** Function that will set different values to state variable
* based on which dropdown is selected
*/
const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
};

/** Different arrays for different dropdowns */
const manufacturer = [
	"Audi",
	"Porsche",
	"Ford",
];
const model = ["RS8","A4","A6","S5", "911", "Cayman", "Bronco", "F150"];
const modelyears = ["1999", "2000", "2001", "2002"];

/** Type variable to store different array for different dropdown */
let type = null;

/** This will be used to create set of options that user will see */
let options = null;

/** Setting Type variable according to dropdown */
if (selected === "Manufacturer") {
	type = manufacturer;
} else if (selected === "Model") {
	type = model;
} else if (selected === "Data Structure") {
	type = modelyears;
}

/** If "Type" is null or undefined then options will be null,
* otherwise it will create a options iterable based on our array
*/
if (type) {
	options = type.map((el) => <option key={el}>{el}</option>);
}
return (
	<div
	style={{
		padding: "16px",
		margin: "16px",
	}}
	>
	<form>
		<div>
		{/** Bind changeSelectOptionHandler to onChange method of select.
		* This method will trigger every time different
		* option is selected.
		*/}
		<select onChange={changeSelectOptionHandler}>
			<option>Choose...</option>
			<option>Manufacturer</option>
			<option>Model</option>
			<option>Model Year</option>
		</select>
		</div>
		<div>
		<select>
			{
			/** This is where we have used our options variable */
			options
			}
		</select>
		</div>
	</form>
	</div>
);
};

export default HollanderSearchDropDown;
