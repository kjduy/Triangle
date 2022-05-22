function tipoTriangulo(a, b, c) {
    if ((a + b > c) && (b + c > a) && (a + c > b))
        if (a == b && b == c)
            return "Es un triángulo Equilátero";
        else if (a == b || b == c || a == c)
            return "Es un triángulo Isósceles";
        else
            return "Es un triángulo Escaleno";
    else if (a == 0 || b == 0 || c == 0)
        return "No se debe ingresar 0"
    return "No es un triángulo"
}

function obtenerLados() {
    a = parseInt(document.getElementById("lado_uno").value);
    b = parseInt(document.getElementById("lado_dos").value);
    c = parseInt(document.getElementById("lado_tres").value);
    let lados = [a, b, c]
    return lados
}

function triangulo() {
    lados = obtenerLados()
    document.getElementById("txtRespuesta").innerHTML = tipoTriangulo(lados[0], lados[1], lados[2])
}

function esVacio() {
    lados = obtenerLados()
    if (lados[0] >= 0 && lados[1] >= 0 && lados[2] >= 0)
        document.getElementById("btnRespuesta").removeAttribute('disabled');
    else {
        document.getElementById("btnRespuesta").setAttribute('disabled', 'disabled');
        document.getElementById("txtRespuesta").innerHTML = "Por favor, llene todos los campos"
    }
}
