const userIngredients = [];
//const userIngredients = ['water'];  USE THIS if we get fancier api search working
document.getElementById("bar").innerHTML = ''

$(".dropdown-menu").on('click', '.dropdown-item', function () {
    const ingredient = $(this).text();
    userIngredients.indexOf(ingredient) === -1 ? userIngredients.push(ingredient) : console.log('this item already exists');
    console.log(userIngredients);
    const bar = document.getElementById("bar")
    const ul = document.createElement("ul")
    bar.textContent = ""
    for (i = 0; i < userIngredients.length; i++) {
        const li = document.createElement("li")
        li.textContent = userIngredients[i]
        ul.append(li)
    }
    bar.append(ul);
    console.log(userIngredients);
    // On Search 
    $(document).on('click', '.search-button', function () {
        sendIngredients(userIngredients);
    });
});

function sendIngredients() {
    window.localStorage.removeItem("ingredients");
    // If ingredients are empty
    if (userIngredients !== "") {
        var ingredients =
            JSON.parse(window.localStorage.getItem("ingredients")) || [];


        var newIngredients = {
            ingredients: userIngredients
        };

        // Save to Local Storage
        ingredients.push(newIngredients);
        window.localStorage.setItem("ingredients", JSON.stringify(ingredients));
    }
}