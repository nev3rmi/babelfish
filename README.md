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
