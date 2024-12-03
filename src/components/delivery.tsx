import { Truck, Clock, Shield, MapPin } from 'lucide-react';

export function DeliverySection() {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Livraison Express",
      description: "Livraison en 30 minutes pour les commandes locales",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Suivi en Temps Réel",
      description: "Suivez votre commande en direct sur la carte",
      gradient: "from-yellow-600 to-yellow-700"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Livraison Sécurisée",
      description: "Vos produits livrés avec soin et sécurité",
      gradient: "from-yellow-700 to-yellow-800"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Zone Étendue",
      description: "Service disponible dans toute la ville",
      gradient: "from-yellow-800 to-yellow-900"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-yellow-800 mb-4">
          Service de Livraison Premium
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Profitez d'une expérience de livraison exceptionnelle avec notre service rapide et sécurisé
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:translate-y-[-2px] group-hover:translate-x-[-2px] transition-transform duration-300">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-yellow-600">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}