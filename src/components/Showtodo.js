import React from 'react'

function ShowTodo(props) {
    return (
        <div className='container'>
            <div className="row my-2">

                <div className="col-6">
                    <h6>{props.task}</h6>
                </div>
                <div className="col-6">
                <button onClick={()=>{
                    props.ondel(props.id)
                }}>Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default ShowTodo
