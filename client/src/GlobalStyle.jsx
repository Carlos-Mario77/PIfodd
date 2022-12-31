import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? 'black' : 'white')};
    color: ${props => (props.darkMode ? 'white' : 'black')};
  }
`


export {
  GlobalStyle
};