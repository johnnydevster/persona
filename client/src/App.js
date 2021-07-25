import QuestionForm from "./Components/QuestionForm.js";

function App() {
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
        <div className="mt-5 md:mt-8 p-4 sm:p-10 text-gray-600  bg-opacity-70 rounded bg-gray-100">
          <p className="pb-5">
            Femfaktormodellen är sedan 1990-talet den dominerande modellen inom
            personlighetspsykologi för att beskriva hur våra personligheter är
            sammansatta av personlighetsdrag.
          </p>
          <p>
            Den kallas femfaktormodellen för att den bygger på fem
            faktorer/dimensioner som vart och ett bestämmer ett
            personlighetsdrag.
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
            <strong className="text-emphasis">Tillmötesgående drag</strong>{" "}
            (eng. Agreableness) och{" "}
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
        <QuestionForm />
      </section>
    </div>
  );
}

export default App;
