import React from "react";
import "./App.css";

export default function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "Free",
      desc: "Perfect for personal use or testing.",
      features: [
        "Access to 100 icons",
        "Limited downloads",
        "Community support",
      ],
    },
    {
      title: "Pro",
      price: "$9/month",
      desc: "Best for freelancers & developers.",
      features: [
        "Unlimited icons",
        "Premium SVGs",
        "Priority support",
      ],
    },
    {
      title: "Team",
      price: "$29/month",
      desc: "For teams working on multiple projects.",
      features: [
        "Team license",
        "Unlimited downloads",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-wrapper">
        <h2 className="pricing-title">Pricing Plans</h2>
        <p className="pricing-subtitle">
          Choose a plan that fits your needs. No hidden fees.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className="pricing-card">
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-desc">{plan.desc}</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔️ {feature}</li>
                ))}
              </ul>
              <button className="choose-button">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}