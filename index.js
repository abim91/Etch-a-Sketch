function createGrid(number){
const container = document.querySelector('.grid');//reference container id that already exists in html
for(var i = 0; i < currentFormat ; i++){
    const row = document.createElement('div');// create new element
    row.classList.add = "row";//add content to the element
   // row.style.cssText = " border-color: black; background-color: red; width: 300px; height: 30px;";
    //document.body.appendChild(div); this works as well but the body is the parent
    container.appendChild(row);
    for(var j = 0; j < currentFormat ; j++){// we are using each row box we create as a house/container for the rest of the boxes in column
        const column = document.createElement('div');
        column.classList.add("columns");
        column.style.cssText = " border-style: solid; border-width:0.25px 0.25px; border-color: black; background-color: #F9FAFB; width: 30px; height: 30px;";
        row.appendChild(column);
    }
    container.appendChild(row);
}
}

var currentFormat = 4;
createGrid(currentFormat);
document.getElementById("chooseGrid").addEventListener('click',function(e){
   var newFormat= prompt("Select How many grid you want,up to 50");
  
   if(newFormat != currentFormat){
        createGrid(newFormat);
      //  console.log('here');
   }
   else{
        console.log("these are already equal silly");
        return;
   }
   
});



// creating hover effect, hover function is used in event listener, to create effect

function hover(event){
    event.target.style.backgroundColor = "black";
 }

 //item is a collection of element returned by the function
 const item = document.getElementsByClassName("columns");

 //we go through each element and add a eventlistener to it, similar to it having a drone watch it for any movement
 for(var i = 0; i < item.length; i++){
    item[i].addEventListener('mouseover',hover);
 }


