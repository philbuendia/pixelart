//define the paintBrush color that will be used 
//var paintBrushColor = $('#colorPicker');

$(document).ready(function(){ 

         //when the <submit> button is clicked
         $( "#submit" ).click(function(event){
         event.preventDefault(); //prevent the page to load the defaults
         //store the user's entry in a variable
         var enteredHeight = $('#inputHeight').val();
         var enteredWidth = $('#inputWidth').val();
         //OR var enteredName = $('#enteredFormName').val();
         //update the html in the second form to show the user's entered name
         $( '#inputHeight' ).val(enteredHeight);
         $( '#inputWidth' ).val(enteredWidth);
         makeGrid();
        });
});



// Select color input


//Color pixel
/*function colorPixel() {
	$('table').click(function( event ) {
  $(event.target).css("background-color",paintBrushColor);});
}*/

function colorPixel() {
	$('td').click(function() {
  	$(this).css("background-color",$('#colorPicker').val());});
}
//

// When size is submitted by the user, call makeGrid()
function makeGrid() {

	createGrid($('#inputHeight').val(),$('#inputWidth').val());
}

// Your code goes here!

//create the grid
function createGrid(rows,column) {

	let htmlLineBuilder = "";

	htmlLineBuilder = '<table>';
	
	for(let i = 0; i<rows; i++) {

		htmlLineBuilder += '<tr>';

		for (let j = 0; j < column; j++) {

		 	htmlLineBuilder +='<td></td>';

		 }

		htmlLineBuilder += '</tr>';
	}

	htmlLineBuilder +='</table>';

	$('body > h2:nth-child(6)').append(htmlLineBuilder);


	//call the event listeners
	colorPixel(); //why does this need to be in here????
}

/*/To Do

-paint grid
-wire height and width
-wire color picker

Bugs list
-clicking submit twice, creates a duplicate canvas. 
clear the grid and create a new canvas.
-click dragging colors the entire grid





/*/



