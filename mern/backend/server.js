const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/part-timerz');
  console.log("DB connected succesfully")
}

const jobSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please Enter Name"]
    },
    email : {
        type : String,
        required : [true,"Please Enter Email Address"]
    },
    contact : {
        type : Number,
        required : [true,"Please Enter Your Contact Number"]
    },
    address : {
        type : String,
        required : [true,"Please Enter Work Address"]
    },
    position : {
        type : String,
        required : [true,"Please Enter Work-Position"]
    },
    starttime : {
        type : String,
        required : [true,"Please Enter Start-Time"]
    },
    workhour : {
        type : Number,
        required : [true,"Please Enter Working Hours"]
    },
    date : {
        type : String,
        required : [true,"Please Enter Date Of Work"],
        get: function (date) {
            return date.toISOString().substring(0, 10);
        }
    },
    description : {
        type : String,
        required : [true,"Please Enter Job Description"]
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

const Job = mongoose.model("Job",jobSchema);

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Please enter your name']
    },
    email : {
        type : String,
        required : [true,'Please enter email id']
    },
    password : {
        type : String,
        required : [true,'Please enter your name']
    },
    avatar : {
        type : Buffer
    },
    joblist : [
        {
            jobApplied : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Job"
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now,
    }
})

const User = mongoose.model("User",userSchema);

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.post('/register', async (req,res)=>{
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.avatar = req.body.avatar;
    const doc = await user.save();
    console.log(doc);
    res.json(doc);
})

server.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user || user.password !== req.body.password) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
});

//Job 
server.post("/postjob",async (req,res)=>{
    let job = new Job();
    job.name = req.body.name;
    job.email = req.body.email;
    job.contact = req.body.contact;
    job.address = req.body.address;
    job.position = req.body.position;
    job.starttime = req.body.starttime;
    job.workhour = req.body.workhour;
    job.date = req.body.date;
    job.description = req.body.description;
    const doc = await job.save();
    console.log(doc);
    res.json(doc);
})

server.get('/getjobs',async (req,res)=>{
    const docs = await Job.find({}).sort({ createdAt: -1 });
    res.json(docs);
})
  
server.get('/getjobs/:id', async (req, res) => {
    const jobId = req.params.id;
    const doc = await Job.findById({ _id: jobId });
    res.json(doc);
    console.log(doc)
});

server.listen(8080,(req,res)=>{
    console.log("Server is running on port 8080");
});