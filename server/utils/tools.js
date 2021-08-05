const extraversion = {
  intro: [
    "Extraversion innebär hur utåtriktad du är.",
    "Högre poäng i extraversion innebär att man är mer utåtriktad, lägre poäng betyder att man är mer reserverad.",
  ],
  lowrange: [
    "Du ser ut att hamna i den lite mer introverta skaran av människor, där uppskattningsvis 25 till 40 procent av befolkningen hamnar. Att vara introvert behöver inte betyda att man är blyg, snarare att man tenderar att skåda mer åt den interna världen snarare än att söka extern stimulation.",
    "Du gillar inte att vara bland folk för länge, utan känner då att du behöver vara för dig själv för att ladda de sociala batterierna. Andra människor kan tycka att det är lite svårt att lära känna dig på djupet, men du är väldigt lojal mot de vänner du släppt in på livet.",
    "Du är väldigt medveten om dina egna tankar och känslor, ibland till den grad att du överanalyserar dig själv.",
  ],
  highrange: [
    "Du ser ut att hamna i den mer extroverta skaran av människor, där uppskattningsvis 60 till 75 procent av befolkningen hamnar. Du söker gärna upp sociala situationer och känner dig ofta inspirerad och uppladdad av att umgås med människor.",
    "Det ter sig naturligt för dig att prata med alla möjliga människor, det är också ett sätt för dig att organisera dina tankar och idéer. Detta leder också till att det är relativt enkelt för dig att bekanta dig med nya människor och komma in i nya grupper.",
    "När du stöter på problem vill du gärna diskutera det med andra för att komma fram till bästa lösningen. Det kan dock också betyda att du lätt känner dig ensam och oinspirerad när du inte umgås med folk.",
  ],

  average: 56,
};

const agreeableness = {
  intro: [
    "Denna faktor inkluderar saker som förtroende, vänlighet och tillgivenhet.",
    "Människor med högt tillmötesgående tenderar att vara mer samarbetsvilliga medans människor med lägre poäng är mer tävlingsinriktade.",
  ],
  lowrange: [
    "Du tenderar åt det mer tävlingsinriktade hållet, andra människor är snarare rivaler än personer du vill samarbeta med. Det är i regel svårt för andra människor att trampa på dig, eftersom du är väldigt villig att försvara dina gränser och värderingar.",
    'Detta kan också innebära att du ibland kan vara svår att ha att göra med, men att man också kan räkna med att du delar med dig av din ärliga åsikt, även när den inte alltid är välkommen. Du är den av dina vänner som ofta delar ut "hårda sanningar", eller "hård kärlek".',
    "Du är inte riktigt intresserad av andra människors problem, och kan vara lite misstänksam mot andras motiveringar. Ibland kan du till och med råka förolämpa andra på grund av din krasshet.",
  ],
  highrange: [
    "Du tenderar åt det mer samarbetsvilliga hållet, du jobbar gärna tillsammans med andra människor för att uppnå dina mål. Du är också intresserad av människor och sympatiserar med andras känslor.",
    'Det kan dock ibland vara svårt för dig att stå upp för dig själv och försvara dina gränser och värderingar, och du vill inte gärna känna att du är till besvär eller "tvinga på" din vilja över folk - ibland till din egen nackdel.',
    "Om någon behöver hjälp är du gärna där och erbjuder en hjälpande hand, och du delar också frikostigt ut komplimanger eftersom du vet hur mycket det uppskattas.",
  ],
  average: 64,
};

