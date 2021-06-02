const allFile = document.querySelector(`.all-file`)
const headerEl = document.querySelector(`.header-top`)
const leftMenuEl = document.querySelector(`.left-menu`)
const mainSection = document.querySelector(`.main-section`)
const rightMenuEl = document.querySelector(".right-menu")

// const state = {
//     drinks: [],
//     categories: []
// }

const state = {
    drinks: [
        {
            id: "17222",
            name: "A1",
            ingredients: ["Gin", "Grand Marnier", "Lemon Juice", "Grenadine"],
            category: "Cocktail",
            instructions:
                "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
            image:
                "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
            alcoholic: true,
        },
    ],
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


    function alcoholicList() {
        // ALCOHOLIC LIST
        const ulAlcoholicLeftEl = document.createElement("ul")
        ulAlcoholicLeftEl.setAttribute("class", "alcoholic-filter-list")


        const alcoholicLabel = document.createElement("label")
        alcoholicLabel.setAttribute("for", "alcoholic")

        const alcoholicLiLeftEl1 = document.createElement("li")
        alcoholicLiLeftEl1.innerText = "All"
        const alcoholicInputLeftEl1 = document.createElement("input")
        alcoholicInputLeftEl1.setAttribute("name", "alcoholic")
        alcoholicInputLeftEl1.setAttribute("type", "radio")
        alcoholicLiLeftEl1.append(alcoholicInputLeftEl1)

        const alcoholicLiLeftEl2 = document.createElement("li")
        alcoholicLiLeftEl2.innerText = "Alcoholic"
        const alcoholicInputLeftEl2 = document.createElement("input")
        alcoholicInputLeftEl2.setAttribute("name", "alcoholic")
        alcoholicInputLeftEl2.setAttribute("type", "radio")
        alcoholicLiLeftEl2.append(alcoholicInputLeftEl2)

        const alcoholicLiLeftEl3 = document.createElement("li")
        alcoholicLiLeftEl3.innerText = "Non-Alcoholic"
        const alcoholicInputLeftEl3 = document.createElement("input")
        alcoholicInputLeftEl3.setAttribute("name", "alcoholic")
        alcoholicInputLeftEl3.setAttribute("type", "radio")
        alcoholicLiLeftEl3.append(alcoholicInputLeftEl3)


        ulAlcoholicLeftEl.append(alcoholicLabel, alcoholicInputLeftEl1, alcoholicInputLeftEl2, alcoholicInputLeftEl3)
    }

    alcoholicList()

    function categoryList() {

        // CATEGORY LIST
        const ulCategoryLeftEl = document.createElement("ul")
        ulCategoryLeftEl.setAttribute("class", "category-filter-list")

        const categoryLabel = document.createElement("label")
        categoryLabel.setAttribute("for", "category")

        const categoryLiLeftEl = document.createElement("li")
        categoryLiLeftEl.innerText = "Ordinary Drink"
        const categoryInputLeftEl = document.createElement("input")
        categoryInputLeftEl.setAttribute("name", "category")
        categoryInputLeftEl.setAttribute("type", "checkbox")
        categoryLiLeftEl.append(categoryInputLeftEl)
    }
    categoryList()

    leftMenuEl.append(h2LeftMenu, alcoholicList, categoryList)
}


// MAIN SECTION

function renderTopSection(drinks) {
  const topSection = document.createElement("section")
  topSection.setAttribute("class", "top-section")

  const listCards = document.createElement("ul")
  listCards.setAttribute("class", "list-cards")

  topSection.append(listCards)
  mainSection.append(topSection)

  function renderCards(drinks) {
    for (const drink of drinks) {
      const newDrink = renderCard(drink)
      console.log(drink)
      listCards.append(newDrink)
    }
  }
  renderCards(drinks)
}

function renderCard(drink) {
  const cardEl = document.createElement("li")
  cardEl.setAttribute("class", "card")

  const cardDivEl = document.createElement("div")

  const h3Name = document.createElement("h3")
  h3Name.innerText = drink.name
  console.log(drink.name)

  const heartImgEl = document.createElement("img")
  heartImgEl.setAttribute("class", "favourite")
  heartImgEl.setAttribute(
    "src",
    "https://image.flaticon.com/icons/png/512/1077/1077035.png"
  )
  heartImgEl.setAttribute("alt", "Favourite")

  const drinkImgEl = document.createElement("img")
  drinkImgEl.setAttribute("class", "card-image")
  drinkImgEl.setAttribute(
    "src",
    "https://cdn.diffords.com/contrib/stock-images/2018/05/5af309e6d4c55.jpg"
  )
  drinkImgEl.setAttribute("alt", drink.name)

  cardDivEl.append(h3Name, heartImgEl, drinkImgEl)
  cardEl.append(cardDivEl)
  console.log(cardEl)
  return cardEl
}

