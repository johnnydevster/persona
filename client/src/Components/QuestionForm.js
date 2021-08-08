import Question from "./Question.js";
import { questions, testAnswers } from "../Data/questions";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import xIcon from "../Static/X-icon.png";

function QuestionForm(props) {
  const [answers, setAnswers] = useState(testAnswers);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState([]);
  const [firstUnanswered, setFirstUnanswered] = useState();
  const [unansweredWarning, setUnansweredWarning] = useState(false);

  useEffect(() => {
    if (unansweredWarning) {
      const timer = () => setTimeout(() => setUnansweredWarning(false), 3500);
      const timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [unansweredWarning]);

  async function calculateResults() {
    // First check if all questions are answered
    const unansweredQuestions = questions.filter(
      (question) => !answers.some((answer) => question.id === answer.id)
    );
    if (unansweredQuestions.length > 0) {
      setUnansweredQuestionIds(
        unansweredQuestions.map((question) => question.id)
      );
      setFirstUnanswered(unansweredQuestions[0].id);
      setUnansweredWarning(true);
    } else {
      props.setLoading(true);
      const response = await axios.post(
        "http://localhost:3001/results",
        answers
      );
      props.setResults(response.data);
      props.setLoading(false);
    }
  }

  if (props.loading || props.results) {
    return null;
  }

  return (
    <div>
      <div className="mt-5 md:mt-8 p-4 sm:p-10 text-gray-600  bg-opacity-70 rounded bg-gray-100">
        <p className="pb-5">
          Femfaktormodellen är sedan 1990-talet den dominerande modellen inom
          personlighetspsykologi för att beskriva hur våra personligheter är
          sammansatta av personlighetsdrag.
        </p>
        <p>
          Den kallas femfaktormodellen för att den bygger på fem
          faktorer/dimensioner som vart och ett bestämmer ett personlighetsdrag.
        </p>
        <p className="pb-5">
          Dessa fem personlighetsdrag blir tillsammans en profil eller karta
          över en individs personlighet (se bild nedan).
        </p>
        <p>
          I korta drag kallas de fem faktorerna för{" "}
          <strong className="text-emphasis">Öppenhet</strong> (eng. Openness),{" "}
          <strong className="text-emphasis">Ordningsamhet</strong> (eng.
          Conscientiounsness),{" "}
          <strong className="text-emphasis">Extrovert drag</strong> (eng.
          Extraversion),{" "}
          <strong className="text-emphasis">Tillmötesgående drag</strong> (eng.
          Agreableness) och{" "}
          <strong className="text-emphasis">Neurotiskt drag</strong> (eng.
          Neuroticism). Förkortas ibland på engelska som OCEAN.
        </p>
      </div>
      <div className="transition-all duration-300 ease-in-out  hover:bg-green-200 mt-6 rounded mx-auto bg-green-300 text-center py-3 px-5">
        <h2 className="text-green-700 hover:text-green-800 font-bold cursor-pointer">
          Ta testet nedan!
        </h2>
      </div>
      <div className="my-6 mx-auto w-3/4 md:w-full md:my-3 md:flex items-center">
        <div className="md:mr-3 rounded md:w-1/3 p-3 md:p-8 text-center text-indigo-900 bg-indigo-400 bg-opacity-50">
          Tar ca 5 minuter att göra
        </div>
        <div className="md:my-3 md:rounded p-3 md:w-1/3 md:p-8 text-center text-yellow-900 bg-yellow-400 bg-opacity-50">
          Försök svara så ärligt som möjligt
        </div>
        <div className="md:ml-3 rounded p-3 md:w-1/3 md:p-8 text-center text-blue-900 bg-blue-400 bg-opacity-50">
          Ta ställning istället för att svara neutralt
        </div>
      </div>
      <div className="mt-10 mb-10">
        {questions.map((question, index) => {
          return (
            <div key={question.id}>
              <Question
                questionNr={index + 1}
                firstUnanswered={firstUnanswered === question.id}
                setFirstUnanswered={setFirstUnanswered}
                unansweredFlag={unansweredQuestionIds.includes(question.id)}
                id={question.id}
                question={question.question}
                factor={question.factor}
                answers={answers}
                setAnswers={setAnswers}
                setUnansweredQuestionIds={setUnansweredQuestionIds}
                unansweredQuestionIds={unansweredQuestionIds}
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={calculateResults}
        className="transition-all duration-500 ease-in-out mb-20 h-12 px-8 rounded text-white text-lg hover:bg-green-400 bg-green-500 mx-auto block"
      >
        Beräkna resultat
      </button>
      {/* Display warning below if not all questions are answered */}
      <div
        className={`${
          unansweredWarning ? "h-22 p-10 opacity-100" : "h-0 opacity-0"
        } transition-opacity duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2 fixed text-white rounded flex items-center bg-opacity-90 top-1/2 left-1/2 bg-red-500 z-20`}
      >
        <div className="absolute right-0 top-0 p-2 cursor-pointer">
          <img
            onClick={() => setUnansweredWarning(false)}
            src={xIcon}
            className="w-7"
          />
        </div>
        <h2>Ser ut som att du missat att svara på vissa frågor!</h2>
      </div>
    </div>
  );
}

export default QuestionForm;
