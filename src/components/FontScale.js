import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { useSiteFiles } from "../utils/hooks"
import { MEDIUM, TINY } from "../utils/spacing"
import { OPAQUE_FONT } from "../utils/font-styles"
import { SECTION_BORDER as SB } from "../utils/borders"

const FontScaleContainer = styled.div`
  border-color: ${SB.COLOR};
  border-style: ${SB.STYLE};
  border-width: ${SB.WIDTH} ${SB.WIDTH} 0 ${SB.WIDTH};
  padding: ${MEDIUM}px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :last-of-type {
    border-width: ${SB.WIDTH};
  }
`

const FontExample = styled.div`
  @font-face {
    font-family: ${props => `${props.name}`};
    font-style: normal;
    font-weight: ${props => props.weight};
    src: url(${props => props.url}) format("woff");
  }

  font-family: ${props => `${props.name}`};
  font-size: ${props => props.size};
  letter-spacing: ${props => props.letterSpacing};
  line-height: ${props => props.lineHeight};
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`

const FontDescription = styled.span`
  margin-top: ${TINY}px;
  ${OPAQUE_FONT}
`

FontExample.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

const FontScale = ({
  fontName,
  fontFileName,
  fontWeight,
  letterSpacing,
  lineHeight,
  size,
  description,
}) => {
  const { edges } = useSiteFiles()
  const completeFile = edges
    ? edges.find(file => file.node.name === fontFileName)
    : null

  return (
    <FontScaleContainer>
      <FontExample
        url={completeFile.node.publicURL}
        name={fontName}
        weight={fontWeight}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        size={size}
      >
        The quick brown fox jumps over the lazy dog
      </FontExample>
      <FontDescription>
        <strong>{description}</strong> - {size} - {fontWeight}
      </FontDescription>
    </FontScaleContainer>
  )
}

FontScale.propTypes = {
  fontName: PropTypes.string.isRequired,
  fontFileName: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

FontScale.defaultProps = {}

export default FontScale
