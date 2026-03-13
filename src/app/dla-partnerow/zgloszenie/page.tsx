export default function ZgloszeniePage() {
  return (
    <div className="max-w-xl mx-auto py-16">

      <h1 className="text-3xl font-semibold mb-6">
        Zgłoszenie partnera
      </h1>

      <form className="space-y-6">

        <select
          name="tier"
          className="w-full border border-gray-300 p-3 rounded"
        >
          <option value="basic">Basic</option>
          <option value="pro">Pro</option>
          <option value="strategic">Strategic</option>
        </select>

      </form>

    </div>
  )
}