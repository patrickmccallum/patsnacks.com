import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby'
import { MainLayout } from "../MainLayout/MainLayout"

const ContainWidth = 1200

const HeaderContainer = styled.header`
    display: flex;
    margin: auto;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.lineColor};

    > div {
        display: flex;
        flex: 1;
        max-width: calc(${ContainWidth}px - 60px);

        > section {
            display: flex;
            flex: 1;

            &:last-of-type {
                justify-content: flex-end;
            }
        }
    }
`

const LeftSide = styled.section`
    flex: 0!important;
    padding-right: 5px;
    border-right: 2px solid ${props => props.theme.lineColor};
`
const RightSide = styled.section``

const PostContainer = styled.article`
    max-width: ${ContainWidth}px;
    padding: 0 30px;
    margin: 30px auto;
`

const SiteTitle = styled.h1`
    background: ${props => props.theme.contrastBackColor};
    padding: 5px 10px;
    color: ${props => props.theme.contrastForeColor};
    display: inline-block;
    line-height: unset;
    margin: 5px 0;
    font-size: 25px;
    font-weight: 400;
`;

export const PostLayout = ({ children }) => {
    return (
        <MainLayout>
            <HeaderContainer>
                <div>
                    <LeftSide>
                        <SiteTitle as={Link} to={'/'}>
                            patsnacks
                        </SiteTitle>
                    </LeftSide>
                    <section>

                    </section>
                    <RightSide></RightSide>
                </div>
            </HeaderContainer>
            <PostContainer>{children}</PostContainer>
        </MainLayout>
    )
}
