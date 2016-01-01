import Meal from './models'
import menu from './menu'

let addMeals = menu.add.map(m => new Meal(m))

;(async () => {
  let removeResult = await Promise.all(menu.remove.concat(menu.add).map(m => Meal.remove(m)))
  console.log(removeResult)
  let addResult = await Promise.all(addMeals.map(meal => meal.save()))
  console.log(addResult)
})().catch(console.log)
