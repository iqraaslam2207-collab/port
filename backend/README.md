# Backend Setup

This backend uses Express and Mongoose with MongoDB Atlas.

## 1) Install dependencies

```bash
npm install
```

## 2) Add your Atlas URI

Create `backend/.env` and set:

```bash
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
```

Get the URI from Atlas:

- Database > Connect > Drivers > Node.js

## 3) Run backend

```bash
npm run dev
```

Health endpoint:

- GET `/api/health`