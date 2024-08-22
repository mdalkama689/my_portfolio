import React from 'react';

const TechStack = () => {
  const techs = [
    'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB',
    'React', 'Tailwind CSS', 'DaisyUI', 'Chakra UI', 'Java',
    'Git', 'GitHub', 'Postman', 'VSCode'
  ];

  return (
  <div className=' px-8 rounded-lg shadow-lg max-w-3xl mx-auto text-white'>
    <h1 className="text-xl font-bold text-white mb-3">Tech Stacks </h1>
   
   <div className=' flex items-center justify-start flex-wrap gap-3'>
  {techs.map((tech) => (
     <p key={tech} className='px-3 py-0.5 bg-white text-black font-bold text-sm rounded'>{tech}</p>
 
  ))}
   </div>
   </div>
  );
}

export default TechStack;
