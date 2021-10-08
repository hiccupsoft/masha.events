import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/russian-night-with-dj-liana')
  }

  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="site-logo">
            <img src="static/images/logo.svg" alt="" />
          </div>
          <div className="main-wrapper">
            <div className="main-header-wrap">
              <h1>The best parties on The Rock</h1>
              <p>We’ve been throwing amazing parties since 2010 porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. </p>
            </div>
            <img src="static/images/wave.png" alt="" className="wave-img" />

            <div className="main-banner">
              <img src="static/images/firework.png" alt="" className="fireworks" />
              <div className="mobile-banner">
                <img src="static/images/main-section.png" alt="" className="banner-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="main-section-wrapper">
        <div className="container">
          <div className="card-wrapper-section">
            <div className="details-wrapper">
              <img src="static/images/card-2.jpg" alt="" className="card-1-img" />
            </div>
            <div className="card-details-wrapper">
              <h2>Featured party</h2>
              <div className="card-info" >
                <div className="card_header">
                  <div className="card_title">
                    <h3>Russian Night with DJ Liana. </h3>
                    <p>Friday, Oct 15, 2020  |  21:00 - 03:00</p>
                  </div>
                  <button> €35.00 to  €410.00</button>
                </div>
                <div className="card_body">
                  <p>The best of Russian music, treats and of course alcohol with DJ Liana.
                    Dancers, competitions and more!
                    Tickets available now!</p>
                  <button onClick={handleClick}>
                    <a> View details </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card-wrapper-section" id="mobile-card">
            <div className="card-details-wrapper_1">
              <h2 className="right-title">Featured party</h2>
              <div className="card-info" >
                <div className="card_header">
                  <div className="card_title">
                    <h3>Russian Night with DJ Liana. </h3>
                    <p>Friday, Oct 15, 2020  |  21:00 - 03:00</p>
                  </div>
                  <button> €35.00 to  €410.00</button>
                </div>
                <div className="card_body">
                  <p>The best of Russian music, treats and of course alcohol with DJ Liana.
                    Dancers, competitions and more!
                    Tickets available now!</p>
                  <button onClick={handleClick}> <a> View details </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="details-wrapper-1">
              <img src="static/images/card-1.png" alt="" className="card-2-img" />
            </div>
          </div> */}

        </div>

      </section>

      <footer className="footer-section">
        <div className="container">
          <div className="gallary-wrapper">
            <div className="footer-gallary">
              <img src="static/images/gallary.png" alt="" />
              <img src="static/images/gallary-2.png" alt="" />
              <img src="static/images/gallary-3.png" alt="" />
            </div>
            <div className="follow-btn">
              <img src="static/images/instagram.svg" alt="" />
              <a href="">Follow us on Instagram  </a>
            </div>

          </div>

          <div className="copyright">
            <p>© Masha Events 2021. All Rights Reserved.</p>
          </div>

        </div>

      </footer>
    </div>
  )
}

export default Home;