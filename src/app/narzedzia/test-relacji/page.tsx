import SimpleTest from "@/components/SimpleTest"

export default function Page(){

  return (
    <SimpleTest
      title="Test relacji"
      questions={[
        {
          question:"Czy czujesz dystans w relacji?",
          answers:[
            { text:"Tak", score:0 },
            { text:"Trochę", score:1 },
            { text:"Nie", score:2 }
          ]
        },
        {
          question:"Czy potraficie rozmawiać spokojnie?",
          answers:[
            { text:"Tak", score:2 },
            { text:"Rzadko", score:1 },
            { text:"Nie", score:0 }
          ]
        }
      ]}
            low={{
            text:"Relacja wymaga zatrzymania i poukładania.",
            path:"/kryzys",
            tool:"/narzedzia/reset-90"
        }}
            high={{
             text:"Relacja ma stabilny fundament — warto ją wzmacniać.",
             path:"/wzrost",
            tool:"/narzedzia/brain-dump"
        }}
    />
  )
}