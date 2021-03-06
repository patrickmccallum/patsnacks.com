import React, { useEffect, useState } from "react"
import Avatar from "../../components/avatar"
import AvatarClosed from "../../components/images/AvatarClosed"
import AvatarDrinking from "../../components/images/AvatarDrinking"
import AvatarDying from "../../components/images/AvatarDying"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { MainLayout } from "../MainLayout/MainLayout"

const ContainWidth = 1200

const HeaderContainer = styled.header`
    display: flex;
    max-width: ${ContainWidth}px;
    margin: auto;
    padding: 0 30px 50px;

    > section {
        display: flex;
        flex: 1;

        &:last-of-type {
            flex-direction: column;
            justify-content: center;

            p {
                display: inline-block;
            }
        }
    }
`

const ScatterContainer = styled.div`
    max-width: ${ContainWidth}px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: fixed;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
`

const LeftSide = styled.section`
    display: flex;
    flex: 0 !important;
    justify-content: center;
    align-items: center;
    padding: 25px 35px;
`

const RightSide = styled.section`
    z-index: 500;
    padding-top: 10px;
`

const ClickyAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1);
    }
    75% {
        transform: scale(0.85);
    }
    100% {
        transform: scale(1);
    }
`

const TitleText = styled.div`
    margin-bottom: 5px;
    user-select: none;

    > div {
        background: ${props => props.theme.contrastBackColor};
        padding: 5px 10px;
        color: ${props => props.theme.contrastForeColor};
        display: inline-block;

        &.clicky {
            animation: ${ClickyAnimation} 1s 1;
            animation-delay: 1s;
            cursor: pointer;

            transition: all ease-out 100ms;

            &:hover {
                transform: scale(1.05);
            }

            &:active {
                transform: scale(0.97);
            }
        }
    }
`

const QuickLinks = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px 5px 0;
        font-weight: 600;
    }

    .hint {
        text-transform: uppercase;
        font-weight: 600;
        color: #9f9f9f;
        font-size: 12px;
        padding-right: 10px;
        border-radius: 10px;
    }

    .pill {
        border-radius: 6px;
        margin: 0;
        color: #fff;
        font-weight: 600;
        box-shadow: 2px 2px rgb(130, 130, 130);
        font-size: 15px;
        padding: 4px 7px;
        margin: 5px;
        float: left;

        &:active,
        &:hover {
            text-decoration: none;
        }
    }
`

const BoxMe = styled.span`
    opacity: 0;

    &::before {
        display: box;
        content: "Me";
        background: #ff7e5d;
        color: #fff;
        padding: 4px 10px;
        font-size: 12px;
        text-transform: uppercase;
    }

    border: 1px solid #ff7e5d;
    position: absolute;
    top: 40px;
    bottom: 0px;
    left: 20px;
    right: 23px;
    z-index: 500;
`

const BoxWinningSmile = styled.span`
    opacity: 0;

    &::before {
        display: box;
        content: "Winning Smile";
        background: #ffcc38;
        color: #fff;
        padding: 4px 10px;
        font-size: 12px;
        text-transform: uppercase;
    }

    border: 1px solid #ffcc38;
    position: absolute;
    top: 170px;
    bottom: 100px;
    left: 60px;
    right: 39px;
    z-index: 500;
`

const BoxEyes = styled.span`
    opacity: 0;

    &::before {
        display: box;
        content: "My eyes";
        background: #7da7d7;
        color: #fff;
        padding: 4px 10px;
        font-size: 12px;
        text-transform: uppercase;
    }

    border: 1px solid #7da7d7;
    position: absolute;
    top: 120px;
    bottom: 152px;
    left: 50px;
    right: 53px;
    z-index: 500;
`

const AvatarCont = styled.div`
    width: 215px;
    height: 315px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);

    span {
        transition: ease-in-out opacity 200ms;
    }

    &:hover span {
        opacity: 1;
    }

    > div {
        transition: opacity linear 200ms;
    }
`

const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .avatar-1,
    .avatar-2,
    .avatar-3,
    .avatar-4 {
        position: absolute !important;
        top: 0 !important;
        bottom: 0;
        left: 0;
        right: 0;
    }

    @media (max-width: 768px) {
        ${HeaderContainer} {
            flex-direction: column;
        }
    }

    ${props =>
        props.avatarNumber !== 1 &&
        `
        ${BoxEyes}, ${BoxMe}, ${BoxWinningSmile} { opacity: 0!important;}
    `}

    .avatar-1 {
        opacity: ${props => (props.avatarNumber === 1 ? 1 : 0)};
        pointer-events: ${props => (props.avatarNumber === 1 ? "all" : "none")};
    }
    .avatar-2 {
        opacity: ${props => (props.avatarNumber === 2 ? 1 : 0)};
        pointer-events: ${props => (props.avatarNumber === 2 ? "all" : "none")};
    }
    .avatar-3 {
        opacity: ${props => (props.avatarNumber === 3 ? 1 : 0)};
        pointer-events: ${props => (props.avatarNumber === 3 ? "all" : "none")};
    }
    .avatar-4 {
        opacity: ${props => (props.avatarNumber === 4 ? 1 : 0)};
        pointer-events: ${props => (props.avatarNumber === 4 ? "all" : "none")};
    }
