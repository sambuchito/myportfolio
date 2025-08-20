
import '../assets/css/base.css';
import '../assets/css/project.css';
import '../assets/css/modal-project.css';
import bugIcon from '../assets/ico/bug-2.svg';
import devIcon from '../assets/ico/development-web-development-svgrepo-com.svg';
import movieIcon from '../assets/ico/movie-film-flim-svgrepo-com.svg';
/* import PropTypes from 'prop-types';

Projects.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
}; */



export default function Projects({ onOpenModal }) {

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">
        Some of my recent work experience
      </h2>

      <div className="projects-container">

        {/* Card 1 */}
        <div className="project-card project-card-container">
          <img
            src={bugIcon}
            alt="as-tester"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">As a Tester</h3>
          <p className="project-details">
            It was back in 2020 when my cousin suggested me to pursue a career as a Software Tester.
            What is a Software Tester, you ask? Let me tell you, I still wonder.
          </p>
          <button
            className="project-link"
            onClick={() =>{
              console.log("Clicked project button!");
              
              onOpenModal({
                company: 'Investors Trust - IT Admin Latam S.A.',
                position: 'QA Manual Tester',
                dates: '2024 - Present',
                description: (
                  <>
                    <p>Part of a team testing a new application for managing and handling the company’s broker platform.</p>
                    <p>Conducted manual testing on newly released features to ensure functionality, performance, and usability.</p>
                    <p>Created detailed test documentation, reported bugs, and tracked their resolution.</p>
                    <p>Collaborated with QA peers to maintain high testing standards and ensure thorough coverage of each release cycle.</p>
                  </>
                ),
                tools: ['JIRA. ', 'Trello. ', 'Postman. ', 'Excel. ', 'Word.']
              })
            }}
          >
            Take a look!
          </button>
        </div>

        {/* Card 2 */}
        <div className="project-card project-card-container">
          <img
            src={devIcon}
            alt="as-web-developer"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Web Development</h3>
          <p className="project-details">
            Not long ago I embarked on this wonderful journey. Encouraged by my desire to become an automated tester,
            here we are squeezing all the juice.
          </p>
          <button
            className="project-link"
            onClick={() =>
              onOpenModal({
                company: 'UyCast - Sonora Podcast',
                position: 'Freelance Web Developer',
                dates: '2024 - 2025',
                description: (
                  <>
                    <p>Development of static website to promote the Sonora Podcast 2024 event, organized by UyCast.</p>
                    <p>The site includes the event schedule, details about collaborators, images from past editions, and links to social media.</p>
                    <p>Integrated embedded Spotify and YouTube snippets to provide direct access to podcast episodes and multimedia content.</p>
                    <p>Built using HTML5, CSS3, and JavaScript for layout and interactivity.</p>
                    <p>Website link: <a href="https://sonorapodcast.uy" target="_blank" rel="noopener noreferrer">sonorapodcast.uy</a></p>
                  </>
                ),
                tools: ['HTML5. ', 'CSS3. ', 'JavaScript. ', 'cPanel. ', 'Mail configuration.']
              })
            }
          >
            Take a look!
          </button>
        </div>

        {/* Card 3 */}
        <div className="project-card project-card-container">
          <img
            src={movieIcon}
            alt="more-experience"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Instructor</h3>
          <p className="project-details">
            Even earlier years when I dived into this world. Initially fascinated by special effects, little did I
            imagine I would love video editing this much.
          </p>
          <button
            className="project-link"
            onClick={() =>
              onOpenModal({
                company: 'Movie - Montevideo',
                position: 'Instructor',
                dates: '2015 - 2023',
                description: (
                  <>
                    <p>Provided exceptional customer service in a high-volume environment, ensuring client satisfaction and operational excellence.</p>
                    <p>Planned and organized daily tasks for the work team, optimizing workflows and efficiency.</p>
                    <p>Conducted staff evaluations and performance reviews.</p>
                    <p>Assumed supervisor responsibilities, including training, motivating, and monitoring assistants and trainers.</p>
                    <p>Managed stock control and cash deposits.</p>
                    <p>Delegated tasks effectively while maintaining team focus under pressure.</p>
                  </>
                ),
                tools: ['Multitasking. ', 'Conflict resolution. ', 'Team collaboration. ', 'Adaptability. ', 'Patience.']
              })
            }
          >
            Take a look!
          </button>
          
          
        </div>

      </div>
    </section>
  );
}
