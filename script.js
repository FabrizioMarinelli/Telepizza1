document.addEventListener("DOMContentLoaded", (event) => {
  // Inicializar contadores de ingredientes
  let ingredientCounters = {
    sausage: 0,
    queso: 0,
    aceituna: 0,
    huevo: 0,
    cebolla: 0,
  };

  // Actualizar el total de ingredientes
  function updateTotalIngredients() {
    const totalCount = Object.values(ingredientCounters).reduce(
      (a, b) => a + b,
      0
    );
    document.querySelector(".totalIngredientes").textContent = totalCount;
  }

  document.getElementById("confirm").addEventListener("click", function () {
    document.getElementById("pizzaCreator").style.display = "none";
    document.getElementById("pizzaAprobada").style.display = "block";
  });

  // Función para incrementar la cantidad de un ingrediente
  window.increase = function (ingredient) {
    if (ingredientCounters[ingredient] < 10) {
      // Asegurarse de que el total no supere 10
      ingredientCounters[ingredient]++;
      document.getElementById(ingredient).textContent =
        ingredientCounters[ingredient];
      updateTotalIngredients();
    }
  };

  // Función para decrementar la cantidad de un ingrediente
  window.decrease = function (ingredient) {
    if (ingredientCounters[ingredient] > 0) {
      ingredientCounters[ingredient]--;
      document.getElementById(ingredient).textContent =
        ingredientCounters[ingredient];
      updateTotalIngredients();
    }
  };
});
