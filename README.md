# Next JS Auth Example 6

## Code History

The code in this repository is based on:

- https://youtu.be/INwOeQ0RagY?si=bOz8HcJHHh2SOfGO

## Creation History

```bash
npx create-next-app@latest
cd nextjs-auth-ex6/

# prisma setup
npm install typescript ts-node @types/node --save-dev
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql

npx prisma generate
npx prisma db push
npx prisma studio

npm install bcryptjs
npm install --save-dev @types/bcryptjs
npm install jose

npx shadcn-ui@latest init
npx shadcn-ui@latest add button

openssl rand -hex 12
```
