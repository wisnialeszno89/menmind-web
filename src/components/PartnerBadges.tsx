export default function PartnerBadges({
featured,
verified,
tier
}:{
featured?:boolean
verified?:boolean
tier?:string
}){

return(

<div className="flex flex-wrap gap-2 mb-3">

{featured && (
<span className="text-xs bg-yellow-100 px-2 py-1 rounded">
⭐ Polecany
</span>
)}

{verified && (
<span className="text-xs bg-green-100 px-2 py-1 rounded">
✔ Zweryfikowany
</span>
)}

{tier === "strategic" && (
<span className="text-xs bg-purple-100 px-2 py-1 rounded">
🏆 Partner strategiczny
</span>
)}

</div>

)

}