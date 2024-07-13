import { useEffect, useState } from "react";
import Header from "./components/atoms/Header";
import Infomation from "./components/molecules/Infomation";
import { Question } from "./components/organisms/Question";

function App() {
  const [showFirstInfomation, setShowFirstInfomation] = useState(false);
  const [showSecondInfomation, setShowSecondInfomation] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowFirstInfomation(true);
    }, 1000);

    const secondTimer = setTimeout(() => {
      setShowSecondInfomation(true);
    }, 2000);

    const questionTimer = setTimeout(() => {
      setShowQuestion(true);
    }, 3000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(questionTimer);
    };
  }, []);

  return (
    <div className="bg-line-blue min-h-screen">
      <Header title="司法書士法人みどり法務事務所" />

      {showFirstInfomation && (
        <Infomation
          talk="司法書士法人みどり法務事務所にお問い合わせいただきまして、ありがとうございます。"
          officeName="司法書士法人みどり法務事務所"
        />
      )}

      {showSecondInfomation && (
        <Infomation
          talk="返済状況を教えてください"
          officeName="司法書士法人みどり法務事務所"
        />
      )}

      {showQuestion && <Question />}
    </div>
  );
}

export default App;
