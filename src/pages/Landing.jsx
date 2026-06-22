import "../styles/landing.css";

const Landing = () => {
  return (
    <>
      <nav>
        <div className="nav__logo">
          <img src="/src/assets/home/logo.png" alt="Summarist Logo" />
        </div>

        <div className="nav__links">
          <a href="#features">About</a>
          <a href="#features">Contact</a>
          <a href="#features">Help</a>
        </div>
      </nav>

      <section id="landing">
        <div className="landing__wrapper">
          <div className="landing__content">
            <h1 className="landing__title">
              Gain more knowledge <br />
              in less time
            </h1>

            <p className="landing__subtitle">
              Great summaries for busy people, individuals who barely have time
              to read, and even people who don’t like to read.
            </p>

            <button className="btn">Login</button>
          </div>

          <img
            className="landing__image"
            src="/src/assets/home/landing.png"
            alt="Landing"
          />
        </div>
      </section>

      <section id="features">
  <div className="section__title">Understand books in few minutes</div>

  <div className="features__wrapper">
    <div className="feature">
      <div className="feature__icon">📄</div>
      <h3>Read or listen</h3>
      <p>Save time by getting the core ideas from the best books.</p>
    </div>

    <div className="feature">
      <div className="feature__icon">💡</div>
      <h3>Find your next read</h3>
      <p>Explore book lists and personalized recommendations.</p>
    </div>

    <div className="feature">
      <div className="feature__icon">🎧</div>
      <h3>Briefcasts</h3>
      <p>Gain valuable insights from briefcasts</p>
    </div>
  </div>
</section>
    </>
  );
};

export default Landing;