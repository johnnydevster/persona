function App() {
  return (
    <div>
      <header className="bg-blue-500 h-16 flex items-center">
        <div className="font-sans text-white font-semibold px-5">Persona</div>
      </header>
      <div className="bg-blue-400 h-72 shape text-blue-50 flex items-center justify-center flex-col">
        <h1 className="relative -top-4 text-3xl md:text-5xl m-2 md:pr-20">
          Femfaktormodellen
        </h1>
        <h2 className="relative -top-4 text-lg md:text-xl md:pl-20">
          personlighetstest
        </h2>
      </div>
      <div className="relative p-10 text-gray-600 -top-10 max-w-2xl bg-opacity-70 mx-auto rounded bg-gray-100">
        <p className="pb-5">
          Femfaktormodellen är sedan 1990-talet den dominerande modellen inom
          personlighetspsykologi för att beskriva hur våra personligheter är
          sammansatta av personlighetsdrag.
        </p>
        <p className="pb-5">
          Den kallas femfaktormodellen för att den bygger på fem
          faktorer/dimensioner som vart och ett bestämmer ett personlighetsdrag.
          Dessa fem personlighetsdrag blir tillsammans en profil eller karta
          över en individs personlighet (se bild nedan).
        </p>
        <p>
          I korta drag kallas de fem faktorerna för Öppenhet (eng. Openness),
          Ordningsamhet (eng. Conscientiounsness), Extrovert drag (eng.
          Extraversion), Tillmötesgående drag (eng. Agreableness) och Neurotiskt
          drag (eng. Neuroticism). Förkortas ibland på engelska som OCEAN. Dessa
          drags motpoler heter Traditionellt drag, Slarvig/Spontan, Introvert
          drag, Självcentrerad och Emotionellt stabil.
        </p>
      </div>
    </div>
  );
}

export default App;
