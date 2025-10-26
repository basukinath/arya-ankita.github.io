const About = () => {
  return (
    <section id="whoiam" className="about-section">
  {/* First grid: para left, image right */}
  <div className="skills-grid">
    <div className="my-skills">
      <h2 className="info-heading">Education</h2>
      <p>
       I have a Master’s Degree in Computer Applications (MCA) from the National Institute of Technology, Surathkal (NIT Surathkal), and a Bachelor’s degree from VRG College, Gwalior, Madhya Pradesh. I actively pursue advanced learning opportunities on leading e-learning platforms like Udemy, Coursera, and Udacity, continuously refining my skills to deliver innovative solutions and stay ahead in a rapidly changing tech landscape.
      </p>
    </div>
    <div className="skills-image">
      <img
        src="https://pulse.nitk.ac.in/wp-content/uploads/2020/06/NITK-Surathkal-logo.png"
        alt="College Logo"
      />
    </div>
  </div>

  {/* Second grid: image left, para right */}
  <div className="skills-grid reverse-grid">
    <div className="skills-image">
      <img
        src="https://content.timesjobs.com/img/62614057/Master.jpg"
        alt="Skills Graphic"
      />
    </div>
    <div className="my-skills">
      <h2 className="info-heading">My Skillset</h2>
      <p>
        I have primarily worked with Node.js frameworks such as NestJS and Express.js, developing scalable and efficient backend applications. While my main focus has been on backend development, I also have experience working with ReactJS to build dynamic and responsive user interfaces. I am proficient with databases including PostgreSQL, MySQL and  MongoDB and familiar with designing and integrating robust APIs. Additionally, I have programming experience with C, Java, and Python, and am proficient in version control using Git. Currently, I am working on microservices architecture with gRPC to build distributed and high-performance systems.
      </p>
    </div>
  </div>
</section>


  );
};

export default About;
