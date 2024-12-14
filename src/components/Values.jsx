import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We believe in transparency and honesty in every interaction.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together to achieve exceptional results.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality solutions.',
  },
];

export function Values() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-left md:text-xl">
                {/* Icon with responsive size */}
                <div className="inline-block p-4 rounded-full bg-emerald-100 mb-4">
                  <Icon className="text-emerald-600 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
