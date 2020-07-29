
setInterval(() => {
	let h1 = document.querySelector('#box');
	let date = new Date();
	h1.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
},1000)
