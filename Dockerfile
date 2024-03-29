FROM node:12-alpine

COPY . ..
RUN npm install
EXPOSE 3000

ENTRYPOINT ["npm", "start"]