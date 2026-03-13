export default function RatingStars({ rating }: { rating: number }) {

const stars = Math.round(rating)

return (

<div className="flex items-center gap-1">

{[1,2,3,4,5].map((i)=>(

<span key={i}>

{i <= stars ? "⭐" : "☆"}

</span>

))}

</div>

)

}