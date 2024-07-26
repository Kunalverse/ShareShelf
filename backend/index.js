const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth')
const cors = require('cors')

const app = express();
connectDB();

app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
