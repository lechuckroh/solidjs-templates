import styles from "./App.module.css";

function Header() {
  return <h1>Welcome to solid.js</h1>;
}

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Header />
        <a
          class={styles.link}
          href="https://github.com/lechuckroh/solidjs-templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solid.JS project templates
        </a>
      </header>
    </div>
  );
}

export default App;