function renderBottomSection() {
  const bottomSection = document.createElement("section")
  bottomSection.setAttribute("class", "bottom-section")

  const selectedCardDivEl = document.createElement("div")
  selectedCardDivEl.setAttribute("class", "bottom-section-card")

  const h3Name = document.createElement("h3")
  h3Name.iinnerText = "Sex on the Beach"

  const heartImgEl = document.createElement("img")
  heartImgEl.setAttribute(
    "src",
    "https://image.flaticon.com/icons/png/512/1077/1077035.png"
  )
  heartImgEl.setAttribute("class", "favourite")
  heartImgEl.setAttribute("alt", "Favourite")

  const drinkImgEl = document.createElement("img")
  drinkImgEl.setAttribute("class", "card-image")
  drinkImgEl.setAttribute(
    "src",
    "https://cdn.diffords.com/contrib/stock-images/2018/05/5af309e6d4c55.jpg"
  )
  drinkImgEl.setAttribute("alt", "Sex on the Beach")

  const h3IngredientsTitle = document.createElement("h3")
  h3IngredientsTitle.innerText = "Ingredients:"

  const ingredientsList = document.createElement("ul")
  ingredientsList.setAttribute("class", "ingredients-list")

  const ingredientsListItem = document.createElement("li")
  ingredientsListItem.innerText = "Lemons"

  ingredientsList.append(ingredientsListItem)

  const h3InstructionsTitle = document.createElement("h3")
  h3InstructionsTitle.innerText = "Instructions:"

  const instructionsText = document.createElement("p")
  instructionsText.innerText =
    "Here go the instructions Here go the instructions Here go the instructions..."

  const commentsSection = document.createElement("div")
  commentsSection.innerText = "Comments and ratings to come"

  selectedCardDivEl.append(
    h3Name,
    heartImgEl,
    drinkImgEl,
    h3IngredientsTitle,
    ingredientsList,
    h3InstructionsTitle,
    instructionsText,
    commentsSection
  )
  bottomSection.append(selectedCardDivEl)

  mainSection.append(bottomSection)
}


// RIGHT MENU


