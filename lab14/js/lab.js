document.addEventListener("DOMContentLoded", () => {
console.log('code works')
	//putting the input box into a variable
	let inputBox = document.querySelector('.guessingBox');
	//input event - what should happen:
	////check if they entered the right number
	////if so
	/////////create a new div
	/////////set the div to have a message "you won!"
	let inputHandler = (e) => {
		console.log('function works');
		if (e.currentTarget.value === '6'); {
			console.log("input is equal to 6")
			let newBox = document.createElement('div');
			console.log(newBox);
			newBox.classList.add('box');
		let parent = document.querySelector('#body');
		parent.appendChild(newBox);
			newBox.text = 'You won!';
//
			if (guessingBox > 6) {
				greeting="Too Big";
				console.log("Too Big");
			}else{
				console.log("Too Small");
				greeting="Too Small";
			}
			//these are to see what the user typed in, second one converts from a string to a number.
e.currentTarget.value
+e.currentTarget.value ;
		}
	}
	inputBox.addEventListener('keyup', inputHandler);
});
