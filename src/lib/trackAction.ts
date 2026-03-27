export function trackAction(){
  localStorage.setItem("mm_last_action", String(Date.now()))

  const streak = localStorage.getItem("mm_streak")

  if(streak){
    localStorage.setItem("mm_streak", String(Number(streak)+1))
  }else{
    localStorage.setItem("mm_streak","1")
  }
}