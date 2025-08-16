import '../assets/css/base.css';
import '../assets/css/skills.css';

import htmlIcon from '../assets/ico/html5-logo.svg';
import basketIcon from '../assets/ico/basketball.svg';
import reactIcon from '../assets/ico/react.svg';
import testerIcon from '../assets/ico/bug-debug-fix-fixing-qa-svgrepo-com.svg';
import editingIcon from '../assets/ico/editing-2.svg';
import developIcon from '../assets/ico/develop-1.svg';


export default function Skills({ onOpenModal }) {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-header">Some of my education and skills</h2>

      <div className="skills-container">
        {/* Primera fila */}
        <div className="first-set animate__animated animate__pulse">
          <img
            src={htmlIcon}
            alt="development"
            title="web developer"
            loading="lazy"
            className="icon"
            onClick={() =>
              onOpenModal({
                company: 'EDUCATION - Certified Tech Developer',
                position: 'Digital House - Online',
                dates: '2023 - 2025',
                description: `
                  <p>Design and develop interfaces using HTML, CSS, React, or JavaScript.</p>
                  <p>Choose between CSS and SASS for style creation. Use of Flex.</p>
                  <p>Replicate provided mockups.</p>
                  <p>Relational databases and database modeling.</p>
                  <p>Scrum workshop.</p>
                  <p>Front-End I & II.</p>
                  <p>Docker / Cloud Computing / AWS.</p>
                  <p>Forms / JSON / APIs.</p>
                  <p>Design Thinking workshop.</p>
                  <p>Testing I.</p>
                `,
                tools: ['Backend', 'UML', 'Workbench', 'OOP', 'Figma', 'JavaScript'],
              })
            }
          />

          <img
            src={basketIcon}
            alt="booking-project"
            title="booking project"
            loading="lazy"
            className="icon"
            onClick={() =>
              onOpenModal({
                company: 'EDUCATION - Mid Certificate Project',
                position: 'Digital House - Certified Tech Developer',
                dates: '2022',
                description: `
                  <p>Development and maintenance of a reservation management system using React, Java, Spring Boot, MySQL, and Vite.</p>
                  <p>Implementation of key features such as user registration, login/logout, with email/password authentication and permission management.</p>
                  <p>Enhancement of the user experience through dynamic interfaces with filters for search and a personalized recommendation system.</p>
                  <p>Integration of the user profile view and admin permissions management for both regular users and administrators.</p>
                  <p>Collaboration with backend teams to integrate database systems and authentication/user management APIs.</p>
                  <p>Navigation optimization, browsing by location, type, date, and time.</p>
                  <p>Optimized reservation process, using core components such as Booking Forms and Calendar to manage reservation data and access validation.</p>
                `,
                tools: ['Backend', 'Scrum', 'Vite', 'React', 'Java'],
              })
            }
          />

          <img
            src={reactIcon}
            alt="fullstack"
            title="fullstack wannabe"
            loading="lazy"
            className="icon"
            onClick={() =>
              onOpenModal({
                company: 'EDUCATION - FullStack',
                position: 'BIOS - Online',
                dates: '2025',
                description: `
                  <p>Programming fundamentals with JavaScript, ES6+, and TypeScript.</p>
                  <p>Use of Git and GitHub for version control and workflow management.</p>
                  <p>Front-end development with HTML5, CSS3, Responsive, SASS, and DOM manipulation.</p>
                  <p>Building RESTful APIs with Node.js and Express.js, including routes, middlewares, and error handling.</p>
                  <p>Connecting to MongoDB using Mongoose, including data modeling and querying.</p>
                  <p>Use of tools like Postman for API testing.</p>
                `,
                tools: ['Flexbox', 'HTML5', 'React', 'JavaScript', 'Node Js'],
              })
            }
          />
        </div>

        {/* Segunda fila */}
        <div className="first-set animate__animated animate__pulse">
          <img
            src={testerIcon}
            alt="tester"
            title="tester"
            loading="lazy"
            className="icon"
            onClick={() =>
              onOpenModal({
                company: 'EDUCATION - Testing',
                position: 'Centro de Ensayos de Software (CES)',
                dates: '2022',
                description: `
                  <p>Functional testing. (Functionality tests, search functionality, error handling)</p>
                  <p>Automated testing.</p>
                  <p>Introduction to databases.</p>
                  <p>Agile methodologies.</p>
                  <p>Incident management.</p>
                  <p>Documentation and reporting.</p>
                `,
                tools: ['Selenium', 'Scrum', 'Postman', 'MySQL', 'Mantis'],
              })
            }
          />

          <img
            src={editingIcon}
            alt="edition"
            title="edits tba"
            loading="lazy"
            className="icon"
            onClick={() =>
              onOpenModal({
                company: 'SKILL - Edition',
                position: 'Video Editor',
                dates: 'NaN',
                description: `
                  <p>This one is a work in progress, but rest assured I will keep posted about this.</p>
                  <p>Se vienen cositas.</p>
                `,
                tools: ['Adobe Premiere Pro', 'After Effects', 'Adobe Audition', 'Canva'],
              })
            }
          />

          <img
            src={developIcon}
            alt="jap"
            title="first steps"
            loading="lazy"
            className="icon"
            onClick={() =>
              onOpenModal({
                company: 'EDUCATION - Jóvenes a Programar',
                position: 'Ceibal - Online',
                dates: '2023',
                description: `
                  <p>Asynchronous connection handling with Ajax/Fetch.</p>
                  <p>Use of Session and Cookies for data storage.</p>
                  <p>Implementation of JavaScript form validation.</p>
                  <p>E-commerce project.</p>
                  <p>Soft skills.</p>
                  <p>Implementation of user authentication and authorization using JWT, along with data validation and sanitization.</p>
                `,
                tools: ['HTML', 'CSS', 'APIs', 'VSCode', 'Node Js'],
              })
            }
          />
        </div>
      </div>
    </section>
  );
}
