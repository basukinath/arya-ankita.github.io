const Welcome = () => {
  return (
    <div id="welcome" className="home-container">
      <section className="welcome-section">
        <div className="welcome-grid">
          <div className="welcome-content">
            <div className="welcome-text">
              <h1>Hey there! I’m Ankita Arya</h1>
              <p>
                Or you can just call me Ankita.
                <br />I am a full-time Software Developer at FlexM and an
                alumnus of NIT Surathkal.
              </p>

              <p>
                When I’m not coding or building awesome projects, you’ll find me
                exploring new tech trends and solving real-world problems
                through software. Let’s create something amazing together!
              </p>
              <a
                href="https://docs.google.com/document/d/1p_JIJQG0pQJO0W0YcWBXRhtq1YLvMgcP5UaY2W7eni4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="learn-more-btn"
                  onClick={() => console.log("will do")}
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
