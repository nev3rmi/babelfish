<<<<<<< HEAD
# Babelfish.ai

A realtime, live transcription and translation app that works locally using a browser. Built with [Huggingface Transformer.js](https://huggingface.co/docs/transformers.js) and [Supabase Realtime](https://supabase.com/realtime).

## Features

🎙️ Realtime in-browser speech-to-text with OpenAI Whisper [[transcriptionWorker.js](./src/transcriptionWorker.js)]

📡 Broadcast to subscribed clients with Supabase Realtime. [[broadcaster.jsx](./src/routes/broadcaster.jsx)] [[receiver.jsx](./src/routes/receiver.jsx)]

🌏 Translate to 200 languages with Meta's NLLB-200 [[translationWorker.js](./src/translationWorker.js)]

## Demo

Watch a demo / tutorial

<a href="https://supabase.link/realtime-ai-yt" target="_blank">
<img width="100%" alt="vlc-demo" src="https://github.com/user-attachments/assets/5f436444-6ebc-48ab-9ed1-24de62afd933">
</a>


## Run locally

- `cp .env.local.example .env.local`.
- Set your Supabase credentials in `.env.local`.
- Run `npm run dev`

## Deploy to GitHub Pages

- Set your secrets in the GitHub repository settings.
- Push to main to deploy.
=======
# Babelfish

Realtime translations from speech to text.

### Getting started

- Terminal 1: `supabase init`
- Terminal 2: `cd examples/webgpu-whisper && npm i && npm run dev` - then open [http://localhost:5174/](http://localhost:5174/)
- Terminal 3: `cd examples/react-translator && npm i && npm run dev` - then open [http://localhost:5173/](http://localhost:5173)

### Customizing Credentials

Change to your Supabase Credentials (use public keys, as they are accessible in the client):

- `./examples/webgpu-whisper/src/utils/broadcaster.js#L3-L5`
- `/examples/react-translator/src/App.jsx#L6-L8`
>>>>>>> a0876761c1a70f6ac6989cce25ca038161f60534
