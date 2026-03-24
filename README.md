
# Wam Studio   
Wam Studio is an online WAM diagram editor made to simplify and speed up WAM diagram creation.   
## Setup   
This project requires the setup of the **fronted** and the **backend**. Third-party services require separate setup.  The app can be used without third party services at the expense of some features like Google OAuth and AI generation and explanation.

### Requirements
- Node.js 18+ 
- npm, yarn, or pnpm 
- MongoDB (local or cloud)   

### Frontend 
```bash 
cd devinche-frontend/devinche-client 
npm install 
npm run dev` 
```

Runs on `http://localhost:3000`

### Backend

```bash
cd  ../backend 
npm install 
npm run dev
 ```

Runs on `http://localhost:4000`

## Environment Variables

Create `.env` files in backend root directory:

**.env (Backend)**

```text
NODE_ENV=development 
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=your_google_redirect_uri
OPENAI_API_KEY=your_openai_api_key
```
