import { Trash } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react";
import styles from './List.module.css'

interface listProps{
  task: string,
  onCompleteTask: (completTask : string) => void,
  onDeleteTask : (deleteTask: string) => void,
}

export function List({task, onCompleteTask, onDeleteTask}:listProps){
  const [checkMark,setCheckMark] = useState(0)
  function handleCompleteTask (event: ChangeEvent<HTMLInputElement>){
    
    if(event.target.checked)
    {
      onCompleteTask("sum")
      setCheckMark(1)
    }
    else
    {
      onCompleteTask("minus")
      setCheckMark(0)
    }
  }
  function handleDeleteTask(){
    onDeleteTask(task)
  }
  
  return (
    <div className={styles.list}>
      <input className={styles.checkBox} type="checkbox" name="checkTask" onChange={handleCompleteTask}/>
      <p>{task}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash  size={24}/>
      </button>
    </div>
  )
}