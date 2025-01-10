import logo from './logo.svg';
import pfp from './assets/PFP.jpg';
import team from './assets/Team photo.jpg';
import coop from './assets/Coop students.jpg';
import pickup from './assets/Pickup shelf.jpg';
import UoG from './assets/UoG Logo.jpg';

import GryphHacks from './assets/GryphHacks Logo.jpg';
import ENG from './assets/ENG Ambition Logo.jpg';
import Peer from './assets/Peer Helper Logo.jpg';

import github from './assets/github-96.svg';
import linkedin from './assets/linkedin-96.svg';

import NavBar from './components/NavBar.js';
import './components/NavBar.css';

import './App.css';


// To make changes, edit source code and push to main as standard.
// Then run npm run deploy to create distributable build version
// for gh pages branch to display

// npm run start to edit and develop locally

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" width="2%" height="auto"/>
      </header>
      <NavBar></NavBar>
      <div className="Headed-Paragraph" id="AboutMe">
        <img src={pfp} className="Avatar" alt="" />
        <h2>
          About Me
        </h2>
        <p>
          Welcome to my portfolio! My name is Kaelem Van Raay, and I am a third-year Honors Computer Science student with a minor in Physics. This website showcases my professional journey, highlighting the skills and knowledge I’ve gained through a variety of experiences including co-op positions, volunteer roles, and personal projects. Each section reflects my growth and learning in various technical and collaborative environments. As I continue to explore new opportunities and challenges, this portfolio will expand to represent my ongoing development in the field of computing and IT support. Thank you for visiting, and I hope you enjoy learning more about my journey!
        </p>
      </div>
      <div className="Section" id="Coop">
        <h1>
          Coop Placements
        </h1>
        <div id="UoG MD">
          <h2>
            University of Guelph - Managed Desktops (F24)
          </h2>
          <img src={UoG} alt="University of Guelph" width="50%" height="auto"/>
        </div>
        <div id="MD Intro" className="Headed-Paragraph">
          <h2>
            Introduction
          </h2>
          <p>
            Welcome to my work term report webpage, where I share insights from my experience working with the Managed Desktops team at the University of Guelph. Over the course of the term, I contributed to maintaining and improving IT support for the university, focusing on troubleshooting hardware and software issues, enhancing team efficiency, and expanding my technical skills. This report highlights what I achieved, the challenges I tackled, and the valuable lessons I learned along the way.
          </p>
        </div>
        <img src={coop} alt="Coop students" width="50%" height="auto"/>
        <div className="Caption">
          Photo of all of the Coop students working in the Johnston Hall office during the work term, as well as a previous Coop student who assisted in training us (Nuno). From left to right we have: Alina, Aeiyan, Nuno, and me.
        </div>
        <div id="MD Employer Info" className="Headed-Paragraph">
          <h2>
            Employer Information
          </h2>
          <p>
            The University of Guelph, located in Guelph, Ontario, is a globally recognized institution celebrated for its commitment to innovation in education, research, and technology. Serving a diverse community of over 30,000 students and thousands of faculty and staff, the university is a hub of academic excellence and collaboration.
            <br /> <br />The Managed Desktops team is integral to the university’s operations, ensuring the seamless functioning of IT systems across campus. This team supports various departments by managing software updates, resolving technical issues, and maintaining hardware and network functionality. Their work is integral to enabling students, staff, and faculty to focus on teaching, learning, and research without technology-related disruptions.
            <br /> <br />One of the unique aspects of the University of Guelph is its emphasis on sustainability and community engagement. These values extend into its IT operations, where efforts are made to optimize resources and improve processes in alignment with the university’s green initiatives. For example, the Managed Desktops team prioritizes energy-efficient solutions and encourages the use of technology that reduces environmental impact.
          </p>
        </div>
        <div id="MD Job Desc" className="Headed-Paragraph">
          <h2>
            Job Description
          </h2>
          <p>
            As a member of the Managed Desktops team at the University of Guelph, my role involved providing IT support for a diverse user base, including students, staff, and faculty. This position offered a dynamic and hands-on environment, where I was responsible for addressing both routine and complex technical issues.

            <br /><br />Key Responsibilities:
          </p>
          <ul>
            <li>- Diagnosing and resolving hardware and software issues on desktops, laptops, and other endpoint devices.</li>
            <li>- Installing, configuring, and updating software applications to ensure optimal performance and security compliance.</li>
            <li>- Imaging devices for deployment, including configuring operating systems and ensuring compliance with organizational standards.</li>
            <li>- Managing user permissions and device access to maintain secure and efficient operations across networked systems.</li>
            <li>- Handling inventory management, including tracking, organizing, and delivering IT equipment and stock to meet user needs and project deadlines.</li>
            <li>- Assisting with troubleshooting enterprise applications such as Microsoft Teams, focusing on audio, video, and connectivity issues.</li>
            <li>- Collaborating with team members to handle escalations and share insights on best practices for IT support.</li>
            <li>- Documenting resolutions and updates to ensure accurate records for future troubleshooting and audits.</li>
          </ul>
          <p>
            <b>Unique Aspects of the Role:</b>
            <br />One of the most rewarding aspects of this role was the opportunity to work in a large-scale IT environment that catered to a diverse range of technical needs. The variety of devices and systems in use at the university made each day unique, with challenges that required adaptability and problem-solving.

            <br /><br />For example, I frequently worked on resolving issues related to networked drives and printers, which required both technical expertise and effective communication with users to understand their needs. Additionally, assisting with specialized software for academic and research purposes exposed me to niche tools and configurations, broadening my understanding of IT in an educational setting.

            <br /><br /><b>Skill Development:</b>
            <br />This role required a mix of skills I had previously learned in class and new ones I developed on the job. While foundational knowledge in troubleshooting and systems management proved valuable, I expanded my expertise by working with enterprise-level tools such as Active Directory and Microsoft Endpoint Configuration Manager (MECM), and responding to real-world technical challenges. Learning to prioritize tasks, manage time effectively, and maintain professionalism in user interactions were critical skills that I refined throughout the term.

            <br /><br />Overall, my position with the Managed Desktops team allowed me to deepen my technical knowledge, improve my problem-solving strategies, and gain valuable experience in a professional IT environment. This experience has equipped me with the confidence to handle similar roles in the future while continuing to build on the skills I’ve developed.
          </p>
        </div>
        <img src={pickup} alt="Managed Desktops pickup storage room" width="50%" height="auto"/>
        <div className="Caption">
          Image of the pickup room for the Managed Desktops office. Once devices are imaged, repaired, or prepared from stock pulls, the client is notified and the device(s) are placed here until the client arrives to pick them up.
        </div>
        <div id="MD Goals" className="Headed-Paragraph">
          <h2>
            Goals
          </h2>
          <p>
            At the start of my work term with the Managed Desktops team at the University of Guelph, I set 3 main goals to focus my growth and make the most of this experience:

            <br /><br />1. Improve Ability to Diagnose and Resolve Desktop Hardware and Software Issues Efficiently
            <br /><br />One of my primary goals was to strengthen my troubleshooting skills and become faster and more accurate when addressing technical problems. I wanted to handle a wide range of hardware and software issues to better understand common challenges and develop strategies for resolving them. I approached this goal by actively seeking out opportunities to take on diverse support tickets. For each issue, I made a point to follow a clear troubleshooting process, ensuring I thoroughly addressed the problem while learning something new each time. I also asked for feedback from team members to refine my approach and improve my efficiency. By the end of the term, I felt much more confident diagnosing and resolving issues. I learned how to balance the need for a quick resolution with the importance of accuracy and detail, which has made me a more capable IT support professional.

            <br /><br />2. Enhance Proficiency in Researching and Utilizing Technical Documentation and Tools
            <br /><br />I recognized early on that solving problems often requires learning about unfamiliar tools or systems. I wanted to become better at finding and understanding technical information and applying that knowledge to my work. To achieve this, I spent time familiarizing myself with the university’s internal documentation and explored external resources when necessary. I also made an effort to experiment with diagnostic and management tools, like imaging software and remote desktop utilities, so I could better understand their capabilities. Over the course of the term, I became more comfortable tackling problems where I didn’t have all the answers upfront. I learned how to break down complex issues, find relevant information, and apply it effectively. This has helped me feel more independent and resourceful, skills that will undoubtedly be valuable in my career.

            <br /><br />3. Strengthen Collaboration with Team Members to Improve Overall Support Efficiency
            <br /><br />Conversely, I also wanted to work closely with my team to better understand how collaboration improves IT support. My goal was to not only contribute my skills but also learn from my colleagues and build stronger working relationships. I asked for input when I encountered challenges, and also made a point to offer assistance whenever I could, whether it was helping with hardware setups or brainstorming solutions to difficult problems. This goal taught me the value of teamwork in a professional environment. I gained insight from my colleagues’ expertise and realized how much more effective we were when we worked together. This experience has shown me how collaboration can elevate the quality of work and make solving even complex problems feel manageable.
           </p>
        </div>
        <div id="MD Conclusion" className="Headed-Paragraph">
          <h2>
            Conclusion
          </h2>
          <p>
          My work term with the Managed Desktops team at the University of Guelph has been an invaluable experience, both personally and professionally. It gave me the chance to work in a dynamic IT environment where I could directly support the technology needs of a diverse campus community. Throughout this role, I developed key skills, including troubleshooting complex technical issues, effectively using technical resources, and collaborating with a highly skilled team.
          <br /><br />One of the most significant takeaways from this experience was learning how to adapt to challenges in real time. IT support is rarely predictable, and each day presented a new opportunity to think critically and apply my knowledge in different ways. This constant problem-solving not only strengthened my technical abilities but also built my confidence in handling pressure and finding creative solutions.
          <br /><br />Another highlight of this work term was the teamwork and mentorship I experienced. The team in Managed Desktops were extremely supportive and friendly, and were always willing to offer guidance if needed, while still maintaining a sense of autonomy and trust. I believe that experience allowed me to gain a deeper appreciation for the role of IT in supporting an organization as multifaceted as the University of Guelph, where technology underpins everything from teaching and research to daily administrative tasks.
          </p>
        </div>
        <img src={team} alt="Coop students with some full-time techs" width="50%" height="auto"/>
        <div className="Caption">
          Photo of all of the Coop students along with some of the full-time techs. From left to right we have: Stefan, Aeiyan, Theron, Alina, Jeff, and me.
        </div>
      </div>
      <div className="Section" id="Volunteer">
        <h1>
          Volunteer Experiences
        </h1>
        <img src={GryphHacks} alt="GryphHacks logo" />
        <img src={Peer} alt="Peer Helper logo" />
        <img src={ENG} alt="ENG Ambition logo" />
      </div>
      <footer>
        <nav>
          <a href="https://www.linkedin.com/in/kaelem-van-raay-a808022b7"><img src={linkedin} alt="LinkedIn logo" width="30%" height="auto"/></a>
          <a href="https://github.com/Kaelem-Van-Raay"><img src={github} alt="Github logo" width="30%" height="auto"/></a>
        </nav>
      </footer>
    </div >
  );
}

export default App;
