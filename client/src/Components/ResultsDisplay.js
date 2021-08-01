import ChartDisplay from "./ChartDisplay";
import BigFiveResultDisplay from "./BigFiveResultDisplay";

function ResultsDisplay(props) {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-600 px-5 pt-10">
        Testresultat
      </h1>
      <ChartDisplay results={props.results} />
      {props.results.map((result) => {
        return (
          <BigFiveResultDisplay
            key={result.factorname}
            factor={result.factorname}
            score={result.score}
            average={result.average}
            paragraphs={result.paragraphs}
          />
        );
      })}
    </div>
  );
}

export default ResultsDisplay;
