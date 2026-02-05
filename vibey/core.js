import { createInstruction } from "./instruction.schema.js";
import { callAI } from "./ai.adapter.js";

export async function vibey(intent) {
  const instruction = createInstruction(intent);
    const response = await callAI(instruction);
      return response;
      }