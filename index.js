const allFile = document.querySelector(`.all-file`)


const state = {
    drinks: []
}




// HEADER SECTION 

function renderHeaderSection() {

    const headerEl = document.querySelector(`.header-top`)

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

    const leftMenuEl = document.querySelector(`.left-menu`)

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
        alcoholicInputLeftEl1.setAttribute("type", "checkbox")
        alcoholicLiLeftEl1.append(alcoholicInputLeftEl1)

        const alcoholicLiLeftEl2 = document.createElement("li")
        alcoholicLiLeftEl2.innerText = "Alcoholic"
        const alcoholicInputLeftEl2 = document.createElement("input")
        alcoholicInputLeftEl2.setAttribute("name", "alcoholic")
        alcoholicInputLeftEl2.setAttribute("type", "checkbox")
        alcoholicLiLeftEl2.append(alcoholicInputLeftEl2)

        const alcoholicLiLeftEl3 = document.createElement("li")
        alcoholicLiLeftEl3.innerText = "Non-Alcoholic"
        const alcoholicInputLeftEl3 = document.createElement("input")
        alcoholicInputLeftEl3.setAttribute("name", "alcoholic")
        alcoholicInputLeftEl3.setAttribute("type", "checkbox")
        alcoholicLiLeftEl3.append(alcoholicInputLeftEl3)


        ulAlcoholicLeftEl.append(alcoholicLabel, alcoholicInputLeftEl1, alcoholicInputLeftEl2, alcoholicInputLeftEl3)
    }

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


    leftMenuEl.append(h2LeftMenu, alcoholicList, categoryList)
}


// MAIN SECTION

const mainSection = document.querySelector(`.main-section`)

function renderTopSection() {
    const topSection = document.createElement("section")
    topSection.setAttribute("class", "top-section")

    const listCards = document.createElement("ul")
    listCards.setAttribute("class", "list-cards")

    function renderCard() {
        const cardEl = document.createElement("li")
        cardEl.setAttribute("class", "card")

        const cardDivEl = document.createElement("div")

        const h3Name = document.createElement("h3")
        h3Name.iinnerText = "Sex on the Beach"

        const heartImgEl = document.createElement("img")
        heartImgEl.setAttribute("class", "favourite")
        heartImgEl.setAttribute("src", "https://image.flaticon.com/icons/png/512/1077/1077035.png")
        heartImgEl.setAttribute("alt", "Favourite")

        const drinkImgEl = document.createElement("img")
        drinkImgEl.setAttribute("class", "card-image")
        drinkImgEl.setAttribute("src", "https://cdn.diffords.com/contrib/stock-images/2018/05/5af309e6d4c55.jpg")
        drinkImgEl.setAttribute("alt", "Sex on the Beach")

        cardDivEl.append(h3Name, heartImgEl, drinkImgEl)
        cardEl.append(cardDivEl)
        listCards.append(cardEl)
    }

    mainSection.append(topSection)

}


function renderBottomSection() {
    const bottomSection = document.createElement("section")
    bottomSection.setAttribute("class", "bottom-section")

    const selectedCardDivEl = document.createElement("div")
    selectedCardDivEl.setAttribute("class", "bottom-section-card")

    const h3Name = document.createElement("h3")
    h3Name.iinnerText = "Sex on the Beach"

    const heartImgEl = document.createElement("img")
    heartImgEl.setAttribute("src", "https://image.flaticon.com/icons/png/512/1077/1077035.png")
    heartImgEl.setAttribute("class", "favourite")
    heartImgEl.setAttribute("alt", "Favourite")

    const drinkImgEl = document.createElement("img")
    drinkImgEl.setAttribute("class", "card-image")
    drinkImgEl.setAttribute("src", "https://cdn.diffords.com/contrib/stock-images/2018/05/5af309e6d4c55.jpg")
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
    instructionsText.innerText = "Here go the instructions Here go the instructions Here go the instructions..."

    const commentsSection = document.createElement("div")
    commentsSection.innerText = "Comments and ratings to come"

    selectedCardDivEl.append(h3Name, heartImgEl, drinkImgEl, h3IngredientsTitle, ingredientsList, h3InstructionsTitle, instructionsText, commentsSection)
    bottomSection.append(selectedCardDivEl)

    mainSection.append(bottomSection)
}


// RIGHT MENU

{/* <div class="favourites-section">
<h2>Favourites</h2>
<ul class="favourites-list">
  <li>
    <h3>Old Fashioned</h3>
  </li>
  <li>
    <h3>Old Fashioned</h3>
  </li>
</ul>
</div>

<div class="new-drink-form">
<h2>Create Your Own Drink</h2>
<label for="name">Name</label>
<input type="text" name="name">

<label for="categories">Category</label>
<select type="select" name="categories" id="">
  <option value disabled selected hidden>Select the Category</option>
  <option value="1">Ordinary Drink</option>
  <option value="2">Ordinary Drink</option>
  <option value="3">Ordinary Drink</option>
  <option value="4">Ordinary Drink</option>
  <option value="5">Ordinary Drink</option>
  <option value="6">Ordinary Drink</option>
</select>

<ul class="alcoholic-form">
  <label for="alcoholic">Alcoholic</label>
  <li><input name="alcoholic" type="radio">All</li>
  <li><input name="alcoholic" type="radio">Alcoholic</li>
  <li><input name="alcoholic" type="radio">Non-Alcoholic</li>
</ul>

<label for="ingredients">Ingredients</label>
<input type="text" name="ingredients">

<label for="instructions">Instructions</label>
<textarea name="instructions" rows="5" cols="20">
</textarea>

<button>
  Submit
</button>

</div>  */}








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
}

getDataFromSever()