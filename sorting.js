
var swaptimes = 0, time
let endTime, startTime;
function BubbleSort() {
  if (n < 2)
    return [];

  const res = [];
  let a = arr.slice();
  let startTime = performance.now();
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        res.push([j, j + 1]);
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped)
      break;
  }

  let endTime = performance.now();
  time = endTime - startTime;
  
  swapTimes = res.length;
  return res;
}
  

function insertionSort() {
    if (n<2)
        return [];
    const res=[]
    let a = arr.slice()
    startTime = performance.now()
    for (let i = 1; i < n; i++) {
      let k = a[i];
      let j = i - 1;    
      while (j >= 0 && a[j] > k) {
        a[j + 1] = a[j];
        res.push([j,j+1])
        j--;
      } 
      a[j + 1] = k;
    }
    endTime = performance.now();
    time = endTime - startTime;
    
    swapTimes = res.length;
    return res;
}

function selectionSort() {
    if (n < 2)
      return [];    
    const res = [];
    let a = arr.slice()
    startTime = performance.now()
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            res.push([i, minIndex]);
            temp = a[minIndex];
            a[minIndex] = a[i];
            a[i] = temp;
        }
    }
    endTime = performance.now()
    time = endTime - startTime
    swapTimes = res.length
    return res;
}

//quick sort
function quickSort() {
    if (n < 2)
        return [];
    
    const res = [];
    let a = arr.slice();
    let startTime = performance.now();
    
    sort(a, 0, n - 1, res);
    
    let endTime = performance.now();
    time = endTime - startTime;
    swapTimes = res.length;
    
    return res;
}

function sort(a, low, high, res) {
    if (low < high) {
        let pivotIndex = partition(a, low, high, res);
        sort(a, low, pivotIndex - 1, res);
        sort(a, pivotIndex + 1, high, res);
    }
}
  
function partition(a, low, high, res) {
    let pivot = a[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (a[j] < pivot) {
        i++;
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        res.push([i, j]);
        }
    }

    let temp = a[i + 1];
    a[i + 1] = a[high];
    a[high] = temp;
    res.push([i + 1, high]);

    return i + 1;
}


// heap sort

function heapSort() {
    if (n < 2) {
      return [];
    }

    const res = [];
    let a = arr.slice();
    let startTime = performance.now();

    buildMaxHeap(a,res);

    for (let i = n - 1; i > 0; i--) {
      res.push([0, i]);
      let temp = a[i];
      a[i] = a[0];
      a[0] = temp;
      heapify(a, i, 0, res);
    }

    let endTime = performance.now();
    time = endTime - startTime;
    swapTimes = res.length;

    return res;
}

function buildMaxHeap(a,res) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(a, n, i,res);
    }
}

function heapify(a, size, i, res) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < size && a[left] > a[largest]) {
      largest = left;
    }
    if (right < size && a[right] > a[largest]) {
      largest = right;
    }
    if (largest !== i) {
      res.push([i, largest]);
      let temp = a[i];
      a[i] = a[largest];
      a[largest] = temp;
      heapify(a, size, largest, res);
    }
}


