/* Variables and Arrays
-------------------------------------------------- */
const arrays = [
    ["mom", "dad", "the dog", "my teacher", "the elephant", "the cat"],
    ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"],
    ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],
    ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
    ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
];

let studentIdAdded = false; // Flag to check if student ID is added
let studentId = ""; // Variable to store student ID

/* Functions
-------------------------------------------------- */

// Function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to handle clicks on array buttons
function arrayButton_on_click(arrayIndex, displayId) {
    const randomElement = getRandomElement(arrays[arrayIndex]);

    // If student ID is added, add it as a new element to the first array
    if (arrayIndex === 0 && studentIdAdded) {
        arrays[0].push(studentId);
    }

    document.getElementById(displayId).textContent = randomElement;
}

// Function to handle click on "Show Story" button
function playback_on_click() {
    // Concatenates and displays the user story on the screen
    const story = [
        document.getElementById("choosenNoun1").textContent,
        document.getElementById("choosenVerb").textContent,
        document.getElementById("choosenAdjective").textContent,
        document.getElementById("choosenNoun2").textContent,
        document.getElementById("choosenSetting").textContent
    ].join(" ");

    document.getElementById("story").textContent = story;
}

// Function to handle click on "Random Story" button
function randomStory_on_click() {
    // Generates a random story and display
    const randomStory = arrays.map(array => getRandomElement(array)).join(" ");

    document.getElementById("story").textContent = randomStory;
}

// Function to handle click on "Add Student ID" button
function addStudentId_on_click() {
    const studentIdInput = prompt("Enter your Student ID/Name:");

    // If user provides a student ID, updateS the flag and storeS the ID
    if (studentIdInput) {
        studentIdAdded = true;
        studentId = studentIdInput;
    }

    // DisplayS the student ID in the paragraph
    document.getElementById("studentId").textContent = studentIdAdded ? `Student ID/Name: ${studentId}` : "";
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById("noun1").addEventListener("click", function () {
    arrayButton_on_click(0, "choosenNoun1");
});

document.getElementById("verb").addEventListener("click", function () {
    arrayButton_on_click(1, "choosenVerb");
});

document.getElementById("adjective").addEventListener("click", function () {
    arrayButton_on_click(2, "choosenAdjective");
});

document.getElementById("noun2").addEventListener("click", function () {
    arrayButton_on_click(3, "choosenNoun2");
});

document.getElementById("setting").addEventListener("click", function () {
    arrayButton_on_click(4, "choosenSetting");
});

document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("randomStory").addEventListener("click", randomStory_on_click);
document.getElementById("addStudentId").addEventListener("click", addStudentId_on_click);
