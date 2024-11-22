import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  banca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10acb4'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", serif;
  list-style: none;
}

  body {
    background-color: ${cores.preta};
    color: ${cores.banca};
    padding-top: 40px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
