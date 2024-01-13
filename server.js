const express = require('express');
const app = express();
const port = 8000;
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({extended: true}));
const UserRoutes= require('./routes/user.route');
UserRoutes(app);



app.listen(port, () => console.log(`Server is running on port: ${port}`));
