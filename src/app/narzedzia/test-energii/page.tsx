import SimpleTest from "@/components/SimpleTest"

export default function Page(){

  return (
    <SimpleTest
      title="Test energii mentalnej"
      questions={[
        {
          question:"Czy masz energię rano?",
          answers:[
            { text:"Tak", score:2 },
            { text:"Różnie", score:1 },
            { text:"Nie", score:0 }
          ]
        },
        {
          question:"Czy czujesz przeciążenie?",
          answers:[
            { text:"Nie", score:2 },
            { text:"Trochę", score:1 },
            { text:"Tak", score:0 }
          ]
        }
      ]}
      low={{
        text:"Potrzebujesz odbudować energię.",
        path:"/odbudowa",
        tool:"/narzedzia/reset-90"
    }}
    high={{
        text:"Masz dobrą energię — utrzymuj ją.",
        path:"/wzrost",
         tool:"/narzedzia/plan-72h"
        }}
    />
  )
}