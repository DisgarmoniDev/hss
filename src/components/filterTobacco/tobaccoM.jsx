import { tobacco } from "../../data/tobacco"

export default function TobaccoMedium() {

  return(
    <>
      {tobacco.map(nameTobacco => {
        if (nameTobacco.strength === 'medium') {
          return (
            <li key={nameTobacco.id}>{nameTobacco.name}</li>
          )
        }
        return false
        })}
    </>
  )
}