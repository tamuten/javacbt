export class Thought {
  id?: number;
  thoughtDateTime: Date | null = new Date();
  situation: string = "";
  feeling: string = "";
  percent: number = 0;
  automaticThinking: string = "";
  base: string = "";
  objection: string = "";
  newThinking: string = "";
  newFeeling: string = "";
  newPercent: number = 0;
}