// FAVOURITE SECTION
function renderRightMenu() {

    function favouritesList() {

        const favouritesDivEl = document.createElement("div")
        favouritesDivEl.setAttribute("class", "favourites-section")

        const favouritesh2El = document.createElement("h2")
        favouritesh2El.innerText = "Favourites"

        const favouritesUlEl = document.createElement("ul")
        favouritesUlEl.setAttribute("class", "favourites-list")

        const favouritesLiEl = document.createElement("li")
        favouritesUlEl.append(favouritesLiEl)
        const favouritesh3El = document.createElement("h3")
        favouritesh3El.innerText = ""
        favouritesLiEl.append(favouritesh3El)

        favouritesDivEl.append(favouritesh2El, favouritesUlEl)
    }

    function newDrinkForm() {

        const newDrinkDivEl = document.createElement("div")
        newDrinkDivEl.setAttribute("class", "new-drink-form")

        const newDrinkh2EL = document.createElement("h2")
        newDrinkh2EL.innerText = "Create Your Own Drink"

        // NAME
        const newDrinkNameLabelEl = document.createElement("label")
        newDrinkNameLabelEl.setAttribute("for", "name")
        newDrinkNameLabelEl.innerText = "Name"

        const newDrinkNameInputEl = document.createElement("input")
        newDrinkNameInputEl.setAttribute("type", "text")
        newDrinkNameInputEl.setAttribute("name", "name")

        // CATEGORY
        const newDrinkCategoriesLabelEl = document.createElement("label")
        newDrinkCategoriesLabelEl.setAttribute("for", "categories")
        newDrinkCategoriesLabelEl.innerText = "Category"

        const newDrinkCategoriesSelectEl = document.createElement("select")
        // newDrinkCategoriesSelectEl.setAttribute("id", "")
        newDrinkCategoriesSelectEl.setAttribute("type", "select")
        newDrinkCategoriesSelectEl.setAttribute("name", "categories")

        const newDrinkCategoriesOptionEl = document.createElement("option")
        newDrinkCategoriesOptionEl.innerText = "Ordinary Drink"
        newDrinkCategoriesOptionEl.setAttribute("value", "1?????")
        newDrinkCategoriesSelectEl.append(newDrinkCategoriesOptionEl)

        // ALCOHOLIC
        const newDrinkAlcoholicFormUlEl = document.createElement("ul")
        newDrinkAlcoholicFormUlEl.setAttribute("class", "alcoholic-form")


        const newDrinkAlcoholicFormLabelEl = document.createElement("label")
        newDrinkAlcoholicFormLabelEl.setAttribute("for", "alcoholic")
        newDrinkAlcoholicFormLabelEl.innerText = "Alcoholic"


        const newDrinkAlcoholicFormLiEl1 = document.createElement("li")
        newDrinkAlcoholicFormLiEl1.innerText = "All"
        const newDrinkAlcoholicFormInputEl1 = document.createElement("input")
        newDrinkAlcoholicFormInputEl1.setAttribute("name", "alcoholic")
        newDrinkAlcoholicFormInputEl1.setAttribute("type", "radio")
        newDrinkAlcoholicFormLiEl1.append(newDrinkAlcoholicFormInputEl1)

        const newDrinkAlcoholicFormLiEl2 = document.createElement("li")
        newDrinkAlcoholicFormLiEl2.innerText = "All"
        const newDrinkAlcoholicFormInputEl2 = document.createElement("input")
        newDrinkAlcoholicFormInputEl2.setAttribute("name", "alcoholic")
        newDrinkAlcoholicFormInputEl2.setAttribute("type", "radio")
        newDrinkAlcoholicFormLiEl2.append(newDrinkAlcoholicFormInputEl2)

        const newDrinkAlcoholicFormLiEl3 = document.createElement("li")
        newDrinkAlcoholicFormLiEl3.innerText = "All"
        const newDrinkAlcoholicFormInputEl3 = document.createElement("input")
        newDrinkAlcoholicFormInputEl3.setAttribute("name", "alcoholic")
        newDrinkAlcoholicFormInputEl3.setAttribute("type", "radio")
        newDrinkAlcoholicFormLiEl3.append(newDrinkAlcoholicFormInputEl3)

        newDrinkAlcoholicFormUlEl.append(newDrinkAlcoholicFormLabelEl, newDrinkAlcoholicFormLiEl1, newDrinkAlcoholicFormLiEl2, newDrinkAlcoholicFormLiEl3)


        // INGREDIENTS
        const newDrinksIngredientsLabelEl = document.createElement("label")
        newDrinksIngredientsLabelEl.setAttribute("for", "ingredients")
        newDrinksIngredientsLabelEl.innerText = "Ingredients"

        const newDrinksIngredientsInputEl = document.createElement("input")
        newDrinksIngredientsInputEl.setAttribute("type", "text")
        newDrinksIngredientsInputEl.setAttribute("name", "ingredients")

        // INSTRUCTIONS
        const newDrinksInstructionsLabelEl = document.createElement("label")
        newDrinksInstructionsLabelEl.setAttribute("for", "instructions")
        newDrinksInstructionsLabelEl.innerText = "Instructions"

        const newDrinksInstructionsTextAreaEl = document.createElement("textarea")
        newDrinksInstructionsTextAreaEl.setAttribute("name", "instructions")
        newDrinksInstructionsTextAreaEl.setAttribute("rows", "5")
        newDrinksInstructionsTextAreaEl.setAttribute("cols", "20")

        // SUBMIT BUTTON

        const newDrinkSubmitButtonEl = document.createElement("button")
        newDrinkSubmitButtonEl.innerText = "SUBMIT"

        newDrinkDivEl.append(newDrinkh2EL, newDrinkNameLabelEl, newDrinkNameInputEl, newDrinkCategoriesLabelEl, newDrinkCategoriesSelectEl, newDrinkAlcoholicFormUlEl, newDrinksIngredientsLabelEl, newDrinksIngredientsLabelEl, newDrinksInstructionsLabelEl, newDrinksInstructionsTextAreaEl, newDrinkSubmitButton)
    }

    rightMenuEl.append(favouritesDivEl, newDrinkDivEl)
    favouritesList()
    newDrinkForm()
}

// CREATE ANOTHER JSON SERVER WITH THE CATEGORIES





function getDataFromSever() {
    fetch("http://localhost:3000/drinks")
        .then((response) => response.json())
        .then((drinksdata) => {
            state.drinks = drinksdata;
            render();
        });
});
}




function render() {
    renderHeaderSection()
    renderLeftMenu()
    renderTopSection()
    renderBottomSection()
    renderRightMenu()
}

getDataFromSever()
