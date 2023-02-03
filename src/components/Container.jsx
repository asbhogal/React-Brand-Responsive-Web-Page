import CTAButtons from "./CTAButtons";
import heroImg from "../assets/images/heroImg.jpg";
import secondSectionImg from "../assets/images/secondSectionImg.jpg";
import ctaImg from "../assets/images/CTAImg.jpg";

import TestimonialSlider from "./TestimonialSlider";

const Container = () => {
    return (
        <main className="MainContainer">
            <section className="HeroSection">
                <div className="TopSection">
                    <article className="LeftContent">
                        <div className="LeftContentText">
                            <h1>Medium length display headline</h1>
                            <h2>Separated they live in Bookmarks right at the coast of the famous Semantics, large language</h2>
                            <div className="HeroCTASection">
                                <CTAButtons 
                                    CTAButtonStyle="CTAButton-Dark"
                                />
                                <p>5,000 people like you have purchased this product!</p>
                            </div>
                        </div>
                    </article>
                    <article className="RightContent">
                        <img className="HeroImg" src={ heroImg } alt="An image of a white couch, nested coffee tables and floor cushion against a white backdrop"></img>
                    </article>
                </div>
                <article className="SummaryContent">
                    <ul className="SummaryContentList">
                        <li>
                            <div>
                                <span className="FeaturePoint"></span>
                                <h3>Feature one</h3>
                            </div>
                            <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
                        </li>
                        <li>
                            <div>
                                <span className="FeaturePoint"></span>
                                <h3>Feature two</h3>
                            </div>
                            <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
                        </li>
                        <li>
                            <div>
                               <span className="FeaturePoint"></span>
                               <h3>Feature three</h3>
                            </div>
                            <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
                        </li>
                    </ul>
                </article>
            </section>
            <section className="SecondSection">
                <article className="LeftContent">
                    <img className="SecondSectionImg" src={ secondSectionImg } alt="An image of two floating shelves with various vases, mugs, books and a picture frame against a light creme backdrop"></img>
                </article>
                <article className="RightContent">
                    <h2>
                    Long headline on two lines to turn your visitors into users and achieve more
                    </h2>
                    <div className="RightContentSubSection">
                        <h3>
                        Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean
                        </h3>
                        <ul>
                            <li>&#8226;	Showcase and embed your work with</li>
                            <li>&#8226;	Publish across social channels in a click</li>
                            <li>&#8226;	Sell your videos worldwide</li>
                            <li>&#8226;	Embed your work with</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className="TestimonialsSection">
                <TestimonialSlider />
            </section>
            <section className="CTASection">
                <img className="CTAImg" src={ ctaImg } alt="An image of a large empty bookcase in the middle of a room with white granite walls and open windows"></img>
                <div className="CTAContent">
                    <p>Tagline</p>
                    <h2>Long headline to turn your visitors into users</h2>
                    <CTAButtons
                        CTAButtonStyle="CTAButton-Light"
                    />
                </div>
            </section>
        </main>
    )
};

export default Container;