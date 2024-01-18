
var calcDisplay = ""

function btnClick(e){
    if (e == "1" || e == "2" || e == "3" || e == "4" || e == "5" || e == "6" || e == "7" || e == "8" || e == "9" || e == "0"
    || e == "/" || e == "+" || e == "-" || e == "*" || e == "Reset" || e == "Reset Keliling"){
        if(e == "Reset" || e == "Reset Keliling"){
            calcDisplay = ""
        }else{
        calcDisplay = calcDisplay + e
        console.log(calcDisplay)
        }
        document.getElementById("luas").value = calcDisplay
        document.getElementById("keliling").value = calcDisplay
    } else {
        alert('input harus berupa angka dan simbol')
    }
}

// document.getElementById("luas").addEventListener('input', function displayChange() {
//     console.log(this.value)
//     let e = this.value

// let chars = /^[0-9]+$/

//     if (chars.test(e)) {
//         console.log("digits")
//     } else {
//         calcDisplay = ""
//         alert("not digits")
//     }
// })

// function btnClick(e){
//     if (e == "1" || e == "2" || e == "3" || e == "4" || e == "5" || e == "6" || e == "7" || e == "8" || e == "9" || e == "0"
//     || e == "/" || e == "+" || e == "-" || e == "*" || e == "Reset Keliling"){
//         if(e == "Reset Keliling"){
//             calcDisplay = ""
//         }else{
//         calcDisplay = calcDisplay + e
//         console.log(calcDisplay)
//         }
//         document.getElementById("keliling").value = calcDisplay 
//     } else {
//         alert('input harus berupa angka dan simbol')
//     }
// }

// document.getElementById("keliling").addEventListener('input', function displayChange() {
//     console.log(this.value)
//     let e = this.value

// let chars = /^[0-9]+$/

//     if (chars.test(e)) {
//         console.log("digits")
//     } else {
//         alert("not digits")
//     }
// })

const inputField1 = document.getElementById("luas")
const inputField2 = document.getElementById("keliling")
const hitung1 = document.getElementById("hitungluas")
const hitung2 = document.getElementById("hitungkeliling")

inputField1.addEventListener('input', function() {
    const inputValue1 = inputField1.value.trim()
    if(validateInput(inputValue1)){
        hitung1.disabled = false
    }else{
        hitung1.disabled = true
    }
})

inputField2.addEventListener('input', function() {
    const inputValue2 = inputField2.value.trim()
    if(validateInput(inputValue2)){
        hitung2.disabled = false
    }else{
        hitung2.disabled = true
    }
})


function validateInput(input){
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}