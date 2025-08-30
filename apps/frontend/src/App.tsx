import { useState } from "react"

function App() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: any) => {
    if (!prompt) return;
    e.preventDefault();

    await fetch('http://127.0.0.1:8081/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek-llm-7b-chat.Q4_K_M',
        // max_tokens: 2,
        // temperature: 1,
        prompt: prompt
      })
    })
      .then(res => res.json())
      .then(data => setResponse(data.choices[0].text))
      .catch(err => console.log(err))

    setPrompt('');
  }

  return (
    <>
      <div>
        prompt
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        reponse:
        {response}
      </div>
    </>
  )
}

export default App
