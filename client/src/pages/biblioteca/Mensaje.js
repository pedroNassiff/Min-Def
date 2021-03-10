import React from 'react'
import PropTypes from 'prop-types'
import { UncontrolledAlert } from 'reactstrap';

const Mensaje = ({ msg }) => {
    return (
        <UncontrolledAlert color="primary" >
            {msg}
        </UncontrolledAlert>
    )
}

Mensaje.propTypes = {
msg: PropTypes.string.isRequired
}

export default Mensaje
