const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("Hello there.");
});

app.post("/results", (req, res) => {
  let extraversionScore = 0;
  let agreeablenessScore = 0;
  let conscientiousnessScore = 0;
  let neuroticismScore = 0;
  let opennessScore = 0;

  req.body.map((answer) => {
    if (answer.factor === "Extraversion") {
      extraversionScore += answer.answer;
    } else if (answer.factor === "Agreeableness") {
      agreeablenessScore += answer.answer;
    } else if (answer.factor === "Conscientiousness") {
      conscientiousnessScore += answer.answer;
    } else if (answer.factor === "Neuroticism") {
      neuroticismScore += answer.answer;
    } else if (answer.factor === "Openness") {
      opennessScore += answer.answer;
    }
  });
  extraversionScore = (extraversionScore / 50) * 100;
  agreeablenessScore = (agreeablenessScore / 50) * 100;
  conscientiousnessScore = (conscientiousnessScore / 50) * 100;
  neuroticismScore = (neuroticismScore / 50) * 100;
  opennessScore = (opennessScore / 50) * 100;

  console.log("Extraversion score: " + extraversionScore);
  console.log("Agreeableness score: " + agreeablenessScore);
  console.log("Conscientiousness score: " + conscientiousnessScore);
  console.log("Neuroticism score: " + neuroticismScore);
  console.log("Openness score: " + opennessScore);

  res.send({
    extraversion: extraversionScore,
    agreeableness: agreeablenessScore,
    conscientiousness: conscientiousnessScore,
    neuroticism: neuroticismScore,
    openness: opennessScore,
  });
});

app.listen(3001, () => console.log("Server running on port 3001."));
