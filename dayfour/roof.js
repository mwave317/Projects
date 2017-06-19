var verticalslope = prompt("What is the vertical slope of the roof");
var horizontialslope = prompt("What is the horizontial slope of the roof");
var widthofbuilding = prompt("What is the total width of the building?");
var joistlocation = widthofbuilding / 2;
joistlocation += joistlocation/12;
document.write("The building's width is " + joistlocation + ". Which means your roof will need to be " + joistlocation);