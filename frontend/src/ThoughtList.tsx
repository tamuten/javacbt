import { useState, useLayoutEffect } from "react";
import { Thought } from "./Thought";
import { formatDateTimeHyphen } from "./formatDateTimeHyphen";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const ThoughtList = () => {
  const [thoughts, setThoughts] = useState<Thought[]>();

  const getList = async () => {
    const json = await fetch("/api/index").then(
      (response) => response.text(),
      (reason) => {
        console.error(reason);
      }
    );

    if (json) {
      const obj: Thought[] = JSON.parse(json);

      setThoughts(obj);
    }
  };

  useLayoutEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Thought List
      </Typography>
      {thoughts ? (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>日時</TableCell>
                  <TableCell>状況</TableCell>
                  <TableCell>気分</TableCell>
                  <TableCell></TableCell>
                  <TableCell>自動思考</TableCell>
                  <TableCell>根拠</TableCell>
                  <TableCell>反証</TableCell>
                  <TableCell>適応的思考</TableCell>
                  <TableCell>今の気分</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {thoughts.map((t, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{t.id}</TableCell>
                    <TableCell>
                      {t.thoughtDateTime
                        ? formatDateTimeHyphen(new Date(t.thoughtDateTime))
                        : ""}
                    </TableCell>
                    <TableCell>{t.situation}</TableCell>
                    <TableCell>{t.feeling}</TableCell>
                    <TableCell>{t.percent}</TableCell>
                    <TableCell>{t.automaticThinking}</TableCell>
                    <TableCell>{t.base}</TableCell>
                    <TableCell>{t.objection}</TableCell>
                    <TableCell>{t.newThinking}</TableCell>
                    <TableCell>{t.newFeeling}</TableCell>
                    <TableCell>{t.newPercent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        ""
      )}
    </>
  );
};
