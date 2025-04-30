import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button>Display User</button>
      <button>Clear</button>

      <div className="output">
        {/* Display the greeting here */}
      </div>
    </div>
  )
}

export default App
