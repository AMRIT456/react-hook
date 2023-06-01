import { collection} from "firebase/firestore"; 
import { addDoc} from "firebase/firestore"; 
import {db} from '../index';
//import { useState } from "react";
import {useFormInput} from '../hooks';

function CreatePost() {
  const title=useFormInput('');
  const subTitle=useFormInput('');
  const content=useFormInput('');
  
  function handleSubmit(e){
    e.preventDefault();
    console.log('title',title.value);
    console.log('subTitle',subTitle.value);
    console.log('content',content.value);
    const docRef = addDoc(collection(db, 'posts'), {
      title: title.value,
      subTitle:subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
    
    docRef
      .then((doc) => {
        console.log('Document written with ID: ', doc.id);
        // Do something with the doc if needed
      })
      .catch((error) => {
        console.error('Error adding document:', error);
      });
    console.log("Document written with ID: ", docRef.id);

  }
    return (
      <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input {...title}/>
          </div>
          <div className="form-field">
            <label>Sub Title</label>
            <input {...subTitle}/>
          </div>
          <div className="form-field">
            <label>Content</label>
            <textarea {...content}></textarea>
          </div>
          <button className="create-post-btn">Create Post</button>
        </form>
      </div>
    );
  }
  
  export default CreatePost;
  