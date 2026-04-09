"use client"

import { useEffect, useState } from "react"

export default function BalancePage(){

  const [tab,setTab]=useState<
  "life" | "finance" | "father" | "health" | "relations" | "work" | "mind"
    >("life")

  const [data, setData] = useState({
    sleep: 6,
    work: 9,
    family: 2,
    sport: 20,
    self: 1,
    stress: 6,
    screen: 4,
    energy: 6
  })

  const [history, setHistory] = useState<{date:string, score:number}[]>([])

  useEffect(()=>{
    const saved = localStorage.getItem("menmind-balance")
    if(saved) setData(JSON.parse(saved))
  },[])

  useEffect(()=>{
    localStorage.setItem("menmind-balance", JSON.stringify(data))
  },[data])

  useEffect(()=>{
    const saved = localStorage.getItem("menmind-balance-history")
    if(saved) setHistory(JSON.parse(saved))
  },[])

  const norms = {
    sleep: 7,
    work: 8,
    family: 3,
    sport: 30,
    self: 2,
    stress: 4,
    screen: 3,
    energy: 7
  }

  const score = Math.round(
    (
      normalize(data.sleep,8) +
      normalizeInverse(data.work,8) +
      normalize(data.family,4) +
      normalize(data.sport,45) +
      normalize(data.self,3) +
      normalizeInverse(data.stress,5) +
      normalizeInverse(data.screen,4) +
      normalize(data.energy,8)
    ) / 8 * 100
    )
  useEffect(()=>{
  localStorage.setItem("mm_balance_life", score.toString())
  },[score])

  useEffect(()=>{
    const today = new Date().toISOString().slice(0,10)
    if(!history.length || history[history.length-1].date !== today){
      const updated=[...history,{date:today,score}]
      setHistory(updated)
      localStorage.setItem("menmind-balance-history",JSON.stringify(updated))
    }
  },[score])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
        <button
          onClick={()=>setTab("life")}
          className={`px-4 py-2 rounded-lg border whitespace-nowrap ${tab==="life"?"bg-black text-white":"bg-white"}`}
        >
          Balans życia
        </button>

        <button
          onClick={()=>setTab("finance")}
          className={`px-4 py-2 rounded-lg border whitespace-nowrap ${tab==="finance"?"bg-black text-white":"bg-white"}`}
        >
          Balans finansowy
        </button>
        
        <button
        onClick={()=>setTab("father")}
        className={`px-4 py-2 rounded-lg border whitespace-nowrap ${tab==="father"?"bg-black text-white":"bg-white"}`}
        >
          Balans ojcostwa
        </button>

        <button
        onClick={()=>setTab("health")}
        className={`px-4 py-2 rounded-lg border whitespace-nowrap ${tab==="health"?"bg-black text-white":"bg-white"}`}
        >
          Zdrowie
        </button>

        <button
        onClick={()=>setTab("relations")}
        className={`px-4 py-2 rounded-lg border whitespace-nowrap ${tab==="relations"?"bg-black text-white":"bg-white"}`}
        >
          Relacje
        </button>

        <button
        onClick={()=>setTab("work")}
        className={`px-4 py-2 rounded-lg border whitespace-nowrap ${tab==="work"?"bg-black text-white":"bg-white"}`}
        >
         Praca
        </button>

        <button
        onClick={()=>setTab("mind")}
        className={`px-4 py-2 rounded-lg border whitespace-nowrap ${tab==="mind"?"bg-black text-white":"bg-white"}`}
        >
         Psychika
        </button>
        </div>

      {tab==="life" && (
        <>
          <h1 className="text-3xl font-semibold mb-2">
            Twój balans życia
          </h1>

          <p className="text-gray-500 mb-6">
            Sprawdź gdzie jesteś i popraw wynik
          </p>

          <Score score={score}/>
          <LevelBadge score={score}/>
          <Ranking score={score}/>
          <ProgressDelta history={history}/>
          <BestScore history={history}/>
          <GoalBadge score={score}/>
          <AverageCompare score={score}/>
          <Streak history={history}/>

          <div className="grid md:grid-cols-2 gap-10 mt-10">

            <div className="space-y-4">
              <Input label="Sen (h)" value={data.sleep} onChange={(v)=>setData({...data,sleep:v})}/>
              <Input label="Praca (h)" value={data.work} onChange={(v)=>setData({...data,work:v})}/>
              <Input label="Rodzina (h)" value={data.family} onChange={(v)=>setData({...data,family:v})}/>
              <Input label="Ruch (min)" value={data.sport} onChange={(v)=>setData({...data,sport:v})}/>
              <Input label="Czas dla siebie (h)" value={data.self} onChange={(v)=>setData({...data,self:v})}/>
              <Input label="Stres (1-10)" value={data.stress} onChange={(v)=>setData({...data,stress:v})}/>
              <Input label="Ekran (h)" value={data.screen} onChange={(v)=>setData({...data,screen:v})}/>
              <Input label="Energia (1-10)" value={data.energy} onChange={(v)=>setData({...data,energy:v})}/>
            </div>

            <div className="space-y-4">
              <Bar label="Sen" value={data.sleep} norm={norms.sleep}/>
              <Bar label="Praca" value={data.work} norm={norms.work} inverse/>
              <Bar label="Rodzina" value={data.family} norm={norms.family}/>
              <Bar label="Ruch" value={data.sport} norm={norms.sport}/>
              <Bar label="Ja" value={data.self} norm={norms.self}/>
              <Bar label="Stres" value={data.stress} norm={norms.stress} inverse/>
              <Bar label="Ekran" value={data.screen} norm={norms.screen} inverse/>
              <Bar label="Energia" value={data.energy} norm={norms.energy}/>
            </div>

          </div>

          <ProgressChart history={history}/>
          <Insights data={data}/>
          <TopFix data={data}/>
          <RecommendedActions data={data}/>
        </>
      )}

      {tab==="finance" && (
        <FinancialBalance/>
      )}

      {tab==="father" && (
       <FatherBalance/>
      )}
      {tab==="health" && (
        <HealthBalance/>
      )}
      {tab==="relations" && (
        <RelationsBalance/>
      )}
      {tab==="work" && (
        <WorkBalance/>
      )}
      {tab==="mind" && (
        <MindBalance/>
      )}

      <OverallProfile />

    </div>
  )
}

