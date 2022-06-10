import styles from './NewTask.module.css'
import {PlusCircle} from 'phosphor-react'
import { Empty } from './Empty'
import { List } from './List'
import { ChangeEvent, FormEvent, useState } from 'react';


export function NewTask(){
  const [tasks,setTasks] = useState<string[]>([]);
  const [newTextTaks,setNewTextTasks] = useState('')
  const [doneTask,setDoneTask] = useState(0)
  const emptyTask = tasks.length===0
  
  let id =0;

  function handleCreateNewTaks(event: FormEvent ){
    event.preventDefault()

    
    setTasks([...tasks,newTextTaks])

    setNewTextTasks('')
  }
  function handleNewTaks(event: ChangeEvent<HTMLInputElement>){
    setNewTextTasks(event.target.value)
  }
  function CompleteTask(CompleteTask:string)
  {
    if(CompleteTask==="sum")
    {
      setDoneTask((state)=>{
        return state + 1
      })
    }
    else if(CompleteTask==="minus")
    {
      setDoneTask((state)=>{
        return state - 1
      })
    }  
  }
  function deleteTask(deleteTask: string)
  {
    const taskWithoutDeleteOne = tasks.filter((task)=>{
      return task !==deleteTask
    })
    setTasks(taskWithoutDeleteOne)
  }
  return (
    <div>
      <form onSubmit={handleCreateNewTaks} className={styles.newTask}>
        <div className={styles.textNewTask}>
          <input type="text" placeholder='Adicione uma tarefa' onChange={handleNewTaks} value={newTextTaks}/>
        </div>
        <div className={styles.buttonNewTask}>
          <button type="submit"><strong>Criar</strong> <PlusCircle /> </button>
        </div>
      </form>
      <main className={styles.tasks}>
        <div className={styles.info}>
          <span className={styles.createdTasks}>Tarefas criadas<div className={styles.Quantity}>{tasks.length}</div></span>
          <span className={styles.finishTasks}>Concluidas<div className={styles.Quantity}>{doneTask}</div></span>
        </div>
        {emptyTask ? <Empty /> : tasks.map(task => {
          return(
            <List 
              key={task} 
              task={task} 
              onCompleteTask = {CompleteTask}
              onDeleteTask = {deleteTask}
            />
          )
        })}
      </main>
    </div>
  )
}