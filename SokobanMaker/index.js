let currentCase;
let nbOfCols;
let nbOfRows;

function generateGrid() {
	nbOfCols = document.querySelector("#widthInput").value;
	nbOfRows = document.querySelector("#heightInput").value;
	const voidCase = document.querySelector("#caseType .void");
	const gridEl = document.querySelector("#grid");

	gridEl.style.width = `${nbOfRows * 27}px`;

	for (let row = 0; row < nbOfRows; row++) {
		for (let col = 0; col < nbOfCols; col++) {
			const gridCase = voidCase.cloneNode(true);
			gridCase.removeAttribute("onclick");
			gridCase.addEventListener("click", () => changeCase(gridCase));
			gridEl.appendChild(gridCase);
		}
	}
}

function selectCase(el, selectedCase) {
	currentCase = selectedCase;
	const oldSelected = document.querySelector("#caseType .selected");
	if (oldSelected) {
		oldSelected.classList.remove("selected");
	}
	el.classList.add("selected");
}

function changeCase(gridCase) {
	if (currentCase) {
		removeOldType(gridCase);

		const caseClone = document.querySelector("#caseType ." + currentCase).cloneNode(true);
		caseClone.removeAttribute("onclick");
		caseClone.addEventListener("click", () => changeCase(caseClone));
		gridCase.after(caseClone);
		gridCase.parentNode.removeChild(gridCase);
	}
}

function removeOldType(gridCase) {
	gridCase.classList.remove("void");
	gridCase.classList.remove("wall");
	gridCase.classList.remove("player");
	gridCase.classList.remove("box");
	gridCase.classList.remove("arrival");
	gridCase.classList.remove("arrivedBox");
}

function exportLevel() {
	const gridEl = document.querySelector("#grid");
	const gridCases = gridEl.querySelectorAll(".case");
	let i = 0;

	const levelJson = [];
	for (let row = 0; row < nbOfRows; row++) {
		rowJson = [];
		for (let col = 0; col < nbOfCols; col++) {
			rowJson.push(getType(gridCases[i]));
			i++;
		}
		levelJson.push(rowJson);
	}
	console.log(levelJson);
}

function getType(gridCase) {
	if (gridCase.classList.contains("void")) {
		return 0;
	} else if (gridCase.classList.contains("wall")) {
		return 1;
	} else if (gridCase.classList.contains("box")) {
		return 2;
	} else if (gridCase.classList.contains("player")) {
		return 4;
	} else if (gridCase.classList.contains("arrival")) {
		return 3;
	} else if (gridCase.classList.contains("arrivedBox")) {
		return 5;
	}
}

function testSecurite() {
	nbOfCols = document.querySelector("#widthInput").value;
	if (typeof nbOfCols === "number") {
		console.log("On envoit cette valeur au serveur --> ", nbOfCols);
	}
}
