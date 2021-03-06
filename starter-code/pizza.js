// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($pepper){
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    }
    else {
      $pepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').className = 'sauce sauce-white';
  }
  else {
    document.querySelector('.sauce').className = 'sauce';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').className = 'crust crust-gluten-free';
  }
  else {
    document.querySelector('.crust').className = 'crust';
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperonni){
    document.querySelector('.btn.btn-pepperonni').className = 'btn btn-pepperonni active';
  }else{
    document.querySelector('.btn.btn-pepperonni').className = 'btn btn-pepperonni';
  }

  if(state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').className = 'btn btn-mushrooms active';
  }else{
    document.querySelector('.btn.btn-mushrooms').className = 'btn btn-mushrooms';
  }

  if(state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').className = 'btn btn-green-peppers active';
  }else{
    document.querySelector('.btn.btn-green-peppers').className = 'btn btn-green-peppers';
  }

  if(state.whiteSauce){
    document.querySelector('.btn.btn-sauce').className = 'btn btn-sauce active';
  }else{
    document.querySelector('.btn.btn-sauce').className = 'btn btn-sauce';
  }

  if(state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').className = 'btn btn-crust active';
  }else{
    document.querySelector('.btn.btn-crust').className = 'btn btn-crust';
  }
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let precioFinal = basePrice
  if(state.pepperonni){
    document.getElementById('pepe').style.display = 'block'
    precioFinal+=ingredients.pepperonni.price
  }else{
    document.getElementById('pepe').style.display = 'none'
  }
  if(state.mushrooms){
    document.getElementById('mush').style.display = 'block'
    precioFinal+=ingredients.mushrooms.price
  }else{
    document.getElementById('mush').style.display = 'none'
  }
  if(state.greenPeppers){
    document.getElementById('green').style.display = 'block'
    precioFinal+=ingredients.greenPeppers.price
  }else{
    document.getElementById('green').style.display = 'none'
  }
  if(state.whiteSauce){
    document.getElementById('sauce').style.display = 'block'
    precioFinal+=ingredients.whiteSauce.price
  }else{
    document.getElementById('sauce').style.display = 'none'
  }
  if(state.glutenFreeCrust){
    document.getElementById('crust').style.display = 'block'
    precioFinal+=ingredients.glutenFreeCrust.price
  }else{
    document.getElementById('crust').style.display = 'none'
  }
  document.getElementById('precio').innerText = `$${precioFinal}`

}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}