

export function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 bg-yellow-400">
        <h1 className="text-4xl font-bold text-center mb-8">À Propos de Nous</h1>
        
        <div className="max-w-3xl mx-auto bg-amber-300">
          <img
            src="./public/logo.jpg"
            alt="Notre équipe"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg mx-auto border-spacing-2">
            <p className="mb-6">
              Chez MachlieEclat, nous croyons que chaque maison mérite d'être belle et fonctionnelle.
              Notre mission est de vous proposer des articles de qualité qui allient style et praticité,
              tout en soutenant l'artisanat local et le développement durable.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
            <p className="mb-6">
              Fondée en 2024, MashlieEclat est née de la passion d'une femme entrepreneure
              déterminée à transformer l'art de vivre au Gabon. Nous avons commencé avec une petite
              collection d'articles de cuisine, et aujourd'hui, nous sommes fiers de proposer une large
              gamme de produits pour toute la maison.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Nos Valeurs</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Qualité et durabilité dans chaque produit</li>
              <li>Support aux artisans et producteurs locaux</li>
              <li>Service client personnalisé</li>
              <li>Engagement environnemental</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4">Notre Équipe</h2>
            <p>
              Notre équipe est composée de professionnels passionnés qui travaillent chaque jour
              pour vous offrir la meilleure expérience possible. Nous sommes là pour vous conseiller
              et vous aider à trouver les produits parfaits pour votre maison.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}