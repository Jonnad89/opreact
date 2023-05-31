import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './ComponenteB';

class Contacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conectado: props.contacto.conectado
    };
  }

  handleEstadoConexionChange = (conectado) => {
    this.setState({ conectado });
  }

  render() {
    const { contacto } = this.props;
    const { conectado } = this.state;

    if (!contacto) {
      return null; // Agregamos una verificación para evitar errores si no se proporciona el contacto
    }

    return (
      <div>
        <h2>Información de contacto:</h2>
        <p>Nombre: {contacto.nombre}</p>
        <p>Apellido: {contacto.apellido}</p>
        <p>Email: {contacto.email}</p>
        <ComponenteB conectado={conectado} onEstadoConexionChange={this.handleEstadoConexionChange} />
      </div>
    );
  }
}

Contacto.propTypes = {
  contacto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conectado: PropTypes.bool.isRequired
  })
};

export default Contacto;
