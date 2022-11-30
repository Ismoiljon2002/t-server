const express = require('express');
const cors = require('cors');
const { StreamChat } = require('stream-chat');
const { v4 } = require('uuid');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
const api = "cf9c9crsmpcr";
const sec = "hktauaua7twnfvtv88h8g3azgj74km69r86zurdpevm44yga5akg8m5yayj585zm"

const serverClient = StreamChat.getInstance(api, sec)

app.post('/come', async (req, resp) => {
    try {
        const {username} = req.body;
        const userId = v4();
        const token = serverClient.createToken(userId);        
        resp.json({userId, token, username})
    } catch (error) {
        resp.json(error)
    }
});

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", function (__, res) {
//   res.sendFile(
//     path.join(__dirname, "/client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });


app.listen(3005, () => {
    try {
        console.log("Server started on 3005")
    } catch (error) {
        console.log(error)
    } 
});
