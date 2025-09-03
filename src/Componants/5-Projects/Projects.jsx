import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faRightLong, faArrowsSpin } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './Projects.css'

// react
import { useState } from 'react'

// projects data
import { myProjects } from './projectsData'

// motion
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {

    const [actBtn, setActBtn] = useState("All")

    let ProjectsToDisplay = myProjects.filter((p) => {
        return p.projectType === actBtn || actBtn === "All";
    });

    return (
        <div className='projects-section' id='projects'>
            <h1 className='section-header'>Projects</h1>
            <div className="container-projects">
                <div className="filter-buttons">
                    <ul>
                        <li onClick={() => { setActBtn("All") }} className={actBtn === 'All' ? 'active' : null}>All</li>
                        <li onClick={() => { setActBtn("CSS") }} className={actBtn === 'CSS' ? 'active' : null}>HTML&CSS</li>
                        <li onClick={() => { setActBtn("JavaScript") }} className={actBtn === 'JavaScript' ? 'active' : null}>JavaScript</li>
                        <li onClick={() => { setActBtn("React") }} className={actBtn === 'React' ? 'active' : null}>React</li>
                    </ul>
                </div>

                <div className="projects">

                    <AnimatePresence mode="wait">
                        {ProjectsToDisplay.map((p, i) => (
                            <motion.div
                                key={p.projectName}
                                className="project"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <div className="project-image"><img loading='lazy' src={`Image-optimized/Projects-image/${p.imgSrc}`} alt="" /></div>
                                <div className="info">
                                    <h2>{p.projectName}</h2>
                                    <p>{p.projectDescription}</p>
                                </div>
                                {p.isDone ? (
                                    <div className="project-links">
                                        <div className="project-icon">
                                            <a href={p.liveDemo} target="_blank" title="live demo"><FontAwesomeIcon size="xl" icon={faEye} /></a>
                                            <a href={p.gitHub} target="_blank" title="github repo"><FontAwesomeIcon size="xl" icon={faGithub} /></a>
                                        </div>
                                        <a href={p.liveDemo} target="_blank" className="button">
                                            Show It <FontAwesomeIcon className="more-icon" icon={faRightLong} />
                                        </a>
                                    </div>
                                ) : (
                                    <div className="project-links">
                                        <div className="project-icon">
                                            <p>
                                                Under Construction .... <FontAwesomeIcon icon={faArrowsSpin} spin />
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>

                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div >
    )
}
