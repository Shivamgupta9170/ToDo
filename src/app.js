import React, { Component } from "react";
import Navbar from "./navbar";
import Form from "./form";
import CompletedItems from "./completedItems";
import ActiveItems from "./activeItems";

class App extends Component {
    constructor(props) {
        super(props);
        // Initialize state with tasks data from local storage or empty array
        this.state = {
            tasks: JSON.parse(localStorage.getItem("tasks")) || []
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.taskInput.value;
        e.target.taskInput.value = '';
        const allTasks = [...this.state.tasks];
        const newTask = { id: Date.now(), title: title, status: 0 };
        allTasks.push(newTask);
        // Update state and local storage with new task
        this.setState({ tasks: allTasks }, () => {
            localStorage.setItem("tasks", JSON.stringify(allTasks));
        });
    };

    handleCheck = (id) => {
        const allTasks = [...this.state.tasks];
        const updatedTasks = allTasks.map(task => {
            if (task.id === id) {
                task.status = task.status === 0 ? 1 : 0;
            }
            return task;
        });
        // Update state and local storage with updated tasks
        this.setState({ tasks: updatedTasks }, () => {
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        });
    };

    handleCross = (id) => {
        const allTasks = [...this.state.tasks];
        const updatedTasks = allTasks.filter(task => task.id !== id);
        // Update state and local storage with updated tasks
        this.setState({ tasks: updatedTasks }, () => {
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        });
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <Form handleSubmit={this.handleSubmit} />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-6">
                            <h3>Active Task</h3>
                            <ActiveItems items={this.state.tasks} handleCheck={this.handleCheck} />
                        </div>
                        <div className="col-6">
                            <h3>Completed Task</h3>
                            <CompletedItems items={this.state.tasks} handleCross={this.handleCross} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

