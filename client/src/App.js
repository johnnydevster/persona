import { useState, useEffect, useRef } from "react";
import QuestionForm from "./Components/QuestionForm";
import SyncLoader from "react-spinners/SyncLoader";
import ResultsDisplay from "./Components/ResultsDisplay";
import ChartDisplay from "./Components/ChartDisplay";
import { Transition } from "@tailwindui/react";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

function App() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  function ShowLoading() {
    if (loading) {
      return (
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
      );
    }
    return null;
  }

  function ShowResults() {
    if (results) {
      return <ResultsDisplay results={results} setResults={setResults} />;
    }
    return null;
  }

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
        <Transition
          show={false}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ShowLoading />
        </Transition>
        <ShowResults />
        <QuestionForm
          loading={loading}
          setLoading={setLoading}
          results={results}
          setResults={setResults}
        />
      </section>
    </div>
  );
}

export default App;
