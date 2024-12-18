import { useState,useEffect } from "react";

const tabs = ['users']
function User_useEffect() {
const [users, setUsers] = useState([]); // State for storing user data
  const [loading, setLoading] = useState(true); // State for managing loading state
  const [error, setError] = useState(null); // State for handling errors
  const [type, setType] = useState('users');
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);
  useEffect(() => {
    // Fetch data when the component mounts
    fetch(`https://reqres.in/api/${type}?page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTotalPage(data.total_pages);
        setUsers(data.data); // Update state with user data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error.message); // Handle errors
        setLoading(false); // Set loading to false even on error
      });
  }, [type,page]); // Empty dependency array ensures this runs only once

  if (loading) return <div>Loading...</div>; // Show loading indicator
  if (error) return <div>Error: {error}</div>; // Show error message

  return (
    <div>
        {tabs.map(
                tab => 
                    <button 
                    className="px-4 py-2 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" 
                    key={tab}
                    style={type === tab ? {background: 'red'} : {}}
                    onClick={() => setType(tab)}>
                        {tab}
                    </button>)}
        
      <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">User List</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Avatar</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="w-12 h-12 rounded-full mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.first_name} {user.last_name}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {[...Array(totalPage)].map((_, i) => (
            <button 
            className="px-4 py-2 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" 
            key={i+1}
            style={page === i+1 ? {background: 'red'} : {}}
            onClick={() => setPage(i+1)}>
                {i+1}
            </button>
        ))}
    </div>
    </div>
  );
}

export default User_useEffect