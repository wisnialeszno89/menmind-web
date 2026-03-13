export function readingTime(text:string){

const words = text.split(" ").length

return Math.ceil(words / 200)

}