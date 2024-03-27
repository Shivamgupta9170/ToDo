import React,{Component} from "react";
class Navbar extends Component {
    state = {  }; 
    render() { 
        return (
            <nav className="navbar bg-danger">
                <a href="/" className="navbar-brand text-white"><h5>ToDoList</h5></a>
            </nav>
        );
    }
}
 
export default Navbar;