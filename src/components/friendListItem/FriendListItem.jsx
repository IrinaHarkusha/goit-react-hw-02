import clsx from "clsx"
import s from "./FriendListItem.module.css"

const FriendListItem = ({friend}) => {
  return (
    <div className={s.wrapper}>
        <img className={s.user_img} src={friend.avatar} alt="Avatar" width="48" />
          <p className={s.name}>{friend.name}</p>
          <p className={clsx(s.status, friend.isOnline ? s.green : s.red)}>{friend.isOnline ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default FriendListItem

