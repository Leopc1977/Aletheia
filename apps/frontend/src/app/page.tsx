"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [resp, setResp] = useState();

  useEffect(() => {
    const t = async () => {
      await fetch('/api/hello')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        });

      await fetch("http://localhost:3001/test")
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setResp(data.choices[0].message.content);
        });
    }
    t();
  }, [])
  return (
    <div>
      {resp}
    </div>
  );
}
