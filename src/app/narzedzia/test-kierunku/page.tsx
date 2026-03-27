import SimpleTest from "@/components/SimpleTest"

export default function Page(){

  return (
    <SimpleTest
      title="Test kierunku życia"
      questions={[
        {
          question: "Czy wiesz dokąd zmierzasz?",
          answers:[
            { text:"Tak", score:2 },
            { text:"Częściowo", score:1 },
            { text:"Nie", score:0 }
          ]
        },
        {
          question: "Czy masz plan na najbliższe miesiące?",
          answers:[
            { text:"Tak", score:2 },
            { text:"Trochę", score:1 },
            { text:"Nie", score:0 }
          ]
        }
      ]}
        low={{
            text:"Potrzebujesz uporządkować kierunek działania.",
            path:"/odbudowa",
            tool:"/narzedzia/plan-72h"
            }}
        high={{
            text:"Masz kierunek — warto go wzmocnić.",
            path:"/wzrost",
            tool:"/narzedzia/brain-dump"
        }}
    />
  )
}