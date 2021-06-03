const allFile = document.querySelector(`.all-file`)
const headerEl = document.querySelector(`.header-top`)
const leftMenuEl = document.querySelector(`.left-menu`)
const mainSection = document.querySelector(`.main-section`)
const rightMenuEl = document.querySelector(`.right-menu`)

const state = {
  drinks: [],
  favourites: [],
  // filters: {
  //   alcoholic: "",
  //   categories: []
  // }
}



// const state = {
//   drinks: [
//     {
//       id: "17222",
//       name: "A1",
//       ingredients: ["Gin", "Grand Marnier", "Lemon Juice", "Grenadine"],
//       category: "Cocktail",
//       instructions:
//         "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
//       image:
//         "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
//       alcoholic: true,
//     },
//   ],
//   favourites: ["A1", "Margarita", "Mojito"]
// }


function getCategories() {
  const uniqueCategories = []

  for (const drink of state.drinks) {
    if (!uniqueCategories.includes(drink.category)) {
      uniqueCategories.push(drink.category)
    }
  }

  uniqueCategories.sort()

  return uniqueCategories
}



// HEADER SECTION 

function renderHeaderSection() {

  const iconHeaderEl = document.createElement("img")
  iconHeaderEl.setAttribute("class", "logo")


  const searchHeaderEl = document.createElement("input")
  searchHeaderEl.setAttribute("class", "search-header")
  searchHeaderEl.setAttribute("type", "search")
  searchHeaderEl.setAttribute("placeholerd", "Search")

  headerEl.append(iconHeaderEl, searchHeaderEl)

}

// LEFT MENU

function renderLeftMenu() {
  const h2LeftMenu = document.createElement("h2")
  h2LeftMenu.innerText = "Filter by Categories"

  const ulAlcoholicLeftEl = renderAlcoholicList()

  const categories = getCategories()
  const ulCategoryLeftEl = renderCategoriesList(categories)
  leftMenuEl.append(h2LeftMenu, ulAlcoholicLeftEl, ulCategoryLeftEl)

}

// ALCOHOLIC LIST
function renderAlcoholicList() {
  const ulAlcoholicLeftEl = document.createElement("ul")
  ulAlcoholicLeftEl.setAttribute("class", "alcoholic-filter-list")

  // const alcoholicFormEl = document.createAttribute("form")
  // // alcoholicFormEl.setAttribute("class", "alcoholic-form")

  // const alcoholicLabelEl = document.createAttribute("label")


  const alcoholicLiLeftEl1 = document.createElement("li")
  const alcoholicLabel1 = document.createElement("label")
  alcoholicLabel1.innerHTML = "All"
  const alcoholicInputLeftEl1 = document.createElement("input")
  alcoholicInputLeftEl1.setAttribute("name", "alcoholic")
  alcoholicInputLeftEl1.setAttribute("type", "radio")
  alcoholicInputLeftEl1.setAttribute("value", "All")

  alcoholicLabel1.append(alcoholicInputLeftEl1)
  alcoholicLiLeftEl1.append(alcoholicLabel1)

  const alcoholicLiLeftEl2 = document.createElement("li")
  const alcoholicLabel2 = document.createElement("label")
  alcoholicLabel2.innerHTML = "Alcoholic"
  const alcoholicInputLeftEl2 = document.createElement("input")
  alcoholicInputLeftEl2.setAttribute("name", "alcoholic")
  alcoholicInputLeftEl2.setAttribute("type", "radio")
  alcoholicInputLeftEl2.setAttribute("value", "Alcoholic")

  alcoholicLabel2.append(alcoholicInputLeftEl2)
  alcoholicLiLeftEl2.append(alcoholicLabel2)

  const alcoholicLiLeftEl3 = document.createElement("li")
  const alcoholicLabel3 = document.createElement("label")
  alcoholicLabel3.innerHTML = "Non-Alcoholic"
  const alcoholicInputLeftEl3 = document.createElement("input")
  alcoholicInputLeftEl3.setAttribute("name", "alcoholic")
  alcoholicInputLeftEl3.setAttribute("type", "radio")
  alcoholicInputLeftEl3.setAttribute("value", "Non-Alcoholic")
  alcoholicLabel3.append(alcoholicInputLeftEl3)
  alcoholicLiLeftEl3.append(alcoholicLabel3)

  // alcoholicLabelEl.addEventListener("change", function () {
  //   state.drinks.alcoholic = ulAlcoholicLeftEl.value;
  //   renderTopSection();
  //   return alcoholicLabelEl
  // });

  // alcoholicLabelEl.append(alcoholicLiLeftEl1, alcoholicLiLeftEl2, alcoholicLiLeftEl3)
  // alcoholicFormEl.append(alcoholicLableEl)
  // ulAlcoholicLeftEl.appendChild(alcoholicFormEl)
  ulAlcoholicLeftEl.append(alcoholicLiLeftEl1, alcoholicLiLeftEl2, alcoholicLiLeftEl3)

  return ulAlcoholicLeftEl
}


