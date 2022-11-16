import { tobacco } from "../../data/tobacco"

export default function TobaccoEasy() {

  return(
    <>
      {tobacco.map(nameTobacco => {
        if (nameTobacco.strength === 'easy') {
          return (
            <li key={nameTobacco.id}>{nameTobacco.name}</li>
          )
        } 
        return false
      })}
    </>
  )
}