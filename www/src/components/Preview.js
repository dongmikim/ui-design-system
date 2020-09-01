import React from "react"
import styled from "styled-components"

const Preview = ({ children }) => (
  <PreviewTemplate>
    { children }
  </PreviewTemplate>
)

const PreviewTemplate = styled.div`
  padding: 10px 8px;

`;

export default Preview