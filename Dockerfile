FROM node:20-bookworm

WORKDIR /workspace/next

COPY . . 
COPY .env ./

RUN npm install

# RUN npm run build

RUN npm run obfuscate  

EXPOSE 1223

CMD ["npm", "run", "dev:concurrent"]