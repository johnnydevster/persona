function Relationships(props) {
  return (
    <div className="mb-96">
      <div className="mx-5 bg-opacity-30">
        <h3 className="text-headline inline-block text-xl font-semibold text-gray-600 mb-2 px-1 mx-3">
          Förhållanden
        </h3>
      </div>
      <div className="px-10 py-10 text-gray-700">
        <div className="bg-gray-50 bg-opacity-50 rounded-r">
          <p className="border-l-4 border-blue-400 px-3 pt-2">
            När det gäller förhållanden finns det tre faktorer som bäst
            förutsäger förhållandekvalité -{" "}
            <strong>tillmötesgående, samvetsgrannhet och neuroticism</strong>.
          </p>
          <p className="border-l-4 border-blue-400 px-3 pt-4 pb-2">
            Självklart finns det fler faktorer som spelar in som ligger utanför
            femfaktormodellen (exempelvis självförtroende), men dessa tre
            faktorer kan ge vissa insikter i hur just dina personlighetsdrag
            påverkar relationer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Relationships;
