FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install --include=dev
RUN apt-get update && apt-get install -y ffmpeg
COPY . .
CMD ["npm", "run", "dev"]