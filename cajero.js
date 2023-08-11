// Saldo inicial de cada usuario
let saldoUsuario1 = 10;
let saldoUsuario2 = 341;
let saldoUsuario3 = 582;

// Funciones para cada operación
function consultarSaldo(usuario) {
    let saldo = 0;
    switch (usuario) {
        case 1:
            saldo = saldoUsuario1;
            break;
        case 2:
            saldo = saldoUsuario2;
            break;
        case 3:
            saldo = saldoUsuario3;
            break;
        default:
            break;
    }
    alert(`Saldo actual del Usuario ${usuario}: $${saldo}`);
}

function ingresarMonto(usuario) {
    let monto = parseFloat(prompt(`Ingrese el monto a ingresar para el Usuario ${usuario}:`));
    if (isNaN(monto) || monto <= 10 || monto > 990) {
        alert("Monto inválido. Debe ser un número mayor a 0 y menor o igual a 990.");
        return;
    }

    let saldo = 0;
    switch (usuario) {
        case 1:
            saldoUsuario1 += monto;
            saldo = saldoUsuario1;
            break;
        case 2:
            saldoUsuario2 += monto;
            saldo = saldoUsuario2;
            break;
        case 3:
            saldoUsuario3 += monto;
            saldo = saldoUsuario3;
            break;
        default:
            break;
    }
    alert(`Se ha ingresado $${monto} al Usuario ${usuario}. Nuevo saldo: $${saldo}`);
    actualizarSaldoEnPantalla(usuario, saldo);
}

function retirarMonto(usuario) {
    let monto = parseFloat(prompt(`Ingrese el monto a retirar para el Usuario ${usuario}:`));
    if (isNaN(monto) || monto <= 10 || monto > 990) {
        alert("Monto inválido. Debe ser un número mayor a 0 y menor o igual a 990.");
        return;
    }

    let saldo = 0;
    switch (usuario) {
        case 1:
            if (monto > saldoUsuario1) {
                alert("Saldo insuficiente.");
                return;
            }
            saldoUsuario1 -= monto;
            saldo = saldoUsuario1;
            break;
        case 2:
            if (monto > saldoUsuario2) {
                alert("Saldo insuficiente.");
                return;
            }
            saldoUsuario2 -= monto;
            saldo = saldoUsuario2;
            break;
        case 3:
            if (monto > saldoUsuario3) {
                alert("Saldo insuficiente.");
                return;
            }
            saldoUsuario3 -= monto;
            saldo = saldoUsuario3;
            break;
        default:
            break;
    }
    alert(`Se ha retirado $${monto} del Usuario ${usuario}. Nuevo saldo: $${saldo}`);
    actualizarSaldoEnPantalla(usuario, saldo);
}

function actualizarSaldoEnPantalla(usuario, saldo) {
    let saldoElement;
    switch (usuario) {
        case 1:
            saldoElement = document.getElementById("saldo1");
            break;
        case 2:
            saldoElement = document.getElementById("saldo2");
            break;
        case 3:
            saldoElement = document.getElementById("saldo3");
            break;
        default:
            break;
    }
    saldoElement.textContent = `$${saldo}`;
}
