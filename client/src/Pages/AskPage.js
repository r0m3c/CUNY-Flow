// import {QuestionContainer} from '../Components/QuestionRow'
import styled from 'styled-components';
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import { useState } from 'react';

const QuestionTitle = styled.h3`
    color: white;
`

const TitleInput = styled.input `
    // width: 100%;
    padding: 10px;
`;
const Description = styled.p`
    color: gray;
`

const Container = styled.div`
    width: 80%;
    margin: 40px auto;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: white 0px 8px 18px 3px;
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    background-color: #09062C;
    border-style: solid;
    color: white;
    // padding-top: 14px; 
    padding-bottom: 14px;
    padding-left: 1%; 
    padding-right: 1%;
    display: grid;
`;

const BodyTextArea = styled.textarea`
    padding: 10px;
    min-height: 200px;
`;

const MainTitle = styled.h2`

`;

const PostAnswerButton = styled.button`
    background-color: #1B3B89;
    border: none;
    color: white;
    /* padding: 20px; */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    height: 60px;
    width: 200px;
    border-radius: 15px;
`;

const ButtonDiv = styled.div`
    padding-top: 15px;
`;

const PreviewDiv = styled.div`
    padding-left: 1px;
    padding-right: 10px;
`

const PreviewArea = styled.div`
    color: black;
    width: 100%;
    padding-left: 10px;
    background-color: gray;
    // padding-right: -5px;
    border-radius: 1px;
    padding-bottom: 5px;
    
`

function AskPage() {

    const [questionBody, setQuestionBody] = useState("");

    return (
        <Container>
            <MainTitle>Ask a Public Question</MainTitle>
            <QuestionTitle>Title</QuestionTitle>
            <Description>Be specific and imagine you are asking a question to another person</Description>
            <TitleInput type="text" placeholder="Enter title here" />

            <QuestionTitle>Body</QuestionTitle>
            <Description>Include all information someone would need to know to answer your question</Description>
            <BodyTextArea onChange={e => setQuestionBody(e.target.value)} placeholder="Enter question info here"></BodyTextArea>

            <PreviewDiv>
                <PreviewArea>
                    <ReactMarkdown plugins={"df"} children={questionBody} />
                </PreviewArea>
            </PreviewDiv>

            <ButtonDiv>
                <PostAnswerButton>Post Your Answer</PostAnswerButton>
            </ButtonDiv>
        </Container>
    );
}

export default AskPage;