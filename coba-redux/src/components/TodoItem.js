import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faReply, faPencilAlt } from '@fortawesome/free-solid-svg-icons'


export default function TodoItem(props) {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>
                <button type="submit" className="btn btn-outline-success mr-2" onClick={props.onEdit}><FontAwesomeIcon icon={faPencilAlt} /></button>
                {props.sent && <button type="button" className="btn btn-outline-danger del" onClick={props.remove} ><FontAwesomeIcon icon={faTrashAlt} /></button>}
                {!props.sent && <button type="button" className="btn btn-outline-warning del" onClick={props.resend}><FontAwesomeIcon icon={faReply} /></button>}
            </td>
        </tr>
    )

}

//   <tr>

