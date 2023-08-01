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

var currentFormat = 4;
createGrid(currentFormat);
document.getElementById("chooseGrid").addEventListener('click',function(e){
   var newFormat= prompt("Select How many grid you want,up to 50");
  
   if(newFormat != currentFormat){
        deleteGrid();
        createGrid(newFormat);
   }
   else{
        console.log(`it is already ${currentFormat} silly`);//string-interpolation only works with ` `. 
   }
   
});



// creating hover effect, hover function is used in event listener, to create effect

function hover(event){
    event.target.style.backgroundColor = "black";
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
