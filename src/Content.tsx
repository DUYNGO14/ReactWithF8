//Events: Add / remove event listener
//Observer pattern : subscribe / unsubscribe
//Closure
//useState
//Mounted / unmounted
// ===
// Call api

/**
1.Update DOM:
    - F8 blog title
2.Call Api
3.Listen Dom events
    -scroll
    -Resize
4.Cleanup
    -remove listener / Unsubscribe
    - Clear timer
 */
//1.useEffect(callbcak)
// -Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào dom
//2.useEffect(callbcak, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// - Nên sủ dụng khi gọi api 1 lần
//3.useEffect(callbcak, [deppendency])
// -Callback sẽ được gọi lại mỗi khi dependency thay đổi
//---------
//1.callback luôn đươc gọi sau khi component mounted

const tabs = ['posts', 'comments', 'albums'];

import { useState, useEffect } from "react";
function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPost] = useState([]);
    const [type, setType] = useState('posts');
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => setPost(data));
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        // .then(data => setPost(data))
    },[type]);
    
    return (
        <div className="p-8">
            {tabs.map(
                tab => 
                    <button 
                    className="px-4 py-2 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" 
                    key={tab}
                    style={type === tab ? {background: 'red'} : {}}
                    onClick={() => setType(tab)}>
                        {tab}
                    </button>)}
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => <li key={post.id}>- {post.title || post.name}</li>)}
            </ul>
        </div>
    )
     
}
export default Content;
