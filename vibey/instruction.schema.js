export function createInstruction(intent) {
      return {
          actor: "human",
              intent,
                  meta: {
                        version: "0.0",
                              timestamp: Date.now()
                                  }
                                    };
                                    }
}