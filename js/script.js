var calcDisplay1 = ""
var calcDisplay2 = ""

function btnClick(e){
    if (e == "Reset" || e == "Reset Keliling"){
        if(e == "Reset" ){
            calcDisplay1 = ""
            document.getElementById("result").innerHTML = ""
        }
        else if (e == "Reset Keliling"){
            calcDisplay2 = ""
            document.getElementById("result1").innerHTML = ""
        } 
        else{
        calcDisplay1 = calcDisplay1 + e
        calcDisplay2 = calcDisplay2 + e
        console.log(calcDisplay1)
        console.log(calcDisplay2)
        }
        document.getElementById("luas").value = calcDisplay1
        document.getElementById("keliling").value = calcDisplay2
    } else {
        alert('input harus berupa angka dan simbol')
    }
}

function hitungLuas() {
    // Ambil nilai sisi dari input
    var sisi = document.getElementById("luas").value;

    // Hitung luas persegi
    var luas = sisi * sisi;

    // Tampilkan hasil di dalam elemen dengan id "result"
    document.getElementById("result").innerHTML = "Luas Persegi: " + luas;
}

function hitungKeliling() {
    // Ambil nilai sisi dari input
    var sisi1 = document.getElementById("keliling").value;

    // Hitung luas persegi
    var keliling = sisi1 * 4;

    // Tampilkan hasil di dalam elemen dengan id "result"
    document.getElementById("result1").innerHTML = "Keliling Persegi: " + keliling;
}

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

