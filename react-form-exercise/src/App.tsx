import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'

type FormData = {
  firstname: string,
  lastname: string,
  age: number,
  favoriteFoods: string[]
}

function App() {
  
  const [isMessageShown, setMessageShown] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: []
  }) 

  const handleShowMessage = (e: FormEvent) => {
    e.preventDefault()
    setMessageShown(true)
  }

  const handleHideMessage = (e: FormEvent) => {
    e.preventDefault()
    setMessageShown(false)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prevState => {
      const markedFood = checked ?
      [...prevState.favoriteFoods, value] :
      prevState.favoriteFoods.filter(food => food !== value)

      return {
        ...prevState,
        favoriteFoods: markedFood
      }
    })
  }

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" value={formData.firstname} id="firstname" name="firstname" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" value={formData.lastname} id="lastname" name="lastname" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" value={formData.age} id="age" name="age" onChange={handleChange}/>
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" checked={formData.favoriteFoods.includes("Chicken")} onChange={handleCheckBoxChange}/>
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" checked={formData.favoriteFoods.includes("Beef")} onChange={handleCheckBoxChange}/>
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" checked={formData.favoriteFoods.includes("Vegetables")} onChange={handleCheckBoxChange}/>
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" checked={formData.favoriteFoods.includes("Dessert")} onChange={handleCheckBoxChange}/>
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" checked={formData.favoriteFoods.includes("Pork")} onChange={handleCheckBoxChange}/>
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleShowMessage}>Display User</button>
      <button onClick={handleHideMessage}>Clear</button>

      <div className="output">
        {isMessageShown && (
          <p>{`Hello, ${formData.firstname} ${formData.lastname}. 
          You're ${formData.age} years old. 
          Your favourite foods are: ${formData.favoriteFoods.join(", ")}`}</p>
        )}
      </div>
    </div>
  )
}

export default App
