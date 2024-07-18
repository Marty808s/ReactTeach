import React, { useState } from 'react';
import php from '../pictures/php_emblem.png';
import python from '../pictures/python-logo.png';
import db from '../pictures/database-icon.png';
import docker from '../pictures/docker-icon.png'


function Skills() {
    const [expandedSkill, setExpandedSkill] = useState(null);
    let enterTimeout, leaveTimeout;

    const handleMouseEnter = (skill) => {
        clearTimeout(leaveTimeout);
        enterTimeout = setTimeout(() => {
            setExpandedSkill(skill);
        }, 100); 
    };

    const handleMouseLeave = () => {
        clearTimeout(enterTimeout);
        leaveTimeout = setTimeout(() => {
            setExpandedSkill(null);
        }, 0);
    };

    return(
        <div className="w-full relative bg-cover bg-center bg-gray-700 p-5 mb-40 justify-center" style={{ minHeight: 'calc(100vh - 200px)' }} >
            <h2 className="text-2xl font-bold text-white">Dovednosti</h2>
            <p className="text-white p-4">Při najetí myši, nebo kliknutí zjistíte více!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 mx-auto py-3">
                <div 
                    className="flex flex-col items-center cursor-pointer hover:bg-gray-800 p-4 rounded-lg transition duration-300 transform hover:scale-105" 
                    onMouseEnter={() => handleMouseEnter('php')}
                    onClick={() => handleMouseEnter('php')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={php} alt="Skill 1" style={{ width: '100px', height: '105px' }} className="w-24 h-24"/>
                    <p className="text-white mt-2">PHP</p>
                    {expandedSkill === 'php' && (
                        <div className="text-white mt-2 transition-opacity duration-300 opacity-100">
                            <ul className="list-disc">
                                <li>Entry level Engineer</li>
                                <li>Využití Bootstrap/Tailwind UI</li>
                                <li>Webové aplikace s CRUD operacemi</li>
                                <li>Připojení s databází</li>
                                <li>Využití XML DOM</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div 
                    className="flex flex-col items-center cursor-pointer hover:bg-gray-800 rounded-lg transition duration-300 transform hover:scale-105" 
                    onMouseEnter={() => handleMouseEnter('python')}
                    onClick={() => handleMouseEnter('python')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={python} alt="Skill 2" style={{ width: '110px', height: '110px' }} className="w-24 h-24 p-2"/>
                    <p className="text-white mt-2">Python</p>
                    {expandedSkill === 'python' && (
                        <div className="text-white mt-2 transition-opacity duration-300 opacity-100">
                            <ul className="list-disc p-2">
                                <li>Entry level Engineer</li>
                                <li>Vyuřití knihoven pandas, matplotlib</li>
                                <li>Algoritmizace a zpracování dat</li>
                                <li>Připojení a manipulace s databází</li>
                                <li>ORM - SQLAlchemy</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div 
                    className="flex flex-col items-center cursor-pointer hover:bg-gray-800 rounded-lg transition duration-300 transform hover:scale-105" 
                    onMouseEnter={() => handleMouseEnter('db')}
                    onClick={() => handleMouseEnter('db')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={db} alt="Skill 3" style={{ width: '110px', height: '110px' }} className="w-24 h-24 p-2"/>
                    <p className="text-white mt-2">SQL databáze</p>
                    {expandedSkill === 'db' && (
                        <div className="text-white mt-2 transition-opacity duration-300 opacity-100">
                            <ul className="list-disc p-2">
                                <li>Entry level Engineer</li>
                                <li>Návrh databáze</li>
                                <li>Povědomí o procedůrách a funkcích</li>
                                <li>Propojování tabulek</li>
                                <li>Tvorba pohledů a reportů</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div 
                    className="flex flex-col items-center cursor-pointer hover:bg-gray-800 rounded-lg transition duration-300 transform hover:scale-105" 
                    onMouseEnter={() => handleMouseEnter('docker')}
                    onClick={() => handleMouseEnter('docker')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={docker} alt="Skill 3" style={{ width: '115px', height: '115px' }} className="w-24 h-24 p-2"/>
                    <p className="text-white mt-2">Docker</p>
                    {expandedSkill === 'docker' && (
                        <div className="text-white mt-2 transition-opacity duration-300 opacity-100">
                            <ul className="list-disc p-2">
                                <li>Entry level Engineer</li>
                                <li>Tvorba docker files</li>
                                <li>Sepsání funkčního souboru yaml</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Skills;