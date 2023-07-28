function createGrid(number){
    const container = document.querySelector('.grid');//reference container id that already exists in html
    for(var i = 0; i < number ; i++){
            const column = document.createElement('div');// create new element
            column.classList.add = "column";//add content to the element
        // row.style.cssText = " border-color: black; background-color: red; width: 300px; height: 30px;";
            //document.body.appendChild(div); this works as well but the body is the parent
            container.appendChild(column);
            var a = 0;
            //column is block element 
            for(var j = 0; j < number ; j++){// we are using each row box we create as a house/container for the rest of the boxes in column
                //var a = 0;
                const row = document.createElement('div');
                row.classList.add("row");
               // a++;
                row.style.cssText = " border-style: solid; border-width:0.25px 0.25px; border-color: black; background-color: #F9FAFB; width: 30px; height: 30px;";
                column.appendChild(row);
            }
            
           // container.appendChild(column);
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
       // dragEffect();
       
       
      //  console.log('here');
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


