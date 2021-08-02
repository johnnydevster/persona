function BigFiveResultDisplay(props) {
  return (
    <div>
      <div
        className={`${props.headlinecolor} rounded-t mt-10 p-5 flex justify-between items-center`}
      >
        <h1 className="font-semibold text-lg text-white block">
          {props.factor}
          <span className="text-base px-1"> ({props.score}%)</span>
        </h1>
      </div>
      <div
        className={`${props.paragraphcolor} rounded-b bg-opacity-50 pt-4 pb-7 px-2`}
      >
        {props.paragraphs.map((paragraph, i) => {
          return (
            <p className="pt-3 px-5 text-gray-700" key={i}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default BigFiveResultDisplay;
