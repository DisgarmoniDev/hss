import { tobacco } from "../../data/tobacco"

export default function TobaccoSuper() {

  return(
    <>
      {tobacco.map(nameTobacco => {
        if (nameTobacco.strength === 'Super') {
          return (
            <li key={nameTobacco.id}>{nameTobacco.name}</li>
          )
        }
        return false
        })}
    </>
  )
}