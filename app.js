let arr = ['','','','','','','','','',]

let div = document.getElementById('div')








let xo = true

let box = () =>{
    for(let i = 1; i < arr.length;i++){
        let block = document.createElement('div')
        block.className = 'block'
        div.appendChild(block)

block.addEventListener('click', () => {
    if(xo && arr[i] == ''){
        arr[i] = 'x'
        block.innerText = arr[i]

    }
    else if( !xo && arr[i] == ''){
        arr[i] = 'o'
        block.innerText = arr[i]
    }
    xo = !xo
} )

    }
    
}

