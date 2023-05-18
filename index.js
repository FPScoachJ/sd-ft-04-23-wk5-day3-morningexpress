const express = require("express");
const app = express();
const PORT = 3003;
app.use(express.json());

let harryPotterStudents = [
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
  // {bloodStatus: “Muggle-Born”}
  // break all the wands of whoever is a muggle
  // {wand: “Broken Wand”}
  // Justin
  // Find all students with matching blood status
  const matchedStudents = [];
  harryPotterStudents.forEach((student) => {
    if (student.bloodStatus === req.body.bloodStatus) {
      student.wand = "Broken Wand";
      matchedStudents.push(student.name);
    }
  });

  if (matchedStudents.length === 0) {
    res.status(404).send("No students found with that blood status!");
  } else {
    res.send(`Students whose blood status has changed and wands have broken: ${matchedStudents.join(", ")}`);
  }
  console.log(harryPotterStudents);
});

app.post("/change_student_pet", (req, res) => {
  // add your code here
  const indexOfStudentToUpdate = harryPotterStudents.findIndex(
    (studs) => studs.name === req.body.name
  );
  if (indexOfStudentToUpdate === -1) {
    res
      .status(404)
      .send("That student does not exist!");
  } else {
    if (req.body.name) {
      harryPotterStudents[indexOfStudentToUpdate].pet = req.body.petToUpdateTo;
      res.send(
        `This is your newly updated student ${harryPotterStudents[indexOfStudentToUpdate].pet}`
      );
    } else {
      res.send("You need to provide a name of a student and a pet to update.");
    }
    console.log(harryPotterStudents);
  }
});

app.post("/change_student_house", (req, res) => {
  // add your code here
  // Ashley
  // {name: "Hermione Granger", newHouse: "Hufflepuff"}
});

app.post("/delete_student", (req, res) => {
  // add your code here
  const filteredStudents = harryPotterStudents.filter(
    (studs) => studs.name !== req.body.name
  );
  harryPotterStudents = filteredStudents;
  res.send(harryPotterStudents);
  console.log(harryPotterStudents);
});

app.put("/update_student", (req, res) => {
  // add your code here
  // Daniel
  // {name: "Luna Lovegood", newName:" Looney Lovegood"}
});

app.post("/create_student", (req, res) => {
  // add your code here
  harryPotterStudents.push(req.body);
  res.send(harryPotterStudents);
  console.log(harryPotterStudents);
});

app.get("/get_students", (req, res) => {
  // add your code here
  res.json(harryPotterStudents);
  console.log(harryPotterStudents);
});

app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));
