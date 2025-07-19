import "./App.css";
export default function Hero() {
    return (
        <>
            <section
                className="hero"
                role="region"
                aria-label="Featured icons promotion"
            >
                <img
                    src="https://images.pexels.com/photos/32880674/pexels-photo-32880674.jpeg?_gl=1*15j5e4z*_ga*NDMxOTc1OTE3LjE3NDIyODQwMjg.*_ga_8JE65Q40S6*czE3NTIyMTk0OTEkbzYkZzEkdDE3NTIyMjA0MzQkajM5JGwwJGgw"
                    alt="Modern artistic abstract wall frame with geometric shapes of a brown sun, beige and orange circles and stylized green leaves on a light beige background"
                />
                <div className="hero-content">
                    <h1>The best icons for your next project</h1>
                    <p>
                        Download thousands of free icons for personal and
                        commercial use. No attribution required.
                    </p>
                    <button type="button" aria-label="Explore available icons">
                        Explore Icons
                    </button>
                </div>
            </section>
        </>
    );
}
