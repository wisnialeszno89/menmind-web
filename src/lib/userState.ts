export type TestResult = {
  id: string
  score: number
  percent: number
  date: number
}

const KEY = "menmind_state"

export function saveTestResult(result: TestResult){

  const raw = localStorage.getItem(KEY)

  let data: TestResult[] = []

  if(raw){
    try{
      data = JSON.parse(raw)
    }catch{}
  }

  data.push(result)

  localStorage.setItem(KEY, JSON.stringify(data))

}

export function getResults(): TestResult[]{

  const raw = localStorage.getItem(KEY)

  if(!raw) return []

  try{
    return JSON.parse(raw)
  }catch{
    return []
  }

}