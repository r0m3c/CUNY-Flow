import styled from "styled-components";
import QuestionRow from "../Components/QuestionRow";
import "../Styles/QuestionsPage.css"
import {Link} from 'react-router-dom';

const AnswerButton = styled(Link)`
    background-color: #09062C;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 60px;
    margin: 4px 2px;
    height: 100px;
    width: 100px;

    justify-content: center;
    align-items: center;
    display: flex;
`

function QuestionsPage() {
    return(
        <main>
            <div className="AnswerButtonDiv">
                <AnswerButton to={"/ask"} className="button5">+</AnswerButton>
            </div>

            <h1 className="header">Questions</h1>

            <QuestionRow></QuestionRow>
            <QuestionRow></QuestionRow>
            <QuestionRow></QuestionRow>
            <QuestionRow></QuestionRow>
            <QuestionRow></QuestionRow>
        </main>

    );
}

export default QuestionsPage;