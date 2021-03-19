import React from 'react';

const Elementos = ({elemento}) => {
    return ( 
    <li>
        <button
            type="button"
            className="btn btn-blank"
        >{elemento.nombre}

        </button>
    </li>
     );
}
 
export default Elementos;