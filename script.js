// Get the search input element
const input = document.getElementById("searchInput");

// Listen for Enter key press
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    googleSearch();
  }
});

// Google Search button function
function googleSearch() {
  const query = input.value.trim();
  if (query !== "") {
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(query);
  }
}

// I'm Feeling Lucky button function
function feelingLucky() {
  const query = input.value.trim();
  if (query !== "") {
    window.location.href =
      "https://www.google.com/search?q=" +
      encodeURIComponent(query) +
      "&btnI=1";
  }
}
