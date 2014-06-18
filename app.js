/**
 * @author ingo-_000
 */

			/* Variable for storing how many fields are marked */
			var marked = 0;						/* Definition of vatriables needed to check if both can be deleted*/			var boxPosXPrev;
			var boxPosYPrev;			var boxValuePrev;
						var matrix;						var moves;			var currentLevel;						function resetStore() {				localStorage.clear();				mainScreen();			}						function mainScreen(){				contentArea = document.getElementById("startContent");				var i = 1;				contentArea.innerHTML = ""; // clear current display				while(levelScore != "no" && i < 21) { 					var levelScore = localStorage.getItem("Level" + i);					if (levelScore == null) {						levelScore = "no";					}					console.log(levelScore);					contentArea.innerHTML += '<div class="startLvlIcon" style="background-image: url(img/'+i+'.png);"> </div> <input type="button" name="lvl'+i+'" value="Level '+i+' (Highscore: ' + levelScore + ')" onclick="init(' + i + ')"> </br>' ;					i++;				}  						}						function init(lvl){				/*delete screen*/				document.getElementById("startPage").style.display = "none";				document.getElementById("gamePage").style.display = "block";				document.getElementById("gameFooter").style.display = "block";				currentLevel = lvl;				var startPosX = 0;				var startPosY = 0;/* create moves display*/				moves = 0;				document.getElementById("gameFooterButtonLeft").innerHTML = moves;				/************************ * Matrix erstellen ************************/ 					if (lvl == 1){			/* Test matrix */					matrix = [[1,1,9,1,1,9,1,1,1],							  [1,9,1,1,1,1,1,9,1],							  [9,1,9,1,1,1,9,1,9]];				}				if (lvl == 2){					matrix = [[1,2,4,6,8,6,4,2,1],							  [8,6,4,2,1,2,4,6,8],							  [1,2,4,6,8,6,4,2,1]];				}				if (lvl == 3){					matrix = [[2,4,6,8,9,8,6,4,2],							  [1,3,5,7,8,7,5,3,1],							  [2,4,6,8,9,8,6,4,2]];				}				if (lvl == 4){					matrix = [[2,3,2,4,2,5,2,6,2],							  [7,2,8,2,9,2,8,2,7],							  [2,6,2,5,2,4,2,3,2]];				}
				if (lvl == 5){
					matrix = [[10,-2,-3,11,12,13,0,12,10],
							  [-1,0,12,-3,-2,-1,11,-2,13],
							  [10,-1,-2,-3,12,13,11,-3,-2]];
				}

				if (lvl == 6){
					matrix = [[1,2,3,1,2,3,1,2,3],
							  [7,8,9,7,8,9,7,8,9],
							  [3,2,1,3,2,1,3,2,1]];
				}

				if (lvl == 7){
					matrix = [[9,6,2,8,4,1,7,3,1],
							  [2,8,4,1,7,3,9,6,2],
							  [3,1,7,3,9,6,2,8,4]];
				}
/* lvl 8 - 19 = not defined yet */
				if (lvl == 8){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 9){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 10){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 11){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 12){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 13){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 14){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 15){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 16){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 17){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 18){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 19){
					matrix = [[2,3,2,4,2,5,2,6,2],
							  [7,2,8,2,9,2,8,2,7],
							  [2,6,2,5,2,4,2,3,2]];
				}

				if (lvl == 20){			/* final matrix */								matrix = [[1,2,3,4,5,6,7,8,9],							  [1,1,1,2,1,3,1,4,1],							  [5,1,6,1,7,1,8,1,9]];				}				/* creation of table */				document.getElementById("gameContent").innerHTML = '<table id="gridBoard" rules="all" width="100%"> </table>';				/* creation of matrix */				for (i = 0; i < matrix.length; i++) {					var currentRow = document.getElementById("gridBoard").insertRow(i);										  	for (j = 0; j < matrix[i].length; j++){						    if ((i+j)%2==0){							    var bgCol = "#5B827C";							}							else {						var bgCol = "#A3C2A2";							}								var currentCell = currentRow.insertCell(j);							currentCell.setAttribute("width", "10%");							currentCell.style.backgroundColor = bgCol;
							currentCell.innerHTML = '<div class="gameStone" id="' + i + "-" + j + '" onclick="markRed(' + i  + ", " + j + ')">' + matrix[i][j] + '</div>';				  	}				}/* initialize marked boxes */				var marked = 0;			}			function goFromTo(oldPage,newPage) {				mainScreen();			  	document.getElementById(oldPage).style.display = "none";			  	document.getElementById(newPage).style.display = "block";			  	document.getElementById("gameContentHighscore").style.display = "none";			}			function setHighscore(currentLevel, moves) {				localStorage.setItem("Level" + currentLevel, moves);				lvlScore = localStorage.getItem("Level" + currentLevel, moves);				console.log(lvlScore);			}			function getHighscore(currentLevel) {				return localStorage.getItem("Level" + currentLevel);			}						function addMove(){				moves++;				document.getElementById("gameFooterButtonLeft").innerHTML = moves;			}			function setDesign(state, x, y){								var currentBox = document.getElementById(x + "-" + y);				if (state == "toSelect") {					currentBox.style.backgroundColor = "#D17659";					currentBox.style.textShadow = "1px 1px 0px #777"; 								}				else {						currentBox.style.backgroundColor = "#F7F6C9";						currentBox.style.textShadow = "1px 1px 0px #aade7c"; 
				}			}						function doubleFill(){				console.log('doubleFill:');				addMove();								var fillArray = [];/* Create array */				var fill = 0;								gridBoard = document.getElementById("gridBoard");				for (i = 0; i < gridBoard.rows.length; i++) {				  	for (j = 0; j < 9; j++){						if	(document.getElementById(i + "-" + j)) {												if (document.getElementById(i + "-" + j).style.display != "none"){				  				fillArray[fill] = document.getElementById(i + "-" + j).innerHTML;				  				fill++;				  				var lastX = j;				  				var lastY = i;				  			}				  		}				  	}				}/* Calculate starting point for adding values */				var startPointX = lastX+1;				var startPointY = lastY;/* variable for count posission in Array*/				var df = 0;				/* Current row fill till the end*/				var currentPointY = startPointY;				var currentPointX = startPointX;								while(fillArray[df]){/* Fill last current row */					if (startPointY == currentPointY && currentPointX <= 8) {						console.log("Fill last row cell: " + currentPointY + "-" + currentPointX + " with " + fillArray[df]);						currentCell = document.getElementById(currentPointY + "-" + currentPointX);						currentCell.style.display = "block";					 	currentCell.innerHTML = fillArray[df];						currentPointX++;						df++;					}/* Fill new row */					else if (startPointY < currentPointY && currentPointX <= 8){						
						console.log("Fill new row cell: " + currentPointY + "-" + currentPointX);						if ((currentPointY+currentPointX)%2 == 0){							    var bgCol = "#5B827C";							}							else {								var bgCol = "#A3C2A2";							}						var currentCell = currentRow.insertCell(currentPointX);						currentCell.style.backgroundColor = bgCol;				 		currentCell.innerHTML = '<div class="gameStone" id="' + currentPointY + "-" + currentPointX + '" onclick="markRed(' + currentPointY  + ", " + currentPointX + ')">' + fillArray[df] + '</div>';				  		df++;						currentPointX++;					}	/* Open a new row */					else {									currentPointX = 0;						currentPointY++;						var currentRow = document.getElementById("gridBoard").insertRow(currentPointY);
					}				}				/* Fill the last line with emty cells if not filled completely */				for (var i=currentPointX; i <= 8; i++) {					if ((currentPointY+currentPointX)%2 == 0){						    var bgCol = "#5B827C";						}						else {							var bgCol = "#A3C2A2";						}					var currentCell = currentRow.insertCell(currentPointX);					currentCell.style.backgroundColor = bgCol;			 		currentCell.innerHTML = '<div class="gameStone" id="' + currentPointY + "-" + currentPointX + '" onclick="markRed(' + currentPointY  + ", " + currentPointX + ')">' + 1 + '</div>';					document.getElementById(currentPointY + "-" + currentPointX).style.display = "none";					currentPointX++;				}						}						function markRed(boxPosX, boxPosY){				console.log("X = " + boxPosX + "; " + "Y = " + boxPosY);				console.log("XPrev = " + boxPosXPrev + "; " + "YPrev = " + boxPosYPrev);				boxValue = document.getElementById(boxPosX + "-" + boxPosY).innerHTML;												if (marked > 0) {					addMove();					if (document.getElementById(boxPosX + "-" + boxPosY).style.color == "#D17659") {/* box color when un-selected */						setDesign("toUnselect", boxPosX, boxPosY);						marked = 0;											}					else {						var boxValueSum = Number(boxValue) + Number(boxValuePrev);						//console.log(boxValue + '+' + boxValuePrev + '=' + boxValueSum);/********************************************** * First check:  * Is first selected box plus second selected box eaqual 10 * and * is the first selection a veretially or horizonal neighbor **********************************************/						/* Check if the second selection is a horizontal or vertical neighboor */						/*	Requirement of a different behaviour for - eaqual 10 - cases was taken out (by Toby)											if (boxValueSum == 10) {							if (boxPosY == boxPosYPrev){									if (boxPosX == boxPosXPrev-1 || boxPosX == boxPosXPrev+1){									document.getElementById(boxPosX + "-" + boxPosY).style.display = "none";									document.getElementById(boxPosX + "-" + boxPosY).innerHTML = "X";									document.getElementById(boxPosXPrev + "-" + boxPosYPrev).style.display = "none";								}							}							if (boxPosX == boxPosXPrev){									if (boxPosY == boxPosYPrev-1 || boxPosY == boxPosYPrev+1){									document.getElementById(boxPosX + "-" + boxPosY).style.display = "none";									document.getElementById(boxPosX + "-" + boxPosY).innerHTML = "X";									document.getElementById(boxPosXPrev + "-" + boxPosYPrev).style.display = "none";								}							}						}*//********************************************** * Second check:  * Is first selected box eaqual to the second selected box * and * is no filled box between the first and the second selected box **********************************************/						if (boxValue == boxValuePrev || boxValueSum == 10){/* check: are the fields left of the second box until the first box empty	*/								if (boxPosX == boxPosXPrev && boxPosY > boxPosYPrev){
								var filledBoxes = 0;								for (i=boxPosYPrev;i<boxPosY;i++){																		if (document.getElementById(boxPosX + "-" + i).style.display != "none"){										filledBoxes++;									}								}															if (filledBoxes == 1) {									document.getElementById(boxPosX + "-" + boxPosY).style.display = "none";									document.getElementById(boxPosXPrev + "-" + boxPosYPrev).style.display = "none";																		}							}/* check: are the fields right of the second box until the first box empty	*/													if (boxPosX == boxPosXPrev && boxPosY < boxPosYPrev){								var filledBoxes = 0;								for (i=boxPosY;i<boxPosYPrev;i++){/* check: are the fields left of the second box until the first box empty */									if (document.getElementById(boxPosX + "-" + i).style.display != "none"){										filledBoxes++;									}								}															if (filledBoxes == 1) {									document.getElementById(boxPosX + "-" + boxPosY).style.display = "none";									document.getElementById(boxPosXPrev + "-" + boxPosYPrev).style.display = "none";																		}							}						/* check: are the fields on buttom of the second box until the first box empty */							if (boxPosY == boxPosYPrev && boxPosX > boxPosXPrev){								var filledBoxes = 0;								for (i=boxPosXPrev;i<boxPosX;i++){																		if (document.getElementById(i + "-" + boxPosY).style.display != "none"){										filledBoxes++;									}								}															if (filledBoxes == 1) {										document.getElementById(boxPosX + "-" + boxPosY).style.display = "none";										document.getElementById(boxPosXPrev + "-" + boxPosYPrev).style.display = "none";																		}							}/* check: are the fields on top of the second box until the first box empty */							if (boxPosY == boxPosYPrev && boxPosX < boxPosXPrev){									var filledBoxes = 0;									for (i=boxPosX;i<boxPosXPrev;i++){																				if (document.getElementById(i + "-" + boxPosY).style.display != "none"){											filledBoxes++;										}									}									if (filledBoxes == 1) {											document.getElementById(boxPosX + "-" + boxPosY).style.display = "none";											document.getElementById(boxPosXPrev + "-" + boxPosYPrev).style.display = "none";																			}								}/* Check if box is in the current and lower line and no field in between is filled	*/																if (boxPosX == boxPosXPrev - 1){								var filledBoxes = 0;								for (i=boxPosYPrev;i>=0;i--){									if (document.getElementById(boxPosXPrev + "-" + i).style.display != "none"){										filledBoxes++;									}								}								if (filledBoxes == 1){									filledBoxes = 0;									for (i=8;i>=boxPosY;i--){										if (document.getElementById(boxPosXPrev-1 + "-" + i).style.display != "none"){										filledBoxes++;										}									}									if (filledBoxes == 1){												document.getElementById(boxPosX + "-" + boxPosY).style.display = "none";										document.getElementById(boxPosXPrev + "-" + boxPosYPrev).style.display = "none";																				filledBoxes = 0;									}									}								}							/* Check if box is in the current and upper line and no field in between is filled	*/																if (boxPosX == boxPosXPrev + 1){								var filledBoxes = 0;								for (i=boxPosYPrev;i<=8;i++){									if (document.getElementById(boxPosXPrev + "-" + i).style.display != "none"){										filledBoxes++;									}								}								if (filledBoxes == 1){									filledBoxes = 0;									for (i=0;i<=boxPosY;i++){										if (document.getElementById(boxPosXPrev+1 + "-" + i).style.display != "none"){										filledBoxes++;										}									}									if (filledBoxes == 1){												document.getElementById(boxPosX + "-" + boxPosY).style.display = "none";										document.getElementById(boxPosXPrev + "-" + boxPosYPrev).style.display = "none";																				filledBoxes = 0;									}									}								}						}												setDesign("toUnselect", boxPosX, boxPosY);						setDesign("toUnselect", boxPosXPrev, boxPosYPrev);
						marked = 0;					}/* Check for empty line and delete if there is one. */					gridBoard = document.getElementById("gridBoard");					for (var i=gridBoard.rows.length; i >= 0; i--) {					  	var notFilledBoxes = 0;					  	for (var j=0; j < 9; j++) {							if (document.getElementById(i + "-" + j)) {						  		if (document.getElementById(i + "-" + j).style.display == "none"){						  			notFilledBoxes++;						  		}					  		}					  	}/* start delete of row sequence */					  	if (notFilledBoxes == 9){/* checking if rows are behind the deleted one and rename them */							for (var k=0; k < gridBoard.rows.length; k++) {							  																							for (var l=0; l < 9; l++) {									if (k>=i){										m=k-1;										if (document.getElementById(k + "-" + l)){											console.log("alt:"+k+"-"+l);											console.log("neu:"+m+"-"+l);											var prevBox = k+"-"+l;											var currentBox = m+"-"+l;											document.getElementById(prevBox).setAttribute("id", currentBox);											/* Recolor changed rows background  */											if ((m+l)%2 == 0){												    var bgCol = "#5B827C";												}												else {													var bgCol = "#A3C2A2";												}																						currentTd = (9*(m+1)+l);											console.log("td= " + currentTd);											var currentCell = document.getElementsByTagName("td")[currentTd];											currentCell.style.backgroundColor = bgCol;/*change the call funtion to mark the correct box red */											document.getElementById(m + "-" + l).setAttribute("onClick", "javascript: markRed("+m+","+l+");");										}									}															}							}					  		gridBoard.deleteRow(i);					/* showing highscore save option when all rows are deleted */							if (gridBoard.rows.length < 1) {								document.getElementById("gameContentHighscore").style.display = "block";
								var oldHighscore = getHighscore(currentLevel);								document.getElementById("gameContentHighscore").innerHTML = "<p>Old best score: " + oldHighscore + "</p>";								if (moves < oldHighscore || oldHighscore == null) {									setHighscore(currentLevel, moves);									document.getElementById("gameContentHighscore").innerHTML += "<p>You have a new best score: " + moves + "</p>";								}								else {									document.getElementById("gameContentHighscore").innerHTML += "<p>New best score: " + oldHighscore + "</p>";								}								document.getElementById("gameContentHighscore").innerHTML += '<input type="button" name="startPage" value="Back to start">';								document.getElementById("gameContentHighscore").setAttribute("onClick", "goFromTo('gamePage','startPage')");							}												  	}					}				}				else {/* box color when selected */					setDesign("toSelect", boxPosX, boxPosY);					boxPosXPrev = boxPosX;					boxPosYPrev = boxPosY;					boxValuePrev = boxValue;					marked = 1;				}				}					