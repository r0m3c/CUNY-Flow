// import Header from "../Components/header";
import "../Styles/QuestionAnswerPage.css"
import styled from 'styled-components';
import AnswerRow from "../Components/AnswerRow";
import {Link} from 'react-router-dom';
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import { useState } from 'react';

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

// Question Container
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

const QuestionTitle = styled.div`
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

const InnerContainer = styled.div`
  border-top: 1px solid white;
  clear: both;
  float: none;
  margin-bottom: 20px;
  width: auto;
`

const InnerContainer2 = styled.div`
  clear: both;
`

const InnerContainer3 = styled.div`
  color: #242729;
  display: grid;
  grid-template-columns: -webkit-max-content 1fr;
  grid-template-columns: max-content 1fr; 
`

const InnerContainer4 = styled.div`
  font-size: 13px;
  grid-column: 1;
  padding-right: 16px;
  vertical-align: top;
  width: auto;
`

const InnerContainerInside4 = styled.div`
  align-items: stretch;
  color: #bbc0c4!important;
  display: flex;
  flex-direction: column;
  margin: -2px;
`

const InnerContainer4Button1 = styled.button`
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  font: inherit;
  outline: none;
  padding: 0;
  text-align: center;
  text-decoration: none;
`

const InnerContainer4Number = styled.div`
  align-items: center;
  color: #6a737c;
  display: flex;
  font-size: 21px;
  justify-content: center;
`

const InnerContainer4Button2 = styled.button`
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  font: inherit;
  outline: none;
  padding: 0;
  text-align: center;
  text-decoration: none;
`

const InnerContainer5 = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  min-width: 0;
  padding-right: 16px;
  vertical-align: top;
  width: auto;
`

const InnerContainer5TitleSection = styled.div`
  color: white;
  font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
  font-size: 15px;
  line-height: 1.3;
  margin-bottom: 5px;
  width: 100%;
`

const InnterContainer5Question = styled.p`

`

const InnterContainer5BottomSection = styled.div`
  margin-bottom: 0;
`

const InnterContainer5InnerBottomSection = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  padding-top: 4px;
`

const InnerContainer5EditSection = styled.div`
  flex: 1 1 100px;
  margin-bottom: 4px;
  margin-right: 16px!important;
  margin-top: 4px;
`

const InnerContainer5EditButton = styled.a`
  color: #848d95;
  cursor: pointer;
  font-size: 13px;
  padding: 0 4px 2px;
  text-decoration: none;
`

const InnerContainer5UserSection = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-bottom: 4px;
  margin-top: 4px;
  text-align: left;
  vertical-align: top;
  width: 200px;
`
const InnerContainer5InnerUserSection = styled.div`
  box-sizing: border-box;
  color: #6a737c;
  padding: 5px 6px 0 7px;
`

const InnerContainer5AskedDate = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
  margin-top: 1px;
  white-space: nowrap;
`

const InnerContainer5ImageSection = styled.div`
  border-radius: 1px;
  float: left;
  height: 32px;
  margin-bottom: 6px;
  width: 32px;
`

const InnerContainer5UserNameSection = styled.div`
  word-wrap: break-word;
  float: left;
  line-height: 17px;
  margin-left: 8px;
  width: calc(100% - 40px);
`

const InnerContainer5UserNameLink = styled.a`
  color: #07c;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
`
// End of Question Container

// Text area
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
const BodyTextArea = styled.textarea`
    padding: 10px;
    min-height: 200px;
`;

const ContainerTextAreaAll = styled.div`
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
    padding-top: 14px; 
    padding-bottom: 14px;
    padding-left: 1%; 
    padding-right: 1%;
    display: grid;
`;
// end of text area

const AnswerCountTitle = styled.h1`
  padding-left: 10%; color: #09062C;
`

const AnswerTitle = styled.h1`
  padding-left: 10%; color: #09062C;  
`


function QuestionAnswerPage() {
  const [questionBody, setQuestionBody] = useState("");


  return (
    <>
      <div className='AnswerButtonDiv'>
        <AnswerButton to={"/ask"} className="button5">+</AnswerButton>
      </div>

      <Container>
        <QuestionTitle>
          <h1>How do Pointer work in C++</h1>
        </QuestionTitle>

        <InnerContainer>
          <InnerContainer2>
            <InnerContainer3>
              <InnerContainer4>
                <InnerContainerInside4>
                  <InnerContainer4Button1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 36"
                      class="icon">
                      <path fill="#697075" d="M2 26H34L18 10L2 26Z"></path>
                    </svg>
                  </InnerContainer4Button1>

                  <InnerContainer4Number>
                    2
                  </InnerContainer4Number>
                    <svg
                      xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 36"
                      class="icon">
                      <path fill="#697075" d="M2 10H34L18 26L2 10Z"></path>
                    </svg>
                  <InnerContainer4Button2>

                  </InnerContainer4Button2>
                </InnerContainerInside4>
              </InnerContainer4>

              <InnerContainer5>
                <InnerContainer5TitleSection>
                  <InnterContainer5Question>
                    Hello, I currently go to john jay college (freshmen here). I am having trouble understanding how
                    pointers work in c++. Specifically, I don’t understand how referencing an objects address can be
                    stored in a pointer.
                    {/* <br><br> */}
                  </InnterContainer5Question>
                </InnerContainer5TitleSection>

                <InnterContainer5BottomSection>
                  <InnterContainer5InnerBottomSection>
                    <InnerContainer5EditSection>
                      <div>
                        <InnerContainer5EditButton>
                          edit
                        </InnerContainer5EditButton>
                      </div>
                    </InnerContainer5EditSection>

                    <InnerContainer5UserSection>
                      <div>
                        <InnerContainer5InnerUserSection>
                          <InnerContainer5AskedDate>
                            asked 1 day ago
                          </InnerContainer5AskedDate>

                          <InnerContainer5ImageSection>
                            <i>
                              card here
                            </i>
                          </InnerContainer5ImageSection>

                          <InnerContainer5UserNameSection>
                            <InnerContainer5UserNameLink>
                              r0m3c
                            </InnerContainer5UserNameLink>
                          </InnerContainer5UserNameSection>
                        </InnerContainer5InnerUserSection>
                      </div>
                    </InnerContainer5UserSection>
                  </InnterContainer5InnerBottomSection>
                </InnterContainer5BottomSection>
              </InnerContainer5>
            </InnerContainer3>
          </InnerContainer2>
        </InnerContainer>
      </Container>

      <AnswerCountTitle>
        3 Answer(s)
      </AnswerCountTitle>

      <AnswerRow>
      </AnswerRow>

      <AnswerRow>
      </AnswerRow>

      <AnswerRow>
      </AnswerRow>

      <AnswerTitle>
        Your Answer
      </AnswerTitle>

      <ContainerTextAreaAll>
        <BodyTextArea onChange={e => setQuestionBody(e.target.value)} placeholder="Enter question info here"></BodyTextArea>

        <PreviewDiv>
            <PreviewArea>
                <ReactMarkdown plugins={"df"} children={questionBody} />
            </PreviewArea>
        </PreviewDiv>

        <ButtonDiv>
            <PostAnswerButton>Post Your Answer</PostAnswerButton>
        </ButtonDiv>
      </ContainerTextAreaAll>
    </>
  );
}

export default QuestionAnswerPage;
