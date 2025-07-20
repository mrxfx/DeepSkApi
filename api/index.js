export default async function handler(req, res) {
  const prompt = req.query.prompt || "Hello from DeepSeek!";

  // 🔐 Your Hugging Face Token (hardcoded)
  const HF_TOKEN = "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";

  const response = await fetch("https://api-inference.huggingface.co/models/deepseek-ai/deepseek-llm-7b-base", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: prompt,
      parameters: {
        max_new_tokens: 200,
        temperature: 0.7
      }
    })
  });

  const data = await response.json();

  if (Array.isArray(data)) {
    res.status(200).json({ response: data[0].generated_text });
  } else {
    res.status(500).json({ error: data.error || "Something went wrong." });
  }
}
