"use client"

import { useEffect, useState } from "react"

export default function BalancePage(){

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
    const today = new Date().toISOString().slice(0,10)
    if(!history.length || history[history.length-1].date !== today){
      const updated=[...history,{date:today,score}]
      setHistory(updated)
      localStorage.setItem("menmind-balance-history",JSON.stringify(updated))
    }
  },[score])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-2">
        Twój balans życia
      </h1>

      <p className="text-gray-500 mb-6">
        Sprawdź gdzie jesteś i popraw wynik
      </p>

      <Score score={score}/>
        <LevelBadge score={score}/>
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

function Input({label,value,onChange}:{label:string,value:number,onChange:(v:number)=>void}){
  return(
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e)=>onChange(Number(e.target.value))}
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

function Streak({history}:{history:any[]}){

  if(!history.length) return null

  let streak = 1

  for(let i=history.length-1;i>0;i--){
    const d1 = new Date(history[i].date)
    const d2 = new Date(history[i-1].date)

    const diff = (d1.getTime() - d2.getTime()) / (1000*3600*24)

    if(diff <= 1.5){
      streak++
    }else{
      break
    }
  }

  return (
    <div className="mt-4 text-sm text-gray-600">
      Seria dni: <span className="font-medium">{streak}</span>
    </div>
  )
}

function RecommendedActions({data}:{data:any}){

  const actions = []

  if(data.sleep < 6){
    actions.push({ label:"Popraw sen", link:"/odbudowa" })
  }

  if(data.stress > 7){
    actions.push({ label:"Zrób test stresu", link:"/narzedzia/test-stresu" })
  }

  if(data.sport < 10){
    actions.push({ label:"Dodaj ruch", link:"/odbudowa" })
  }

  if(data.work > 10){
    actions.push({ label:"Sprawdź balans pracy", link:"/kryzys" })
  }

  if(!actions.length) return null

  return (
    <div className="mt-10 border rounded-xl p-6">
      <div className="font-semibold mb-3">
        Co możesz zrobić teraz
      </div>

      <div className="space-y-2">
        {actions.map((a,i)=>(
          <a
            key={i}
            href={a.link}
            className="block text-sm text-gray-700 hover:underline"
          >
            → {a.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function normalize(val:number,max:number){return Math.min(val/max,1)}
function normalizeInverse(val:number,max:number){return Math.min(1-(val/max),1)}