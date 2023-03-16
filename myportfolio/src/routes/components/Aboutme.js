import React from 'react'
import  './Aboutme.css'
export default function Aboutme() {
  return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div
                                className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <img alt="testimonial"
                                     className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                     src="https://dummyimage.com/302x302"/>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h1 className="font-large title-font mt-4">
                                    PRIYANSHU SWAIN</h1>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">Eat Sleep Conquer Repeat</p>
                            </div>
                        </div>
                        <div
                            className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0
                            border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <h1 className="font-large title-font mt-4">
                                CAREER OBJECTIVE</h1>
                            <br/>
                            <div className=" h-1 bg-indigo-500 rounded "></div>
                            <br/>
                            <p className="text-base">
                                Extremely motivated to get updated with new skills and grow professionally.
                                Confident to come up with creative and interesting ideas.
                                Forever a student, with a keen motive to learn from each day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="w-30 h-0.5 bg-indigo-500 rounded "></div>

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-4 mx-auto">
                <div className="text-center mb-10">
                    <h2 className="font-large title-font mt-4 text-gray-900 text-lg">
                        HOBBIES -&- INTERESTS</h2>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Make time to follow your passion and never let your hobbies and interest take a back seat</p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                 viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">COOKING</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                 viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">PHOTOGRAPHY</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                 viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">BATMINTON & CRICKET</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                 viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">GYMIMG</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                 viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">SKETCHING</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                 viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">READING MANGA ( ANIME )</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
