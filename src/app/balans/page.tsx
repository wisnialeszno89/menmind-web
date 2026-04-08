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

  useEffect(()=>{
    const saved = localStorage.getItem("menmind-balance")
    if(saved){
      setData(JSON.parse(saved))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("menmind-balance", JSON.stringify(data))
  },[data])

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

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-2">
        Twój balans życia
      </h1>

      <p className="text-gray-500 mb-6">
        Zobacz gdzie jesteś i co wymaga korekty
      </p>

      <Score score={score} />

      <div className="mt-4 text-sm text-gray-600">
        Większość mężczyzn mieści się w zakresie 55–75% równowagi życia.
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        <div className="space-y-4">

          <Input label="Sen (h)" value={data.sleep} onChange={(v)=>setData({...data, sleep:v})}/>
          <Input label="Praca (h)" value={data.work} onChange={(v)=>setData({...data, work:v})}/>
          <Input label="Rodzina (h)" value={data.family} onChange={(v)=>setData({...data, family:v})}/>
          <Input label="Ruch (min)" value={data.sport} onChange={(v)=>setData({...data, sport:v})}/>
          <Input label="Czas dla siebie (h)" value={data.self} onChange={(v)=>setData({...data, self:v})}/>
          <Input label="Stres (1-10)" value={data.stress} onChange={(v)=>setData({...data, stress:v})}/>
          <Input label="Ekran (h)" value={data.screen} onChange={(v)=>setData({...data, screen:v})}/>
          <Input label="Energia (1-10)" value={data.energy} onChange={(v)=>setData({...data, energy:v})}/>

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

      <Insights data={data} />
      <TopFix data={data} />

      {/* METODOLOGIA */}
      <div className="mt-12 border rounded-xl p-6 text-sm text-gray-600">
        <div className="font-semibold mb-3 text-black">
          Na jakiej podstawie są te dane?
        </div>

        <p className="mb-3">
          Panel wykorzystuje orientacyjne zakresy referencyjne dla zdrowego funkcjonowania
          dorosłych mężczyzn. Nie są to dane diagnostyczne ani medyczne.
        </p>

        <ul className="space-y-1 mb-3">
          <li>• Sen: 7–8h (zalecenia zdrowotne)</li>
          <li>• Praca: ok. 8h dziennie (standard równowagi)</li>
          <li>• Ruch: min. 30 min dziennie (aktywność fizyczna)</li>
          <li>• Stres: umiarkowany poziom adaptacyjny</li>
          <li>• Czas dla siebie: element regeneracji psychicznej</li>
          <li>• Ekran: higiena cyfrowa i koncentracja</li>
        </ul>

        <p>
          Wynik pokazuje Twoje proporcje względem zdrowych zakresów funkcjonowania.
          Traktuj go jako wskazówkę do refleksji i działania.
        </p>
      </div>

    </div>
  )
}

function Score({score}:{score:number}){

  let color = "bg-red-500"
  let label = "Przeciążenie"

  if(score > 50){
    color = "bg-yellow-500"
    label = "Niestabilny balans"
  }

  if(score > 75){
    color = "bg-green-600"
    label = "Dobra równowaga"
  }

  return (
    <div className="border rounded-xl p-6">

      <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
        Porównanie do zakresów zdrowego funkcjonowania
      </div>

      <div className="text-sm text-gray-500 mb-2">
        Twój wynik
      </div>

      <div className="flex items-end justify-between mb-4">
        <div className="text-4xl font-semibold">
          {score}%
        </div>

        <div className="text-sm font-medium">
          {label}
        </div>
      </div>

      <div className="w-full bg-gray-200 h-3 rounded-full">
        <div
          className={`${color} h-3 rounded-full transition-all`}
          style={{width:`${score}%`}}
        />
      </div>

    </div>
  )
}

function Bar({label,value,norm,inverse=false}:{label:string,value:number,norm:number,inverse?:boolean}){

  const percent = Math.min((value/norm)*100,150)

  let color = "bg-green-600"

  if(inverse){
    if(value > norm*1.3) color="bg-red-500"
    else if(value > norm) color="bg-yellow-500"
  }else{
    if(value < norm*0.7) color="bg-red-500"
    else if(value < norm) color="bg-yellow-500"
  }

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all`}
          style={{width:`${percent}%`}}
        />
      </div>
    </div>
  )
}

function Insights({data}:{data:any}){

  const tips = []

  if(data.sleep < 6) tips.push("Za mało snu – zwiększ o 30–60 min")
  if(data.work > 10) tips.push("Za dużo pracy – ryzyko przeciążenia")
  if(data.family < 1) tips.push("Mało czasu dla rodziny")
  if(data.sport < 10) tips.push("Dodaj minimum 10 min ruchu")
  if(data.stress > 7) tips.push("Wysoki stres – potrzebna regeneracja")
  if(data.screen > 6) tips.push("Za dużo czasu przy ekranie")
  if(data.energy < 5) tips.push("Niska energia – skup się na śnie i ruchu")

  if(!tips.length) return null

  return (
    <div className="mt-10 border rounded-xl p-6">
      <div className="font-semibold mb-3">
        Twoje wnioski
      </div>

      <ul className="space-y-2 text-sm text-gray-600">
        {tips.map((t,i)=>(
          <li key={i}>• {t}</li>
        ))}
      </ul>
    </div>
  )
}

function TopFix({data}:{data:any}){

  const items = [
    {label:"Sen", score:data.sleep, ideal:7},
    {label:"Rodzina", score:data.family, ideal:3},
    {label:"Ruch", score:data.sport, ideal:30},
    {label:"Czas dla siebie", score:data.self, ideal:2},
    {label:"Energia", score:data.energy, ideal:7}
  ]

  const sorted = items
    .map(i=>({...i, diff: Math.abs(i.ideal - i.score)}))
    .sort((a,b)=>b.diff - a.diff)
    .slice(0,3)

  return (
    <div className="mt-8 border rounded-xl p-6">
      <div className="font-semibold mb-3">
        Twoje 3 priorytety
      </div>

      <ul className="text-sm text-gray-600 space-y-1">
        {sorted.map((s,i)=>(
          <li key={i}>• {s.label}</li>
        ))}
      </ul>
    </div>
  )
}

function Input({label, value, onChange}:{label:string,value:number,onChange:(v:number)=>void}){
  return (
    <div>
      <label className="text-sm text-gray-600 block mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e)=>onChange(Number(e.target.value))}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  )
}

function normalize(val:number,max:number){
  return Math.min(val/max,1)
}

function normalizeInverse(val:number,max:number){
  return Math.min(1-(val/max),1)
}