const functions = require("firebase-functions");
const express =require("express");
const cors=require("cors");
const stripe=require('stripe')
('pk_test_51LsBjKGy7cHbJhlZA49fmnQZDvvMGPbNXyNxs4WLyv8LJ2lCHtxCG8uBpgmtXXjek7RCj4RoYWGAjqa2MOIWCwhP00nbBIXJxf');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes