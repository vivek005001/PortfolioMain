import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level }) => {
  const backgroundBar = {
    width: '300px', 
    height : '5px',
    // Adjust as needed
  };

  const animatedBar = {
    initial: { width: 0 },
    animate: { width: `${level}%`, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-left font-semibold text-black">{skill}</p>
        <span className="font-bold text-black">{level}%</span>
      </div>
      {/* Background bar with fixed width */}
      <div className="bg-black/50 h-4 rounded mt-1" style={backgroundBar}>
        {/* Animated skill bar */}
        <motion.div
          className="bg-black h-full rounded"
          variants={animatedBar}
          initial="initial"
          animate="animate"
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { type: 'Javascript', level: 10 },
    { type: 'React', level: 15 },
    { type: 'HTML', level: 82 },
    { type: 'CSS', level: 83 },
    { type: 'Node.js', level: 23 },
    { type: 'Express.js', level: 32 },
    { type: 'MongoDB', level: 3 },
  ];

  return (
    <>
      <h2 className="font-bold text-8xl mt-16 w-full text-center text-black">Skills</h2>
      <div className="w-full h-screen relative flex flex-col items-start justify-center rounded-full text-xs ">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.type} level={skill.level} />
        ))}
      </div>
    </>
  );
};

export default Skills;
