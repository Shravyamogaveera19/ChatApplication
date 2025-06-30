require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const auth = require('./routes/auth'); 
// your JWT auth middleware
app.get('/api/protected', auth, (req, res) => {
  res.json({ msg: 'Protected route accessed!', userId: req.userId });
});

