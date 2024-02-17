// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Use the static file
app.use(express.static('public'));

// Use the body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store comments
let comments = [];

// Create a route
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

The web server is created with the express. The server is listening on the port 3000. The web server uses the static files in the public directory. The web server also uses the body-parser to parse the request body. The comments are stored in the array. The server provides two routes, the GET route to get the comments and the POST route to add the comments.

## Create the front-end

The front-end is created with the HTML, CSS, and JavaScript. The HTML file is created with the file name index.html. The CSS file is created with the file name style.css. The JavaScript file is created with the file name app.js.

The HTML file contains the following code:

```html
<!-- File: index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Comment App</title>
</head>
<body>
    <h1>Comment App</h1>
    <form id="comment-form">
        <input type="text" id="name" name="name" placeholder="Your name" required>
        <textarea id="comment" name="comment" placeholder="Your comment" required></textarea>
        <button type="submit">Submit</button>
    </form>
    <div id="comments"></div>
    <script src="app.js"></script>
</body>
</html>
```