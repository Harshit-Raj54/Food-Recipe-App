let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken";
let input = document.querySelector("#val1");
let sbn = document.querySelector("#sbn");
let main = document.querySelector(".food1");
let meal = document.querySelector("#Food");
let body2 = document.querySelector(".body2");

sbn.addEventListener("click" , () => {
    let val1 = input.value;
    let val = val1.charAt(0).toUpperCase() + val1.slice(1).toLowerCase();

    body2.innerText = val;
    let ans="";
    for(let a of val){
        if(a==" "){
            ans=ans+"_";
        }else{
            ans=ans+a;
        }
    }
    main.innerHTML = "";
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ans}`;
    data1();
})

let data;
const data1 = async () => {
    try{
        body2.style.display = "none";
        boddy1.style.display="flex";
        boddy1.innerText = "Please Wait we Loading your content";
        let response = await fetch(url);
        data = await response.json();
        for(let i=0;i<data.meals.length;i++){
            let divele = document.createElement("div");
            divele.classList.add("ffg");
            divele.innerHTML = `<img src=${data.meals[i].strMealThumb}><div class='food1_1'><p id='food_item'>${data.meals[i].strMeal}</p><br><p>Meal Area : ${data.meals[i].strArea}</p><br><p>Meal Category : ${data.meals[i].strCategory}</p><br><p>Instruction : ${data.meals[i].strInstructions}</p><br><p>Meal Ingrident : ${data.meals[i].strIngredient1} ${data.meals[i].strIngredient2} ${data.meals[i].strIngredient3} ${data.meals[i].strIngredient4} ${data.meals[i].strIngredient5} ${data.meals[i].strIngredient6} ${data.meals[i].strIngredient7} ${data.meals[i].strIngredient8} ${data.meals[i].strIngredient9} ${data.meals[i].strIngredient10} ${data.meals[i].strIngredient11} ${data.meals[i].strIngredient12} ${data.meals[i].strIngredient13} ${data.meals[i].strIngredient14} ${data.meals[i].strIngredient15} ${data.meals[i].strIngredient16} ${data.meals[i].strIngredient17} ${data.meals[i].strIngredient18} ${data.meals[i].strIngredient19} ${data.meals[i].strIngredient20}</p><br><p>Meal Measure : ${data.meals[i].strMeasure1} ${data.meals[i].strMeasure2} ${data.meals[i].strMeasure3} ${data.meals[i].strMeasure4} ${data.meals[i].strMeasure5} ${data.meals[i].strMeasure6} ${data.meals[i].strMeasure7} ${data.meals[i].strMeasure8} ${data.meals[i].strMeasure9} ${data.meals[i].strMeasure10} ${data.meals[i].strMeasure11} ${data.meals[i].strMeasure12} ${data.meals[i].strMeasure13} ${data.meals[i].strMeasure14} ${data.meals[i].strMeasure15} ${data.meals[i].strMeasure16} ${data.meals[i].strMeasure17} ${data.meals[i].strMeasure18} ${data.meals[i].strMeasure19} ${data.meals[i].strMeasure20} </p><br><p>Meal Youtube : <a href='${data.meals[i].strYoutube}'>Get Guide By YouTube</a></p><br><br><hr><br><br></div>`;
            main.append(divele);
        }
        boddy1.innerText = "";
        body2.style.display="flex";
        boddy1.style.display = "none";
    } catch (error){
        boddy1.innerText = "Check your Internet connection or Food Item is not found. Please try again!";
        boddy1.style.fontSize = "3rem";
        body2.style.display = "none";
    }
}

let boddy1 = document.querySelector(".boddy1");

window.addEventListener("load" , () => {
    jk();
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken`;
    data1();
})

let body3 = document.querySelector(".body3");
let body4 = document.querySelector(".body4");
let body5 = document.querySelector(".body5");
let body6 = document.querySelector(".body6");

let am = document.querySelector("#am")
const jk = () => {
    body2.style.display = "flex";
    body3.style.display = "block";
    body4.style.display = "none";
    body5.style.display = "none";
    body6.style.display = "flex";
    boddy1.style.display = "flex";
    if(boddy1.innerText == ""){
        boddy1.style.display="none"
    }
}
am.addEventListener("click",jk);

let bm = document.querySelector("#bm");
bm.addEventListener("click",() => {
    body2.style.display = "none";
    body3.style.display = "none";
    body4.style.display = "flex";
    body5.style.display = "none";
    body6.style.display = "flex";
    boddy1.style.display = "none";
})

let cm = document.querySelector("#cm");
cm.addEventListener("click" , () => {
    body2.style.display = "none";
    body3.style.display = "none";
    body4.style.display = "none";
    body5.style.display = "flex";
    body6.style.display = "flex";
    boddy1.style.display = "none";
})


