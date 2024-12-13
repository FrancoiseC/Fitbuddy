import React, { useState } from "react";

// Constants
const FEATURES = {
  WELLNESS: "Wellness",
  RUNNING: "Running",
  PRODUCTIVITY: "Productivity",
};

// Meta AI Chatbot
const META_AI_CHATBOT_LINK = "https://www.meta.ai/chatbot";
const FIT_BUDDY_LINK = "https://aistudio.instagram.com/create/611620161317340/";

// FitBuddy Description
const FIT_BUDDY_DESCRIPTION = {
  name: "FitBuddy",
  personality: "Friendly and Encouraging",
  tone: "Upbeat and Conversational",
  avatar: "A smiling, energetic fitness enthusiast",
  tagline: "Sweat Smarter, Not Harder!",
  capabilities: [
    "Personalized workout plans and routines",
    "Nutrition advice and meal planning suggestions",
    "Tracks progress and provides motivational support",
    "Answers fitness-related questions and offers expert tips",
  ],
};

// Feature component
const Feature = ({ title, description, video }) => {
  return (
    <section className="flex-1">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <iframe
          title={title}
          src={video}
          frameBorder="0"
          allowFullScreen
          className="w-full h-64 md:h-96"
        />
      </div>
    </section>
  );
};

const SynergeeApp = () => {
  const [selectedFeature, setSelectedFeature] = useState(FEATURES.WELLNESS);

  const features = [
    {
      title: FEATURES.WELLNESS,
      description: "Guided meditation, yoga and stretching classes.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Wellness video
    },
    {
      title: FEATURES.RUNNING,
      description:
        "Customizable training plans, GPS tracking and audio guidance.",
      video: "https://www.youtube.com/embed/kAUVOHB3XYM", // Running video
    },
    {
      title: FEATURES.PRODUCTIVITY,
      description: "Pomodoro timers, focus music and personalized coaching.",
      video: "https://www.youtube.com/embed/VJhd3hvsMTo", // Productivity video
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Synergee</h1>
        <nav className="flex items-center space-x-4">
          {features.map((feature) => (
            <button
              key={feature.title}
              className={`text-gray-600 hover:text-gray-900 ${
                selectedFeature === feature.title
                  ? "bg-gray-100 rounded-lg p-2"
                  : ""
              }`}
              onClick={() => setSelectedFeature(feature.title)}
            >
              {feature.title}
            </button>
          ))}
        </nav>
      </header>
      <main className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {features
          .filter((feature) => feature.title === selectedFeature)
          .map((feature) => (
            <Feature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              video={feature.video}
            />
          ))}
        <aside className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            AI Integration
          </h2>
          <p className="text-gray-600">
            Meet FitBuddy, your personalized AI fitness companion.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">FitBuddy</h3>
            <a
              href={FIT_BUDDY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex justify-center items-center"
            >
              <img
                src="https://www.meta.ai/assets/images/logo.png"
                alt="Meta AI Logo"
                className="w-8 h-8"
              />
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default SynergeeApp;
