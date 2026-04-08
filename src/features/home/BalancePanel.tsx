"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function BalancePanel(){

  const [data, setData] = useState({
    sleep: 6,
    work: 9,
    family: 2,
    sport: 20,
    self: 1,
    stress: 6,
    screen: 4
  })

  const chartData = [
    { name: "Sen", value: data.sleep },
    { name: "Praca", value: data.work },
    { name: "Rodzina", value: data.family },
    { name: "Ruch", value: data.sport },
    { name: "Ja", value: data.self },
    { name: "Stres", value: data.stress },
    { name: "Ekran", value: data.screen }
  ]

  return (
    <section className="py-20 border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-2">
          Twój balans życia
        </h2>

        <p className="text-gray-500 mb-8">
          Sprawdź gdzie jesteś względem typowego mężczyzny
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="space-y-4">

            <Input label="Sen (h)" value={data.sleep} onChange={(v)=>setData({...data, sleep:v})}/>
            <Input label="Praca (h)" value={data.work} onChange={(v)=>setData({...data, work:v})}/>
            <Input label="Rodzina (h)" value={data.family} onChange={(v)=>setData({...data, family:v})}/>
            <Input label="Ruch (min)" value={data.sport} onChange={(v)=>setData({...data, sport:v})}/>
            <Input label="Czas dla siebie (h)" value={data.self} onChange={(v)=>setData({...data, self:v})}/>
            <Input label="Stres (1-10)" value={data.stress} onChange={(v)=>setData({...data, stress:v})}/>
            <Input label="Ekran (h)" value={data.screen} onChange={(v)=>setData({...data, screen:v})}/>

          </div>

          {/* CHART */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </section>
  )
}

function Input({label, value, onChange}:{label:string, value:number, onChange:(v:number)=>void}){
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