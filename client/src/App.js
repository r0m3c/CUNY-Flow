import Header from "./Components/header";
import QuestionsPage from "./Pages/QuestionsPage";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AskPage from "./Pages/AskPage";
import { createGlobalStyle } from "styled-components";
import QuestionAnswerPage from "./Pages/QuestionAnswerPage";

const StyledBody = styled.div`
  background-color: #92bfdf;
`

const GlobalStyles = createGlobalStyle`
  blockquote {
    background-Color: black;
    padding: 5px;
    border-radius: 4px;
    color: white;
  }
`

function App() {
  return (
    <StyledBody>
      <GlobalStyles/>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/ask" element={<AskPage/>} />
          <Route exact path="/" element={<QuestionsPage/>} />
          <Route exact path="/question" element={<QuestionAnswerPage/>} />
        </Routes>
      </Router>
    </StyledBody>
  );
}

export default App;
