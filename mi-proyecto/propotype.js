// Declaro un constructor
function Automovil (marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
  
  // Lo instancio
  var miAuto = new Automovil('Tesla', 'Cybertruck', 'Negro');
  
  // Agrego la propiedad ruedas a la propiedad prototype del constructor
  Automovil.prototype.ruedas = 4;
  
  // La instancia de Automovil hereda la propiedad 'ruedas' del prototype
  console.log(miAuto.color); // "Negro"
  console.log(miAuto.ruedas); // 4
  