import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  h1 {
    text-align: center;
  }
  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
  button {
    border: 0;
    display: inline-block;
    padding: 12px 24;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: hsl(217, 87%, 49%);
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`
