const express = require('express');
const app = express();

// set the viwe engine
app.set('view engine','ejs');

// Root Route
app.get('/', (req, res) => {
    res.render('home')
});


// Always keep in end of file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running');    
})