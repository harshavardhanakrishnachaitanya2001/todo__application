import React from 'react'
function Task(props){
        return (
            <div className="col-12 col-sm-1 tocompletetasks">
                <h3>{props.task.name}</h3>
                <button type="button" onClick={()=>{
                    props.removeItem(props.task.id)
                }}>DONE</button>
            </div>
        )
}
export default Task