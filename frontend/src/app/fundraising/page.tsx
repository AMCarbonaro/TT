'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FundraisingPage() {
  const [donated, setDonated] = useState(0);
  const goal = 100000;
  const warChildAmount = goal / 2;
  const progress = (donated / goal) * 100;

  // Equipment categories
  const equipmentCategories = [
    {
      name: 'Cameras & Video Equipment',
      description: 'Professional cameras, lenses, stabilizers, and recording equipment',
      icon: '📹',
    },
    {
      name: 'Audio Equipment',
      description: 'Microphones, audio interfaces, mixers, and sound recording gear',
      icon: '🎤',
    },
    {
      name: 'Lighting Equipment',
      description: 'Studio lights, softboxes, LED panels, and lighting accessories',
      icon: '💡',
    },
    {
      name: 'Clothing & Wardrobe',
      description: 'Costumes, outfits, and wardrobe essentials for productions',
      icon: '👗',
    },
    {
      name: 'Models & Talent',
      description: 'Compensation for models, performers, and talent',
      icon: '👥',
    },
    {
      name: 'Legal Support',
      description: 'Legal consultation, contracts, compliance, and documentation',
      icon: '⚖️',
    },
    {
      name: 'Production Support',
      description: 'Set design, props, editing software, and post-production tools',
      icon: '🎬',
    },
    {
      name: 'Marketing & Promotion',
      description: 'Marketing campaigns, advertising, and promotional materials',
      icon: '📢',
    },
  ];

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Supporting <span className="gradient-text">Teen Tiny</span> & War Child Fund
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            We're raising $100,000 to support our production needs and make a meaningful impact. 
            Half of all funds raised will be donated directly to War Child Fund to support children 
            affected by conflict around the world.
          </p>
        </div>

        {/* Progress Section */}
        <div className="card mb-12">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-text-primary">Fundraising Progress</h2>
              <span className="text-2xl font-bold text-accent-primary">
                ${donated.toLocaleString()} / ${goal.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-bg-secondary rounded-full h-6 mb-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent-primary to-accent-blue transition-all duration-500 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-text-secondary">
              <span>{progress.toFixed(1)}% Complete</span>
              <span>${warChildAmount.toLocaleString()} will go to War Child Fund</span>
            </div>
          </div>

          {/* Donation Split Visualization */}
          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-bg-secondary">
            <div className="bg-bg-secondary rounded-lg p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Production Funds</h3>
              <p className="text-3xl font-bold text-accent-primary mb-2">
                ${(donated * 0.5).toLocaleString()}
              </p>
              <p className="text-sm text-text-secondary">
                50% of donations support equipment, talent, and production needs
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-blue/20 to-accent-primary/20 rounded-lg p-6 border border-accent-blue/30">
              <h3 className="text-lg font-semibold text-text-primary mb-2">War Child Fund</h3>
              <p className="text-3xl font-bold text-accent-blue mb-2">
                ${(donated * 0.5).toLocaleString()}
              </p>
              <p className="text-sm text-text-secondary">
                50% of donations go directly to supporting children affected by conflict
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Needs Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            What We Need Your Support For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentCategories.map((category, index) => (
              <div 
                key={index}
                className="card hover:scale-105 transition-transform duration-200"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About War Child Fund */}
        <div className="card mb-12 bg-gradient-to-br from-accent-blue/10 to-accent-primary/10 border-accent-blue/30">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            About War Child Fund
          </h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            War Child Fund is dedicated to protecting, educating, and standing up for the rights of 
            children affected by war. They work in some of the hardest-to-reach places to support 
            children whose lives have been torn apart by conflict.
          </p>
          <p className="text-text-secondary leading-relaxed">
            By supporting this campaign, you're not just helping us create quality content—you're 
            also making a direct impact on the lives of children who need it most. Together, we can 
            raise $50,000 for War Child Fund while building something amazing.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Every contribution helps us reach our goal and support War Child Fund. 
            Thank you for being part of this journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Donate Now
            </button>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="mt-12 pt-8 border-t border-bg-secondary text-center">
          <p className="text-sm text-text-tertiary">
            All donations will be tracked transparently. We'll provide regular updates on our 
            progress and ensure that 50% of all funds raised are donated to War Child Fund as promised.
          </p>
        </div>
      </div>
    </main>
  );
}
