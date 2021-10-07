const RussianNightWithDJLiana = (props) => {

    const handleBackToHome = (e) => {
        e.preventDefault()
        router.push('/')
    }

    return (
        <div>
            <header className="header-details-section">
                <div className="container">
                    <div className="site-logo1">
                        <img src="static/images/logo.svg" alt="" />
                    </div>
                    <div className="details-inner-section">
                        <div className="home-page">
                            <i className="fas fa-arrow-left" />
                            <a onClick={handleBackToHome}>Back to home</a>
                        </div>
                        <div className="details-view-wrapper">
                            <h1>{props.title}. </h1>
                            <div className="booking-card">
                                <div className="booking-card-header">
                                    <h2>Date &amp; time</h2>
                                    <button> {props.price}</button>
                                </div>
                                <h6>{props.datetime}</h6>
                                <a href="https://www.chitzo.com/Events/ViewEvent/whatson-pembroke-night-clubs-russian-night.42503" target="_blank"><button className="book-now">Book now</button></a>
                                <p>All sales are final. Once booked, tickets can not be transferred or refunded.</p>
                                <div className="booking-card-footer">
                                    <a href>Terms &amp; conditions</a>
                                    <i className="fas fa-chevron-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="venue-details-section">
                <div className="container">
                    <div className="venue-details-wrapper">
                        <div className="address-wrapper">
                            <h1>{props.title}</h1>
                            <p>{props.title}. <br />
                                The best of Russian music, treats and of course alcohol with DJ Liana. Dancers, competitions and
                                more! </p>
                            <p>
                                Tickets available below! <br /> - 35 Euro Entrance Fee <br /> - 200 Euro Minimum Spend for a V.I.P
                                Table
                            </p>
                        </div>
                        <div className="map">
                            <h1>Venue</h1>
                            {/* <img src="static/images/location.svg" alt=""> */}
                            <iframe src={props.location} width="400px" height="357px" style={{ border: 0 }} allowFullScreen loading="lazy" />
                        </div>
                    </div>
                    <div className="venue-details-wrap">
                        <div className="address-wrapper">
                            <h1>Have questions?</h1>
                            <p> We would love to answer all your questions. Just email our team at </p>
                            <p>
                                <a href="info@groovemedia.eu"> info@groovemedia.eu </a> and we’ll get back to you asap.
                            </p>
                        </div>
                        <div className="address-wrapper address-flex">
                            <h1>{props.address1}</h1>
                            <span>{props.address2}</span>
                            <div className="social-group">
                                <h1>Share with friends</h1>
                                <div className="social-icons">
                                    <img src="static/images/facebook.svg" alt="" />
                                    <img src="static/images/google.svg" alt="" />
                                    <img src="static/images/twitter.svg" alt="" />
                                    <img src="static/images/file.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section">
                <div className="container">
                    <div className="gallary-wrapper">
                        <div className="footer-gallary">
                            <img src="static/images/gallary-1.svg" alt="" />
                            <img src="static/images/gallary-2.svg" alt="" />
                            <img src="static/images/gallary-3.svg" alt="" />
                        </div>
                        <div className="follow-btn">
                            <img src="static/images/instagram.svg" alt="" />
                            <a href>Follow us on Instagram </a>
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

export const getServerSideProps = async ({req, res, resolvedUrl}) => {
    console.log(process.env.NEXT_PUBLIC_APP_URL);
    
    const url = resolvedUrl.replace("/", "");
    const ret = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/events/${url}`);
    const data = await ret.json();
    return {
        props: data
    }
};

export default RussianNightWithDJLiana;