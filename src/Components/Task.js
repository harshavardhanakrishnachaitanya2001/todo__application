import React from 'react'
function Task(props){
        return (
                <div className="col-12 col-sm-2 tocompletetasks">
                <h3>{props.printtask}</h3>
        <button type="button" onClick={completed}>DONE</button>
                </div>
        )
}
const completed=(props)=>{
        return (
                alert(props.printtask + " is removed")
        )
}
export default Task