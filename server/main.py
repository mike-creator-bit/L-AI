from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from server.video.video_generator import generate_video_from_prompt

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])

@app.post('/api/chat')
async def chat(request: Request):
    body = await request.json()
    message = body.get('message', '')
    return { 'reply': f'You said: {message}' }

@app.post('/api/video')
async def video(request: Request):
    body = await request.json()
    prompt = body.get('prompt', '')
    path = generate_video_from_prompt(prompt)
    return { 'video_path': path }