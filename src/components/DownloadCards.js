import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { SMALL, TINY } from "../utils/spacing"
import { DEVICE } from "../utils/breakpoints"
import { WHITE, PRIMARY_TEXT_COLOR } from "../utils/colors"
import { SECTION_BORDER as SB } from "../utils/borders"
import Image from "./Image"
import { useSiteFiles } from "../utils/hooks"
import ArrowToBottom from "../utils/components/atoms/ArrowToBottom"

/** TEXT **/
const DownloadCardsDescription = styled.p``

/** GRID CONTAINER **/
const DownloadCardsContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: ${props =>
    `repeat(auto-fit, minmax(${100 / (props.columns + 1)}%, 1fr))`};
  grid-gap: ${SMALL}px;

  @media ${DEVICE.TABLET_DOWN} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

/** DOWNLOAD CARD GRID ITEM **/
const CardBase = styled.a`
  text-decoration: none;
  color: ${PRIMARY_TEXT_COLOR};
  border: ${SB.WIDTH} ${SB.STYLE} ${SB.COLOR};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`

const CardHeader = styled.div`
  background: ${WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${TINY}px;
`

const DownloadCard = ({ title, imgsrc, fileName, externalFileLink }) => {
  let fileLink = ""
  if (fileName) {
    const { edges } = useSiteFiles()
    const completeFile = edges
      ? edges.find(file => file.node.name === fileName)
      : null
    fileLink = completeFile.node.publicURL
  } else if (externalFileLink) fileLink = externalFileLink

  return (
    <CardBase role="button" download href={fileLink}>
      <CardHeader>
        <span>{title}</span>
        <ArrowToBottom />
      </CardHeader>
      <div>
        <Image imgsrc={imgsrc} />
      </div>
    </CardBase>
  )
}

DownloadCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  externalFileLink: PropTypes.string,
}

DownloadCardsContainer.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([DownloadCard]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([DownloadCard]),
      })
    ),
  ]),
}
DownloadCardsContainer.defaultProps = {
  columns: 3,
}

export { DownloadCardsContainer, DownloadCardsDescription, DownloadCard }
