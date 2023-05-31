import React from 'react';
import Contacto from './components/Contacto';

class App extends React.Component {
  render() {
    const contacto = {
      nombre: 'Jonatan',
      apellido: 'Di Vincenzo',
      email: 'jonnadvwork@gmail.com',
      conectado: true
    };

    return (
      <div>
        <h1>Aplicación de Contacto</h1>
        <Contacto contacto={contacto} />
      </div>
    );
  }
}

export default App;
