import CTAButtons from "./CTAButtons";

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
                        <img className="HeroImage"></img>
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
                    <img className="SecondSectionImage"></img>
                </article>
                <article className="RightContent">
                    <h2>
                    Long headline on two lines to turn your visitors into users and achieve more
                    </h2>
                    <h3>
                    Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean
                    </h3>
                    <ul>
                        <li>Showcase and embed your work with</li>
                        <li>Publish across social channels in a click</li>
                        <li>Sell your videos worldwide</li>
                        <li>Embed your work with</li>
                    </ul>
                </article>
            </section>
            <section className="TestimonialsSection"></section>
            <section className="CTASection">
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