import React from 'react';
import {githubBlack, linkedIn} from "../assets/index.js";

const SocialLinks = () => {
    return (
        <footer className=" text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/AzizSaidani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-gray-200 transition-colors"
                        >
                            <img src={githubBlack} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohamed-aziz-saidani-76aa7b2a2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-gray-200 transition-colors"
                        >
                            <img src={linkedIn} alt="LinkedIn" className="w-1/2 h-1/2 object-contain" />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-6 text-gray-400 text-sm">
                    © {new Date().getFullYear()} Mohamed Aziz Saidani. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default SocialLinks;