import React from 'react-dom';
import './ToDoListTemplate.css';

const ToDoListTemplate = ({form, children}) => {
    return(
        <main className = "todo-list-template">
            <div className = 'title'>
                Today to do list
            </div>
            <section className = 'form-wrapper'>
                {form}
            </section>
            <section className = 'todos-wrapper'>
                { children }
            </section>
        </main>
    );
};

export default ToDoListTemplate;