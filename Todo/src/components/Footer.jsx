import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import {useSelector} from "react-redux";
import { deleteCompleted } from "../redux/actions";
import { useDispatch } from "react-redux";


function Footer(){

    const todoList = useSelector(state => state.todos);

    const count = todoList.filter(todo => todo.completed === false).length;

    const dispatch = useDispatch();

    const handleDeleteCompleted = () => {
        dispatch(deleteCompleted());
    };

    return (
        <footer className="bg text-center py-3">
            
            <p className="mb-0">Remaining: {count}
                
                <button className='btn btn-success btn-sm ms-3'  onClick={handleDeleteCompleted}> 
                    <i class="bi bi-trash3"> </i> 
                    Delete Completed
                </button>
                
                
            </p>

            
        
            
        </footer>
    );
}



export default Footer;
