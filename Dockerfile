FROM python:3.10-slim
WORKDIR /app
COPY server/ ./server/
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 5000
CMD ['uvicorn', 'server.main:app', '--host', '0.0.0.0', '--port', '5000']