function BigFiveResultDisplay(props) {
  return (
    <div>
      <div className="bg-gray-50 rounded mt-10 p-5 flex justify-between items-center">
        <h1 className="font-bold text-lg text-gray-600 block">
          {props.factor}
          <span className="text-base text-green-500 "> ({props.score}%)</span>
        </h1>
        <h2 className="text-sm text-gray-500 align-middle">
          Snitt: {props.average}%
        </h2>
      </div>
      <div>
        {props.paragraphs.map((paragraph, i) => {
          return (
            <p className="p-5" key={i}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default BigFiveResultDisplay;
