import React, { useState } from "react";


let ToDo=()=>{

    let [state,setState]=useState({
        msg:'',
    })

    let [todos,setTodo]=useState({
        message:[]
    })

    let changeHandler=(event)=>{
        setState((state)=>({
            msg:event.target.value
        }))
            
    }

    let submitHandler=(event)=>{
        event.preventDefault();
        console.log(state);
        setTodo(()=>({
            message:[...todos.message,state.msg]
        }));
        setState((state)=>({
            msg:"",
        }))

        
    }

    let deleteHandler=(indexVal)=>{
        setTodo((state)=>({
            message:todos.message.filter((todo,index)=>index!==indexVal)
        }))
    }


    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h4>Todo Management Application</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <input type='text' value={state.msg} onChange={changeHandler} name='task'></input>&nbsp;
                                    <input className='btn btn-success btn-sm' type='submit' value='Add' name='add'></input>
                                </form>
                                {
                                    todos.message.map((inf,index)=>{
                                        return(
                                        <div key={index} className="mt-2">
                                                <h3> {inf}  <button className='btn btn-danger btn-sm'onClick={()=>deleteHandler(index)}>Delete</button></h3>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}
export default ToDo;