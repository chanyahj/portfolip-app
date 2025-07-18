'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick';
import { FaCode, FaPaintBrush, FaLock, FaMobileAlt, FaDatabase, FaCloud, FaHtml5, FaCss3Alt, FaJs,FaSearch } from 'react-icons/fa';



export default function Home() {
  const skills = [
    { icon: <FaCode size={40} />, name: 'JavaScript', other:'VS Code, Webstorm', level: 'Proficiency: Advanced' },
    { icon: <FaSearch size={40} />, name: 'UX Research', other:'Ethnography to Usability Testing', level: 'Proficiency: Advanced' },
    { icon: <FaPaintBrush size={40} />, name: 'UX Design', other:'Figma, Sketch', level: 'Proficiency: Advanced' },
    { icon: <FaLock size={40} />, name: 'Security', other:'Certification: ISC2',level: 'Proficiency: Intermediate' },
    { icon: <FaMobileAlt size={40} />, name: 'Mobile Dev', other:'Android Studio', level: 'Proficiency: Intermediate' },
    { icon: <FaDatabase size={40} />, name: 'Databases', other:'SQL', level: 'Proficiency: Intermediate' },
    { icon: <FaCloud size={40} />, name: 'Cloud Services', other:'Certification: AWS Practitioner', level: 'Proficiency: Beginner' },
    { icon: <FaHtml5 size={40} />, name: 'HTML5+CSS3', level: 'Proficiency: Advanced' },

    { icon: <FaJs size={40} />, name: 'React', other:'Next.JS', level: 'Proficiency: Intermediate' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    '/portfolip-app/images/headshot.JPG',
    '/portfolip-app/images/IMG_7974.JPG',
    '/portfolip-app/images/green-sweater.JPG',
  ];

  return (
    <>
  <nav className="text-black shadow-md py-8 flex justify-center items-center">
  <div className="border border-black rounded-xl px-8 py-4 flex space-x-8 text-xl font-bold">
    <Link href="/">
      <span className="relative group cursor-pointer px-5 py-2 transition-all duration-300 ease-in-out rounded-md hover:bg-pink-200 hover:-translate-y-0.5 hover:shadow-md">
        Home
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
      </span>
    </Link>
    <Link href="/projects">
      <span className="relative group cursor-pointer px-5 py-2 transition-all duration-300 ease-in-out rounded-md hover:bg-pink-200 hover:-translate-y-0.5 hover:shadow-md">
        Projects
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
      </span>
    </Link>
  </div>
</nav>

<div className="relative w-full h-screen overflow-hidden">
 <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="w-full h-screen relative">
              <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </Slider>

{/* Overlay Text Box */}
<div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-center px-8 py-6 rounded shadow-lg">
  <h2 className="text-2xl font-bold mb-2">Chanyah Johnson</h2>
  <p className="text-lg">Senior at The Pennsylvania State University</p>
  <p className="text-lg">B.S. Human-Centered Design and Development</p>
  <p className="text-lg">Minor in Security and Risk Analysis</p>
</div>
</div>

<div className="flex flex-col items-center justify-center mt-10 w-full">
        <div className="border-8 border-pink-200 rounded-b-3xl shadow-lg overflow-hidden p-2 w-fit">
          <Image
            src="/portfolip-app/images/IMG_7974.JPG"
            alt="Chanyah Johnson"
            width={300}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="mt-6 max-w-xl px-4">
          <p className="text-center text-lg text-gray-700">
            Hi! I am Chanyah and I am currently a Senior at Penn State University.
            I am a Human-Centered Design and Development major with a Security and Risk Analysis minor.
            I am interested in a career in software development with a focus in UX design.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:rotate-1 hover:scale-105"
            >
              <div className="mb-4 text-pink-400">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
              <h5 className="text-gray-600">{skill.other}</h5>
              <p className="text-gray-600">{skill.level}</p>
              
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-20 bg-gray-100 text-center py-8 border-t border-pink-300">
        <h4 className="text-xl font-semibold mb-2">Contact Me</h4>
        <p className="text-gray-700">chanyahjohnson14@gmail.com</p>
        <p className="text-gray-700 mb-2">Feel free to connect with me!</p>
        <a
          href="https://www.linkedin.com/in/chanyahjohnson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:underline text-lg"
        >
          linkedin.com/in/chanyahjohnson
        </a>
      </footer>
</>
  )
}
