export type UserState = "kryzys" | "nisko" | "ok"

type TestResult = {
  id: string
  score: number
  percent: number
  state: UserState
  label?: string
  date: number
}

// 🔥 ZAPIS WYNIKU
export function saveTestResult(result: {
  id: string
  score: number
  percent: number
  date: number
}) {

  let state: UserState = "ok"
  let label = "Stabilnie"

  if (result.percent >= 40) {
    state = "nisko"
    label = "Przeciążenie"
  }

  if (result.percent >= 70) {
    state = "kryzys"
    label = "Kryzys"
  }

  const fullResult: TestResult = {
    ...result,
    state,
    label
  }

  localStorage.setItem(
    "test-sytuacji",
    JSON.stringify(fullResult)
  )
}

// 🔥 ODCZYT STANU
export function getUserState(): UserState | null {
  if (typeof window === "undefined") return null

  const saved = localStorage.getItem("test-sytuacji")

  if (!saved) return null

  try {
    const data = JSON.parse(saved)
    return data.state || null
  } catch {
    return null
  }
}