// CATEGORY LIST
function renderCategoriesListItem(category) {


  const categoryLiLeftEl = document.createElement("li")
  const categoryLabel = document.createElement("label")
  categoryLabel.innerText = category
  const categoryInputLeftEl = document.createElement("input")

  categoryInputLeftEl.setAttribute("name", "category")
  categoryInputLeftEl.setAttribute("type", "checkbox")

  categoryLabel.append(categoryInputLeftEl)
  categoryLiLeftEl.append(categoryLabel)

  return categoryLiLeftEl
}


function renderCategoriesList(categories) {
  const ulCategoryLeftEl = document.createElement("ul")
  ulCategoryLeftEl.setAttribute("class", "category-filter-list")

  const categoryFormEl = document.createElement("form")
  categoryFormEl.setAttribute("class", "checkbox-form")

  const categoryFormLabel = document.createElement("label")
  categoryFormEl.append(categoryFormLabel)


  for (const category of categories) {
    const liEl = renderCategoriesListItem(category)

    // ulCategoryLeftEl.append(liEl)
    categoryFormLabel.append(liEl)
    categoryFormEl.append(categoryFormLabel)
  }
  // return ulCategoryLeftEl
  return categoryFormEl
}


// MAIN SECTION

function renderTopSection() {
  const topSection = document.createElement("section")
  topSection.setAttribute("class", "top-section")

  const listCards = renderCards(state.drinks)

  topSection.append(listCards)
  mainSection.prepend(topSection)

  console.log("Drinks", listCards)
}

function renderCards(drinks) {
  const listCards = document.createElement("ul")
  listCards.setAttribute("class", "list-cards")
  for (const drink of drinks) {
    const newDrink = renderCard(drink)
    listCards.append(newDrink)
  }

  return listCards
}

function renderCard(drink) {
  const cardEl = document.createElement("li")
  cardEl.setAttribute("class", "card")

  const cardDivEl = document.createElement("div")

  const h3Name = document.createElement("h3")
  h3Name.innerText = drink.name

  const heartImgEl = document.createElement("img")
  heartImgEl.setAttribute("class", "favourite")
  heartImgEl.setAttribute(
    "src",
    "https://image.flaticon.com/icons/png/512/1077/1077035.png"
  )
  heartImgEl.setAttribute("alt", "Favourite")

  heartImgEl.addEventListener("click", function () {
    if (state.favourites.includes(drink.name)) return
    console.log(`added ${drink.name} to favourites!`)
    state.favourites = [...state.favourites, drink.name]
    rightMenuEl.innerHTML = ""
    renderRightMenu()
  })

  const drinkImgEl = document.createElement("img")
  drinkImgEl.setAttribute("class", "card-image")
  drinkImgEl.setAttribute(
    "src",
    drink.image
  )
  drinkImgEl.setAttribute("alt", drink.name)

  drinkImgEl.addEventListener("click", function () {
    mainSection.innerHTML = ""
    renderBottomSection(drink)

  })

  cardDivEl.append(h3Name, heartImgEl, drinkImgEl)
  cardEl.append(cardDivEl)
  return cardEl
}

function renderBottomSection(drink) {

  const bottomSection = document.createElement("section")
  bottomSection.setAttribute("class", "bottom-section")

  const selectedCardDivEl = document.createElement("div")
  selectedCardDivEl.setAttribute("class", "bottom-section-card")

  const h3Name = document.createElement("h3")
  h3Name.innerText = drink.name

  const heartImgEl = document.createElement("img")
  heartImgEl.setAttribute(
    "src",
    "https://image.flaticon.com/icons/png/512/1077/1077035.png"
  )
  heartImgEl.setAttribute("class", "favourite")
  heartImgEl.setAttribute("alt", "Favourite")

  const deleteButtonBottomEl = document.createElement("button")
  deleteButtonBottomEl.innerText = "X"
  deleteButtonBottomEl.addEventListener("click", function () {
    mainSection.innerHTML = ""
    renderTopSection()
  })

  const drinkImgEl = document.createElement("img")
  drinkImgEl.setAttribute("class", "card-image")
  drinkImgEl.setAttribute(
    "src",
    drink.image
  )
  drinkImgEl.setAttribute("alt", drink.name)

  const h3IngredientsTitle = document.createElement("h3")
  h3IngredientsTitle.innerText = "Ingredients:"

  const ingredientsList = document.createElement("ul")
  ingredientsList.setAttribute("class", "ingredients-list")

  const ingredientsListItem = document.createElement("li")
  ingredientsListItem.innerText = drink.ingredients

  ingredientsList.append(ingredientsListItem)

  const h3InstructionsTitle = document.createElement("h3")
  h3InstructionsTitle.innerText = "Instructions:"

  const instructionsText = document.createElement("p")
  instructionsText.innerText =
    drink.instructions

  const commentsSection = document.createElement("div")
  commentsSection.innerText = "Comments and ratings to come"

  selectedCardDivEl.append(
    h3Name,
    heartImgEl,
    deleteButtonBottomEl,
    drinkImgEl,
    h3IngredientsTitle,
    ingredientsList,
    h3InstructionsTitle,
    instructionsText,
    commentsSection
  )

  bottomSection.append(selectedCardDivEl)

  mainSection.append(bottomSection)

  return bottomSection
}


