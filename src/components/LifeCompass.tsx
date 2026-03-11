"use client"

type Props={
energia:number
relacje:number
kierunek:number
stabilnosc:number
}

export default function LifeCompass({
energia,
relacje,
kierunek,
stabilnosc
}:Props){

const size=220
const center=size/2
const max=5

function point(value:number,angle:number){

const radius=(value/max)*(size/2-30)

const x=center+radius*Math.cos(angle)
const y=center+radius*Math.sin(angle)

return{x,y}

}

const p1=point(energia,-Math.PI/2)
const p2=point(relacje,0)
const p3=point(stabilnosc,Math.PI/2)
const p4=point(kierunek,Math.PI)

const polygon=`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`

return(

<svg width={size} height={size}>

<circle cx={center} cy={center} r={size/2-20} stroke="#e5e5e5" fill="none"/>

<polygon points={polygon} fill="rgba(0,0,0,0.2)" stroke="black"/>

</svg>

)

}