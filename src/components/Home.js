import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs} from "firebase/firestore"; 
import {db} from '../index';
 function Home() {
    const[posts,setPosts]=useState([]);
    useEffect(() => {
      const fetchData =async () => {
        try {
          const querySnapshot = await  getDocs(collection((db), "posts"));
          const result = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setPosts(result);
          
        } catch (error) {
          console.log("Error fetching data:", error);
          
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="">
        <h1>Tech Blog</h1>
        <div id="blog-by">Amrit</div>
        {posts.map((post)=>(
          <div className="post" >
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.subTitle}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Home;
  