const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
button.addEventListener("click", () => {
  const today = new Date().toLocaleString("pt-br").slice(0, -14)
  if (nlwSetup.dayExists(today)) {
    alert("o dia ja foi inserido")
  }
  nlwSetup.addDay(today)
})

form.addEventListener("change", () => {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
})
nlwSetup.setData(data)
nlwSetup.load()
nlwSetup.renderLayout()
/*const data = {
  run: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01"],
  water: [],
  gym: [],
  sleep: [],
  food: [],
  studies: [],
}
nlwSetup.setData(data)
nlwSetup.load()
*/
