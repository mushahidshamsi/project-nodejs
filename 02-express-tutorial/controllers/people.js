const people = require("../data");

const getPerson = (req, res) => {
  res.status(200).json({ success: true, data: people.people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "Please input a name" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please input a name" });
  }
  res.status(201).json({ success: true, data: [...people.people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with ID: ${id}` });
  }

  const newPerson = people.people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json({ success: true, data: newPerson });
};
const deletePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(400).json(`No person with ID: ${id}`);
  }

  const removePerson = people.people.filter(
    (person) => person.id !== Number(id)
  );

  res.status(200).json({ success: true, data: removePerson });
};

module.exports = {
  createPerson,
  getPerson,
  deletePerson,
  createPersonPostman,
  updatePerson,
};
