
import { Truck, Clock, Shield, MapPin } from 'lucide-react';

export function DeliverySection() {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Livraison Express",
      description: "Livraison en 30 minutes pour les commandes locales"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Suivi en Temps Réel",
      description: "Suivez votre commande en direct sur la carte"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Livraison Sécurisée",
      description: "Vos produits livrés avec soin et sécurité"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Zone Étendue",
      description: "Service disponible dans toute la ville"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Livraison Rapide et Fiable</h2>
          <p className="mt-4 text-xl text-gray-600">
            Nous livrons vos commandes rapidement et en toute sécurité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}