import clsx from "clsx"

const FriendListItem = ({friend}) => {
  return (
    <div>
        <img src={friend.avatar} alt="Avatar" width="48" />
          <p>{friend.name}</p>
          <p>{clsx(friend.isOnline ? 'true' : 'false')}</p>
    </div>
  )
}

export default FriendListItem

{/* <p className={clsx(s.status, age > 18 ? s.green : s.red)}>Status: {age > 18 ? 'Adult' : 'Young'}</p> */}