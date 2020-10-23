import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPhone } from '../actions'
// postUser, searchUsers, searchMode, , cancelSearch
class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phone: ""
        }
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleChangePhone(event) {
        this.setState({ Phone: event.target.value });
        this.props.searchUsers(this.state.name, event.target.value)
        this.props.searchMode({ name: this.state.name, phone: event.target.value })
    }

    handleChangeName(event) {
        this.setState({ Name: event.target.value });
        this.props.searchUsers(event.target.value, this.state.Phone)
        this.props.searchMode({ name: event.target.value, phone: this.state.phone })
    }
    handleClick(event) {
        this.props.loadPhones()
        this.props.cancelSearch()
        this.setState({ name: "", phone: "" });
        event.preventDefault()

    }

    render() {
        return (
            <div className="card text-left" >
                <div className="card-header text-center font-weight-bold">
                    SEARCH CONTACT
                    </div>
                <div className="card-body">
                    <form className="form-inline justify-content-center">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="Name" name="Name" value={this.state.name} onChange={this.handleChangeName} placeholder="Search Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Number</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleChangePhone} placeholder="Search Phone Number" />
                            </div>
                        </div>
                        <div className="form-group row align-self-center">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-outline-warning  btn-cancel float-right reset" onClick={this.handleClick}><i className="fa fa-refresh"></i> Reset </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    // postUser: (phone, name, id) => dispatch(postUser(phone, name, id)),
    // searchUsers: (name, phone) => dispatch(searchUsers(name, phone)),
    // searchMode: (filter) => dispatch(searchMode(filter)),
    loadPhones: () => dispatch(loadPhone()),
    // cancelSearch: () => dispatch(cancelSearch())

})

export default connect(
    null,
    mapDispatchToProps
)(SearchForm)