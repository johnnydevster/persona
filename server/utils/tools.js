const extraversion = {
  intro: [
    "Extraversion innebär hur utåtriktad du är.",
    "Högre poäng i extraversion innebär att man är mer utåtriktad, och lägre poäng betyder att man är mer reserverad.",
  ],
  lowrange: ["Low placeholder", "Another low placeholer"],
  highrange: ["High placeholder"],
  average: 56,
};

const agreeableness = {
  intro: [
    "Extraversion innebär hur utåtriktad du är.",
    "Högre poäng i extraversion innebär att man är mer utåtriktad, och lägre poäng betyder att man är mer reserverad.",
  ],
  lowrange: ["Low placeholder"],
  highrange: ["High placeholder"],
  average: 64,
};

const conscientiousness = {
  intro: [
    "Extraversion innebär hur utåtriktad du är.",
    "Högre poäng i extraversion innebär att man är mer utåtriktad, och lägre poäng betyder att man är mer reserverad.",
  ],
  lowrange: ["Low placeholder"],
  highrange: ["High placeholder"],
  average: 64,
};

const neuroticism = {
  intro: [
    "Extraversion innebär hur utåtriktad du är.",
    "Högre poäng i extraversion innebär att man är mer utåtriktad, och lägre poäng betyder att man är mer reserverad.",
  ],
  lowrange: ["Low placeholder"],
  highrange: ["High placeholder"],
  average: 45,
};

const openness = {
  intro: [
    "Extraversion innebär hur utåtriktad du är.",
    "Högre poäng i extraversion innebär att man är mer utåtriktad, och lägre poäng betyder att man är mer reserverad.",
  ],
  lowrange: ["Low placeholder"],
  highrange: ["High placeholder"],
  average: 73,
};

const factorLibrary = [
  extraversion,
  agreeableness,
  conscientiousness,
  neuroticism,
  openness,
];

function determineParagraphText(factor, score) {
  let paragraphText = [...factorLibrary[factor - 1].intro];

  if (score < 50) {
    paragraphText = [...paragraphText, ...factorLibrary[factor - 1].lowrange];
  }
  if (score >= 50) {
    paragraphText = [...paragraphText, ...factorLibrary[factor - 1].highrange];
  }
  return paragraphText;
}

module.exports = {
  determineParagraphText,
};
