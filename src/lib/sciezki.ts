export type Tryb = "kryzys" | "odbicie" | "wzrost";

export type Etap = {
  title: string;
  description: string;
  why: string[];
  actions: string[];
};

export type Sciezka = {
  slug: string;
  title: string;
  intro: string;
  tryb: Tryb;
  level: "podstawowa" | "srednia" | "zaawansowana";
  etapy: Etap[];
};

export const sciezki: Sciezka[] = [
  // =====================================
  // ROZSTANIE
  // =====================================
  {
    slug: "rozstanie",
    title: "Rozstanie",
    tryb: "kryzys",
    level: "podstawowa",
    intro:
      "Rozstanie destabilizuje. Najpierw zatrzymujemy chaos. Potem odbudowujemy kierunek.",
    etapy: [
      {
        title: "Etap 1 – Stabilizacja",
        description:
          "Nie pogłębiaj chaosu. Skup się na minimum.",
        why: [
          "Zmniejszasz eskalację konfliktu.",
          "Dajesz mózgowi czas na reset.",
          "Chronisz swoją reputację i decyzje.",
        ],
        actions: [
          "14 dni bez kontaktu.",
          "7 godzin snu.",
          "Zero alkoholu jako regulatora emocji.",
        ],
      },
      {
        title: "Etap 2 – Odbudowa",
        description: "Wracasz do struktury.",
        why: [
          "Ruch fizyczny stabilizuje emocje.",
          "Rytuały przywracają kontrolę.",
          "Małe zwycięstwa budują pewność siebie.",
        ],
        actions: [
          "3 treningi tygodniowo.",
          "Poranny rytuał bez telefonu.",
          "Spisz 5 zaniedbanych obszarów.",
        ],
      },
      {
        title: "Etap 3 – Kierunek",
        description:
          "Zaczynasz budować przyszłość.",
        why: [
          "Cel zmniejsza obsesyjne myślenie.",
          "Plan daje poczucie sprawczości.",
          "Nowe środowisko zmienia perspektywę.",
        ],
        actions: [
          "3 cele na 90 dni.",
          "Plan tygodnia w NaviMind.",
          "Nowe środowisko rozwojowe.",
        ],
      },
    ],
  },

  // =====================================
  // BRAK KIERUNKU
  // =====================================
  {
    slug: "brak-kierunku",
    title: "Brak kierunku",
    tryb: "odbicie",
    level: "podstawowa",
    intro:
      "Czujesz stagnację. Nie ma dramatu, ale nie ma też ognia. Czas odzyskać strukturę i sens.",
    etapy: [
      {
        title: "Etap 1 – Klarowność",
        description: "Najpierw nazwij chaos.",
        why: [
          "Nazwanie problemu zmniejsza napięcie.",
          "Zyskujesz świadomość zamiast frustracji.",
          "Klarowność to pierwszy krok do ruchu.",
        ],
        actions: [
          "Spisz 5 rzeczy, które Cię frustrują.",
          "Spisz 5 rzeczy, których unikasz.",
          "Określ 1 obszar do poprawy na 30 dni.",
        ],
      },
      {
        title: "Etap 2 – Struktura",
        description:
          "Mała dyscyplina przywraca kierunek.",
        why: [
          "Stały rytm stabilizuje układ nerwowy.",
          "Dyscyplina buduje szacunek do siebie.",
          "Struktura redukuje chaos mentalny.",
        ],
        actions: [
          "Ustal stałą godzinę pobudki.",
          "3 treningi tygodniowo.",
          "Plan tygodnia w NaviMind.",
        ],
      },
      {
        title: "Etap 3 – Cel",
        description: "Zamień stagnację w ruch.",
        why: [
          "Cel daje energię.",
          "Skierowana uwaga eliminuje rozproszenie.",
          "Długoterminowe myślenie zmienia perspektywę.",
        ],
        actions: [
          "Ustal 3 cele na 90 dni.",
          "Ogranicz 1 destrukcyjny nawyk.",
          "Wejdź w nowe środowisko rozwojowe.",
        ],
      },
    ],
  },

  // =====================================
  // BUDOWA SIŁY
  // =====================================
  {
    slug: "budowa-sily",
    title: "Budowa siły",
    tryb: "wzrost",
    level: "srednia",
    intro:
      "Nie jesteś w kryzysie. Chcesz wejść poziom wyżej – fizycznie i mentalnie.",
    etapy: [
      {
        title: "Etap 1 – Fundament",
        description:
          "Bez fundamentu nie ma siły.",
        why: [
          "Ciało wpływa na psychikę.",
          "Regeneracja zwiększa efektywność.",
          "Stabilność fizyczna daje stabilność mentalną.",
        ],
        actions: [
          "4 treningi siłowe tygodniowo.",
          "7–8h snu.",
          "Ogranicz alkohol do minimum.",
        ],
      },
      {
        title: "Etap 2 – Mentalność",
        description:
          "Dyscyplina ponad motywację.",
        why: [
          "Motywacja jest chwilowa.",
          "Dyscyplina buduje charakter.",
          "Stałość tworzy tożsamość.",
        ],
        actions: [
          "Codzienny poranny rytuał.",
          "1 godzina pracy głębokiej.",
          "Zero scrollowania do 10:00.",
        ],
      },
      {
        title: "Etap 3 – Charakter",
        description:
          "Siła bez kręgosłupa nic nie znaczy.",
        why: [
          "Konsekwencja buduje reputację.",
          "Trudne rozmowy rozwijają dojrzałość.",
          "Unikanie trudnych rzeczy osłabia.",
        ],
        actions: [
          "Dotrzymuj słowa – zawsze.",
          "Raz w tygodniu trudna rozmowa.",
          "Zrób coś, czego unikasz.",
        ],
      },
    ],
  },
  // =====================================
// UTRATA PRACY
// =====================================
{
  slug: "utrata-pracy",
  title: "Utrata pracy",
  tryb: "kryzys",
  level: "podstawowa",
  intro: "Strata pracy uderza w tożsamość. Najpierw stabilizacja. Potem plan.",
  etapy: [
    {
      title: "Stabilizacja",
      description: "Zatrzymaj panikę.",
      why: [
        "Zmniejszasz chaos decyzyjny.",
        "Chronisz swoją energię.",
      ],
      actions: [
        "Nie podejmuj pochopnych decyzji 7 dni.",
        "Ustal budżet minimalny.",
        "Codzienny ruch fizyczny.",
      ],
    },
    {
      title: "Analiza",
      description: "Co dalej?",
      why: [
        "Świadomość daje kontrolę.",
      ],
      actions: [
        "Spisz swoje realne kompetencje.",
        "Wyślij 5 aplikacji tygodniowo.",
      ],
    },
    {
      title: "Nowy kierunek",
      description: "Buduj przyszłość.",
      why: [
        "Działanie redukuje lęk.",
      ],
      actions: [
        "Rozpocznij nową ścieżkę rozwoju.",
        "Zaplanuj 30 dni w NaviMind.",
      ],
    },
  ],
},

// =====================================
// DOŁ PSYCHICZNY
// =====================================
{
  slug: "dol-psychiczny",
  title: "Dół psychiczny",
  tryb: "kryzys",
  level: "podstawowa",
  intro: "Brak energii to sygnał. Nie walcz z nim. Uporządkuj minimum.",
  etapy: [
    {
      title: "Minimum",
      description: "Zadbaj o podstawy.",
      why: ["Ciało wpływa na psychikę."],
      actions: [
        "7–8h snu.",
        "Spacer 30 min dziennie.",
        "Stałe godziny jedzenia.",
      ],
    },
    {
      title: "Ruch",
      description: "Małe zwycięstwa.",
      why: ["Aktywność redukuje napięcie."],
      actions: [
        "3 małe zadania dziennie.",
        "Ogranicz social media.",
      ],
    },
    {
      title: "Wsparcie",
      description: "Nie musisz iść sam.",
      why: ["Rozmowa stabilizuje."],
      actions: [
        "Rozmowa z kimś zaufanym.",
        "Konsultacja specjalisty (jeśli potrzeba).",
      ],
    },
  ],
},

// =====================================
// UZALEŻNIENIE – RESET
// =====================================
{
  slug: "reset-uzaleznienie",
  title: "Reset – uzależnienie",
  tryb: "kryzys",
  level: "srednia",
  intro: "Pierwszy krok to przerwać ciąg. Potem odbudować strukturę.",
  etapy: [
    {
      title: "Stop",
      description: "Przerwij cykl.",
      why: ["Każdy dzień bez to wygrana."],
      actions: [
        "7 dni całkowitej abstynencji.",
        "Usuń wyzwalacze z otoczenia.",
      ],
    },
    {
      title: "Struktura",
      description: "Zastąp nawyk.",
      why: ["Pustka wraca do starych schematów."],
      actions: [
        "Codzienny trening.",
        "Stały plan dnia.",
      ],
    },
    {
      title: "Wsparcie",
      description: "Samemu jest trudniej.",
      why: ["Grupa zwiększa skuteczność."],
      actions: [
        "Znajdź grupę wsparcia.",
        "Rozważ terapię.",
      ],
    },
  ],
},
// =====================================
// FUNDAMENT DYSCYPLINY
// =====================================
{
  slug: "fundament-dyscypliny",
  title: "Fundament dyscypliny",
  tryb: "odbicie",
  level: "podstawowa",
  intro: "Dyscyplina to kręgosłup. Zaczynamy od prostych zasad.",
  etapy: [
    {
      title: "Rytm dnia",
      description: "Stałość buduje kontrolę.",
      why: ["Powtarzalność zmniejsza chaos.", "Małe zwycięstwa budują tożsamość."],
      actions: [
        "Stała godzina pobudki 7 dni.",
        "Łóżko pościelone codziennie.",
        "Telefon dopiero po porannym rytuale.",
      ],
    },
    {
      title: "Minimum wysiłku",
      description: "Codzienny ruch.",
      why: ["Ciało stabilizuje psychikę."],
      actions: [
        "20–30 min ruchu dziennie.",
        "1 zadanie trudne przed południem.",
      ],
    },
    {
      title: "Konsekwencja",
      description: "Nie negocjujesz ze sobą.",
      why: ["Konsekwencja buduje szacunek do siebie."],
      actions: [
        "7 dni bez opuszczonego rytuału.",
        "Spisz swoje 3 zasady niepodlegające negocjacji.",
      ],
    },
  ],
},

// =====================================
// ODBUDOWA CIAŁA
// =====================================
{
  slug: "odbudowa-ciala",
  title: "Odbudowa ciała",
  tryb: "odbicie",
  level: "srednia",
  intro: "Ciało to fundament pewności siebie i energii.",
  etapy: [
    {
      title: "Regeneracja",
      description: "Najpierw sen i odżywianie.",
      why: ["Bez energii nie ma progresu."],
      actions: [
        "7–8h snu przez 14 dni.",
        "3 pełnowartościowe posiłki dziennie.",
      ],
    },
    {
      title: "Siła podstawowa",
      description: "Wracamy do fundamentów.",
      why: ["Siła = stabilność."],
      actions: [
        "3 treningi siłowe tygodniowo.",
        "Codzienny spacer.",
      ],
    },
    {
      title: "Tożsamość",
      description: "Traktujesz ciało jak zasób.",
      why: ["Szacunek do ciała wzmacnia charakter."],
      actions: [
        "Zero autodestrukcyjnych nawyków przez 30 dni.",
      ],
    },
  ],
},

// =====================================
// RELACJE I ODPOWIEDZIALNOŚĆ
// =====================================
{
  slug: "relacje-odpowiedzialnosc",
  title: "Relacje i odpowiedzialność",
  tryb: "odbicie",
  level: "srednia",
  intro: "Relacje wymagają siły i dojrzałości.",
  etapy: [
    {
      title: "Uczciwość",
      description: "Najpierw wobec siebie.",
      why: ["Bez prawdy nie ma zaufania."],
      actions: [
        "Spisz swoje błędy bez usprawiedliwień.",
        "Jedna szczera rozmowa.",
      ],
    },
    {
      title: "Granice",
      description: "Nie wszystko akceptujesz.",
      why: ["Granice budują szacunek."],
      actions: [
        "Określ 3 nienegocjowalne granice.",
      ],
    },
    {
      title: "Odpowiedzialność",
      description: "Twoje decyzje – Twoje skutki.",
      why: ["Sprawczość wzmacnia charakter."],
      actions: [
        "Napraw jedną zaniedbaną relację.",
      ],
    },
  ],
},
// =====================================
// KONCENTRACJA I MENTALNOŚĆ
// =====================================
{
  slug: "koncentracja-mentalnosc",
  title: "Koncentracja i mentalność",
  tryb: "wzrost",
  level: "srednia",
  intro: "Skupienie to przewaga.",
  etapy: [
    {
      title: "Eliminacja rozproszeń",
      description: "Odcinasz szum.",
      why: ["Skupienie zwiększa efektywność."],
      actions: [
        "Zero social mediów do 10:00.",
        "1h pracy głębokiej dziennie.",
      ],
    },
    {
      title: "Mental toughness",
      description: "Robisz mimo braku motywacji.",
      why: ["Dyscyplina > emocje."],
      actions: [
        "Jedna rzecz dziennie, której nie chcesz robić.",
      ],
    },
    {
      title: "Tożsamość zwycięzcy",
      description: "Myślisz długoterminowo.",
      why: ["Perspektywa zmniejsza impulsywność."],
      actions: [
        "Plan 90 dni.",
      ],
    },
  ],
},

// =====================================
// PRZYWÓDZTWO
// =====================================
{
  slug: "przywodztwo",
  title: "Przywództwo",
  tryb: "wzrost",
  level: "zaawansowana",
  intro: "Przywództwo zaczyna się od siebie.",
  etapy: [
    {
      title: "Samokontrola",
      description: "Reagujesz świadomie.",
      why: ["Spokój daje autorytet."],
      actions: [
        "Brak impulsywnych decyzji 14 dni.",
      ],
    },
    {
      title: "Wpływ",
      description: "Budujesz zaufanie.",
      why: ["Ludzie podążają za stabilnością."],
      actions: [
        "Jedna inicjatywa w pracy / rodzinie.",
      ],
    },
    {
      title: "Odpowiedzialność",
      description: "Nie zrzucasz winy.",
      why: ["Autorytet rodzi się z odpowiedzialności."],
      actions: [
        "Weź odpowiedzialność za jeden trudny obszar.",
      ],
    },
  ],
},

// =====================================
// SENS I DUCHOWOŚĆ
// =====================================
{
  slug: "sens-duchowosc",
  title: "Sens i duchowość",
  tryb: "wzrost",
  level: "zaawansowana",
  intro: "Bez sensu sukces jest pusty.",
  etapy: [
    {
      title: "Refleksja",
      description: "Zatrzymaj się.",
      why: ["Świadomość pogłębia życie."],
      actions: [
        "10 min ciszy dziennie.",
        "Spisz swoje wartości.",
      ],
    },
    {
      title: "Kierunek",
      description: "Żyjesz według zasad.",
      why: ["Wartości stabilizują decyzje."],
      actions: [
        "Zdefiniuj swoje 5 zasad życia.",
      ],
    },
    {
      title: "Transcendencja",
      description: "Wyjście poza ego.",
      why: ["Służba buduje sens."],
      actions: [
        "Zrób coś bezinteresownie.",
      ],
    },
  ],
},
];