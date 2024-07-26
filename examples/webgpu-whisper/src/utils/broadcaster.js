import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "http://localhost:54321";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const channel = supabase.channel("cityjsconfsg");

function getLastFullSentence(message) {
  // Regular expression to match sentences ending with '.', '!', or '?'
  const sentenceRegex = /[^.!?]+[.!?]+/g;
  const sentences = message.match(sentenceRegex);

  // Return the last sentence if found, otherwise return an empty string
  return sentences ? sentences[sentences.length - 1].trim() : "";
}

let lastBroadcast = "";

export default function broadcast({ message, language }) {
  // TDOD: better chinese handling as there's no punctuaction.
  const lastSentence =
    language === "zh" ? message : getLastFullSentence(message);
  if (lastSentence === lastBroadcast) return;
  console.log("broadcast", { message: lastSentence, language });
  channel.send({
    type: "broadcast",
    event: "transcript",
    payload: { message: lastSentence, language },
  });
  lastBroadcast = lastSentence;
}
