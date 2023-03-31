import { css } from "@emotion/react"
import styled from "styled-components"

const Hello = styled.h2`
  color: ${ (props) => props.color ? "blue" : "red" }
`

// /** @jsxImportSource @emotion/react */
const EmotionComponent = () => {

  const largeFont = css`
    font-size: 54px;
  `
  const fontRed = css`
    color: red;
    ${largeFont}
  `

  return (
    <>
      <h2
        css={css `
          color: red;
        `}
      >Emotionのテスト</h2>
      {/* <h2 css={[largeFont, fontRed]}>複数のパターン</h2> */}
      <h2 css={fontRed}>継承のパターン</h2>
      <Hello color={"blue"}>スタイル用コンポーネント</Hello>
    </>
  )
}

export default EmotionComponent