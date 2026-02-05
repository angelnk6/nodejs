export async function callAI(instruction) {
      return {
          role: "assistant",
              content: `Vibey received: ${instruction.intent}`
                };
                }
}