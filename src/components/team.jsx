import React from 'react';
import Fathia from '../assets/fathia.jpeg';
import Andrew from '../assets/andrew.jpeg';
import Chuks from '../assets/chuks.jpeg';
import Dramaqueen from '../assets/dramaqueen.jpeg';
import Chic from '../assets/chicesse.jpeg';
import Peter from '../assets/peter.jpeg';
import Abdul from '../assets/abdul.jpeg';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const peoples = [
  {
    name: "Andrew Stephen Enobong",
    role: "Founder & CEO",
    imageUrl: Andrew,
    linkedinUrl: "https://www.linkedin.com/in/andrew-stephen-enobong-311538407?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitterUrl: "https://x.com/andrewstephen/",
    github:"https://share.google/vU2KAawssQk3uWHoi",
  },

  {
    name: "Fathia Cares",
    role: "Secretary",
    imageUrl: Fathia,
    twitterUrl: "https://x.com/faith_cares9?s=08",
    linkedinUrl: "https://www.linkedin.com/in/fathia-cares-9b0a4b1b3/",
    github: "https://github.com/fathiacares"
  },
   {
    name: "Dramaqueen",
    role: "Welfare Officer",
    imageUrl: Dramaqueen,
    twitterUrl: "https://x.com/dramaqueen980?s=11",
    linkedinUrl: "https://www.facebook.com/share/18mosgBPKv/?mibextid=wwXIfr",
    github: "https://www.instagram.com/dramaqueen21533?igsh=NXV1dXZndTJrZXdu&utm_source=ig_contact_invite"
  },
  {
    name: "Ogomigo Favour (Chic Essentials)",
    role: "Social Media Manager",
    imageUrl: Chic,
    twitterUrl: "https://x.com/favourogomigo?s=08",
    linkedinUrl: "https://ng.linkedin.com/in/favour-ogomigo-1b725131b",
    github: "https://github.com/favourogomigo"
  },
  {
    name: "Chuks Uwaifo",
    role: "Developer",
    imageUrl: Chuks, 
    twitterUrl: "https://x.com/ChuksSzn",
    linkedinUrl: "https://www.linkedin.com/in/chukwuemeka-uwaifo-786328375?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    github: "https://github.com/Chuks256?tab=repositories"
  },
  {
    name: "Eluwade Peter (Peter Lightspeed)",
    role: "Developer",
    imageUrl: Peter,
    twitterUrl: "https://x.com/peterlight123",
    linkedinUrl: "https://www.linkedin.com/in/peter-eluwade-5b8a73363/",
    github: "https://github.com/peterlight123"
  },
  {
    name: "Abdurazak",
    role: "Developer",
    imageUrl: Abdul,
    twitterUrl: "https://x.com/dameitups",
    linkedinUrl: "https://www.linkedin.com/",
    github: "https://github.com/Abdurazak10-ghost"
  }
];




const Team = () => {
  return (
    <div className='py-32 bg-white'>
      <div className='px-6 mx-auto text-center max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto'>
          <h3 className='text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl'>
            Meet Our Team
          </h3>
          <p className='mt-4 text-lg leading-8 text-gray-500'>
            Meet the people who make our company great.
          </p>
        </div>

        <ul className="mx-auto mt-16 max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none">
          {peoples.map((person) => (
            <li key={person.name}>
                <img 
                    src={person.imageUrl}
                    className='w-56 mx-auto h-56 rounded-full object-cover object-center'
                     alt={person.name}
                    />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 w-full text-center">
                  {person.name}{" "}
                </h3>
                <p className="mt-6 leading-6 font-semibold text-gray-600">
                    {person.role}</p>
                    <ul className='mt-6 flex justify-center gap-x-6'>
                        <li>
                            <a href={person.twitterUrl} 
                            className='text-gray-400 hover:text-gray-500'>
                                <FaTwitter className='w-6 h-6 text-gray-600 hover:text-black'/>
                            </a>
                        </li>
                        <li>
                            <a href={person.linkedInUrl} 
                            className='text-gray-400 hover:text-gray-500'>
                                <FaLinkedin className='w-6 h-6 text-gray-600 hover:text-black'/>
                            </a>
                        </li>
                        
                        <li>
                            <a href={person.github} 
                            className='text-gray-400 hover:text-gray-500'>
                                <FaGithub className='w-6 h-6 text-gray-600 hover:text-black'/>
                            </a>
                        </li>
                    </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;