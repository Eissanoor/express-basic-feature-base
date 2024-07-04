const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./features/users/userRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Update the views directory
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
