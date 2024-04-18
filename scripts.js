//Create the canvas to draw
const container = document.querySelector('.container');
const containerSize = 800;
container.style.width=container.style.height=`${containerSize}px`

const pixelSize = document.querySelector('#size');

let isDrawing = false;

//Select color
const selectColor = document.querySelector('#select-color');
const selectColorBtn = document.querySelector('#select-color-btn');

selectColorBtn.addEventListener('click',()=>{
    isRandomColor = false;

    selectColor.click();
})

//Erase button
const eraseBtn = document.querySelector('#erase-btn');
eraseBtn.addEventListener('click',()=>{
    isRandomColor = false;

    selectColor.value = '#ffffff';
});

//Select Random Colors
const randomColorBtn = document.querySelector('#randomcolor-btn');
let isRandomColor = false
randomColorBtn.addEventListener('click',()=>{
    isRandomColor = !isRandomColor;
});

function getRandomColor(){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

//Reset the board
const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click',()=>{
    document.querySelectorAll('.gridStyle').forEach((gridDiv)=>{
        gridDiv.style.backgroundColor = '#ffffff';
    });
});

//Default color
const defaultColorBtn = document.querySelector('#defaultcolor-btn');
defaultColorBtn.addEventListener('click',()=>{
    isRandomColor = false;

    selectColor.value = '#000000';
})

//Create the grids
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
        //if random color is selected thn draw those, else selected sketch color
        if(isRandomColor){
            this.style.backgroundColor = getRandomColor();
        }else{
            this.style.backgroundColor = selectColor.value;
        }
    }
}


//Create initial grid cells
createGrid(parseInt(pixelSize.value));

//Create cells according to given size
pixelSize.addEventListener('input', ()=>{
    createGrid(parseInt(pixelSize.value));
});