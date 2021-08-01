import ChartDisplay from "./ChartDisplay";

function ResultsDisplay(props) {
  return (
    <div>
      <ChartDisplay results={props.results} />
    </div>
  );
}

export default ResultsDisplay;
