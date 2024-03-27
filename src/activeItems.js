import React, { Component } from "react";

class ActiveItems extends Component {
  render() {
    let tasks = this.props.items;
    return tasks.map((item, index) => {
      if (item.status === 0) {
        return (
          <div key={item.id} className="mt-3">
            <div className="card">
              <div className="card-body">
                <input
                  type="checkbox"
                  onChange={() => this.props.handleCheck(item.id)}
                />
                <h5 style={{ display: "inline-block", marginLeft: "10px" }}>
                  {item.title}
                </h5>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  }
}

export default ActiveItems;

