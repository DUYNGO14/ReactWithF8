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
//2. Cleanup function luôn được gọi trước khi component unmounted
//2. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
const tabs = ['posts', 'comments', 'albums'];

import { useState, useEffect } from "react";
function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPost] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => setPost(data));
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        // .then(data => setPost(data))
    },[type]);
    
    //dom event  scroll
    useEffect(() => {
        const handleScroll = () => {
        //    if(window.scrollY > 200){
        //     //show
        //     setShowGoToTop(true)
        //    }else{
        //     //hide
        //     setShowGoToTop(false)
        //    }
           setShowGoToTop(window.scrollY > 200)
        } 
        window.addEventListener('scroll', handleScroll);
        //cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    //rezize
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleResize)
        //cleanup function
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[])

    return (
       
        <div className="p-8">
             <h1>{width}</h1>
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
            {showGoToTop && (
                <button style={{position: 'fixed', bottom: '20px', right: '20px',backgroundColor: 'red'}}>Go to top</button>
            )}
        </div>
    )
     
}
export default Content;
