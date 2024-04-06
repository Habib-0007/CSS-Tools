var colorValueInputs =
	document.querySelectorAll(
		".color-select input"
	);
var colorDisplayBox =
	document.querySelector(
		".color-display"
	);
var colorValueText =
	colorDisplayBox.querySelector("p");
var displayColorBtn =
	document.querySelector(
		".color-area button"
	);

displayColorBtn.addEventListener(
	"click",
	() => {
		var [
			inputOne,
			inputTwo,
			inputThree,
			inputFour,
		] = colorValueInputs;
		var rgbaValue = `rgba(${inputOne.value}, ${inputTwo.value}, ${inputThree.value}, ${inputFour.value})`;

		colorDisplayBox.style.background =
			rgbaValue;
	colorValueText.textContent =
			rgbaValue;
	}
);
