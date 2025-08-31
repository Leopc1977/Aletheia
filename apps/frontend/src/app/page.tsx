"use client"

import axios from 'axios';

import { Button } from "@/components/Button";
import { Playground } from "@/components/Playground";
import { useState } from "react";
import useStore from '@/useStore';

export default function DashboardPage() {
  const [response, setResponse] = useState()
  const [judge, setJudge] = useState(null)
  const { prompt } = useStore();



  const t = async () => {
    // await fetch("http://localhost:3001/test")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     setResponse(data.choices[0].message.content);
    //   });

    const response = await axios.get('/api/hello', {
      params: {
        model: "deepseek-llm-7b-chat.Q4_K_M",
        prompt: prompt
      }
    });
    setResponse(response.data.response)
  }

  const a = async () => {

    const p = `You're an expert LLM-as-a-judge evaluator. Your task is to judge whether the response, from another LLM model (the assistant), meets the following criteria:
Assess how well the response follows the given instructions.

The resulting verdict is an integer number between \`1\`, if the response does not meet the criteria, and \`5\` otherwise, where:
- \`1\` represents "Not faithful, doesn't follow the instructions."
- \`5\` represents "Very faithful, does follow the instructions."

<user>
  Based on the given instructions, evaluate the assistant response:
  \`\`\`
${response}
  \`\`\`

  For context, here is the full conversation:
  \`\`\`
{ role: "system", content: "You are a helpful assistant." },
{ role:"user", content: ${prompt} }
  \`\`\`
</user>

You must give your verdict as a single JSON object with the following properties:
- rating (number): An integer number between \`1\` and \`5\`.
- reason (string): A string explaining your evaluation decision.`;


    const r = await axios.get('/api/hello', {
      params: {
        model: "deepseek-llm-7b-chat.Q4_K_M",
        prompt: p
      }
    });
    console.log(r.data);
    setJudge(JSON.parse(r.data.response))
  }
  return (
    <div className="h-full w-full">
      <div>Model: deepseek-llm-7b-chat.Q4_K_M</div>
      <Playground />
      <Button onClick={() => t()}>Run</Button>
      <br />
      {response}
      <br />-----<br />
      <div>Accuracy - LLM-as-a-Judge</div>
      <Button onClick={() => a()}>Judge</Button>
      <br />{judge && judge.rating}<br />{judge && judge.reason}
    </div>
  )
}
