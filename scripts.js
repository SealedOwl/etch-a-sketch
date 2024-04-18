//Create the canvas to draw
const container = document.querySelector('.container');
const containerSize = 800;
container.style.width=container.style.height=`${containerSize}px`

const pixelSize = document.querySelector('#size');

let isDrawing = false;

function createGrid(size){

    container.innerHTML = '';

    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            const gridDiv = document.createElement('div');

            gridDiv.classList.add("gridStyle");
            gridDiv.style.width=gridDiv.style.height=`${(containerSize/size)}px`;

            //Draw if mousedown and mouseover
            gridDiv.addEventListener('mousedown',()=>{
                isDrawing = true;
            });
            gridDiv.addEventListener('mouseover',sketch);
            gridDiv.addEventListener('mouseup',()=>{
                isDrawing = false;
            });

            container.appendChild(gridDiv);
        }
    }
}



function sketch(){
    if(isDrawing){
        this.style.backgroundColor = 'black';
    }
}


//Create initial grid cells
createGrid(parseInt(pixelSize.value));

//Create cells according to given size
pixelSize.addEventListener('input', ()=>{
    createGrid(parseInt(pixelSize.value));
});