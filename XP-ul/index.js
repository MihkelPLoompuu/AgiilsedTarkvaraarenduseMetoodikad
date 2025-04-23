function tehnoloogia() {
    const tehno = [
        "Ameerika proovib purustada Hiina AI-ambitsioonid",
        "Mullu OpenAIst lahkunud teadlasel pole toodet ega tulu. Juba on tema idufirma väärt 30 miljardit dollarit",
        "Uus Tiigrihüpe on otsus muutusi juhtida, mitte sabas sörkida"
    ];
    const randomIndex = Math.floor(Math.random() * tehno.length);
    alert(techno[randomIndex]);
}
function spordiuudised() {
    const sport = [
    "Klavan: toetuskirjade kogumisel käis Pohlak klubidest varakult rehaga üle",
    "Eesti rattatiim jahib Euroopas võite: oleme ise ära mähkerdanud",
    "Domineeriv Barcelona astus sammu tiitlile lähemale"
    ];
    const randomIndex = Math.floor(Math.random() * sport.length);
    alert(sport[randomIndex]);
}
function majandus() {
    const maja = [
    "Reuters: EL otsib võimalusi Vene energia ostu keelamiseks",
    "Musk lubas vähendada tööd Trumpi heaks ja keskenduda Teslale",
    "Coop Pank lõpetas esimese kvartali tugeva kasumiga"
    ];
    const randomIndex = Math.floor(Math.random() * maja.length);
    alert(maja[randomIndex]);
}

function add(category, newsItem) {
    if (category === "tehno") {
        tehno.push(tehno);
    } else if (category === "sport") {
        sport.push(sport);
    } else if (category === "maja") {
        majan.push(maja);
    }
    alert(`Uudis "${newsItem}" lisatud kategooriasse ${category}`);
}