const conscientiousness = {
  intro: [
    "Samvetsgrannhet innebär hur eftertänksam och organiserad du är.",
    "Högre samvetsgrannhet innebär högre organisationsförmåga och vice versa.",
  ],
  lowrange: [
    "Struktur och schemaläggning är ingen favoritsyssla för dig, snarare känns ett schema som något som bara begränsar dig. Saker som behöver lösas kan lösas spontant.",
    "Detta kan dock också betyda att du ofta skjuter upp sysslor för länge och ibland hamnar i situationer som hade kunnat undvikits med lite bättre framförhållning och organisation.",
    "Det blir ibland stökigt i de miljöer du befinner dig eftersom du glömmer lägga tillbaks saker på sin rätta plats, eller helt enkelt tappar bort saker.",
  ],
  highrange: [
    "Du gillar att ha struktur i ditt liv, schemaläggning och att-göra-listor är viktiga verktyg för att tackla problem så effektivt som möjligt.",
    "Det är sällan en syssla kommer som en överraskning för dig, och du gillar i regel att få sysslor gjorda så fort och effektivt som möjligt.",
    "Du håller rent och prydligt i miljöer du befinner dig i, sätter tillbaks varje sak på sin rätta plats och du tappar sällan bort saker.",
  ],
  average: 64,
};

const neuroticism = {
  intro: [
    "Neuroticism handlar om hur ofta du känner negativa känslor.",
    "Lägre neuroticism innebär att man är mer stabil, hög neuroticism innebär att man ofta känner av humörsvängningar.",
  ],
  lowrange: [
    "Du känner sällan negativa känslor, men när du väl gör det hanterar du dem på ett sätt som gör att du inte låter dem ta kontroll över dig eller påverka dig negativt.",
    "Du oroar dig sällan i onödan, är väldigt avslappnad som person och hanterar stress på ett hållbart sätt.",
    "I en väldigt stressad situation så är du förmodligen den i gruppen som håller huvudet kallt och lugnt kan förklara hur situationen bör lösas.",
  ],
  highrange: [
    "Du känner dig ofta nedstämd eller ängslig, och kan ibland hantera det på ett sätt som gör situationen värre, exempelvis genom negativt självprat.",
    "Ibland kan du oroa dig över teoretiska situationer som kanske aldrig ens uppstår, och du kan snabbt skifta från bra till dåligt humör vid stress.",
    "Du undviker gärna väldigt stressade situationer och om det uppkommer kanske du stänger ner helt, eller hittar någon som hellre tar hand om situationen.",
  ],
  average: 45,
};

const openness = {
  intro: [
    "Öppenhet beskriver hur öppen du är för nya koncept, samt fantasi och insikt.",
    "Högre öppenhet betyder att du gärna tar till dig nya upplevelser, lägre öppenhet betyder att du är mer traditionell.",
  ],
  lowrange: [
    "Du kan ibland ha svårt för förändring, överlag gillar du att göra saker som du alltid har gjort dem förut. Detta gäller även för saker som musiksmak, maträtter eller friluftsaktiviteter.",
    "Teoretiska koncept intresserar dig inte så mycket, du är mer intresserad av praktiska lösningar som du av egen erfarenhet har sett fungerar. Om något inte är trasigt, varför fixa det?",
  ],
  highrange: [
    "Du är i regel väldigt öppen för förändring, du har inga problem att ta till dig nya koncept och testa nya saker, om det så handlar om nya upplevelser, nya maträttrer eller friluftsaktiviteter.",
    "Du gillar att fundera över nya teoretiska koncept, även om dessa koncept inte alltid är direkt applicerbara till din vardag så gillar du att fundera.",
    "Du har en väldigt livlig fantasi och är kreativt lagd.",
  ],
  average: 73,
};

const factorLibrary = [
  extraversion,
  agreeableness,
  conscientiousness,
  neuroticism,
  openness,
];

function getIntro(factor) {
  return factorLibrary[factor - 1].intro;
}

function determineParagraphText(factor, score) {
  let paragraphText;

  if (score < 50) {
    paragraphText = [...factorLibrary[factor - 1].lowrange];
  }
  if (score >= 50) {
    paragraphText = [...factorLibrary[factor - 1].highrange];
  }
  return paragraphText;
}

module.exports = {
  determineParagraphText,
  getIntro,
};
