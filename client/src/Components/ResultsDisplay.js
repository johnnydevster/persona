import ChartDisplay from "./ChartDisplay";
import BigFiveResultDisplay from "./BigFiveResultDisplay";

const headlineColors = [
  "bg-yellow-500",
  "bg-indigo-500",
  "bg-pink-500",
  "bg-blue-500",
  "bg-green-500",
];

const paragraphColors = [
  "bg-yellow-50",
  "bg-indigo-50",
  "bg-pink-50",
  "bg-blue-50",
  "bg-green-50",
];

function ResultsDisplay(props) {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-600 px-5 pt-10">
        Testresultat
      </h1>
      <ChartDisplay results={props.results} />
      {props.results.map((result, i) => {
        return (
          <BigFiveResultDisplay
            key={result.factorname}
            factor={result.factorname}
            score={result.score}
            average={result.average}
            paragraphs={result.paragraphs}
            headlinecolor={headlineColors[i]}
            paragraphcolor={paragraphColors[i]}
          />
        );
      })}
    </div>
  );
}

export default ResultsDisplay;
