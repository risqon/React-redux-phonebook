import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faPlus, faSave } from '@fortawesome/free-solid-svg-icons'
import { postPhone } from '../actions'
import { connect } from 'react-redux'

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '' };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangePhone(event) {
        this.setState({ phone: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addPhone(this.state.name, this.state.phone);
        this.setState({ name: '', phone: '' })
    }

    handleClick(event) {
        event.preventDefault()
        this.props.togleButtonCta()
    }

    render() {
        return (
            <div>
                <button id="btn-collapse" className="btn btn-primary btn-lg mb-2" type="button" data-toggle="collapse" data-target="#add-collapse" aria-expanded="false" aria-controls="add-collapse">
                    <FontAwesomeIcon icon={faPlus} /> Add New Contact</button>

                <div className="collapse" id="add-collapse">

                    <div className="card">
                        <div className="card-header text-center font-weight-bold mb-2">
                            ADD NEW CONTACT
                      </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} className="form-inline justify-content-center">
                                <div className="form-group row">
                                    <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="Name" name="Name" value={this.state.name} onChange={this.handleChangeName} placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-sm-2 col-form-label">Number</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleChangePhone} placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="form-group row align-self-center">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-warning  btn-cancel float-right addc ml-2" onClick={this.handleClick}><FontAwesomeIcon icon={faBan} /> Cancel </button>

                                        <button type="submit" className="btn btn-primary  btn-add float-right addc"><FontAwesomeIcon icon={faSave} /> Save</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}



const mapDispatchToProps = dispatch => ({
    addPhone: (name, phone) => dispatch(postPhone(name, phone)),
})

export default connect(
    null,
    mapDispatchToProps
)(AddForm)