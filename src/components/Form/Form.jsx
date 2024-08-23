import React, { useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const { tg } = useTelegram();
  const [specialization, setSpecialization] = useState("");
  const [grade, setGrade] = useState("");
  const [language, setLanguage] = useState("rus");

  useEffect(() => {
    tg.MainButton.setParams({ text: "Отправить данные" });
  }, [tg]);

  useEffect(() => {
    if (!specialization || !grade) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [specialization, grade, tg]);

  const onChagneSpecialization = (e) => {
    setSpecialization(e.target.value);
  };

  const onChagneGrade = (e) => {
    setGrade(e.target.value);
  };

  const onChagneLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className={"form"}>
      <h1> Введите данные:</h1>
      <input
        className={"input"}
        value={specialization}
        onChange={onChagneSpecialization}
        type="text"
        placeholder={"Направление"}
      />
      <input
        className={"input"}
        value={grade}
        onChange={onChagneGrade}
        type="text"
        placeholder={"Уровень"}
      />

      <h2>Интерьвю будет на:</h2>
      <select className={"select"} value={language} onChange={onChagneLanguage}>
        <option value={"rus"}>на русском</option>
        <option value={"eng"}>in english</option>
        <option value={"both"}>без разницы</option>
      </select>
    </div>
  );
};

export default Form;
