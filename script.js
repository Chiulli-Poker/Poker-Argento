const socket = io();

function crearTorneo() {
    const torneo = { id: Math.random().toString(36).substr(2, 5) };
    socket.emit('crearTorneo', torneo);
    alert('Torneo creado: ' + torneo.id);
}

function unirseTorneo() {
    const codigo = document.getElementById('codigoTorneo').value;
    if (codigo) {
        socket.emit('unirseTorneo', { codigo });
        alert('Unido al torneo: ' + codigo);
    } else {
        alert('Introduce un código de torneo válido');
    }
}

socket.on('torneoCreado', (data) => {
    console.log('Torneo creado:', data);
});

socket.on('jugadorUnido', (data) => {
    console.log('Jugador unido:', data);
});
