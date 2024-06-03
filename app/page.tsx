import Image from 'next/image'
import OpenAI from 'openai';


export default function Home() {
  const openai = new OpenAI({
    apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
  });
  
  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion);
    return chatCompletion
  }
  main();
  return (
   <main>

   </main>    
  )
}
