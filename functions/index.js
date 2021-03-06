const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const tools = require("./utils/tools");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

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

  res.send([
    {
      factorname: "Extraversion",
      score: extraversionScore,
      intro: tools.getIntro(1),
      paragraphs: tools.determineParagraphText(1, extraversionScore),
      average: 56,
    },
    {
      factorname: "Tillm??tesg??ende",
      score: agreeablenessScore,
      intro: tools.getIntro(2),
      paragraphs: tools.determineParagraphText(2, agreeablenessScore),
      relationships: tools.determineRelationshipText(2, agreeablenessScore),
      average: 64,
    },
    {
      factorname: "Samvetsgrannhet",
      score: conscientiousnessScore,
      intro: tools.getIntro(3),
      paragraphs: tools.determineParagraphText(3, conscientiousnessScore),
      relationships: tools.determineRelationshipText(3, conscientiousnessScore),
      average: 64,
    },
    {
      factorname: "Neuroticism",
      score: neuroticismScore,
      intro: tools.getIntro(4),
      paragraphs: tools.determineParagraphText(4, neuroticismScore),
      relationships: tools.determineRelationshipText(4, neuroticismScore),
      average: 45,
    },
    {
      factorname: "??ppenhet",
      score: opennessScore,
      intro: tools.getIntro(5),
      paragraphs: tools.determineParagraphText(5, opennessScore),
      average: 73,
    },
  ]);
});

/*
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
*/

/*
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
*/

exports.api = functions.https.onRequest(app);
