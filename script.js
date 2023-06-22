const input = document.getElementById("n")
let n = parseInt(input.value)
const arr = []

function init(){
    n =  parseInt(input.value)
    for (let i =0; i<n;i++)
        arr[i] = Math.random()
    draw()
}




function draw(){

    const container = document.getElementById("container")
    container.innerHTML = ""
    for (let i=0;i<n;i++){
        const element = document.createElement("div")
        element.style.height = arr[i]*100+"%"
        element.style.width = (parseInt(window.getComputedStyle(container).width) / n) + "px"
        element.style.backgroundColor = "black"
        container.appendChild(element)
    }
}

var sorting = false;
function showData() {
    document.getElementById("time").textContent = "Estimated Time (not including the visualizing time): " + time + " ms";
    document.getElementById("swap").textContent = "Swaps: " + swapTimes;
    document.getElementById("time").style.display = "block";
    document.getElementById("swap").style.display = "block";
  }
  
function playBubbleSort() {
  if (sorting) {
    return;
  }

  sorting = true;
  const swapped = BubbleSort();
  showData()
  animate([...swapped]);
}

function playInsertionSort() {
  if (sorting) {
    return;
  }

  sorting = true;
  const swapped = insertionSort();
  showData()
  animate([...swapped]);
}


function playSelectionSort() {
  if (sorting) {
    return;
  }

  sorting = true;
  const swapped = selectionSort();
  showData()
  animate([...swapped]);
}
function playQuickSort() {
  if (sorting) {
    return;
  }

  sorting = true;
  const swapped = quickSort();
  showData()
  animate([...swapped]);
}
function playHeapSort() {
  if (sorting) {
    return;
  }

  sorting = true;
  const swapped = heapSort();
  showData()
  animate([...swapped]);
}
function playMergeSort() {
    if (sorting) {
      return;
    }

    sorting = true;
    const swapped = heapSort();
    showData()
    animate([...swapped]);
}
var StopAnimating = false
function animate(swapped){
    if (swapped.length == 0 || StopAnimating){
        sorting = false
        return
    }
        
   
    let i = swapped[0][0], j = swapped[0][1]
    swap(i,j)
    swapped = swapped.slice(1)    
    let speed
    if (n >= 100)
        speed = 0
    else if (n < 50)
        speed = ((50/n)**3)
    else
        speed = 1/((n/50)**3)
    setTimeout(function(){animate(swapped)},speed)
}
function swap(i, j) {
    let elements = document.querySelectorAll("#container > div");
    let elementI = elements[i];
    let elementJ = elements[j];

    let heightI = elementI.style.height;
    let heightJ = elementJ.style.height;

    elementI.style.height = heightJ;
    elementJ.style.height = heightI;
}
  
document.getElementById("stop").addEventListener("click",function(e){
    e.preventDefault()
    StopAnimating = true
})
document.getElementById("init").addEventListener("click",function(e){
    e.preventDefault()
    StopAnimating = false
})
init()
const err = document.getElementById("error")
input.addEventListener("keyup",function(e){
    e.preventDefault()
    if (input.value == "" || parseInt(input.value) < 2){
        err.style.display = "block"
        err.textContent = "the list must have at least 2 element"
    }
    else if (parseInt(input.value) > 1000){
        err.style.display = "block"
        err.textContent = "for performance issue we can only allow 1000 elements"
        input.value = "1000"
    }
    else{
        err.style.display = "none"
    }
    
    init()
})