import { create } from 'zustand'


interface Store {
    prompt: string
    setPrompt: (prompt: string) => void
}

export default create<Store>((set) => ({
//     prompt: "---\n\
// provider: deepseek\n\
// model: deepseek - llm - 7b - chat.Q4_K_M\n\
// ---\n\
// \n\
// Create an engaging product description for {{ product_name }} that emphasizes the following features:\n\
// { { features } }\n\
// \n\
// Ensure the description resonates with {{ target_audience }} and clearly articulates the key benefits.\n\
// Tone: { { tone } }\n\
// Desired Length: {{ word_count }} words\n\
// ",
    prompt: "date release iron man film ?",
    setPrompt: (prompt: string) => set(()=>({ prompt: prompt}))
}));
