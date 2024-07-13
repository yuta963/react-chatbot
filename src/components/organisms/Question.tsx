import { useEffect, useState } from "react";
import Btn from "../atoms/Btn ";
import { Customar } from "../molecules/Customar";
import Infomation from "../molecules/Infomation";
import { Form } from "./Form";

export const Question = () => {
  const [talk, setTalk] = useState("");
  const [talkYear, setTalkYear] = useState("");
  const [showQuestion, setShowQuestion] = useState(true);
  const [showFirstInfomation, setShowFirstInfomation] = useState(false);
  const [showSecondInfomation, setShowSecondInfomation] = useState(false);
  const [showAverageBorrowingPeriod, setShowAverageBorrowingPeriod] =
    useState(false);
  const [showFinalInfomation, setShowFinalInfomation] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleClick = (name: string) => {
    setTalk(name);
    setShowQuestion(false); // ボタンがクリックされたら質問部分を非表示にする
  };

  const handleQuestion = (year: string) => {
    setTalkYear(year);
    setShowAverageBorrowingPeriod(false); // 「平均借入年数」セクションを非表示にする
    const finalTimer = setTimeout(() => {
      setShowFinalInfomation(true);
    }, 1000);

    const formTimer = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    return () => {
      clearTimeout(finalTimer); // クリーンアップタイマー
      clearTimeout(formTimer); // クリーンアップタイマー
    };
  };

  useEffect(() => {
    if (talk !== "") {
      const firstTimer = setTimeout(() => {
        setShowFirstInfomation(true);
      }, 1000);

      const secondTimer = setTimeout(() => {
        setShowSecondInfomation(true);
      }, 2000);

      const thirdTimer = setTimeout(() => {
        setShowAverageBorrowingPeriod(true);
      }, 3000);

      return () => {
        clearTimeout(firstTimer); // クリーンアップタイマー
        clearTimeout(secondTimer); // クリーンアップタイマー
        clearTimeout(thirdTimer); // クリーンアップタイマー
      };
    }
  }, [talk]);

  return (
    <>
      {showQuestion && (
        <div className="flex flex-col items-center bg-white rounded-lg mx-4 mt-4">
          <p className="font-bold mb-4 mt-4">返済状況</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Btn name="完済" onClick={() => handleClick("完済")} />
            <Btn name="返済" onClick={() => handleClick("返済")} />
            <Btn name="両方ある" onClick={() => handleClick("両方ある")} />
            <Btn name="不明" onClick={() => handleClick("不明")} />
          </div>
        </div>
      )}
      {talk && <Customar talk={`「${talk}」です`} />}
      {showFirstInfomation && (
        <Infomation
          talk={`「${talk}」ですね。ありがとうございます。`}
          officeName="司法書士法人みどり法務事務所"
        />
      )}
      {showSecondInfomation && (
        <Infomation
          talk="平均借入年数は何年ですか？"
          officeName="司法書士法人みどり法務事務所"
        />
      )}
      {showAverageBorrowingPeriod && (
        <div className="flex flex-col items-center bg-white rounded-lg mx-4 mt-4">
          <p className="font-bold mb-4 mt-4">平均借入年数</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Btn name="1年未満" onClick={() => handleQuestion("1年未満")} />
            <Btn name="1~10年" onClick={() => handleQuestion("1~10年")} />
            <Btn name="10年以上" onClick={() => handleQuestion("10年以上")} />
            <Btn name="不明" onClick={() => handleQuestion("不明")} />
          </div>
        </div>
      )}
      {talkYear && <Customar talk={`「${talkYear}」です`} />}
      {showFinalInfomation && (
        <Infomation
          talk={`「${talkYear}」ですね。かしこまりました。`}
          officeName="司法書士法人みどり法務事務所"
        />
      )}
      {showForm && <Form repaymentStatus={talk} loanTerm={talkYear} />}
    </>
  );
};
