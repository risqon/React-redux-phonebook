
import React, { Component } from 'react'
import TodoItem from './phoneActive'
import EditForm from './EditForm'
import { loadPhone } from '../actions'
import { connect } from 'react-redux'

class TodoList extends Component {

    componentDidMount() {
        this.props.load();
    }

    render() {
        const todos = this.props.phones.map((item, index) => {
            return item.isEdit ?
                (<EditForm
                    key={index}
                    id={item.id}
                    index={this.props.page === 1 ? index + 1 : (this.props.page - 1) * 5 + (index + 1)}
                    sent={item.sent}
                    name={item.name}
                    phone={item.phone}
                    edit={item.isEdit} />
                )
                :
                (
                    < TodoItem
                        key={index}
                        id={item.id}
                        index={this.props.page === 1 ? index + 1 : (this.props.page - 1) * 5 + (index + 1)}
                        sent={item.sent}
                        name={item.name}
                        phone={item.phone}
                        edit={item.isEdit}
                    />)
        })

        return (
            <div>
                <table className="table table-striped table-light centering  table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos}
                    </tbody>
                </table>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    phones: state.phones.phones,
    page: state.phones.page,
    pages: state.phones.pages
})

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(loadPhone())
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)