`

const ColourSelections = ["#ffcc38", "#7da7d7", "#ff7e5d"]

const SCATTER_STYLE = {
    'LINE': 0,
    'CIRCLE': 1,
    'SQUIRCLE': 2,
    'DROP': 3,
    'RANDOM': 4,
}

export const HomeLayout = ({ children }) => {
    const [scatters, setScatters] = useState([])
    const [avatarNumber, setAvatarNumber] = useState(1)
    const [scatterCount, setScatterCount] = useState(3)
    const [scatterStyle, setScatterStyle] = useState(SCATTER_STYLE.RANDOM)

    const getScatterStyle = () => {
        let thisStyle = scatterStyle !== SCATTER_STYLE.RANDOM ? scatterStyle : Math.floor(Math.random()*3);

        let styles = {
            height: '300px',
        };

        if (Math.random() * 100 > 25) {
            styles["background"] =
                ColourSelections[
                    Math.floor(Math.random() * ColourSelections.length)
                ]
        } else {
            styles["border"] =
                `2px dashed ${ColourSelections[
                    Math.floor(Math.random() * ColourSelections.length)
                ]}`
        }

        switch (thisStyle) {
            case SCATTER_STYLE.LINE:
                styles['width'] = '26px';
                styles['borderRadius'] = '5px';
                break;
            case SCATTER_STYLE.CIRCLE:
                styles['width'] = '300px';
                styles['borderRadius'] = '100%';
                break;
            case SCATTER_STYLE.SQUIRCLE:
                styles['width'] = '300px';
                styles['borderRadius'] = '30px';
                break;
            case SCATTER_STYLE.DROP:
                styles['width'] = '300px';
                styles['borderRadius'] = '40% 0 40%';
                break;
            default:
                console.warn('Invalid style type', scatterStyle, thisStyle);
        }

        return styles;
    }

    const generateScatters = () => {
        const newScatters = []

        for (let i = 0; i < scatterCount; i++) {
            let styles = {
                ...getScatterStyle(),
                transition: "all ease-in-out 500ms",
                position: "absolute",
                left: `calc(-100px + ${Math.random() * 1000}px)`,
                top: `calc(-200px + ${Math.random() * 500}px)`,
                transform: `scale(${Math.min(
                    1,
                    Math.random() * 3
                )}) rotate(${Math.random() * 360}deg)`,
            }

            newScatters.push(<div style={{ ...styles }} />)
        }

        setScatters(newScatters)
    }

    const startAvatarTransition = () => {
        if (Math.random() * 10 < 6) return

        if (Math.random() * 100 < 50) {
            generateScatters(true)
        }

        let internalAvatarNumber = 1

        let interval = setInterval(() => {
            setAvatarNumber(
                internalAvatarNumber + 1 > 4 ? 1 : (internalAvatarNumber += 1)
            )
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }

    useEffect(generateScatters, [scatterCount, scatterStyle])
    useEffect(startAvatarTransition, [])

    return (
        <MainLayout>
            <CenterContainer avatarNumber={avatarNumber}>
                <ScatterContainer>
                    {scatters.map((element, i) => {
                        return (
                            <React.Fragment key={`${i}`}>
                                {element}
                            </React.Fragment>
                        )
                    })}
                </ScatterContainer>

                <HeaderContainer>
                    <LeftSide>
                        <AvatarCont>
                            <BoxMe />
                            <BoxWinningSmile />
                            <BoxEyes />
                            <Avatar />
                            <AvatarClosed />
                            <AvatarDrinking />
                            <AvatarDying />
                        </AvatarCont>
                    </LeftSide>
                    <RightSide>
                        <div>
                            <TitleText
                                onClick={() => {
                                    generateScatters()
                                }}
                                onDoubleClick={() => {
                                    setScatterCount(scatterCount + 1)
                                }}
                                onContextMenu={event => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    setScatterStyle(scatterStyle === SCATTER_STYLE.RANDOM ? SCATTER_STYLE.LINE : scatterStyle + 1)
                                }}
                                style={{
                                    fontSize: `45px`,
                                }}
                            >
                                <div
                                    className="clicky"
                                    style={{ cursor: "pointer" }}
                                >
                                    Hello,
                                </div>
                            </TitleText>
                            <TitleText
                                style={{
                                    fontSize: `35px`,
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: `600px`,
                                    }}
                                >
                                    I'm Patrick, a Brisbane
                                    <sup
                                        style={{
                                            fontSize: "12px",
                                            position: "relative",
                                            opacity: 0.5,
                                        }}
                                    >
                                        AUS
                                    </sup>{" "}
                                    based developer working at Clipchamp.
                                </div>
                            </TitleText>

                            <QuickLinks>
                                <div className="hint">Quick reads</div>
                                <div>
                                    {/* <Link
                                        to={"/the-list"}
                                        className="pill"
                                        style={{
                                            background: ColourSelections[0],
                                        }}
                                    >
                                        Stuff I've made
                                    </Link> */}
                                    <a
                                        href={
                                            "https://github.com/patrickmccallum"
                                        }
                                        className="pill"
                                        style={{
                                            background: ColourSelections[2],
                                        }}
                                    >
                                        My github
                                    </a>
                                    <a
                                        href={"https://twitter.com/patsnacks"}
                                        target="_blank"
                                        className="pill"
                                        style={{
                                            background: ColourSelections[1],
                                        }}
                                    >
                                        My twitter
                                    </a>
                                </div>
                            </QuickLinks>
                        </div>
                    </RightSide>
                </HeaderContainer>
                <section>{children}</section>
            </CenterContainer>
        </MainLayout>
    )
}
