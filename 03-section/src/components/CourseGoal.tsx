import {  type FC, type PropsWithChildren } from "react"

type CourseGoalProps = PropsWithChildren<{ 
  id: number;
  title: string; 
  onDeleteGoal: (id: number) => void;
}>

const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDeleteGoal }) => {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal