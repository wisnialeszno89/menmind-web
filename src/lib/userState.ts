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

  // 🔥 sprawdz poprzedni stan
  const prev = localStorage.getItem("user_state")

  if (prev) {
    try {
      const prevData = JSON.parse(prev)

      const priority = {
        kryzys: 3,
        nisko: 2,
        ok: 1
      }

      // jeśli poprzedni był gorszy → nie nadpisuj
      if (priority[prevData.state] > priority[state]) {
        return
      }

    } catch {}
  }

  localStorage.setItem(
    "user_state",
    JSON.stringify(fullResult)
  )
}

// 🔥 ODCZYT STANU
export function getUserState(): UserState | null {
  if (typeof window === "undefined") return null

  const saved = localStorage.getItem("user_state")

  if (!saved) return null

  try {
    const data = JSON.parse(saved)
    return data.state || null
  } catch {
    return null
  }
}

export function getResults() {
  if (typeof window === "undefined") return []

  const data = localStorage.getItem("test_results")

  if (!data) return []

  return JSON.parse(data)
}