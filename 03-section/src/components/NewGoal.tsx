import { useRef, type FormEvent } from "react"

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = ({ onAddGoal } : NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    
    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    event.currentTarget.reset();
    
    onAddGoal(enteredGoal, enteredSummary)
  }

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor='goal'>Your Goal</label>
            <input 
                id='goal'
                type='text' 
                name='goal'
                ref={goal}
                required
            />
        </p>
        <p>
            <label htmlFor='goal'>Short Summary</label>
            <input 
                id='summary'
                type='text' 
                name='summary'
                ref={summary}
                required
            />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal