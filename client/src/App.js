import Header from "./Components/header";
import QuestionsPage from "./Pages/QuestionsPage";
import styled from "styled-components";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AskPage from "./Pages/AskPage";
import { createGlobalStyle } from "styled-components";
import QuestionAnswerPage from "./Pages/QuestionAnswerPage";
import Footer from "./Components/Footer";

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
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
        <Footer/>
      </Router>
    </StyledBody>
  );
}

export default App;
