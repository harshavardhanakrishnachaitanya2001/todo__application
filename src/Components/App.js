import React from 'react'
import Task from './Task'
class App extends React.Component{
    constructor(){
        super()
        this.state={
            todoTask:"",
            todoList:[]
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.removeItem=this.removeItem.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState(prevState=>{
            let taskList=[...prevState.todoList]
            taskList.push({
                id:this.state.todoTask+taskList.length,
                name:this.state.todoTask
            })
            return {
                todoList:taskList,
                todoTask:""
            }
        })
    }
    removeItem(id){
        const check=this.state.todoList.filter((p)=>p.id!==id)
        this.setState((prevState)=>{
            return {
                todoList:check
            }
        })
    }
    handleChange(event){
        event.preventDefault()
        this.setState({
            todoTask:event.target.value
        })
        
    }
    render(){
        return (
            <div>
                <h1 className="main-heading bg-danger">TODO APPLICATION</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="ml-5"><b>Enter the task to do:</b></label>
                    <input type="text" placeholder="Task" name="TodoTask" onChange={this.handleChange} value={this.state.todoTask}/>
                    <button type="submit">ADD</button>
                </form>
                {this.state.todoList.map(task=>{
                    return (
                        <Task task={task} key={task.id} removeItem={this.removeItem}/>
                    )
                })}
            </div>
        )
    }
}
export default App