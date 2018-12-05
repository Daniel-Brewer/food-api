fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food.name, food.type, food.ethnicity);
            addFoodToDom(foodAsHTML);
        });
    });
//     Create a DOM element in your index.html with a class of foodList.
// Create a function which returns a string template. The template is the HTML representation for a food item.

const h2 = (name, style) => {
    return `<h2 class="${style}">${name}</h2>`;
};
const h3 = (name, style) => {
    return `<h3 class="${style}">${name}</h3>`;
};

let foodFactory = (name, type, ethnicity) => {
    return `<div class="fooddiv">
                ${h2(name, "h2")}
                ${h3(type, "h3")}
                ${h3(ethnicity, "h3")}
            </div>`;
};

// Create a function that inserts an HTML representation of a food into the DOM


let addFoodToDom = (stringReceived) => {
    document.querySelector(".foodlist").innerHTML += stringReceived;
    };


