let accessData = fetch("https://api.github.com/users")

let data = accessData.then((resp)=>{resp.json()});
console.log(data);