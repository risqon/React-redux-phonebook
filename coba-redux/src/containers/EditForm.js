import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { editUpdatePhone, clickCancelEditAct } from '../actions'
import { connect } from 'react-redux'


class TodoEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name, phone: this.props.phone }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
      
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });

    }

    handleChangePhone(event) {
        this.setState({ phone: event.target.value });

    }


    handleSubmit(event) {
        this.props.update(this.state.name, this.state.phone);
        event.preventDefault();
    }

    handleCancel() {
        this.props.cancelEdit()
    }

    render(props) {
        return (
            <tr>
                <td>
                    {this.props.no}
                </td>
                <td>
                    <div className=" form-row" onSubmit={this.handleSubmit}>
                        <input id="name" name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName} />
                    </div>
                </td>
                <td>
                    <div className=" form-row" onSubmit={this.handleSubmit}>
                        <input id="phone" name="phone" type="text" className="form-control" value={this.state.phone} onChange={this.handleChangePhone}/>
                    </div>
                </td>
                <td>
                    <button type="submit" className="btn btn-outline-success mr-2" onClick={this.handleSubmit}><FontAwesomeIcon icon={faCheck} /> Update</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleCancel}><FontAwesomeIcon icon={faTimes} /> Cancel</button>
                </td>
            </tr >
        )
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    cancelEdit: () => dispatch(clickCancelEditAct(ownProps.id)),
    update: (name, phone) => dispatch(editUpdatePhone(ownProps.id, name, phone))
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(TodoEdit)