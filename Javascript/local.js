const getItem=(key) => window.localStorage.getItem(key)
console.log(getItem)
const setItem=(key,value)=>window.localStorage.setItem(key,typeof value===object? JSON.stringify(value):value)