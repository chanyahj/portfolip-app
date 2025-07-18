'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"

export default function ProjectsPage() {
  const [selectedTab, setSelectedTab] = useState("coding");

  return (

    <div className="min-h-screen bg-white">
    {/* Navigation Bar */}
    <div className="text-black shadow-md py-8 px-8 flex justify-end">
      <div className="flex flex-col items-end">
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
        <div className="mt-4">
          <select
            value={selectedTab}
            onChange={(e) => setSelectedTab(e.target.value)}
            className="border border-black rounded px-4 py-2 text-lg"
          >
            <option value="coding">Coding Projects</option>
            <option value="ux">UX Projects</option>
          </select>
        </div>
      </div>
    </div>

        {/* Hero Section */}
        <div className="relative w-full h-96 mb-16">
        <Image
          src="/portfolip-app/images/images.jpg"
          alt="Projects Page Background"
          fill
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-4 bg-white text-black px-6 py-3 rounded shadow-md">Projects Page</h1>
          <p className="text-lg max-w-2xl bg-white text-black px-6 py-4 rounded shadow">
            Welcome to my project page! Below are a few of my projects that I completed for school or in my free time. If you have any questions feel free to contact me!
          </p>
        </div>
      </div>
      
        {/*Coding Projects*/}
      <div className="p-8 space-y-20">
        {selectedTab === "coding" && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Coding Projects</h2>
            <div className="space-y-10">
              {[
                {
                  title: "Park 4 Class",
                  desc: "A personal portfolio site built with Next.js & TypeScript.",
                  src: "Oujh1vIfo2E",
                  link: "https://www.youtube.com/watch?v=Oujh1vIfo2E",
                },
                {
                  title: "Music Blog",
                  desc: "Check out this music blog that I made! I used HTML, CSS, and Javascript as well as MongoDB to persist Data",
                  src: "xKIVWJ0Ufqc",
                  link: "https://www.youtube.com/watch?v=xKIVWJ0Ufqc",
                },
                {
                  title: "Treender",
                  desc: "A tree swiping app with tinder like functionality programmed in Java. Built on Android Studio. Contains snackbars, dialogues, interactivy with each button, and a menu.",
                  src: "JKWGq9S_qgg",
                  link: "https://www.youtube.com/watch?v=JKWGq9S_qgg",
                },
                {
                  title: "MarketPlace GUI",
                  desc: "This GUI models marketplace functionality.",
                  src: "FNe0kE1KoJk",
                  link: "https://www.youtube.com/watch?v=FNe0kE1KoJk&t=293s",
                },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-6 border border-gray-300 rounded-lg p-4 shadow-md"
                >
                  <iframe
                    className="w-full md:w-1/2 h-64"
                    src={`https://www.youtube.com/embed/${proj.src}`}
                    title={proj.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <div className="flex flex-col justify-center md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                    <p className="mb-2">{proj.desc}</p>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:underline"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/*UX Projects*/}
<div className="p-8 space-y-20">
        {selectedTab === "ux" && (
          <section>
            <h2 className="text-3xl font-bold mb-6">UX Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link href="/projects/ux-project-1">
                <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <Image
                    src="/portfolip-app/images/big3-2.jpg"
                    alt="UX Project 1 Preview"
                    width={500}
                    height={300}
                    className="rounded mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Nittany Spotlight</h3>
                  <p className="text-gray-600">Designed a interactive prototpye for event and deal shopping for State College residents.</p>
                </div>
              </Link>
              <Link href="/projects/ux-project-2">
                <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <Image
                    src="/portfolip-app/images/Big-3.png"
                    alt="UX Project 2 Preview"
                    width={500}
                    height={300}
                    className="rounded mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Curated Closet</h3>
                  <p className="text-gray-600">Designed a final high-fidelity prototype for an outfit generator application in Figma.</p>
                </div>
              </Link>
            </div>
          </section>
        )}
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
      </div>

      
  )
        }
   
  

