const extraversion = {
  lowrange: ["Low placeholder"],
  highrange: ["High placeholder"],
  average: 56,
};

const agreeableness = {
  lowrange: ["Low placeholder"],
  highrange: ["High placeholder"],
  average: 64,
};

const conscientiousness = {
  lowrange: ["Low placeholder"],
  highrange: ["High placeholder"],
  average: 64,
};

const neuroticism = {
  lowrange: ["Low placeholder"],
  highrange: ["High placeholder"],
  average: 45,
};

const openness = {
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
  if (score < 50) {
    return factorLibrary[factor - 1].lowrange;
  }
  if (score >= 50) {
    return factorLibrary[factor - 1].highrange;
  }
}

module.exports = {
  determineParagraphText,
};
