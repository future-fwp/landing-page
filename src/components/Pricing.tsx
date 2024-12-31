import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomSpanGreenGradient from "./ComponentsForAll/CustomSpanGreenGradient";
import CustomLinkWithArrow from "./ComponentsForAll/CustomLinkWithArrow";
interface Feature {
  type: string;
  mode: string;
  subFeature: string;
  quantity: string | number;
}

import { PRICINGPLANS } from '../utils/data';
// interface PlanFeatures {
//   [category: string]: Feature[];
// }

// interface PricingPlan {
//   content: string;
//   amountMoney: string;
//   isGreenColor: boolean;
//   features: PlanFeatures;
// }

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Enhanced Pricing Component with Advanced GSAP Animations
const Pricing: React.FC = () => {
  const pricingContainerRef = useRef<HTMLDivElement>(null);
  const pricingCardsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = pricingContainerRef.current;
    const cards = pricingCardsRefs.current;

    if (!container || cards.length === 0) return;

    // Staggered Card Entrance Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    cards.forEach((card, index) => {
      if (!card) return;

      // Unique animation for each card
      tl.fromTo(
        card,
        { 
          opacity: 0, 
          y: 100, 
          scale: 0.8,
          rotationX: -45,
          transformOrigin: 'center bottom'
        },
        {
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2
        },
        `-=${index * 0.1}` // Slight stagger between cards
      );

      // Hover interaction
      const cardHoverTl = gsap.timeline({ paused: true });
      cardHoverTl.to(card, {
        scale: 1.05,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        duration: 0.3,
        ease: 'power1.inOut'
      });

      card.addEventListener('mouseenter', () => cardHoverTl.play());
      card.addEventListener('mouseleave', () => cardHoverTl.reverse());
    });

    // Pricing Toggle Animation
    const toggleRef = document.querySelector('.pricing-toggle') as HTMLInputElement;
    if (toggleRef) {
      toggleRef.addEventListener('change', () => {
        gsap.to('.price-amount', {
          opacity: 0,
          y: 20,
          onComplete: () => {
            // Update prices here if needed
            gsap.to('.price-amount', {
              opacity: 1,
              y: 0,
              duration: 0.5
            });
          }
        });
      });
    }

    return () => {
      // Cleanup event listeners
      cards.forEach((card) => {
        if (card) {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <div 
      ref={pricingContainerRef} 
      className="bg-black py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Flexible Pricing for Every Need
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose the perfect plan that scales with your business
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center mt-8">
            <label className="flex items-center cursor-pointer pricing-toggle-container">
              <span className="mr-4 text-white">Monthly</span>
              <div className="relative">
                <input 
                  type="checkbox" 
                  className="sr-only pricing-toggle" 
                />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="dot absolute w-6 h-6 bg-primary rounded-full -top-1 -left-1 transition"></div>
              </div>
              <span className="ml-4 text-white">Yearly</span>
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-8 md:gap-6">
          {PRICINGPLANS.map((plan, index) => (
            <div 
              key={plan.content}
              ref={(el) => pricingCardsRefs.current[index] = el}
              className={`bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:shadow-2xl ${index ===2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="text-center">
                <CustomSpanGreenGradient
                  content={plan.content}
                  addlayout="text-xl font-semibold"
                />
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-white price-amount">
                    ${plan.amountMoney}
                  </span>
                  <span className="text-gray-400 ml-2">/mo</span>
                </div>
                
                <CustomLinkWithArrow
                  content="Get Started"
                  primary={true}
                  to="/"
                  addLayOut="w-full justify-center"
                />
              </div>
              
              <div className="mt-8 space-y-4">
                {Object.entries(plan.features).map(([category, features]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">
                      {category}
                    </h4>
                    {features.map((feature:Feature, featureIndex:number) => (
                      <div 
                        key={featureIndex} 
                        className="flex justify-between text-gray-400 py-2 border-b border-gray-700 last:border-b-0"
                      >
                        <span>{feature.subFeature}</span>
                        <span>{feature.quantity}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Existing PRICING_PLANS array remains the same


export default Pricing;
