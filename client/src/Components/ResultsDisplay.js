import ChartDisplay from "./ChartDisplay";
import BigFiveFactor from "./BigFiveFactor";
import Relationships from "./Relationships";
import { useState, useRef } from "react";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const headlineColors = [
  "bg-yellow-500",
  "bg-indigo-500",
  "bg-pink-500",
  "bg-blue-500",
  "bg-green-500",
];

const headlineBgColors = [
  "bg-yellow-300",
  "bg-indigo-300",
  "bg-pink-300",
  "bg-blue-300",
  "bg-green-300",
];

const paragraphColors = [
  "bg-yellow-50",
  "bg-indigo-50",
  "bg-pink-50",
  "bg-blue-50",
  "bg-green-50",
];

const borderColors = [
  "border-yellow-300",
  "border-indigo-300",
  "border-pink-300",
  "border-blue-300",
  "border-green-300",
];

function ResultsDisplay(props) {
  const [scrollToFactorSummary, setScrollToFactorSummary] = useState(false);
  const [whichFactor, setWhichFactor] = useState(null);

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-600 px-5 py-14">
        Testresultat
      </h1>
      <ChartDisplay
        results={props.results}
        setScrollToFactorSummary={setScrollToFactorSummary}
        setWhichFactor={setWhichFactor}
      />
      {props.results.map((result, i) => {
        return (
          <BigFiveFactor
            key={result.factorname}
            id={i}
            factor={result.factorname}
            score={result.score}
            average={result.average}
            intro={result.intro}
            paragraphs={result.paragraphs}
            headlinecolor={headlineColors[i]}
            headlineBgColor={headlineBgColors[i]}
            paragraphcolor={paragraphColors[i]}
            borderColor={borderColors[i]}
            scrollToFactorSummary={scrollToFactorSummary}
            setScrollToFactorSummary={setScrollToFactorSummary}
            whichFactor={whichFactor}
            setWhichFactor={setWhichFactor}
          />
        );
      })}
      <button>Ta test igen</button>
    </div>
  );
}

export default ResultsDisplay;
