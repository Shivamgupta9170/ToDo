import React, { Component } from "react";
class Form extends Component {
    state = {};
    render() {
        return (
            <div>
                <form id="todoForm" onSubmit={this.props.handleSubmit}>
                    <div>
                        <label htmlFor="taskInput" className="form-label">
                            <h5>New Task</h5>
                        </label>
                        <br></br>
                        <input
                            type="text"
                            className="form-control"
                            id="taskInput"
                            placeholder="Enter task"
                        />
                        <br></br>
                        <button type="submit" className="btn btn-primary">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