// RIGHT MENU


// FAVOURITE SECTION
function renderRightMenu() {

  // FAVOURITE LIST
  const favouritesDivEl = document.createElement("div")
  favouritesDivEl.setAttribute("class", "favourites-section")

  const favouritesh2El = document.createElement("h2")
  favouritesh2El.innerText = "Favourites"

  const favouritesUlEl = favouritesList(state.favourites)

  // const favouritesUlEl = favouritesList()
  favouritesDivEl.append(favouritesh2El, favouritesUlEl)
  // NEW DRINK FORM
  const newDrinkDivEl = newDrinkForm()

  // APPEND ITEMS
  rightMenuEl.append(favouritesDivEl, newDrinkDivEl)


}

function favouritesList() {

  const favouritesUlEl = document.createElement("ul")
  favouritesUlEl.setAttribute("class", "favourites-list")
  for (const favourite of state.favourites) {
    const favouritesLiEl = favouriteListItem(favourite)
    favouritesUlEl.append(favouritesLiEl)
  }

  return favouritesUlEl
}

function favouriteListItem(favourite) {
  const favouritesLiEl = document.createElement("li")
  const favouritesh3El = document.createElement("h3")
  favouritesh3El.innerText = favourite

  const deleteButton = document.createElement("button")
  deleteButton.innerText = "X"
  deleteButton.addEventListener("click", function () {
    console.log(`Deleted ${favourite} !!`)
    state.favourites = state.favourites.filter(function (targetFavourite) {
      return targetFavourite !== favourite
    })
    rightMenuEl.innerHTML = ""
    renderRightMenu()
  })

  favouritesLiEl.append(favouritesh3El, deleteButton)
  return favouritesLiEl
}


