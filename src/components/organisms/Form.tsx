import { useState } from "react";
import Infomation from "../molecules/Infomation";

type Status = {
  repaymentStatus: string;
  loanTerm: string;
};

export const Form = ({ repaymentStatus, loanTerm }: Status) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let valid = true;
    let newErrors = { name: "", phone: "" };

    if (name.trim() === "") {
      newErrors.name = "氏名を入力してください";
      valid = false;
    }

    const phonePattern = /^[0-9]{10,11}$/; // ハイフンなしで10桁または11桁の数字
    if (phone.trim() === "") {
      newErrors.phone = "電話番号を入力してください";
      valid = false;
    } else if (!phonePattern.test(phone)) {
      newErrors.phone = "有効な電話番号を入力してください（ハイフンなし）";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // フォームの送信処理
      console.log("名前:", name, "電話番号:", phone);
      console.log("借入状況:", repaymentStatus, "借入年数:", loanTerm);
      setName("");
      setPhone("");
      setMessage("送信されました");
    }
  };

  return (
    <>
      <Infomation
        talk="最後の質問です、名前、電話番号を教えてください"
        officeName="司法書士法人みどり法務事務所"
      />
      <div className="flex flex-col items-center bg-white rounded-lg p-4 mx-4 mt-4 shadow-lg mb-10">
        {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              名前
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="氏名"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              電話番号（ハイフンなし半角）
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="電話番号（ハイフンなし半角）"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">{errors.phone}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
