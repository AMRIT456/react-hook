// import { ReactDOM } from "react-dom/client";
import {Routes,Route} from "react-router-dom";
import {Navbar,Home,CreatePost,PostDetail} from './';
export default function App() {
  return (
    <div className="container">
      {/* <Route exact path='/Navbar' element={<Navbar/>}/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}


