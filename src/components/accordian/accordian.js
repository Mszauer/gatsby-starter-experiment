import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Chevron from "../chevron"

const AccordianSection = styled.div`
    display: flex;
    flex-direction: column;
`

const AccordianButton = styled.button`
    background-color: #fff;
    color: #444;
    cursor: pointer;
    padding: 18px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.3s ease;
    border-top: none;
    &.active {
        border-top: 5px solid #0c5a7a;
    };
`

const AccordianTitle = styled.p`
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
`

const AccordianContent = styled.ul`
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
    max-height: ${props => props.height};
`

const AccordianIcon = styled(Chevron)`
    margin-left: auto;
    transition: transform 0.6s ease;
    transform: rotate(90deg);
    &.rotate {
        transform: rotate(0deg);
    };
`

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        [ref, handler]
    );
}

const Accordian = (props) => {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")
    const [setRotate, setRotateState] = useState("")

    const content = useRef()
    const accordianRef = useRef()

    function setAccordianActive() {
        setActiveState("active")
        setHeightState(`${content.current.scrollHeight}px`)
        setRotateState("rotate")
    }
    function setAccordianInactive() {
        setActiveState("")
        setHeightState("0px")
        setRotateState("")
    }
    useOnClickOutside(accordianRef, () => setAccordianInactive())

    return (
        <AccordianSection ref={accordianRef}>
            <AccordianButton className={setActive} onClick={setActive === "active" ? setAccordianInactive : setAccordianActive}>
                <AccordianTitle>{props.title}</AccordianTitle>
                <AccordianIcon className={setRotate} width={10} fill={"#777"} />
            </AccordianButton>
            <AccordianContent className={setActive} ref={content} height={setHeight}>
                {props.children}
            </AccordianContent>
        </AccordianSection >
    )
}

export default Accordian