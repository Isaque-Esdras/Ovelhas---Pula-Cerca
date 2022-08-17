butt = document.getElementById('but')
inpute1 = document.getElementById('put1')
inpute2 = document.getElementById('put2')
inpute3 = document.getElementById('put3')
dive = document.getElementById('diva')

butt.addEventListener('click', clicou)

function clicou() {
   if (inpute1.value == 0 || inpute2.value == 0 || inpute3.value == 0) {
    window.alert("Verifique os dados e tente novamente.")
   }else{

    var valor1 = Number(inpute1.value)
    var valor2 = Number(inpute2.value)
    var valor3 = Number(inpute3.value)

    if (valor1 < valor2) {
        for (let teste = valor1; teste < valor2; teste+= valor3) {
            dive.innerHTML += `${teste} &#128017;`
            
        }
    }else{
        for (let teste = valor1; teste > valor2 ; teste-=valor3) {
            dive.innerHTML += `${teste} &#128017;`
            
        }
    }

   }
}