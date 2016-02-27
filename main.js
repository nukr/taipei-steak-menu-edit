import Meal from './models'

;(async () => {
  await Meal.remove({category: 'sevenFive'})
  let meals = await Meal.find({category: 'normal'})
  meals = meals.map(meal => {
    meal = meal.toObject()
    delete meal._id
    delete meal.__v
    meal.price = Math.round((meal.price * 0.75 + 86) / 1.1)
    meal.category = 'sevenFive'
    return new Meal(meal).save()
  })

  await Promise.all(meals)
})().catch(console.log)
