export const categoryFAQ: Record<string, { q: string; a: string }[]> = {

  psycholog: [
    {
      q: "Kiedy warto skorzystać z pomocy psychologa?",
      a: "Gdy stres lub napięcie utrzymują się dłuższy czas."
    }
  ],

  mediacje: [
    {
      q: "Kiedy warto skorzystać z mediacji?",
      a: "Gdy konflikt można rozwiązać rozmową zamiast procesu sądowego."
    }
  ],

  "prawo-rodzinne": [
    {
      q: "Kiedy potrzebny jest prawnik rodzinny?",
      a: "Gdy sprawa dotyczy rozwodu, opieki nad dzieckiem lub alimentów."
    }
  ]

}

export const getCategoryFAQ = (category: string) => {
  return categoryFAQ[category] || [];
};