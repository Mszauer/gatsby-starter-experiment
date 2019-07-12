import React from "react"
import styled from "styled-components"

const GalleryContainer = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-flow: dense;
`

const InlineBlock = styled.div`
    display: inline-block;
    height: fit-content;
`

const Gallery = (props) => {
    return (
        <GalleryContainer>

        </GalleryContainer>
    )
}

export default Gallery 