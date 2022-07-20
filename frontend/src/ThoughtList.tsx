import { useState, useLayoutEffect } from "react";
import { Thought } from "./Thought";

export const ThoughtList = () => {
  const [thoughts, setThoughts] = useState<Thought[]>();

  const getList = async () => {
    const msg = await fetch("/api/index").then(
      (response) => response.text(),
      (reason) => {
        console.error(reason);
      }
    );

    if (msg) {
      const obj = JSON.parse(msg);
      
      setThoughts(obj);
    }
  };

  useLayoutEffect(() => {
    getList();
  }, []);

  return (
    <>
      {thoughts ? (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>日時</th>
              <th>状況</th>
              <th>気分</th>
              <th></th>
              <th>自動思考</th>
              <th>根拠</th>
              <th>反証</th>
              <th>適応的思考</th>
              <th>今の気分</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {thoughts.map((t, index) => (
              <tr key={index}>
                <td>{t.id}</td>
                <td>
                  {t.thoughtDateTIme ? t.thoughtDateTIme.toString() : ""}
                </td>
                <td>{t.situation}</td>
                <td>{t.feeling}</td>
                <td>{t.percent}</td>
                <td>{t.automaticThinking}</td>
                <td>{t.base}</td>
                <td>{t.objection}</td>
                <td>{t.newThinking}</td>
                <td>{t.newFeeling}</td>
                <td>{t.newPercent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};
