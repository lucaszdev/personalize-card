import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --first-color: #f37458;
    --first-color-alt: #f15c41;
    --second-color: #b52b0d;
    --title-color: #2b2322;
    --text-color: #222222;
    --text-color-light: #aaa2a0;
    --body-background: url("../assets/backgroundLight.png");
    --container-color: #fff;

    --body-font: "Poppins", sans-serif;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;
  }

  /* Responsive typography */
  @media screen and (min-width: 968px) {
    :root {
      --h2-font-size: 1.5rem;
      --h2-font-size: 1.25rem;
      --normal-font-size: 1rem;
      --small-font-size: 0.875rem;
      --smaller-font-size: 0.813rem;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background: var(--body-background);
    color: var(--text-color);
    transition: 0.3s;
  }

  h1,
  h2,
  h3 {
    color: var(--title-color);
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    background: var(--first-color);
    color: #fff;
    border-radius: 5px;
  }

  a:hover {
    background-color: var(--first-color-alt);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .section {
    padding: 2rem 0 2rem;
  }

  .container {
    max-width: 768px;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