function FinancePlaceholder(){
  return(
    <div className="border rounded-xl p-6">
      <div className="text-lg font-semibold mb-2">
        Balans finansowy
      </div>
      <div className="text-sm text-gray-600">
        W trakcie przygotowania
      </div>
    </div>
  )
}

function Score({score}:{score:number}){
  let color="bg-red-500"
  let label="Przeciążenie"
  if(score>50){color="bg-yellow-500";label="Niestabilny balans"}
  if(score>75){color="bg-green-600";label="Dobra równowaga"}

  return(
    <div className="border rounded-xl p-6">
      <div className="flex justify-between items-end mb-4">
        <div className="text-4xl font-semibold">{score}%</div>
        <div className="text-sm">{label}</div>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-full">
        <div className={`${color} h-3 rounded-full`} style={{width:`${score}%`}}/>
      </div>
    </div>
  )
}

function ProgressDelta({history}:{history:any[]}){
  if(history.length<2) return null
  const diff=history.at(-1).score-history.at(-2).score
  const sign=diff>0?"+":""
  return <div className="text-sm mt-2">Zmiana: {sign}{diff}%</div>
}

function BestScore({history}:{history:any[]}){
  if(!history.length) return null
  const best=Math.max(...history.map(h=>h.score))
  return <div className="text-sm text-gray-600">Najlepszy wynik: {best}%</div>
}

function GoalBadge({score}:{score:number}){
  return score>=75
    ? <div className="text-green-600 text-sm mt-1">✔ Dobra równowaga</div>
    : <div className="text-sm text-gray-600 mt-1">Cel: 75%</div>
}

function AverageCompare({score}:{score:number}){
  const avg=65
  return (
    <div className="text-sm text-gray-600 mt-1">
      Średni wynik mężczyzn: {avg}% • Ty: {score}%
    </div>
  )
}

