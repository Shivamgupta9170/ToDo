import React, { Component } from "react";

class CompletedItems extends Component {
  state = {};
  render() {
    let tasks = this.props.items;
    return tasks.map((item, index) => {
      if (item.status === 1) {
        return (
          <div key={item.id} className="mt-3">
            <div className="card">
              <div
                className="card-body"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5>
                  <span>{item.title}</span>
                </h5>
                <button 
  style={{ 
    color: 'red', 
    backgroundColor: 'transparent', 
    border: 'none', 
    cursor: 'pointer' 
  }} 
  onMouseEnter={(event) => { 
    event.target.style.backgroundColor = 'red'; 
    event.target.style.color = 'white';
  }} 
  onMouseLeave={(event) => { 
    event.target.style.backgroundColor = 'transparent'; 
    event.target.style.color = 'red'; 
  }}

  onClick={()=>this.props.handleCross(item.id)}
>X</button>
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

export default CompletedItems;
