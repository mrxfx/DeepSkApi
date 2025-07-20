# DeepSeek-R1 API (Vercel)

This project lets you create a REST API for DeepSeek-R1 using Hugging Face's inference endpoint.

## 🛠 Setup on Vercel

1. Fork or upload this project to GitHub or directly import it into Vercel.
2. Add environment variable:
   - Key: HF_TOKEN
   - Value: your Hugging Face token
3. Deploy.

## ✅ Use Example

GET https://your-vercel-name.vercel.app/api?prompt=Tell+me+a+joke

Response:
{
  "response": "Why don't scientists trust atoms? Because they make up everything!"
}