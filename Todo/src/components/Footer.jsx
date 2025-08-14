import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";


function Footer(){

    const todoList = useSelector(state => state.todos);

    const count = todoList.filter(todo => todo.completed === false).length;
    

    
    return (
        <footer className="bg text-center py-3">
            
            <p className="mb-0">Remaining: {count}
                
                
            </p>

            
        
            
        </footer>
    );
}



export default Footer;
