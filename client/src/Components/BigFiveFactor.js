import { useRef, useEffect } from "react";

function BigFiveResultDisplay(props) {
  const ref = useRef(null);

  useEffect(() => {
    if (props.scrollToFactorSummary && props.id === props.whichFactor) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      props.setScrollToFactorSummary(false);
      props.setWhichFactor(null);
    }
  }, [props.scrollToFactorSummary]);

  const headline = {
    width: `${props.score}%`,
  };

  const backgroundGradient = {
    backgroundImage:
      "linear-gradient(45deg, ##ffd747 30%, ##ffeb6b 30%, ##ffeb6b 50%, ##ffd747 50%, ##ffd747 80%, ##ffeb6b 80%, ##ffeb6b 100%)",
    backgroundSize: "7.07px 7.07px",
  };
  return (
    <div ref={ref} className="mt-10 rounded">
      <div className="relative">
        <div
          style={headline}
          className={`${props.headlinecolor} rounded-tl z-30 h-16 px-5 flex justify-between items-center relative`}
        >
          <div className="">
            <h1 className="z-20 whitespace-nowrap font-semibold text-lg text-white block">
              {props.factor}
              <span className="text-base"> ({props.score}%)</span>
            </h1>
          </div>
        </div>
        <div
          className={`${props.headlineBgColor} w-full z-0 rounded-t h-16 flex justify-between items-center absolute top-0 left-0 right-0`}
        ></div>
      </div>

      <div
        className={`border-l border-r border-b rounded-b bg-opacity-30 pt-6 pb-9 px-2 sm:px-8`}
      >
        <div
          className={`my-3 mb-5 mx-5 py-1 ${props.borderColor} text-sm border-l-4 ${props.headlineBgColor} bg-opacity-10 rounded-r`}
        >
          {props.intro.map((intro, i) => {
            return (
              <p className="px-3 my-2 text-gray-600" key={i}>
                {intro}
              </p>
            );
          })}
        </div>
        <div>
          {props.paragraphs.map((paragraph, i) => {
            return (
              <p className="pt-3 px-5 text-gray-700" key={i}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BigFiveResultDisplay;
