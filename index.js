const express = require("express");
const app = express();
const PORT = 3003;
app.use(express.json());

const harryPotterStudents = [
  {
    name: "Harry Potter",
    house: "Gryffindor",
    bloodStatus: "Half-Blood",
    wand: "11', Holly, Phoenix feather core",
    pet: "Hedwig (Snowy owl)",
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    bloodStatus: "Muggle-Born",
    wand: "10¾', Vine Wood, Dragon heartstring core",
    pet: "Crookshanks (Half-Kneazle)",
  },
  {
    name: "Ron Weasley",
    house: "Gryffindor",
    bloodStatus: "Pure-Blood",
    wand: "14', Willow, Unicorn hair core",
    pet: "Scabbers (Rat)",
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin",
    bloodStatus: "Pure-Blood",
    wand: "10', Hawthorn, Unicorn hair core",
    pet: "None",
  },
  {
    name: "Luna Lovegood",
    house: "Ravenclaw",
    bloodStatus: "Pure-Blood",
    wand: "Unknown",
    pet: "None",
  },
  {
    name: "Neville Longbottom",
    house: "Gryffindor",
    bloodStatus: "Pure-Blood",
    wand: "13', Cherry, Unicorn hair core",
    pet: "Trevor (Toad)",
  },
];

app.post("/break_student_wand", (req, res) => {
  // add your code here
});

app.post("/change_student_pet", (req, res) => {
  // add your code here
});

app.post("/change_student_house", (req, res) => {
  // add your code here
});

app.post("/delete_student", (req, res) => {
  // add your code here
});

app.post("/update_student", (req, res) => {
  // add your code here
});

app.post("/create_student", (req, res) => {
  // add your code here
});

app.get("/get_students", (req, res) => {
  // add your code here
});

app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));
