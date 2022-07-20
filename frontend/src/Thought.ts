export interface Thought {
  id?: number;
  thoughtDateTIme?: Date;
  situation: string;
  feeling: string;
  percent?: number;
  automaticThinking: string;
  base: string;
  objection: string;
  newThinking: string;
  newFeeling: string;
  newPercent?: number;
}