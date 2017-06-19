// code fork from https://github.com/FormidableLabs/react-live/blob/master/demo/components/LiveEdit.js
import { Component } from 'react'
import styled, { css } from 'styled-components'
import * as polished from 'polished'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import { foreground, red, lightGrey } from './util/colors'
import Title from './components/Title'

const StyledProvider = styled(LiveProvider) `
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`

const StyledEditor = styled(LiveEditor) `
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
  overflow: scroll;
  ${column}
`

const StyledPreview = styled(LivePreview) `
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column}
`

const StyledError = styled(LiveError) `
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
`

const jsxExample = (`
<h3>
  Hello World!
</h3>
`).trim()

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <StyledProvider code={jsxExample}>
          <LiveWrapper>
            <StyledEditor />
            <StyledPreview />
          </LiveWrapper>
          <StyledError />
        </StyledProvider>
      </div>
    )
  }
}

export default App
