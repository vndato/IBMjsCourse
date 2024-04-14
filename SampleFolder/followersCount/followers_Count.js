let count = 0; // Initialize count to 0

function increaseCount() {
    count++; //Increment the count by 1
    displayCount(); //Display the new count
    checkCountValue(); // Check count value and display message
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count == 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count == 20) {
        alert("Your Instagram post gaine 20 followers! Congratulations");
    }
}

function resetCount() {
    count = 0; // Resets count value to 0
    displayCount(); // Display the count value
    alert("Your follower count has been reset!")
}