function Streak({history}:{history:any[]}){

  if(!history.length) return null
  let streak = 1

  for(let i=history.length-1;i>0;i--){
    const d1 = new Date(history[i].date)
    const d2 = new Date(history[i-1].date)
    const diff = (d1.getTime() - d2.getTime()) / (1000*3600*24)

    if(diff <= 1.5) streak++
    else break
  }

  return (
    <div className="mt-4 text-sm text-gray-600">
      Seria dni: <span className="font-medium">{streak}</span>
    </div>
  )
}

function ProgressChart({history}:{history:any[]}){
  if(history.length<2) return null
  const max=Math.max(...history.map(h=>h.score))
  return(
    <div className="mt-8 border rounded-xl p-4">
      <div className="flex items-end gap-2 h-20">
        {history.slice(-7).map((h,i)=>(
          <div key={i} className="flex-1 bg-black"
            style={{height:`${(h.score/max)*100}%`}}
          />
        ))}
      </div>
    </div>
  )
}

function Bar({label,value,norm,inverse=false}:{label:string,value:number,norm:number,inverse?:boolean}){
  const percent=Math.min((value/norm)*100,150)
  let color="bg-green-600"

  if(inverse){
    if(value>norm*1.3) color="bg-red-500"
    else if(value>norm) color="bg-yellow-500"
  }else{
    if(value<norm*0.7) color="bg-red-500"
    else if(value<norm) color="bg-yellow-500"
  }

  return(
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span><span>{value}</span>
      </div>
      <div className="bg-gray-200 h-3 rounded-full">
        <div className={`${color} h-3 rounded-full`} style={{width:`${percent}%`}}/>
      </div>
    </div>
  )
}

function Insights({data}:{data:any}){
  const tips=[]
  if(data.sleep<6) tips.push("Zwiększ sen")
  if(data.sport<10) tips.push("Dodaj ruch")
  if(!tips.length) return null
  return(
    <div className="mt-8 border rounded-xl p-4">
      <div className="font-semibold mb-2">Wnioski</div>
      {tips.map((t,i)=><div key={i}>• {t}</div>)}
    </div>
  )
}

function TopFix({data}:{data:any}){
  return(
    <div className="mt-6 text-sm text-gray-600">
      Priorytet: popraw sen i ruch
    </div>
  )
}

