const inputTask = document.getElementById('input-task')

// get and load countries when the dom load
document.addEventListener('DOMContentLoaded', loadCountry)
function loadCountry(){
  fetch(`https://restcountries.eu/rest/v2/all
  `)
    .then(res => res.json())
    .then(res => {
      // console.log(res)
      const countries = res;
      let output = '';
      countries.forEach(country => {
        output += `
        <div class='country-list'>
        <img src="${country.flag}">
        
        <h4>Name: ${country.name}</h4>
        <p> Population:  ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Capital: ${country.capital}</p>
       
        </div>
        `
      })
      document.getElementById('main').innerHTML = output
    })
    .catch(err => err)
}


inputTask.addEventListener('keydown', searchCountry)

function searchCountry(e){
  const name = e.target.value
  console.log(name)
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res =>  res.json()) 
    .then(res => {
      const countries = res;
      let output = '';
      countries.forEach(country => {
     
          output += `
          <div>
          <img src="${country.flag}">
          <h4>Name: ${country.name}</h4>
          <p> Population:  ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Capital: ${country.capital}</p>
          </div>
          `
        
      
          
      })
      document.querySelector('main').innerHTML = output
      
    }).catch(err => err)

}


document.querySelector('select').addEventListener('change', (e) => {


  console.log(e.target.value)
const attribute = e.target.value
  fetch(`https://restcountries.eu/rest/v2/all
  `)
    .then(res => res.json())
    .then(res => {
      // console.log(res)
      const countries = res;
      let output = '';
      countries.forEach(country => {
       if(country.region === attribute){
        output += `
        <div class='country-list'>
        <img src="${country.flag}">
        
        <h4>Name: ${country.name}</h4>
        <p> Population:  ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Capital: ${country.capital}</p>
        </div>
        `
       }else{
          
        
        
       }


      })
      document.getElementById('main').innerHTML = output
    })
    .catch(err => err)

})



// document.querySelector('#main').addEventListener('click', (e) => {
//   window.location.href = 'about.html'
//   console.log(e.target.parentElement.className)
//   if(e.target.parentElement.classList.contains('country-list')){
//   fetch(`https://restcountries.eu/rest/v2/name/nigeria`).then(res => res.json()).then(res => console.log(res))
//   }
// })






// document.querySelector('select').addEventListener('click', () => {
//   console.log('click')
// fetch('text.txt').then(res => {
//   if(res.status === 200){
//     return res.text()
//   }else{
//     console.log('err')
//   }
// }).then(res => console.log(res))

// })



// togle theme
document.getElementById('check').addEventListener('click',(e) => {

  //  document.querySelector('header').classList.toggle('dark-theme')
  document.body.classList.toggle('dark-theme')
  
  

})