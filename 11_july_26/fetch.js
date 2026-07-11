
fetch("https://dummyjson.com/todos")
.then((data) => {
    return data.json()
})
.then((res) =>{
    console.log(res.todos.map((list,id) => `Todo ${id+1} : ${list.todo}`))  // { todos : [{},{},{}]}
})
.catch((err) =>{
    console.log("err", err)
})

