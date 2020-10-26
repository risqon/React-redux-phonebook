import React from 'react'
import AddForm from '../containers/AddForm'
import TodoList from '../containers/TodoList';
import SearchForm from '../containers/SearchForm'
import Pagination from '../containers/Paginations'



function TodoBox() {

  return (
    <div className="container card">
      <div className="jumbo">
        <nav className="navbar navbar-expand-lg navbar-light">
        </nav>
        <div className="jumbotron jumbotron-fluid">
          <div className="containers">
            <h1 className="display-4 text-center">Phone Book</h1>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="card-body">
          <div className="table-wrapper">
            <div className="card-body">
              <AddForm />
              <br />
              <SearchForm />
            </div>
            <div className="card-body">
              <TodoList />
            </div>
            <Pagination />
          </div>
        </div>
      </div>

    </div>
  )
}

export default TodoBox;