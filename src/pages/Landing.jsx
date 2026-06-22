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
    </>
  );
};

export default Landing;