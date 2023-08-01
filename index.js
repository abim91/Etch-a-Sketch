var currentFormat = 4;
createGrid(currentFormat);
colorPicker();
askUser();
clear();
var color = "blue";

function createGrid(number){
    const container = document.querySelector('.grid');
  
    container.style.gridTemplateColumns = `repeat(${number},1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  
  
   const containerWidth = parseInt(container.style.width);
  const containerHeight = parseInt(container.style.height);
  
    for(let i = 0; i < (number*number); i++){
      const cell = document.createElement('div');
     cell.style.maxWidth = `${(containerWidth - (number - 1)) / number}px`;
      cell.style.maxHeight = `${(containerHeight - (number - 1)) / number}px`;
      
      cell.classList.add('row');
     // cell.innerText = i;
      container.appendChild(cell);
    }
    dragEffect();
}
function askUser(){
document.getElementById("chooseGrid").addEventListener('click',function(e){
   var newFormat= prompt("Select How many grid to 64");
    if(newFormat <= 64){
        if(newFormat != currentFormat){
                deleteGrid();
                createGrid(newFormat);
                currentFormat = newFormat;
        }
        else{
                console.log(`it is already ${currentFormat} silly`);//string-interpolation only works with ` `. 
        }
    }
    else{
        alert("Your choice is too high");
    }
   
});
}

function colorPicker(){
    
    const colorPicker = document.getElementById("color-picker");
    const image = document.getElementById("image");
    let colorV = document.getElementById("color-picker");

    colorPicker.addEventListener("input", function(){
        deleteGrid();
        createGrid(currentFormat);
        color = colorV.value;

    })
}

function clear(){
    const clear = document.getElementById("clear");
    clear.addEventListener("click",function(){
        deleteGrid();
        createGrid(currentFormat);
    })
}

function hover(event){
    event.target.style.backgroundColor = color;
 }

 //item is a collection of element returned by the function
 
 function deleteGrid(){
    const item = document.getElementsByClassName("row");
    while(item.length > 0){/*this works because the length of the list 
    will constantly shrink but always have something at first index until it doesn't*/
        item[0].remove();
    }
}
 //we go through each element and add a eventlistener to it, similar to it having a drone watch it for any movement
 function dragEffect(){
    const item = document.getElementsByClassName("row");
    for(var i = 0; i < item.length; i++){
        item[i].addEventListener('mouseover',hover);
       
    }
}
