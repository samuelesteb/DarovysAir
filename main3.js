
var passw = document.getElementById('passw'),
    privado = document.getElementById('privado'),
    candado = 0;

function cambio() {
    if (candado == 0) {
        privado.style.display = 'block';
        candado = 1;
    }
    else {
        privado.style.display = 'none';
        candado = 0
    }
}

// passw.addEventListener('click',cambio)
passw.addEventListener('click', cambio)



let button = document.getElementById("Vuelo");

if (button) {
    button.addEventListener('click', () => {
        alert("Hola")
    })
}
