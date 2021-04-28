import React from 'react'

// VAR = Global Scopes bisa dimana saja
// var harga = 1000
// if(true){
//     var harga = 2000;
// }

// CONST : NIlai konstant tidak memenuhi global scope
// const harga = 1000
// if (true) {
//     harga = 2000
// }

// let : NIlai konstant tidak memenuhi global scope tapi tetap dieksekusi let pertama
let harga = 1000
if (true) {
   let harga = 2000
}

const Variable = () => {
    return (
        <div>
            <h1>Harga : {harga}</h1>
            
            
        </div>
    )
}
 export default Variable;