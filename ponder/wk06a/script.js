let numbers = [1, 2, 3];

const getName = (num) => {
  switch (num) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    default:
      return "unknown";
  }
};

const names = numbers.map(getName);

document.body.appendChild(document.createElement("ul"));

names.forEach((name) => {
  console.log(name);
  document.body.querySelector("ul").appendChild(document.createElement("li")).innerText = name;
});

numbers[2] = 4;

console.log(numbers);

const sum = (nums) => {
  return nums.reduce((a, b) => a + b, 0);
};

console.log(sum(numbers));

console.log(sum(numbers) / numbers.length);

numbers[2] = 3;

console.log(sum(numbers) / numbers.length);

const students = [
  { last: "Andrus", first: "Aaron" },
  { last: "Masa", first: "Manny" },
  { last: "Tanda", first: "Tamanda" },
];

students.forEach(student => {
  sName = `${student.first} ${student.last}`;
  const pEl = document.createElement("p");
  pEl.innerText = sName;
  pEl.style.textAlign = "center";
  document.body.appendChild(pEl);
  document.body.appendChild(document.createElement("hr"));
});