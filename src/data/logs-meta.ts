
import { Chapter } from "./chapters-data";

export interface LogsMeta {
  title: string;
  description: string;
  chapters: Chapter[];
}

export const logsMeta: LogsMeta = {
  title: "Training Logs",
  description: "A collection of lessons from the barbell and the boardroom",
  chapters: []
};
