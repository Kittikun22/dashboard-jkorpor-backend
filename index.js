const express = require('express');
const cors = require('cors');
require('dotenv').config()
const answerRoutes = require('./routes/answer-route')
const bookRoutes = require('./routes/book-route')
const subjectRoutes = require('./routes/subject-route')
const topicRoutes = require('./routes/topic-route')
const userRoutes = require('./routes/user-route')
const timerRoutes = require('./routes/timer-route')
const preparebookRoutes = require('./routes/prepare-book-route')
const bannerRoutes = require('./routes/banner-route')
const imageRoutes = require('./routes/image-route')
const newsRoutes = require('./routes/news-route')

const app = express();
app.use(cors());
app.use(express.json());

const path = require('path')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(answerRoutes);
app.use(bookRoutes);
app.use(subjectRoutes);
app.use(topicRoutes);
app.use(userRoutes);
app.use(timerRoutes);
app.use(preparebookRoutes);
app.use(bannerRoutes);
app.use(imageRoutes)
app.use(newsRoutes)

app.listen(8888, () => {
    console.log("Server is running on port :8888");
});
