import FriendListItem from "../friendListItem/FriendListItem"
import s from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    
  return (
    <>
      <ul className={s.box}>
          {friends.map(friend => {
              return <li key={friend.id}>
                <FriendListItem friend={friend} />
              </li>
          })}
      </ul>
      </>
  )
}

export default FriendList


