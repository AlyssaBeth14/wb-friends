import {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'


export default function App() {

  const [friends, setFriends] = useState([])
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')

  async function getSavedFriends() {
    axios.get('/api/friends')
    .then(res => {
        setFriends(res.data.results)
    })
  }

  function addFriend() {
    const newFriend =  {picture: picture, name: name}
    setFriends([...friends, newFriend])
    setPicture('')
    setName('')
  }

  const friendInfo = friends.map((friend, i) => {
    return (
    <div key={friend.name}>
    <img src={friend.picture}/>
    <span>{friend.name}</span>
  </div>
    )
  }  
  )

  return <div>
        <label>Picture:</label>
        <input type='text' value={picture} onChange= {e => {
        setPicture(e.target.value)
           }}/>
        <label>Name:</label>
        <input type='text' value={name} onChange= {e => {
        setName(e.target.value)
           }}/>
        <button onClick={addFriend}>Add Friend</button>
        {friendInfo}
        </div>;
}
