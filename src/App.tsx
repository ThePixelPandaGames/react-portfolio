import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css'; // Add this line to import the custom styles
import flappyBirdPic from './assets/pictures/flappy_bird_thumbnail.png';
import spaceJumpPic from './assets/pictures/spaceJump_thumbnail.png';
import rubaPic from './assets/pictures/ruba_thumbnail.png';

import profilPic from './assets/pictures/profilPic.jpg';
import { useState } from 'react';

const projects = [
  {
    title: 'RUBA (in development) ',
    image: rubaPic,
    itchIoLink: 'https://thepixelpanda.itch.io/ruba-in-development',
    description: 'Unofficial Ruba Video Game. Refer to the link in the itch.io page description for how to play. Not bug-free.',
  },
  {
    title: 'Space Doodle Jump 3D',
    image: spaceJumpPic,
    itchIoLink: 'https://thepixelpanda.itch.io/doodle-space-jump-3d',
    description: 'A doodle jump like game, playing a space ship in outer space.',
  },
  {
    title: 'Flappy Bird 3D',
    image: flappyBirdPic,
    itchIoLink: 'https://thepixelpanda.itch.io/flappy-bird-3d',
    description: 'A flappy bird remake in 3D.',
  },
];

const currentJob = {
  company: 'In-Training',
  position: 'On a journey to become a Game Developer',
  duration: '2023 - present',
  description: 'Self teaching myself various game design principles, from programming to creative essentials, like animations and lighting.',
};

const previousJobs = [
  {
    company: 'Hebotek OG',
    position: 'Web Developer',
    duration: '2022 - 2023',
    description: 'Worked on several smaller and larger projects developing with React and Typescript.',
  },
  {
    company: 'UNESCO',
    position: 'React Frontend Developer Volunteer',
    duration: '2022 - 2023',
    description: 'Contributed to simple frontend and development tasks.',
  },

];


const education = [
  {
    institution: 'Technical University Vienna',
    degree: 'Bachelor - Media Informatics & Visual Computing',
    duration: '2016 - 2022',
    description: 'Computer Graphics, Visualization, Multimedia, Programming, UI & UX, Data Engineering',
  },
];



const App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container mt-5">
      <header className="text-center">
        <img
          className="rounded-circle mb-4"
          src={profilPic}
          alt="Antonio Palumbo Picture"
          width="150"
          height="150"
        />
        <h1>Antonio Palumbo</h1>
        <p>Game Developer</p>
      </header>

      <div className="section-divider"></div>


      <section className="mb-4">
        <h2>About Me</h2>
        <p>
          Hey there! I'm Antonio Palumbo, a Game Developer on an exciting journey of self-learning.
          I'm passionate about various game design principles, from programming to creative essentials
          like animations and lighting. With a Bachelor's degree in Media Informatics & Visual Computing
          from Technical University Vienna, I've honed my skills in computer graphics, visualization,
          multimedia, programming, UI & UX, and data engineering.
        </p>
        <div className={`collapsible-content ${expanded ? 'show' : ''}`}>
          <p>
            My journey in the tech industry started with web development, where I contributed to
            various projects as a Web Developer at Hebotek OG from 2022 to 2023. I also volunteered
            as a React Frontend Developer at UNESCO during the same period.
          </p>
          <p>
            As a passionate Game Developer, I've worked on several projects, including the
            "RUBA" (in development) game, an unofficial Ruba Video Game with exciting features. I
            also created "Space Doodle Jump 3D," a fun game where players control a spaceship in
            outer space. Additionally, I designed a 3D remake of the classic "Flappy Bird" game,
            adding my unique touch to the gameplay.
          </p>
          <p>
            My dedication to creating captivating gaming experiences drives me forward in this
            ever-evolving industry. I'm eager to explore new possibilities and contribute to the
            world of gaming.
          </p>
        </div>
        <div className="text-center">
          <button
            className="button-turquoise mt-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : 'Want to know more?'}
          </button>
        </div>
      </section>

      <div className="section-divider"></div>


      <section className="mb-5">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{edu.duration}</div>
              <div className="timeline-title">{edu.degree}</div>
              <div className="timeline-description">
                <strong>{edu.institution}</strong>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>


      <section className="mb-5">
        <div className="timeline">
          <div className="timeline-heading">
            <h2>Career Path</h2>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2020 - Present</div>
            <div className="timeline-title">{currentJob.position}</div>
            <div className="timeline-description">
              <strong>{currentJob.company}</strong>
              <p>{currentJob.description}</p>
            </div>
          </div>

          {previousJobs.map((job, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{job.duration}</div>
              <div className="timeline-title">{job.position}</div>
              <div className="timeline-description">
                <strong>{job.company}</strong>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>



      <section>
        <h2>Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.itchIoLink} target="_blank" rel="noopener noreferrer">
                    Play on itch.io
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>


      <section className="mb-5">
        <h2>Unity Learn Profile</h2>
        <p>
          Check out my Unity Learn profile to see my learning journey and completed courses in
          game development:
        </p>
        <a href={"https://learn.unity.com/u/649043d1edbc2a01ba9905b8/?tab=profile"} target="_blank" rel="noopener noreferrer">
          My Unity Learn Profile
        </a>
      </section>

      <div className="section-divider"></div>


      <footer>
        <p>Contact: toni.antonio.palumbo@gmail.com | Phone: +43 (0) 677 61 99 68 34</p>
      </footer>
    </div>
  );
};

export default App;
