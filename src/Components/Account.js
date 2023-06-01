import React, { useState, useEffect } from 'react'
import axios from "./axios";
import firebase from "../firebaseconn";
const Account = () => {

    const [userdata, setuserdata] = useState(null)
    const getuserdet = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                axios.post("/getuserdetails", { uid: user.uid }).then(res => {
                    console.log(res.data);
                    setuserdata(res.data)
                }).catch(e => {
                    console.log(e);
                })
            }
        })
    }

    useEffect(() => {
        getuserdet()
    }, [])

    return (
        <div
            className="product-con"
            style={{
                width: window.innerWidth,
                background: "white",
                marginTop: "62px",
                display: "flex",
                flexWrap: "wrap",
                padding: "4px",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            {userdata ? <>
                <div className="d-flex align-items-center flex-column" style={{ width: window.innerWidth, height: window.innerHeight }}>
                    <br />
                    <img src={userdata.photoUrl} alt="" style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
                    <br />
                    <span style={{ fontSize: "25px", color: "gray", fontWeight: "600" }}>{userdata.number}</span>
                </div>
            </> : <></>}


        </div>
    )
}

export default Account
