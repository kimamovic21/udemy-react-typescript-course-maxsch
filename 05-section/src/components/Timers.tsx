import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers?.map((timer => (
          <li key={timer.name}>
            <Timer {...timer} />
          </li>
        )
      ))}
    </ul>
  );
}

export default Timers;