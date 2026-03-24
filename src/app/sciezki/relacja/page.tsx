import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"
import FatherContactPlan from "@/components/FatherContactPlan"

export default function RelacjaDzieckoPage(){
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Relacja z dzieckiem
        </h1>

        <p className="text-gray-700 mb-10">
          Nawet w trudnej sytuacji możesz budować silną więź z dzieckiem.
          Najważniejsze są spokój, obecność i konsekwencja.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Bądź regularnie obecny
          </div>

          <div className="border rounded-lg p-4">
            Skup się na czasie jakościowym
          </div>

          <div className="border rounded-lg p-4">
            Nie wciągaj dziecka w konflikt dorosłych
          </div>

          <div className="border rounded-lg p-4">
            Buduj rytuały spotkań
          </div>

        </div>

        
        <FindSupportCTA />
        <FatherContactPlan />

      </div>

    </main>
  )
}