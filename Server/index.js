const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./db/index');
const userRouter = require('./routes/userRouter');
const fileRoutes = require('./routes/fileuploadRoute');

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
console.log(__dirname);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('/', (req, res) => {
	res.send('hello');
});
app.get('/uploads', (req, res) => {
	res.sendFile(path.join(__dirname, 'uploads'));
});
app.use('/api', fileRoutes.routes);
// app.use('/api', cartRoutes.routes);
app.use('/User', userRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
