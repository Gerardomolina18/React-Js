import React, { useState } from 'react';

const Componente = () => {
    const [color, setColor] = useState('black');
    const [cambioColor, setCambioColor] = useState(true);

const generarColorAleatorio = () => {
    if (cambioColor) {
      const nuevoColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setColor(nuevoColor);
    }
};

return (
    <div
    style={{
        width: '255px',
        height: '255px',
        backgroundColor: color,
    }}
    onMouseEnter={generarColorAleatorio}
    onMouseLeave={() => setCambioColor(false)}
    onDoubleClick={() => setCambioColor(!cambioColor)}
    />
    );
};

export default Componente;

