export function readingTime(text: string) {

const words = text.split(/\s+/).length

const minutes = Math.ceil(words / 200)

return minutes

}