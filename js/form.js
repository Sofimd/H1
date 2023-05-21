const validarNombre = (pNombre) => {
  let mensaje = "";
  if (pNombre.length < 2) {
    mensaje = `Debe ingresar un nombre correcto <br>`;
  }
  return mensaje;
};

const validarApellido = (pApellido) => {
  let mensaje = "";
  if (pApellido.length < 2) {
    mensaje = `Debe ingresar un nombre apellido <br>`;
  }
  return mensaje;
};

const validarDni = (pDni) => {
  let mensaje = "";
  if (pDni <= 0 || pDni > 100000000) {
    mensaje = "ingrese un numero de dni valido <br>";
  }
  return mensaje;
};

const validarMail = (pMail) => {
  let mensaje = "";
  const expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let esValido = expReg.test(pMail);
  if (!esValido) {
    mensaje = "ingrese un mail valido <br>";
  }
  return mensaje;
};

const validarForm = () => {
  let mensaje;
  let validationResult = true;
  const nombre = document.getElementsByName("name")[0].value;
  const apellido = document.getElementsByName("lastname")[0].value;
  const dni = document.getElementsByName("dni")[0].value;
  const mail = document.getElementsByName("email")[0].value;
  const fnac = document.getElementsByName("nacimiento")[0].value;
  const cajaMensaje = document.getElementById("caja-mensaje");
  const p = document.getElementById("mensaje");

 

  let mensNac = "";
  if (!fnac) {
    mensNac = "ingrese su fecha de Nacimiento <br>";
  }

  mensaje =
    validarNombre(nombre) +
    validarApellido(apellido) +
    validarDni(dni) +
    validarMail(mail) +
    mensNac;

  if (mensaje) {
    validationResult = false;
    cajaMensaje.classList.add("fail");
    p.innerHTML = mensaje;
  }

  if (validationResult == true) {
    mensaje = "todo ok!!!";
    cajaMensaje.classList.remove("fail");
    cajaMensaje.classList.add("success");
    p.innerHTML = mensaje;
  }
};

