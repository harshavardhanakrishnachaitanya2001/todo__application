import React from 'react'
function Task(props){
        return (
            <div className="col-12 col-sm-1 tocompletetasks">
                <h3>{props.task}</h3>
                <button type="button" onClick={props.removeItem}>DONE</button>
            </div>
        )
}
export default Task