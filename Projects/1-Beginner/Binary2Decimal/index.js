function isBinario(value) {
    var binarios = [0,1];
    if (binarios.indexOf(value) == -1) {
        alert("APENAS INSIRA 0 E/OU 1")
        return false;
    }
    return true;
}

function submit() {
    const input = document.querySelector("#binario");

    var decimal = parseInt(input.value, 2);

    if (isBinario(decimal)) {
        document.getElementById("results").innerHTML = decimal;
    }
}
