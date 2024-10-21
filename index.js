

const btn=document.getElementById('fetchProduits')
console.log('button=>',btn)
const userList=document.getElementById('List_Product')
console.log('ul list produit =>', userList)

btn.addEventListener('click',()=>{
    const URLApi ="https://jsonplaceholder.typicode.com/users";

    axios.get(URLApi)
    .then(function(res) {
        const users = res.data 
  userList.innerHTML=''

  users.map((el)=> {
    const list = document.createElement('li')
    list.textContent = `${el.name} _ ${el.email}`
    userList.appendChild(list)
}
)
    })
    .catch(err=> console.log(err))
})




