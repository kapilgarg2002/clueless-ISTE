const express = require("express");
const alert = require('alert');
var bodyParser = require("body-parser");
const ejs = require('ejs');
const { path } = require("express/lib/application");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("public/images"));
var i = 1;

const ques = [
    {
        answer1: "julius",
        answer2: "1/120"
    },
    {
        answer1: "8",
        answer2: "drive"
    },
    {
        answer1: "suitcase",
        answer2: "mount myoboku"
    },
    {
        answer1: "basilisk",
        answer2: "magnitogorsk"
    },
    {
        answer1: "tensai",
        answer2: "deathlyhallows"
    },
]

const imgURL = [
    'https://i.ibb.co/QmMrNVr/5.jpg',
    'https://i.ibb.co/nr2QtpL/2.jpg',
    'https://i.ibb.co/Wxx4Psy/3.jpg',
    'https://tickets.patrimonionacional.es/Images/Venues/24-new.jpg',
    'https://images.unsplash.com/photo-1563786785330-2ad8162ef53a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
]

const Messages = [
    "Connecting dots in the wrong direction won't take you to the killer!! Handgun is not the murder weapon, Ah! This picture piece is wrongly placed in jigsaw puzzle! Maid Rosie is not the murderer! Find another piece!🧩",
    "Connecting dots in the wrong direction won't take you to the killer!! Cling Wrap is not the murder weapon, Ah! This picture piece is wrongly placed in jigsaw puzzle! Mr. Robert is not the murderer! Find another piece!🧩",
    "Connecting dots in the wrong direction won't take you to the killer!! Poison Dart is not the murder weapon, Ah! This picture piece is wrongly placed in jigsaw puzzle! Mrs. Jennifer is not the murderer! Find another piece!🧩",
    "Connecting dots in the wrong direction won't take you to the killer!! Electric Shocker is not the murder weapon, Ah! This picture piece is wrongly placed in jigsaw puzzle! Buttler Carlos  is not the murderer! Find another piece!🧩",
    "Connecting dots in the wrong direction won't take you to the killer!! Knife is not the murder weapon, Ah! This picture piece is wrongly placed in jigsaw puzzle! Cook Samuel is not the murderer! Now you know the culprit",
]


const QuesImg = [
    'https://i.ibb.co/Xb6m9SL/Screenshot-2022-02-27-222040.jpg',
    'https://i.ibb.co/cFcsmfz/Screenshot-2022-02-27-221126.jpg',
    'https://i.ibb.co/Wnzp6VV/Screenshot-2022-02-27-222749.jpg',
    'https://i.ibb.co/RcSGnhH/Screenshot-2022-02-27-225227.jpg',
    'https://i.ibb.co/M6t3QTD/Screenshot-2022-03-02-115046.jpg',
    'https://i.ibb.co/WxbggqF/Screenshot-2022-02-27-225857.jpg',
    'https://i.ibb.co/9TbXMP9/Screenshot-2022-02-27-230306.jpg',
    'https://i.ibb.co/w6yZndg/Screenshot-2022-02-27-230510.jpg',
    'https://i.ibb.co/7kmRZ8S/Screenshot-2022-02-27-232724.jpg',
    'https://i.ibb.co/jr8x1jK/Screenshot-2022-02-27-231619.jpg'
]

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/story.html")
})
app.get("/main", (req, res) => {
    res.sendFile(__dirname + "/landing.html")
})


app.post("/ques1", (req, res) => {
    var ans1 = (req.body.answer1).toLowerCase();
    var ans2 = (req.body.answer2).toLowerCase();
    if (ans1 === ques[0].answer1 && ans2 === ques[0].answer2)
        res.render("message", { message: Messages[0], i: "a" });
    else res.render("message",{message:"Worng Answer",i:"wrong"});
})
app.post("/ques2", (req, res) => {
    var ans1 = (req.body.answer1).toLowerCase();
    var ans2 = (req.body.answer2).toLowerCase();
    if (ans1 === ques[1].answer1 && ans2 === ques[1].answer2)
        res.render("message", { message: Messages[1], i: "b" }); 
    else res.render("message",{message:"Worng Answer",i:"a"});
})
app.post("/ques3", (req, res) => {
    var ans1 = (req.body.answer1).toLowerCase();
    var ans2 = (req.body.answer2).toLowerCase();
    if (ans1 === ques[2].answer1 && ans2 === ques[2].answer2)
        res.render("message", { message: Messages[2], i: "c" }); 
    else res.render("message",{message:"Worng Answer",i:"b"});
})
app.post("/ques4", (req, res) => {
    var ans1 = (req.body.answer1).toLowerCase();
    var ans2 = (req.body.answer2).toLowerCase();
    if (ans1 === ques[3].answer1 && ans2 === ques[3].answer2)
        res.render("message", { message: Messages[3], i: "d" }); 
    else res.render("message",{message:"Worng Answer",i:"c"});
})
app.post("/ques5", (req, res) => {
    var ans1 = (req.body.answer1).toLowerCase();
    var ans2 = (req.body.answer2).toLowerCase();
    if (ans1 === ques[4].answer1 && ans2 === ques[4].answer2)
    res.render("message", { message: Messages[4], i: "zoom" }); 
    else res.render("message",{message:"Worng Answer",i:"d"});
})


app.post("/wrong", (req, res) => {
    res.render("index", { image: imgURL[2], i: "ques1", img1: QuesImg[0], img2: QuesImg[1] });
})
app.post("/a", (req, res) => {
    res.render("index", { image: imgURL[2], i: "ques2", img1: QuesImg[2], img2: QuesImg[3] });
})
app.post("/b", (req, res) => {
    res.render("index", { image: imgURL[2], i: "ques3", img1: QuesImg[4], img2: QuesImg[5] });
})
app.post("/c", (req, res) => {
    res.render("index", { image: imgURL[2], i: "ques4", img1: QuesImg[6], img2: QuesImg[7] });
})
app.post("/d", (req, res) => {
    res.render("index", { image: imgURL[2], i: "ques5", img1: QuesImg[8], img2: QuesImg[9] });
})

app.post("/zoom", (req, res) => {
    res.sendFile(__dirname + "/zoom.html")
})

app.get("/ques1", (req, res) => {
    res.render("index", { image: imgURL[0], i: "ques1", img2: QuesImg[1], img1: QuesImg[0] });
})
app.listen(process.env.PORT||4000, (req, res) => {
  console.log("Server Up and running at port 4000");
});





