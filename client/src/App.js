import Question from "./Components/Question.js";
import { questions, testAnswers } from "./Data/questions";
import { useState, useEffect, useRef } from "react";
import xIcon from "./Static/X-icon.png";
import QuestionForm from "./Components/QuestionForm";
import SyncLoader from "react-spinners/SyncLoader";

function App() {
  const [calculatingResults, setCalculatingResults] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <header className="bg-blue-500 h-12 flex items-center">
        <div className="font-sans text-white font-semibold px-5">Persona</div>
      </header>
      <div className="bg-blue-400 h-64 shape text-blue-50 flex items-center justify-center flex-col">
        <h1 className="relative -top-4 text-3xl md:text-5xl m-2 md:pr-20">
          FEMFAKTORMODELLEN
        </h1>
        <h2 className="relative -top-4 text-lg md:text-xl md:pl-20">
          personlighetstest
        </h2>
      </div>
      <section id="main" className="max-w-2xl mx-3 sm:mx-auto">
        {loading ? (
          <div className="text-center p-20">
            <SyncLoader loading={loading} color="#00AAFF" />
            <p
              className={`${
                loading ? "opacity-100" : "opacity-0"
              } transition-all duration-700 ease-in-out p-10 text-gray-500`}
            >
              Beräknar dina poäng...
            </p>
          </div>
        ) : (
          <QuestionForm setLoading={setLoading} />
        )}
      </section>
    </div>
  );
}

export default App;
