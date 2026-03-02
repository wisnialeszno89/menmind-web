export async function generateMetadata({ params }) {
  return {
    title: `${params.category} ${params.city} | MenMind`,
    description: `Sprawdzeni specjaliści w kategorii ${params.category} w mieście ${params.city}. Wsparcie dla mężczyzn.`,
  };
}