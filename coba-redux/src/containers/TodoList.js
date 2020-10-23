
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
        const todos = this.props.stateFromMaps.map((item, index) => {
            return item.isEdit ?
                (<EditForm
                    key={item.id}
                    id={item.id}
                    index={index + 1}
                    sent={item.sent}
                    name={item.name}
                    phone={item.phone}
                    edit={item.isEdit} />
                )
                :
                (
                    < TodoItem
                        key={item.id}
                        id={item.id}
                        index={index + 1}
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
    stateFromMaps: state.phones
})

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(loadPhone())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)