function RecommendedActions({data}:{data:any}){
  const actions=[]
  if(data.sleep < 6) actions.push({ label:"Popraw sen", link:"/odbudowa" })
  if(data.stress > 7) actions.push({ label:"Zrób test stresu", link:"/narzedzia/test-stresu" })
  if(data.sport < 10) actions.push({ label:"Dodaj ruch", link:"/odbudowa" })
  if(data.work > 10) actions.push({ label:"Sprawdź balans pracy", link:"/kryzys" })

  if(!actions.length) return null

  return (
    <div className="mt-10 border rounded-xl p-6">
      <div className="font-semibold mb-3">
        Co możesz zrobić teraz
      </div>

      <div className="space-y-2">
        {actions.map((a,i)=>(
          <a key={i} href={a.link} className="block text-sm text-gray-700 hover:underline">
            → {a.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function Input({
  label,
  value,
  onChange
}:{
  label:string,
  value:number,
  onChange:(v:number)=>void
}){
  return(
    <div>
      <label className="text-sm text-gray-600">
        {label}
      </label>

      <input
        type="number"
        inputMode="numeric"
        value={value === 0 ? "" : value}
        placeholder="0"
        onFocus={(e)=>e.target.select()}
        onChange={(e)=>{
          const v=e.target.value
          onChange(v===""?0:Number(v))
        }}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  )
}
function LevelBadge({score}:{score:number}){

  let level="Start"
  let color="text-red-500"
  let next=40

  if(score>=40){ level="Stabilizacja"; color="text-orange-500"; next=60 }
  if(score>=60){ level="Budowanie"; color="text-yellow-500"; next=75 }
  if(score>=75){ level="Równowaga"; color="text-green-600"; next=90 }
  if(score>=90){ level="Forma"; color="text-green-700"; next=null }

  return (
    <div className="mt-4 border rounded-xl p-4">
      <div className="text-sm text-gray-500">Twój poziom</div>
      <div className={`text-lg font-semibold ${color}`}>
        {level}
      </div>

      {next && (
        <div className="text-sm text-gray-600 mt-1">
          Do następnego poziomu: {next-score}%
        </div>
      )}

      {!next && (
        <div className="text-sm text-green-600 mt-1">
          Maksymalna forma
        </div>
      )}
    </div>
  )
}

function normalize(val:number,max:number){return Math.min(val/max,1)}
function normalizeInverse(val:number,max:number){return Math.min(1-(val/max),1)}

function FinancialBalance(){

  const [data,setData]=useState({
    income:5000,
    expenses:3500,
    savings:10000,
    debt:5000,
    buffer:2
  })

  const savingsRate = data.income>0
    ? (data.income-data.expenses)/data.income
    : 0

  const debtRatio = data.debt/(data.income*12 || 1)

  const score=Math.round(
    (
      normalize(savingsRate,0.3)+
      normalize(data.buffer,6)+
      normalizeInverse(debtRatio,0.5)+
      normalize(data.savings,50000)
    )/4*100
  )
  useEffect(()=>{
  localStorage.setItem("mm_balance_finance", score.toString())
  },[score])

  return(
    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Balans finansowy
      </h2>

      <Score score={score}/>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div className="space-y-3">
          <Input label="Dochód" value={data.income} onChange={(v)=>setData({...data,income:v})}/>
          <Input label="Wydatki" value={data.expenses} onChange={(v)=>setData({...data,expenses:v})}/>
          <Input label="Oszczędności" value={data.savings} onChange={(v)=>setData({...data,savings:v})}/>
          <Input label="Długi" value={data.debt} onChange={(v)=>setData({...data,debt:v})}/>
          <Input label="Poduszka (miesiące)" value={data.buffer} onChange={(v)=>setData({...data,buffer:v})}/>
        </div>

        <div className="space-y-3">
          <Bar label="Oszczędzanie" value={savingsRate*100} norm={20}/>
          <Bar label="Poduszka" value={data.buffer} norm={6}/>
          <Bar label="Dług" value={debtRatio*100} norm={50} inverse/>
          <Bar label="Kapitał" value={data.savings} norm={50000}/>
        </div>

      </div>

    </div>
  )
}
function FatherBalance(){

  const [data,setData]=useState({
    time:8,
    quality:6,
    contact:7,
    conflict:4,
    stress:5
  })

  const score=Math.round(
    (
      normalize(data.time,14)+
      normalize(data.quality,10)+
      normalize(data.contact,10)+
      normalizeInverse(data.conflict,10)+
      normalizeInverse(data.stress,10)
    )/5*100
  )
  useEffect(()=>{
  localStorage.setItem("mm_balance_father", score.toString())
  },[score])
  
  return(
    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Balans ojcostwa
      </h2>

      <Score score={score}/>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div className="space-y-3">
          <Input label="Czas z dzieckiem (h/tydz)" value={data.time} onChange={(v)=>setData({...data,time:v})}/>
          <Input label="Jakość relacji (1-10)" value={data.quality} onChange={(v)=>setData({...data,quality:v})}/>
          <Input label="Regularność kontaktu (1-10)" value={data.contact} onChange={(v)=>setData({...data,contact:v})}/>
          <Input label="Konflikt z matką (1-10)" value={data.conflict} onChange={(v)=>setData({...data,conflict:v})}/>
          <Input label="Stres ojcowski (1-10)" value={data.stress} onChange={(v)=>setData({...data,stress:v})}/>
        </div>

        <div className="space-y-3">
          <Bar label="Czas" value={data.time} norm={14}/>
          <Bar label="Relacja" value={data.quality} norm={10}/>
          <Bar label="Kontakt" value={data.contact} norm={10}/>
          <Bar label="Konflikt" value={data.conflict} norm={10} inverse/>
          <Bar label="Stres" value={data.stress} norm={10} inverse/>
        </div>

      </div>

    </div>
  )
}
function HealthBalance(){

  const [data,setData]=useState({
    sleep:6,
    sport:2,
    stress:5,
    energy:6,
    screen:4
  })

  const score=Math.round(
    (
      normalize(data.sleep,8)+
      normalize(data.sport,5)+
      normalizeInverse(data.stress,10)+
      normalize(data.energy,10)+
      normalizeInverse(data.screen,8)
    )/5*100
  )
  useEffect(()=>{
  localStorage.setItem("mm_balance_health", score.toString())
  },[score])

  return(
    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Balans zdrowia
      </h2>

      <Score score={score}/>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div className="space-y-3">
          <Input label="Sen (h)" value={data.sleep} onChange={(v)=>setData({...data,sleep:v})}/>
          <Input label="Ruch (dni/tydz)" value={data.sport} onChange={(v)=>setData({...data,sport:v})}/>
          <Input label="Stres (1-10)" value={data.stress} onChange={(v)=>setData({...data,stress:v})}/>
          <Input label="Energia (1-10)" value={data.energy} onChange={(v)=>setData({...data,energy:v})}/>
          <Input label="Ekran (h)" value={data.screen} onChange={(v)=>setData({...data,screen:v})}/>
        </div>

        <div className="space-y-3">
          <Bar label="Sen" value={data.sleep} norm={8}/>
          <Bar label="Ruch" value={data.sport} norm={5}/>
          <Bar label="Stres" value={data.stress} norm={10} inverse/>
          <Bar label="Energia" value={data.energy} norm={10}/>
          <Bar label="Ekran" value={data.screen} norm={8} inverse/>
        </div>

      </div>

    </div>
  )
}
// =====================
// BALANS RELACJI
// =====================
function RelationsBalance(){

  const [data,setData]=useState({
    partner:5,
    family:6,
    friends:4,
    conflict:3,
    loneliness:4
  })

  const score=Math.round(
    (
      normalize(data.partner,10)+
      normalize(data.family,10)+
      normalize(data.friends,10)+
      normalizeInverse(data.conflict,10)+
      normalizeInverse(data.loneliness,10)
    )/5*100
  )
  useEffect(()=>{
  localStorage.setItem("mm_balance_relations", score.toString())
  },[score])

  return(
    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Balans relacji
      </h2>

      <Score score={score}/>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div className="space-y-3">
          <Input label="Relacja partnerska (1-10)" value={data.partner} onChange={(v)=>setData({...data,partner:v})}/>
          <Input label="Relacje rodzinne (1-10)" value={data.family} onChange={(v)=>setData({...data,family:v})}/>
          <Input label="Znajomi (1-10)" value={data.friends} onChange={(v)=>setData({...data,friends:v})}/>
          <Input label="Konflikty (1-10)" value={data.conflict} onChange={(v)=>setData({...data,conflict:v})}/>
          <Input label="Samotność (1-10)" value={data.loneliness} onChange={(v)=>setData({...data,loneliness:v})}/>
        </div>

        <div className="space-y-3">
          <Bar label="Partner" value={data.partner} norm={10}/>
          <Bar label="Rodzina" value={data.family} norm={10}/>
          <Bar label="Znajomi" value={data.friends} norm={10}/>
          <Bar label="Konflikty" value={data.conflict} norm={10} inverse/>
          <Bar label="Samotność" value={data.loneliness} norm={10} inverse/>
        </div>

      </div>

    </div>
  )
}


// =====================
// BALANS PRACY
// =====================
function WorkBalance(){

  const [data,setData]=useState({
    satisfaction:6,
    stress:5,
    income:6,
    growth:5,
    stability:7
  })

  const score=Math.round(
    (
      normalize(data.satisfaction,10)+
      normalizeInverse(data.stress,10)+
      normalize(data.income,10)+
      normalize(data.growth,10)+
      normalize(data.stability,10)
    )/5*100
  )
  useEffect(()=>{
  localStorage.setItem("mm_balance_work", score.toString())
  },[score])
  
  return(
    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Balans pracy
      </h2>

      <Score score={score}/>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div className="space-y-3">
          <Input label="Satysfakcja (1-10)" value={data.satisfaction} onChange={(v)=>setData({...data,satisfaction:v})}/>
          <Input label="Stres (1-10)" value={data.stress} onChange={(v)=>setData({...data,stress:v})}/>
          <Input label="Dochód vs potrzeby (1-10)" value={data.income} onChange={(v)=>setData({...data,income:v})}/>
          <Input label="Rozwój (1-10)" value={data.growth} onChange={(v)=>setData({...data,growth:v})}/>
          <Input label="Stabilność (1-10)" value={data.stability} onChange={(v)=>setData({...data,stability:v})}/>
        </div>

        <div className="space-y-3">
          <Bar label="Satysfakcja" value={data.satisfaction} norm={10}/>
          <Bar label="Stres" value={data.stress} norm={10} inverse/>
          <Bar label="Dochód" value={data.income} norm={10}/>
          <Bar label="Rozwój" value={data.growth} norm={10}/>
          <Bar label="Stabilność" value={data.stability} norm={10}/>
        </div>

      </div>

    </div>
  )
}


// =====================
// BALANS PSYCHIKI
// =====================
function MindBalance(){

  const [data,setData]=useState({
    stress:6,
    motivation:5,
    focus:6,
    control:5,
    fatigue:4
  })

  const score=Math.round(
    (
      normalizeInverse(data.stress,10)+
      normalize(data.motivation,10)+
      normalize(data.focus,10)+
      normalize(data.control,10)+
      normalizeInverse(data.fatigue,10)
    )/5*100
  )
  useEffect(()=>{
  localStorage.setItem("mm_balance_mind", score.toString())
  },[score])
  return(
    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Balans psychiczny
      </h2>

      <Score score={score}/>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div className="space-y-3">
          <Input label="Stres (1-10)" value={data.stress} onChange={(v)=>setData({...data,stress:v})}/>
          <Input label="Motywacja (1-10)" value={data.motivation} onChange={(v)=>setData({...data,motivation:v})}/>
          <Input label="Koncentracja (1-10)" value={data.focus} onChange={(v)=>setData({...data,focus:v})}/>
          <Input label="Kontrola (1-10)" value={data.control} onChange={(v)=>setData({...data,control:v})}/>
          <Input label="Zmęczenie (1-10)" value={data.fatigue} onChange={(v)=>setData({...data,fatigue:v})}/>
        </div>

        <div className="space-y-3">
          <Bar label="Stres" value={data.stress} norm={10} inverse/>
          <Bar label="Motywacja" value={data.motivation} norm={10}/>
          <Bar label="Koncentracja" value={data.focus} norm={10}/>
          <Bar label="Kontrola" value={data.control} norm={10}/>
          <Bar label="Zmęczenie" value={data.fatigue} norm={10} inverse/>
        </div>

      </div>

    <BalanceMethodology />
    </div>
  )
}
function BalanceMethodology(){
  return(
    <div className="mt-16 border rounded-xl p-6 text-sm text-gray-600">

      <div className="font-semibold mb-3 text-black">
        Na jakiej podstawie są te balanse?
      </div>

      <p className="mb-3">
        Wyniki mają charakter orientacyjny i pokazują Twoje proporcje względem
        zdrowych zakresów funkcjonowania dorosłych mężczyzn.
      </p>

      <ul className="space-y-1 mb-3">
        <li>• Sen: 7–8h (zalecenia zdrowotne)</li>
        <li>• Ruch: min. 3x tygodniowo</li>
        <li>• Poduszka finansowa: 3–6 miesięcy</li>
        <li>• Stres: poziom umiarkowany</li>
        <li>• Relacje: regularne kontakty społeczne</li>
        <li>• Ojcostwo: regularny kontakt i zaangażowanie</li>
        <li>• Praca: równowaga satysfakcji i stabilności</li>
      </ul>

      <p>
        Narzędzie nie jest diagnozą medyczną ani psychologiczną. 
        Ma pomóc w refleksji i określeniu kierunku działania.
      </p>

    </div>
  )
}
function Ranking({score}:{score:number}){

  let percent = Math.round(score * 0.9) // pseudo populacja
  if(percent < 5) percent = 5
  if(percent > 95) percent = 95

  let text = ""
  let color = "text-gray-600"

  if(percent > 70){
    text = `Lepszy wynik niż ${percent}% mężczyzn`
    color = "text-green-600"
  } else if(percent > 40){
    text = `Blisko średniej (${percent}%)`
    color = "text-yellow-600"
  } else {
    text = `Poniżej ${percent}% mężczyzn`
    color = "text-red-600"
  }

  return (
    <div className="mt-3 text-sm">
      <span className={color}>
        {text}
      </span>
    </div>
  )
}
function OverallProfile(){

  const [scores,setScores]=useState({
    life:0,
    finance:0,
    father:0,
    health:0,
    relations:0,
    work:0,
    mind:0
  })

  function read(){
    setScores({
      life:Number(localStorage.getItem("mm_balance_life")||0),
      finance:Number(localStorage.getItem("mm_balance_finance")||0),
      father:Number(localStorage.getItem("mm_balance_father")||0),
      health:Number(localStorage.getItem("mm_balance_health")||0),
      relations:Number(localStorage.getItem("mm_balance_relations")||0),
      work:Number(localStorage.getItem("mm_balance_work")||0),
      mind:Number(localStorage.getItem("mm_balance_mind")||0),
    })
  }

  useEffect(()=>{
    read()

    const interval = setInterval(read, 800)
    return ()=>clearInterval(interval)
  },[])

  const values = Object.values(scores).filter(v=>v>0)

  const avg = values.length
    ? Math.round(values.reduce((a,b)=>a+b,0) / values.length)
    : 0

  if(avg === 0) return null

  return(
    <div className="mt-16 border rounded-xl p-6 bg-gray-50">

      <h2 className="text-xl font-semibold mb-4">
        Twoja mapa życia
      </h2>

      <Score score={avg}/>
      <Ranking score={avg}/>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">

        <Mini label="Życie" value={scores.life}/>
        <Mini label="Finanse" value={scores.finance}/>
        <Mini label="Ojcostwo" value={scores.father}/>
        <Mini label="Zdrowie" value={scores.health}/>
        <Mini label="Relacje" value={scores.relations}/>
        <Mini label="Praca" value={scores.work}/>
        <Mini label="Psychika" value={scores.mind}/>

      </div>

      <ProfileType scores={scores}/>
      <ActionPlan scores={scores}/>
      <WeeklyProgress />
      <Badges />

    </div>
  )
}
function ProfileType({scores}:{scores:Record<string,number>}){

  const entries = Object.entries(scores) as [string, number][]
  const lowest = entries.sort((a,b)=>a[1]-b[1])[0]

  let type = ""
  let desc = ""

  if(lowest[1] < 40){
    type = "Tryb przetrwania"
    desc = "Najpierw stabilizacja fundamentów życia"
  }
  else if(scores.work < 55){
    type = "Odbudowa zawodowa"
    desc = "Skup się na pracy i finansach"
  }
  else if(scores.mind < 55){
    type = "Przeciążony mental"
    desc = "Potrzebna redukcja stresu i reset"
  }
  else if(scores.relations < 55){
    type = "Samotny wojownik"
    desc = "Czas wzmocnić relacje"
  }
  else if(scores.life > 75){
    type = "Strateg"
    desc = "Masz dobrą bazę – czas na rozwój"
  }
  else{
    type = "Budowanie równowagi"
    desc = "Stopniowo poprawiaj wszystkie obszary"
  }

  return(
    <div className="mt-8 border rounded-xl p-6 bg-white">
      <div className="text-sm text-gray-500 mb-1">
        Twój typ
      </div>

      <div className="text-xl font-semibold mb-1">
        {type}
      </div>

      <div className="text-sm text-gray-600">
        {desc}
      </div>
    </div>
  )
}
function ActionPlan({scores}:{scores:Record<string,number>}){

  const entries = Object.entries(scores) as [string, number][]
  const lowest = entries.sort((a,b)=>a[1]-b[1])[0][0]

  let title = ""
  let steps:string[] = []

  if(lowest === "finance"){
    title = "Plan poprawy finansów"
    steps = [
      "Spisz miesięczne wydatki",
      "Zbuduj poduszkę 1 miesiąca",
      "Zwiększ dochód lub zmień pracę"
    ]
  }

  if(lowest === "health"){
    title = "Plan poprawy zdrowia"
    steps = [
      "Śpij minimum 7h",
      "3x ruch w tygodniu",
      "Ogranicz ekran wieczorem"
    ]
  }

  if(lowest === "relations"){
    title = "Plan poprawy relacji"
    steps = [
      "Skontaktuj się z jedną osobą",
      "Zaplanuj spotkanie",
      "Ogranicz konflikty"
    ]
  }

  if(lowest === "work"){
    title = "Plan poprawy pracy"
    steps = [
      "Określ czego brakuje",
      "Zaktualizuj CV",
      "Wyślij 3 aplikacje"
    ]
  }

  if(lowest === "mind"){
    title = "Plan resetu mentalnego"
    steps = [
      "Spacer 20 min dziennie",
      "Ogranicz stresory",
      "Ustal jedną rzecz dziennie"
    ]
  }

  if(lowest === "father"){
    title = "Plan poprawy ojcostwa"
    steps = [
      "Ustal stały kontakt",
      "Zaplanuj czas z dzieckiem",
      "Zmniejsz konflikt"
    ]
  }

  if(lowest === "life"){
    title = "Plan poprawy balansu"
    steps = [
      "Popraw sen",
      "Dodaj ruch",
      "Ogranicz przeciążenie"
    ]
  }

  return(
    <div className="mt-8 border rounded-xl p-6 bg-gray-50">

      <div className="font-semibold mb-3">
        {title}
      </div>

      <div className="space-y-2">
        {steps.map((s,i)=>(
          <div key={i} className="text-sm">
            {i+1}. {s}
          </div>
        ))}
      </div>

    </div>
  )
}
function WeeklyProgress(){

  const [history,setHistory]=useState<number[]>([])

  useEffect(()=>{
    const saved = localStorage.getItem("mm_weekly_progress")
    if(saved){
      setHistory(JSON.parse(saved))
    }
  },[])

  useEffect(()=>{
    const avg = Number(localStorage.getItem("mm_balance_life")||0)

    const saved = localStorage.getItem("mm_weekly_progress")
    let arr = saved ? JSON.parse(saved) : []

    const today = new Date().toDateString()

    const lastDate = localStorage.getItem("mm_weekly_date")

    if(lastDate !== today){
      arr = [...arr.slice(-6), avg]
      localStorage.setItem("mm_weekly_progress",JSON.stringify(arr))
      localStorage.setItem("mm_weekly_date",today)
      setHistory(arr)
    }

  },[])

  if(history.length < 2) return null

  const max = Math.max(...history)

  return(
    <div className="mt-8 border rounded-xl p-6">

      <div className="font-semibold mb-3">
        Progres tygodniowy
      </div>

      <div className="flex items-end gap-2 h-24">
        {history.map((h,i)=>(
          <div
            key={i}
            className="flex-1 bg-black rounded"
            style={{height:`${(h/max)*100}%`}}
          />
        ))}
      </div>

      <div className="text-xs text-gray-500 mt-2">
        Ostatnie 7 dni
      </div>

    </div>
  )
}
function Badges(){

  const [history,setHistory]=useState<number[]>([])

  useEffect(()=>{
    const saved = localStorage.getItem("mm_weekly_progress")
    if(saved){
      setHistory(JSON.parse(saved))
    }
  },[])

  if(history.length < 2) return null

  let badges:string[] = []

  // wzrost
  const last = history[history.length-1]
  const prev = history[history.length-2]

  if(last > prev){
    badges.push("📈 Poprawa wyniku")
  }

  // seria wzrostowa
  let streak = 1
  for(let i=history.length-1;i>0;i--){
    if(history[i] >= history[i-1]) streak++
    else break
  }

  if(streak >= 3){
    badges.push("🔥 3 dni progresu")
  }

  if(last >= 75){
    badges.push("💪 Dobra forma")
  }

  if(last >= 85){
    badges.push("🏆 Wysoki poziom")
  }

  if(!badges.length) return null

  return(
    <div className="mt-8 border rounded-xl p-6 bg-white">

      <div className="font-semibold mb-3">
        Twoje odznaki
      </div>

      <div className="flex flex-wrap gap-2">
        {badges.map((b,i)=>(
          <div
            key={i}
            className="px-3 py-1 rounded-full border text-sm"
          >
            {b}
          </div>
        ))}
      </div>

    </div>
  )
}
function Mini({label,value}:{label:string,value:number}){

  return(
    <div className="border rounded-lg p-3 text-center bg-white">
      <div className="text-xs text-gray-500">
        {label}
      </div>
      <div className="text-lg font-semibold">
        {value || "-"}%
      </div>
    </div>
  )
}