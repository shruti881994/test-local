let food = document.querySelector('.food');

let mexican = document.querySelector('#mexican');
let candian = document.querySelector('#candian');
let italian = document.querySelector('#italian');
let thai = document.querySelector('#thai');
let russian = document.querySelector('#russian');

let recipe;
// fetching data from api

const fetchData = async (area)=>{
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await api.json();
    recipe = data.meals;
    showData(recipe);
}

fetchData('canadian');

// to show data in html writing this function
let showData =(items)=>{
    food.innerHTML = items.map((meal)=>
        `<div style="text-align:center">
    <div>
    <img src=${meal.strMealThumb} class='img' >
    </div>
    <div class="heading">
    <h3>${meal.strMeal}</h3>
    </div>
    </div>`).join(" ")

}

// on click button show recipes

mexican.addEventListener('click', ()=>{
    fetchData('mexican');
})
candian.addEventListener('click', ()=>{
    fetchData('candian');
})
italian.addEventListener('click', ()=>{
    fetchData('italian');
})
thai.addEventListener('click', ()=>{
    fetchData('thai');
})
russian.addEventListener('click', ()=>{
    fetchData('russian');
})


// creating function for search calling search api

const search = ()=>{
    let input = document.querySelector('#search');
    input.addEventListener('keydown', async (e)=>{
        if(e.key === 'Enter'){
            let inputVal = input.value;
            console.log(inputVal)
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`);
            const searchData = await api.json();
            recipe = searchData.meals;
            showData(recipe);
        }
    })
}
search();
