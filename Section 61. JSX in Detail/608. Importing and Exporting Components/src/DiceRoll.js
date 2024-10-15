import Die from "./Die";
import './DiceRoll.css'

export default function DiceRoll() {
  return (
    <div className="DiceRoll">
      <h1>Dice Roll</h1>
      <Die/>
      <Die/>
      <Die/>
    </div>
  )
}