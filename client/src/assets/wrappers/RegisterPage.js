import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  background-color: #9fb7a9;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 8px solid var(--primary-500);
    background-color: #cad7cf;
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .member-btn:hover {
    text-decoration: underline;
    background-color: #cad7cf;
    border-radius: 8px;
  }
`;
export default Wrapper;
