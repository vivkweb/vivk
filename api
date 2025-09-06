export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }

  const { message, type } = req.body || {};
  if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  try {
    if (type === "image") {
      // 🔹 توليد صورة من النص
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: message,
          size: "512x512"
        }),
      });

      const data = await response.json();
      return res.status(200).json({
        image: data?.data?.[0]?.url || null,
      });
    } else {
      // 🔹 توليد نص (شات بوت)
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "أنت مساعد ذكي عصري اسمه Vivk" },
            { role: "user", content: message },
          ],
        }),
      });

      const data = await response.json();
      return res.status(200).json({
        reply: data?.choices?.[0]?.message?.content || "No reply",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}