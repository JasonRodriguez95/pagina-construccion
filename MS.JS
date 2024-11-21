function guardar() {
    var datosUsuario=document.getElementById("email","psw","psw-repeat").value;
    console.log(datosUsuario);
};
function direccionar(){
    
}

// Conexión al servidor WebSocket
const socket = new WebSocket('ws://localhost:3000');
    
// Manejo de eventos de WebSocket
socket.addEventListener('open', function (event) {
  console.log('Conexión establecida');
});

socket.addEventListener('message', function (event) {
  console.log('Mensaje recibido: ' + event.data);
  const mensajes = document.getElementById('mensajes');
  const mensaje = document.createElement('div');
  mensaje.textContent = event.data;
  mensajes.appendChild(mensaje);
});

// Envío de mensajes
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  const mensaje = document.getElementById('mensaje').value;
  socket.send(mensaje);
  console.log('Mensaje enviado: ' + mensaje);
  document.getElementById('mensaje').value = '';
});
