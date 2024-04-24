"use client"
// import { useSession, signIn, signOut } from "next-auth/react";
// import Image from "next/image";
import { getFirestore, collection, query, getDocs, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import app from "./firebaseConfig";
import PinList from "./components/PinList";

export default function Home() {
  const db = getFirestore(app);
  const [listOfPins, setListOfPins] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true); 
  
  useEffect(()=>{
    getAllPins();
  },[])

  const getAllPins = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'pinterest-post'));
      const querySnapshot = await getDocs(q);
      const pinsData = querySnapshot.docs.map(doc => doc.data());
      setListOfPins(pinsData);
    } catch (error) {
      console.error("Error getting documents: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-3'>
       {loading ? (
        <p>Loading...</p>
      ) : (
        <PinList listOfPins = { listOfPins } />
      )}
    </div>
  )
}
