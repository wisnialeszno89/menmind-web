export type TestResult = {
  id: string
  score: number
  percent: number
  date: number
}

const KEY = "menmind_state"

export function saveTestResult(result: TestResult) {
  if (typeof window === "undefined") return

  const raw = localStorage.getItem(KEY)

  let data: TestResult[] = []

  if (raw) {
    try {
      data = JSON.parse(raw)
    } catch {}
  }

  data.push(result)

  localStorage.setItem(KEY, JSON.stringify(data))
}

export function getResults(): TestResult[] {
  if (typeof window === "undefined") return []

  const raw = localStorage.getItem(KEY)

  if (!raw) return []

  try {
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function getWorldFromPercent(percent: number) {
  if (percent >= 80) return "kryzys"
  if (percent >= 60) return "odbudowa"
  if (percent >= 30) return "wzrost"
  return "wzrost"
}