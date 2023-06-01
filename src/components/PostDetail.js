import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import {  getDoc,doc,collection} from "firebase/firestore"; 
import {db} from '../index';

import { useParams } from "react-router-dom";
function PostDetail() {
  const[post,setPosts]=useState({});
  const {postId}=useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(collection(db, "posts"), postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setPosts(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [postId]);
    return (
      <div className="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;
  