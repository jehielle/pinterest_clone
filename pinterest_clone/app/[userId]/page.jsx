"use client"
import { collection, getDoc, getDocs, getFirestore, doc, query, where } from 'firebase/firestore'; //getDoc->ref, getDocs->query
import React, { useEffect, useState } from 'react';
import app from '../firebaseConfig';
import UserInfo from './../components/UserInfo';
import PinList from './../components/PinList';

function profile({ params }) {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState();
  const [listOfPins, setListOfPins] = useState([]);

  useEffect(()=>{
    if(params){
      getUserInfo(params.userId.replace('%40','@'));
    }
  },[params]);

  const getUserInfo = async(email)=>{
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists){
      setUserInfo(docSnap.data());
    } // else docSnap data is undefined
  }

  useEffect(()=>{
    if(userInfo){ //if exists
      getUserPins();
    }
  }, [userInfo]);

  const getUserPins = async()=>{
    setListOfPins([]);
    const q = query(collection(db, "pinterest-post"), where("email", "==", userInfo.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=>{
      setListOfPins(listOfPins=>[...listOfPins, doc.data()]);
    });
  }

  return (
    <div>
      {userInfo?
      <div>
        <UserInfo userInfo={userInfo} />
        <PinList listOfPins={listOfPins}  />
      </div> :null}
   </div>
  )
}

export default profile