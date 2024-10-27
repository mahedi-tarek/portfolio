// src/components/Portfolio.js
import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import '../styles/tailwind.css';

const SkillIcon = ({ name, icon, color }) => {
  const Icon = Icons[icon];
  return (
    <div className={`bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center ${color} relative group`}>
      <Icon className="w-12 h-12 mb-2" />
      <span className="text-sm text-gray-300">{name}</span>
      <div className="absolute inset-0 bg-black bg-opacity-90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-yellow-500 font-bold">Expert</span>
      </div>
    </div>
  );
};

// ... (ExperienceItem, ProjectCard, and ReviewItem components remain the same)

function Portfolio() {
  // ... (all the existing state and data remain the same)

  return (
    // ... (the existing JSX remains the same)
  );
}

export default Portfolio;