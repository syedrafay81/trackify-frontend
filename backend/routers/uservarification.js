const express = require("express");
const Student = require("../model/Student");
const router = new express.Router();
require('../db/connection');
const Usertoactive = require("../model/Usertoactive");
const objectId = require('mongodb').ObjectID;
const User = require("../model/User");

const Userdriver = require("../model/Userdriver");
const nodemailer = require("nodemailer");


router.post("/Userssiginandsignup", async (req, res) => {







    console.log(req.body)
    try {

        const { name, email, password } = req.body

        const userExist = await User.findOne({ email: email });

        console.log()

        if (userExist) {

            return res.status(422).json({ error: "email already Exit " });




        } else {

            const userExist2 = await Usertoactive.findOne({ email: email });
            if (userExist2) {
                return res.status(422).json("something wrong please try again later after few minutes");


            } else {

                try {

                    var OTP = Math.floor(Math.random() * 100000) + 1;
                    console.log(OTP)
                    const usertoactive = new Usertoactive({ name, email, password, OTP });
                    await usertoactive.save()

                    const deletedata = async () => {
                        await Usertoactive.deleteOne({ email: email });

                    }




                    setTimeout(deletedata, 300000)


                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false,
                        auth: {
                            user: "trackify.info@gmail.com", // generated ethereal user
                            pass: "alidell1", // generated ethereal password
                        },
                    });

                    // send mail with defined transport object
                    let info = await transporter.sendMail({
                        from: '"trackify" <trackify.info@gmail.com>', // sender address
                        to: email, // list of receivers
                        subject: "trackify - OTP ", // Subject line
                        text: "TRACKIFY - Forget password ", // plain text body
                        html: `<h1> <b>Hello ${name}</h1>     <h3>here is OTP for your Account = "${OTP}"</h3> <p> this will exprie within 5 min if you fail to enter your OTP within 5 min, please try singn up again after few minutes</p> `, // html body
                    });

                    console.log("Message sent: %s", info.messageId);

                } catch (err) {
                    console.log(err)
                    return res.status(422).json("something wrong with server");
                }



                res.status(200).json("OTP has been sent to your email (if not found check spam too)");


            }





        }

    } catch (err) {
        console.log(err);
    }



});


router.get("/getalluserdataa", async (req, res) => {

    User.find()
        .then(user => res.json(user))

});

router.get("/getalluserdatadrivers", async (req, res) => {

    Userdriver.find()
        .then(user => res.json(user))

});

router.get("/getalluserdatastudent", async (req, res) => {

    Student.find()
        .then(user => res.json(user))

});


router.post("/registerdriver", async (req, res) => {

    console.log(req.body)


    const { drivername,
        drivercnic,
        drivermobile,
        driveemail,
        driverpassword,
        driverbus,
        drivertracker,
        driverschool,
        driverpickup,
        driverdropoff,
    } = req.body



    try {

        const userExist = await Userdriver.findOne({ driveemail: driveemail });
        if (!userExist) {



            const userdriver = new Userdriver({
                drivername,
                drivercnic,
                drivermobile,
                driveemail,
                driverpassword,
                driverbus,
                drivertracker,
                driverschool,
                driverpickup,
                driverdropoff,
            });
            await userdriver.save()
            res.status(200).json("Account Registerd Please Sign in to continue");







        } else {



            res.status(422).json("something  wrong");
        }

    } catch (err) {
        console.log(err);
    }

});




router.post("/registerstudent", async (req, res) => {

    console.log(req.body)


    let x = req.body.driverschool
    console.log(x)

    try {


        const reqbus = await Userdriver.find({ driverschool: x });
        console.log(reqbus)
        res.status(200).json(reqbus);
    }

    catch (err) {
        console.log(err);
        res.status(422).json("error");
    }

});









router.post("/getstudent", async (req, res) => {

    console.log(req.body)


    let x = req.body.emaillll
    console.log(x)

    try {


        const reqstudent = await Student.find({ email: x });
        console.log(reqstudent)
        res.status(200).json(reqstudent);
    }

    catch (err) {
        console.log(err);
        res.status(422).json("error");
    }

});


router.post("/getstudentfordriver", async (req, res) => {


    console.log(req.body)


    let x = req.body.emaillll
    console.log(x)

    try {


        const reqstudent = await Student.find({ driveremail : x });
        console.log(reqstudent)
        res.status(200).json(reqstudent);
    }

    catch (err) {
        console.log(err);
        res.status(422).json("error");
    }

});



router.post("/registerstudentdata", async (req, res) => {

    //    await console.log(req.body)


    const { fathername,
        email,
        driveremail,
        studentname,
        fathermobile,
        studentnumber,
        schoolname,
        drivername,
        busnumberplate,
        Trackerid,
        drivernumber,
        pick,
        drop,
        studentimage,
    } = req.body


    //     try {
    const student = await new Student({
        drivername,
        fathername,
        driveremail,
        email,
        studentname,
        fathermobile,
        studentnumber,
        schoolname,
        busnumberplate,
        Trackerid,
        drivernumber,
        pick,
        drop,
        studentimage,
    });
    // console.log(student)
    const stud = await student.save()
    console.log("sdcvdzsfv" + stud)
    await res.status(200).json("Account Registerd Please Sign in to continue");
    //     }



    //     catch (err) {
    //         console.log(err);
    //         res.status(422).json("error");
    //     }


});










router.post('/updateuserdata', async (req, res,) => {

    console.log(req.body)
    const { email, name, Oldpassword, Newpassword } = req.body

    try {

        const userfundd = await User.findOne({ email: email });
        if (userfundd) {
            if (userfundd.password === Oldpassword) {

                const id = userfundd._id;


                if (Newpassword.length !== 0) {

                    await User.updateOne({ "_id": objectId(id) }, { $set: { name: name, password: Newpassword } });
                    res.status(200).json("Profile Updated");

                }





                else if (Newpassword.length === 0) {

                    await User.updateOne({ "_id": objectId(id) }, { $set: { name: name, password: userfundd.password } });
                    res.status(200).json("Profile Updated");
                }



            } else {

                res.status(422).json("Please Enter correct Old Password");

            }









        } else {

            res.status(422).json({ error: "something wrong" });
        }

    } catch (err) {
        console.log(err);
    }


});








router.post("/deleteUserrdattaaa", async (req, res) => {
    console.log(req.body)
    const Cardeleted = await User.deleteOne(req.body)
    if (Cardeleted) {
        res.status(201).json({ message: "User has been deleted" });
        console.log("deleted")


    } else {
        console.log("not deleted")
    }


    console.log(req.body)

});




router.post("/studentstatus", async (req, res) => {

    console.log(req.body)


    let x = req.body.id
    // console.log(x)

    try {


        const reqstudent = await Student.updateOne( { "_id": objectId(x) }, { $set: { studentstatus: "onboard"} }); 
        console.log(reqstudent)
        // res.status(200).json(reqstudent);
    }

    catch (err) {
        console.log(err);
        res.status(422).json("error");
    }

});



router.post("/studentstatusreached", async (req, res) => {

    console.log(req.body)


    let x = req.body.id
    // console.log(x)

    try {


        const reqstudent = await Student.updateOne( { "_id": objectId(x) }, { $set: { studentstatus: "reached"} }); 
        console.log(reqstudent)
        // res.status(200).json(reqstudent);
    }

    catch (err) {
        console.log(err);
        res.status(422).json("error");
    }

});



module.exports = router;