import React from 'react'
import AddForm from '../containers/AddForm'
import TodoList from '../containers/TodoList';
import Jumbotron from '../containers/Jumbotron';
import SearchForm from '../containers/SearchForm'



function TodoBox() {

  return (
    <div className="container">
      <Jumbotron />
      <div className="container">
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
              {/* <Pagination /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoBox;