const container = document.querySelector('.container');
const containerSize = 800;
container.style.width=container.style.height=`${containerSize}px`
let size = 16;

for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
        const gridDiv = document.createElement('div');

        gridDiv.classList.add("gridStyle");
        gridDiv.style.width=gridDiv.style.height=`${(containerSize/size)}px`;

        gridDiv.addEventListener('mouseover',sketch);

        container.appendChild(gridDiv);
    }
}


function sketch(){
    this.style.backgroundColor = 'black';
}