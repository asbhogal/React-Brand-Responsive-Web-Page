const Container = () => {
    return (
        <main className="MainContainer">
            <section className="HeroSection">
                <article className="LeftContent">Left Content</article>
                <article className="RightContent">Right Content</article>
                <article className="SummaryContent">
                    <ul className="SummaryContentList">
                        <li>
                            <section>
                                <span className="FeaturePoint"></span>
                                <h3>Feature one</h3>
                            </section>
                            <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
                        </li>
                        <li>
                            <section>
                                <span className="FeaturePoint"></span>
                                <h3>Feature two</h3>
                            </section>
                            <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
                        </li>
                        <li>
                            <section>
                               <span className="FeaturePoint"></span>
                               <h3>Feature three</h3>
                            </section>
                            <p>All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.</p>
                        </li>
                    </ul>
                </article>
            </section>
            <section className="SecondSection">
                <article className="LeftContent"></article>
                <article className="RightContent"></article>
            </section>
            <section className="TestimonialsSection"></section>
            <section className="CTASection"></section>
        </main>
    )
};

export default Container;