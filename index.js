// Iteration 1: Names and Input

let hacker1 = "John Smith";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Emma Johnson";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `- The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    `- It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `- Wow, you both have equally long names, ${hacker1Length} characters!.`
  );
}

// Iteration 3: Loops
//3.1
let newHacker1 = "";

for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase() + " ";
}

console.log(newHacker1);

//3.2

let newHacker2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}

console.log(newHacker2);

// 3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
}

// Not ready yet

// Bonus 1

//Count the number of times the Latin word et appears

let etCount = 0;
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ante dictum enim commodo tempor. Donec a condimentum dui, sit amet lobortis eros. Mauris mollis efficitur neque a cursus. Mauris fermentum lacinia ultricies. Aenean fermentum nisi ac fringilla fermentum. Nam non ultrices turpis, nec rhoncus sapien. Aliquam nec feugiat ipsum. Integer egestas, lectus non placerat maximus, turpis felis suscipit augue, quis commodo sem enim at felis. Proin pretium dui vitae nisi facilisis molestie. Sed eget ornare lacus, eget aliquet metus. Nunc efficitur ligula ut cursus ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Nam ut dolor mattis, sollicitudin purus eu, euismod enim. Nullam elit leo, tristique in luctus id, consequat quis mauris. Quisque bibendum auctor libero, non egestas sapien accumsan sit amet. Donec vulputate turpis mi, at varius purus porta sed. Fusce vel ullamcorper tortor, eget consectetur massa. Aenean nisl metus, luctus vulputate ligula a, semper mattis nunc. Proin ac egestas purus, et efficitur quam. Donec sagittis orci quam, vitae placerat odio dignissim sit amet. Suspendisse potenti. Pellentesque molestie ligula vitae sapien posuere, quis ullamcorper ex sagittis. Nam sagittis pretium feugiat. Aliquam erat volutpat. Suspendisse rutrum purus ac elementum pulvinar. Vestibulum imperdiet ante augue, ac pulvinar nisi luctus eget. Donec tincidunt porta vehicula.

Quisque et pulvinar sapien, eget finibus ipsum. Quisque mauris purus, sagittis sed nulla eu, euismod pulvinar ligula. Mauris eget pellentesque turpis, eu laoreet metus. Vestibulum vulputate arcu sit amet lacus sodales suscipit. Praesent eu dui bibendum, mollis risus eu, commodo est. Vivamus viverra faucibus metus, sed vulputate ex. Fusce non feugiat nulla. Nunc a eros quis nibh auctor interdum sit amet id massa. Ut a condimentum lorem. Ut purus nunc, aliquam sed cursus sit amet, dignissim eu tortor. Aenean pretium maximus interdum. Pellentesque congue tortor sed semper hendrerit. Nulla a facilisis enim. Quisque suscipit velit eu rutrum consectetur.`;

for (let i = 0; i < longText.length; i++) {
  let charCount = longText[i] + longText[i + 1];
  if (charCount === "et") {
    etCount++;
  }
}

console.log(etCount);

// Bonus 2

let phraseToCheck = "step on no pets";
let phraseBackwards = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseBackwards += phraseToCheck[i];
}

if (phraseToCheck === phraseBackwards) {
  console.log("It's a palindrome");
} else {
  console.log("Sorry, it's not a palindrome");
}
