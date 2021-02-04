
// create people OBJECT
let people = [
    {name: "Sarah Mehri", sex: "F", born: "1995", died: "n/a",
        father:{first: "Hade", last: "Bayat"}, mother:{first: "Homa", last: "Bayat"}},
    {name: "Olivia ", sex: "F", born: "1965", died: "n/a",
        father:{first: "Ava", last: "Charlotte"}, mother:{first: "Fumiko", last: ""}},
    {name: "Josh Jani", sex: "M", born: "1953", died: "n/a",
        father:{first: "", last: ""}, mother:{first: "Laila", last: "Jami"}},
    {name: "Mia Maine", sex: "F", born: "1966", died: "n/a",
        father:{first: "Al", last: "Jeffers"}, mother: "Kobra"},
    {name: "Naweed Mehri", sex: "M", born: "unknown", died: "N/A",
        father:{first: "", last: ""}, mother:{first: "", last: ""}},
    {name: "Jane Doe", sex: "F", born: "1876", died: "1956", // FIRST AND LAST
        father:{first: "Petrus" , last: "de Milliano"}, mother:{first: "Sophia", last: "van Damme"}},
    {name: "Jane Ramirez", sex: "F", born: "1930", died: "1978", // FIRST AND LAST
        father:{first: "Thomestical", last: "Merove"}, mother:{first: "Amera", last: "Flores"}}
];

// when the search button is clicked we call findMatch()
document.getElementById("search-btn").onclick = findMatch;


 // This method will loop through our JSON object checking if any of the name values are
function findMatch() {
    // take search input and make all lower case (so that we can check case-insensitively)
    // also split the word up into space separated bits to check for partial searches
    let searchName = document.getElementById("search").value.toString().toUpperCase().trim();

    // build our output of people that match the search
    let result = "";

    // loop through our JSON object to see if we have name matches from our search
    for(let i = 0; i < people.length; i++) {
        if(people[i].name.toString().toUpperCase().includes(searchName)) {
            result += "Name: " + people[i].name + "<br>" +
                "Sex: " + people[i].sex + "<br>" +
                "Born: " + people[i].born + "<br>" +
                "Died: " + people[i].died + "<br>" +
                "Father: " + people[i].father.first + " " + people[i].father.last + "<br>" +
                "Mother: " + people[i].mother.first + " " + people[i].mother.last + "<br><br>";
        }
    }
    // display result in the HTML
    if(result === "") {
        document.getElementById("result").innerHTML = "No match found.";
    } else {
        document.getElementById("result").innerHTML = result;
    }
}