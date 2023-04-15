const form = document.querySelector('formCotizador');

form.addEventListener('submit', (event) => {
  const servicio = document.getElementById('ingreseservicio').value;
  const subservicio = document.getElementById('ingresesubservicio').value;
  const formadepago = document.getElementById('formadepago').value;
 
  
  if (ingreseservicio === '' || ingresesubservicio === '' || formadepago === '' ) {
    alert('Por favor, complete todos los campos.');
    event.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(correo)) {
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
    event.preventDefault();
  }
});