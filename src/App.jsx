import "./App.css";

function App() {
  return (
    <div>

      <nav className="navbar">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>

      <section id="Home" className="section green left">
        <h1>Hi! I'm Eleanor Roger.</h1>
        <h2>Welcome to my website!</h2>
        <p>My fun place to play around and test out my skills. </p>
      </section>

      <section id="About" className="section purple right">
        <h1>About Me</h1>
      </section>

      <section id="Projects" className="section red left">
        <h1>Projects</h1>
      </section>

      <section id="Contact" className="section green right">
        <h1>Contact</h1>
      </section>

    </div>
  );
}

export default App;