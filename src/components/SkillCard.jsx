import React from 'react';


const SkillCard = ({ skill }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
      <div className="rounded-lg p-6 text-center shadow-lg bg-white" data-aos="fade-up">
        <div className="text-4xl mb-4">{skill.icon}</div>
        <h4 className="text-xl font-semibold text-black text-left mb-2">{skill.name}</h4>
        <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden skill-bar">
          <div
            className="bg-green-400 h-full rounded-full"
            style={{
              '--aos-skill-level': skill.level,
              width: `${skill.level}%`,
            }}
            data-aos="width-animation"
            data-aos-delay="200"
          />
          <div className="running-bar" />
        </div>
        <p className="mt-2 text-gray-400 skill-level">{skill.level}%</p>
      </div>
    </div>
  );
};

export default SkillCard;
