import "../styles/landing.css";
import landingImg from "../assets/home/landing.png";
import logoImg from "../assets/home/logo.png";

const Landing = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <a href="/" className="nav__img--mask">
            <img className="nav__img" src={logoImg} alt="Summarist" />
          </a>

          <ul className="nav__list--wrapper">
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--login">
              <a href="/for-you">Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="landing">
          <div className="container">
            <div className="row landing__wrapper">
              <div className="landing__content">
                <h1 className="landing__content__title">
                  Gain more knowledge <br />
                  in less time
                </h1>

                <p className="landing__content__subtitle">
                  Great summaries for busy people, individuals who barely have
                  time to read, and even people who don’t like to read.
                </p>

                <a href="/for-you" className="btn home__cta--btn">
                  Login
                </a>
              </div>

              <figure className="landing__image--mask">
                <img src={landingImg} alt="Summarist app preview" />
              </figure>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <div className="row">
              <h2 className="section__title">Understand books in few minutes</h2>

              <div className="features__wrapper">
                <div className="features">
                  <div className="features__icon">📄</div>
                  <h3 className="features__title">Read or listen</h3>
                  <p className="features__sub--title">
                    Save time by getting the core ideas from the best books.
                  </p>
                </div>

                <div className="features">
                  <div className="features__icon">💡</div>
                  <h3 className="features__title">Find your next read</h3>
                  <p className="features__sub--title">
                    Explore book lists and personalized recommendations.
                  </p>
                </div>

                <div className="features">
                  <div className="features__icon">🎧</div>
                  <h3 className="features__title">Briefcasts</h3>
                  <p className="features__sub--title">
                    Gain valuable insights from briefcasts.
                  </p>
                </div>
              </div>

              <div className="statistics__wrapper">
                <div className="statistics__content--header">
                  <h3 className="statistics__heading">Enhance your knowledge</h3>
                  <h3 className="statistics__heading statistics__heading--active">
                    Achieve greater success
                  </h3>
                  <h3 className="statistics__heading">Improve your health</h3>
                  <h3 className="statistics__heading">
                    Develop better parenting skills
                  </h3>
                  <h3 className="statistics__heading">Increase happiness</h3>
                  <h3 className="statistics__heading">
                    Be the best version of yourself!
                  </h3>
                </div>

                <div className="statistics__content--details">
                  <div className="statistics__data">
                    <div className="statistics__data--number">93%</div>
                    <div className="statistics__data--title">
                      of Summarist members significantly increase reading
                      frequency.
                    </div>
                  </div>

                  <div className="statistics__data">
                    <div className="statistics__data--number">96%</div>
                    <div className="statistics__data--title">
                      of Summarist members establish better habits.
                    </div>
                  </div>

                  <div className="statistics__data">
                    <div className="statistics__data--number">90%</div>
                    <div className="statistics__data--title">
                      have made significant positive change to their lives.
                    </div>
                  </div>
                </div>
              </div>

              <div className="statistics__wrapper">
                <div className="statistics__content--details statistics__content--details-second">
                  <div className="statistics__data">
                    <div className="statistics__data--number">91%</div>
                    <div className="statistics__data--title">
                      of Summarist members report feeling more productive after
                      incorporating the service into their daily routine.
                    </div>
                  </div>
                </div>

                <div className="statistics__content--header statistics__content--header-second">
                  <h3 className="statistics__heading">Expand your learning</h3>
                  <h3 className="statistics__heading">Accomplish your goals</h3>
                  <h3 className="statistics__heading">Strengthen your vitality</h3>
                  <h3 className="statistics__heading">Become a better caregiver</h3>
                  <h3 className="statistics__heading">Improve your mood</h3>
                  <h3 className="statistics__heading">Maximize your abilities</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="container">
            <div className="row">
              <h2 className="section__title">What our members say</h2>

              <div className="reviews__wrapper">
                <div className="review">
                  <div className="review__header">Hanna M.</div>
                  <p className="review__body">
                    This app has been a game-changer for me! It's saved me so
                    much time and effort in reading and comprehending books.
                    Highly recommend it to all book lovers.
                  </p>
                </div>

                <div className="review">
                  <div className="review__header">David B.</div>
                  <p className="review__body">
                    I love this app! It provides concise and accurate summaries
                    of books in a way that is easy to understand. It's also very
                    user-friendly and intuitive.
                  </p>
                </div>

                <div className="review">
                  <div className="review__header">Nathan S.</div>
                  <p className="review__body">
                    This app is a great way to get the main takeaways from a book
                    without having to read the entire thing. The summaries are
                    well-written and informative.
                  </p>
                </div>

                <div className="review">
                  <div className="review__header">Ryan R.</div>
                  <p className="review__body">
                    If you're a busy person who loves reading but doesn't have
                    the time to read every book in full, this app is for you!
                    The summaries are thorough and provide a great overview of
                    the book's content.
                  </p>
                </div>

                <div className="reviews__btn--wrapper">
                  <a href="/for-you" className="btn home__cta--btn">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="numbers">
          <div className="container">
            <div className="row">
              <h2 className="section__title">
                Start growing with Summarist now
              </h2>

              <div className="numbers__wrapper">
                <div className="numbers">
                  <div className="numbers__title">3 Million</div>
                  <p className="numbers__sub--title">
                    Downloads on all platforms
                  </p>
                </div>

                <div className="numbers">
                  <div className="numbers__title">4.5 Stars</div>
                  <p className="numbers__sub--title">
                    Average ratings on iOS and Google Play
                  </p>
                </div>

                <div className="numbers">
                  <div className="numbers__title">97%</div>
                  <p className="numbers__sub--title">
                    Of Summarist members create a better reading habit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer__top--wrapper">
              <div className="footer__block">
                <div className="footer__link--title">Actions</div>
                <div className="footer__link--wrapper">Summarist Magazine</div>
                <div className="footer__link--wrapper">Cancel Subscription</div>
                <div className="footer__link--wrapper">Help</div>
                <div className="footer__link--wrapper">Contact us</div>
              </div>

              <div className="footer__block">
                <div className="footer__link--title">Useful Links</div>
                <div className="footer__link--wrapper">Pricing</div>
                <div className="footer__link--wrapper">Summarist Business</div>
                <div className="footer__link--wrapper">Gift Cards</div>
                <div className="footer__link--wrapper">Authors & Publishers</div>
              </div>

              <div className="footer__block">
                <div className="footer__link--title">Company</div>
                <div className="footer__link--wrapper">About</div>
                <div className="footer__link--wrapper">Careers</div>
                <div className="footer__link--wrapper">Partners</div>
                <div className="footer__link--wrapper">Code of Conduct</div>
              </div>

              <div className="footer__block">
                <div className="footer__link--title">Other</div>
                <div className="footer__link--wrapper">Sitemap</div>
                <div className="footer__link--wrapper">Legal Notice</div>
                <div className="footer__link--wrapper">Terms of Service</div>
                <div className="footer__link--wrapper">Privacy Policies</div>
              </div>
            </div>

            <div className="footer__copyright--wrapper">
              <div className="footer__copyright">
                Copyright © 2023 Summarist.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;