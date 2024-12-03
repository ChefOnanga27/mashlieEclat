import { Star, Users, Heart, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Qualité Premium",
      description: "Nous sélectionnons uniquement les meilleurs produits pour votre intérieur"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Service Client",
      description: "Une équipe dédiée à votre satisfaction 7j/7"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Nous mettons tout notre cœur dans la sélection de nos produits"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expertise",
      description: "Plus de 10 ans d'expérience dans la décoration d'intérieur"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="/public/about-hero.jpg"
          alt="Notre histoire"
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/public/drap2.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Notre Histoire</h1>
            <p className="text-xl text-yellow-100 max-w-2xl">
              Découvrez l'histoire de MachlieEclat, votre destination pour la décoration d'intérieur haut de gamme
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-yellow-800 mb-6">Notre Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Chez MachlieEclat, notre mission est de transformer votre espace de vie en un lieu unique qui reflète votre personnalité. 
              Nous croyons que chaque maison mérite d'être belle, confortable et accueillante.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Notre engagement envers la qualité et le service client nous pousse à sélectionner méticuleusement chaque produit 
              que nous proposons, en nous assurant qu'il répond à nos standards élevés d'excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-yellow-100/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <div className="text-yellow-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-800 text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={`/public/team${member}.jpg`}
                  alt={`Team Member ${member}`}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = './public/onanga (2).jpg';
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                    {member === 1 ? "   Vendrelle Enkoro" : member === 2 ? "Alec Joraine Nang" : "Onanga Machlie"}
                  </h3>
                  <p className="text-gray-600">
                    {member === 1 ? "Fondatrice & Directrice" : member === 2 ? "Designer d'Intérieur" : "Responsable Client"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">
            Envie de transformer votre intérieur ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons vous aider à créer l'espace de vos rêves.
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-400 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}