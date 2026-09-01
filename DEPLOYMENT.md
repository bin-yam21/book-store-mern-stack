# Deploying Birana

Three free services: **MongoDB Atlas** (database), **Render** (backend API), **Vercel** (frontend).

## 1. Database — MongoDB Atlas
1. Create a free account at https://www.mongodb.com/cloud/atlas and create a free **M0** cluster.
2. Under **Database Access**, add a user (username + password).
3. Under **Network Access**, add IP `0.0.0.0/0` (allow from anywhere) so Render can connect.
4. Click **Connect → Drivers** and copy the connection string. It looks like:
   `mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/book-store`
   (add `/book-store` before the `?` so it uses that database).

### Seed the cloud database
From the `backend` folder, run once with your Atlas string:
```bash
DB_URL="<your-atlas-uri>" node src/seed.js
```

## 2. Backend — Render
1. Push this repo to GitHub (see below).
2. At https://render.com → **New → Blueprint**, connect the repo (it reads `render.yaml`).
3. Set the environment variables when prompted:
   - `DB_URL` = your Atlas connection string
   - `JWT_SECRET_KEY` = a long random string
   - `FRONTEND_URL` = your Vercel URL (fill in after step 3, then redeploy)
4. Deploy. Note the service URL, e.g. `https://birana-api.onrender.com`.

## 3. Frontend — Vercel
1. At https://vercel.com → **Add New → Project**, import the repo.
2. Set **Root Directory** to `frontend`.
3. Add environment variables:
   - `VITE_API_URL` = your Render backend URL (e.g. `https://birana-api.onrender.com`)
   - Firebase keys (`VITE_APIKEY`, `VITE_AUTHDOMAIN`, `VITE_PROJECTID`, `VITE_STORAGEBUCKET`, `VITE_MESSAGINGSENDERID`, `VITE_APPID`) — optional; only needed for login/checkout.
4. Deploy. Copy the URL and put it in Render's `FRONTEND_URL`, then redeploy the backend so CORS allows it.

## Local development
- Backend: `cd backend && npm run start:dev` (needs a local `.env` from `.env.example`)
- Seed: `cd backend && npm run seed`
- Frontend: `cd frontend && npm run dev`
