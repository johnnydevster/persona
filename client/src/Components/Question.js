import { useRef, useState, useEffect } from "react";

function Question(props) {
  const ref = useRef(null);

  useEffect(() => {
    if (props.firstUnanswered) {
      console.log(props.id + " fired, but didn't scroll");
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  function handleChange(e) {
    // Factors explanation
    // 1 = Extraversion
    // 2 = Agreeableness
    // 3 = Conscientiousness
    // 4 = Neuroticism
    // 5 = Openness
    const score = Number(e.target.value);
    const reversedScale = [6, 5, 4, 3, 2, 1];
    let finalScore;
    let factor;

    if (Math.abs(props.factor) === 1) {
      props.factor > 0
        ? (finalScore = score)
        : (finalScore = reversedScale[score]);
      factor = "Extraversion";
    } else if (Math.abs(props.factor) === 2) {
      props.factor > 0
        ? (finalScore = score)
        : (finalScore = reversedScale[score]);
      factor = "Agreeableness";
    } else if (Math.abs(props.factor) === 3) {
      props.factor > 0
        ? (finalScore = score)
        : (finalScore = reversedScale[score]);
      factor = "Conscientiousness";
    } else if (Math.abs(props.factor) === 4) {
      props.factor > 0
        ? (finalScore = score)
        : (finalScore = reversedScale[score]);
      factor = "Neuroticism";
    } else if (Math.abs(props.factor) === 5) {
      props.factor > 0
        ? (finalScore = score)
        : (finalScore = reversedScale[score]);
      factor = "Openness";
    }

    const questionAnswer = {
      id: props.id,
      factor,
      answer: finalScore,
    };

    props.setAnswers([
      ...props.answers.filter((object) => {
        return object.id !== questionAnswer.id;
      }),
      questionAnswer,
    ]);
    props.setUnansweredQuestionIds(
      props.unansweredQuestionIds.filter((id) => id !== props.id)
    );
  }
  return (
    <div ref={ref} className="mb-12 bg-gray-50 pt-3 pb-5 px-3">
      <h2 className="text-lg text-gray-600 pb-4">
        <span className="text-base text-gray-400 mr-1">
          {props.questionNr}.
        </span>{" "}
        {props.question}
      </h2>
      <form className="flex flex-col-reverse sm:flex-row  justify-between text-sm align-middle">
        <div className="flex sm:flex-col items-center sm:w-1/6 mt-3 mx-4 sm:m-0 text-red-600">
          <input
            type="radio"
            name="first option"
            value="1"
            className="transform scale-200 sm:mt-3 sm:order-last cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
          <label className="sm:order-first pl-4 sm:p-0">
            Stämmer inte alls
          </label>
        </div>
        <div className="flex sm:flex-col items-center sm:w-1/6 mt-3 mx-4 sm:m-0 text-red-400">
          <input
            type="radio"
            name="first option"
            value="2"
            className="transform scale-200 sm:mt-3 cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
          <label className="sm:order-first pl-4 sm:p-0">Stämmer ej</label>
        </div>
        <div className="flex sm:flex-col items-center mt-3 mx-4 sm:m-0 sm:w-1/6">
          <input
            type="radio"
            name="first option"
            value="3"
            className="transform scale-200 sm:mt-3 cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
          <label className="sm:order-first text-gray-600 pl-4 sm:p-0">
            Vet ej
          </label>
        </div>
        <div className="flex sm:flex-col items-center mt-3 mx-4 sm:m-0 sm:w-1/6">
          <input
            type="radio"
            name="first option"
            value="4"
            className="transform scale-200 sm:mt-3 cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
          <label className="sm:order-first text-green-600 pl-4 sm:p-0">
            Stämmer
          </label>
        </div>
        <div className="flex sm:flex-col items-center mt-3 mx-4 sm:m-0 sm:w-1/6">
          <input
            type="radio"
            name="first option"
            value="5"
            className="transform scale-200 sm:mt-3 cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
          <label className="sm:order-first text-green-500 pl-4 sm:p-0">
            Stämmer bra
          </label>
        </div>
      </form>
    </div>
  );
}

export default Question;
