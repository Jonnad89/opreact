import React from 'react';
import PropTypes from 'prop-types';

class ComponenteB extends React.Component {
  render() {
    const { conectado } = this.props;

    return (
      <div>
        <button onClick={this.handleClick}>
          Cambiar estado de conexión
        </button>
        <p>Estado de conexión: {conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
      </div>
    );
  }

  handleClick = () => {
    const { conectado, onEstadoConexionChange } = this.props;
    onEstadoConexionChange(!conectado);
  }
}

ComponenteB.propTypes = {
  conectado: PropTypes.bool.isRequired,
  onEstadoConexionChange: PropTypes.func.isRequired
};

export default ComponenteB;
