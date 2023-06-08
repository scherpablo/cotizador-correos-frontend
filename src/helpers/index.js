const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
    }).format(valor);

    return formatter.replace(/,/g, ".");
};

const devolverDinero = (correos, plazo) => {
    let total = 0;

    const precios = {
        1: 1299,
        12: 8388,
        24: 14376,
        48: 23952
    };

    if (correos) {
        total = correos;
    }

    const precioPlazo = precios[plazo] || precios[1];
    total *= precioPlazo * 1.5;

    return total;
}

const calcularPagoMensual = (total, plazo) => {
    return total / plazo;
}

export {
    formatearDinero,
    devolverDinero,
    calcularPagoMensual
};