function newDrinkForm() {

  const newDrinkDivEl = document.createElement("div")
  newDrinkDivEl.setAttribute("class", "new-drink-form")

  const newDrinkFormEl = document.createElement("form")
  newDrinkFormEl.setAttribute("class", "new-drink-form")
  newDrinkFormEl.setAttribute("autocomplete", "off")

  const newDrinkh2EL = document.createElement("h2")
  newDrinkh2EL.innerText = "Create Your Own Drink"

  // NAME
  const newDrinkNameLabelEl = document.createElement("label")
  newDrinkNameLabelEl.innerText = "Name"
  newDrinkNameLabelEl.setAttribute("for", "name")

  const newDrinkNameInputEl = document.createElement("input")
  newDrinkNameInputEl.setAttribute("type", "text")
  newDrinkNameInputEl.setAttribute("name", "name")
  newDrinkNameLabelEl.append(newDrinkNameInputEl)

  // CATEGORY
  const newDrinkCategoriesLabelEl = document.createElement("label")
  newDrinkCategoriesLabelEl.innerText = "Category"
  newDrinkCategoriesLabelEl.setAttribute("for", "categories")

  const newDrinkCategoriesSelectEl = document.createElement("select")
  newDrinkCategoriesSelectEl.setAttribute("type", "select")
  newDrinkCategoriesSelectEl.setAttribute("name", "categories")

  const newDrinkCategoriesOptionEl = document.createElement("option")
  newDrinkCategoriesOptionEl.innerText = "Ordinary Drink"
  newDrinkCategoriesOptionEl.setAttribute("value", "1?????")
  newDrinkCategoriesSelectEl.append(newDrinkCategoriesOptionEl)
  newDrinkCategoriesLabelEl.append(newDrinkCategoriesSelectEl)

  // ALCOHOLIC
  const newDrinkAlcoholicFormUlEl = document.createElement("ul")
  newDrinkAlcoholicFormUlEl.setAttribute("class", "alcoholic-form")

  const newDrinkAlcoholicFormLiEl1 = document.createElement("li")
  const newDrinkAlcoholicFormLabelEl1 = document.createElement("label")
  newDrinkAlcoholicFormLabelEl1.innerText = "All"
  const newDrinkAlcoholicFormInputEl1 = document.createElement("input")
  newDrinkAlcoholicFormInputEl1.setAttribute("name", "alcoholic")
  newDrinkAlcoholicFormInputEl1.setAttribute("type", "radio")
  newDrinkAlcoholicFormLabelEl1.append(newDrinkAlcoholicFormInputEl1)
  newDrinkAlcoholicFormLiEl1.append(newDrinkAlcoholicFormLabelEl1)

  const newDrinkAlcoholicFormLiEl2 = document.createElement("li")
  const newDrinkAlcoholicFormLabelEl2 = document.createElement("label")
  newDrinkAlcoholicFormLabelEl2.innerText = "Alcoholic"
  const newDrinkAlcoholicFormInputEl2 = document.createElement("input")
  newDrinkAlcoholicFormInputEl2.setAttribute("name", "alcoholic")
  newDrinkAlcoholicFormInputEl2.setAttribute("type", "radio")
  newDrinkAlcoholicFormLabelEl2.append(newDrinkAlcoholicFormInputEl2)
  newDrinkAlcoholicFormLiEl2.append(newDrinkAlcoholicFormLabelEl2)

  const newDrinkAlcoholicFormLiEl3 = document.createElement("li")
  const newDrinkAlcoholicFormLabelEl3 = document.createElement("label")
  newDrinkAlcoholicFormLabelEl3.innerText = "Non-Alcoholic"
  const newDrinkAlcoholicFormInputEl3 = document.createElement("input")
  newDrinkAlcoholicFormInputEl3.setAttribute("name", "alcoholic")
  newDrinkAlcoholicFormInputEl3.setAttribute("type", "radio")
  newDrinkAlcoholicFormLabelEl3.append(newDrinkAlcoholicFormInputEl3)
  newDrinkAlcoholicFormLiEl3.append(newDrinkAlcoholicFormLabelEl3)

  newDrinkAlcoholicFormUlEl.append(newDrinkAlcoholicFormLiEl1, newDrinkAlcoholicFormLiEl2, newDrinkAlcoholicFormLiEl3)


  // INGREDIENTS
  const newDrinksIngredientsLabelEl = document.createElement("label")
  newDrinksIngredientsLabelEl.innerText = "Ingredients"
  newDrinksIngredientsLabelEl.setAttribute("for", "ingredients")

  const newDrinksIngredientsInputEl = document.createElement("input")
  newDrinksIngredientsInputEl.setAttribute("type", "text")
  newDrinksIngredientsInputEl.setAttribute("name", "ingredients")
  newDrinksIngredientsLabelEl.append(newDrinksIngredientsInputEl)

  // INSTRUCTIONS
  const newDrinksInstructionsLabelEl = document.createElement("label")
  newDrinksInstructionsLabelEl.innerText = "Instructions"
  newDrinksInstructionsLabelEl.setAttribute("for", "instructions")

  const newDrinksInstructionsTextAreaEl = document.createElement("textarea")
  newDrinksInstructionsTextAreaEl.setAttribute("name", "instructions")
  newDrinksInstructionsTextAreaEl.setAttribute("rows", "5")
  newDrinksInstructionsTextAreaEl.setAttribute("cols", "20")
  newDrinksInstructionsLabelEl.append(newDrinksInstructionsTextAreaEl)

  // SUBMIT BUTTON

  const newDrinkSubmitButtonEl = document.createElement("button")
  newDrinkSubmitButtonEl.setAttribute("type", "submit");
  newDrinkSubmitButtonEl.innerText = "SUBMIT"

  newDrinkDivEl.append(newDrinkh2EL, newDrinkNameLabelEl, newDrinkCategoriesLabelEl, newDrinkAlcoholicFormUlEl, newDrinksIngredientsLabelEl, newDrinksInstructionsLabelEl, newDrinkSubmitButtonEl)


  return newDrinkDivEl
}


// CREATE ANOTHER JSON SERVER WITH THE CATEGORIES

function getDataFromSever() {
  fetch("http://localhost:3000/drinks")
    .then((response) => response.json())
    .then((drinksdata) => {
      state.drinks = drinksdata;
      renderLeftMenu()
      renderTopSection()
      console.log(state.drinks)
    })

}



function render() {
  renderHeaderSection()
  renderRightMenu()
}


getDataFromSever()
render()
