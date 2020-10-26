import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchContacts, loadPhone, onSearch } from '../actions';


class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this);

        this.handleChangePhone = this.handleChangePhone.bind(this);

        this.handleReset = this.handleReset.bind(this);
    }

    handleChangeName(event) {
        let { phone } = this.state

        this.setState({ name: event.target.value })
        this.props.searchContacts(event.target.value, phone)
        this.props.onSearch({ name: event.target.value, phone: phone })
    }

    handleChangePhone(event) {
        let { name } = this.state

        this.setState({ phone: event.target.value })
        this.props.searchContacts(name, event.target.value)
        this.props.onSearch({ name: name, phone: event.target.value })
    }

    handleReset(event) {
        this.props.loadPhones()
        this.setState({ name: '', phone: '' });
        event.preventDefault();
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
                                <button type="button" className="btn btn-outline-warning  btn-cancel float-right reset" onClick={this.handleReset}><i className="fa fa-refresh"></i> Reset </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    isSearch: state.phones.isSearch,
    filterName: state.phones.filterName,
    filterPhone: state.phones.filterPhone
})
const mapDispatchToProps = dispatch => ({
    loadPhones: () => dispatch(loadPhone()),
    searchContacts: (name, phone, offset, limit) => dispatch(searchContacts(name, phone, offset, limit)),
    onSearch: (filter) => dispatch(onSearch(filter))


})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)