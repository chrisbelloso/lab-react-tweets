function User(userComponent) {
    return (
        <span className="user">
            <span className="name">{userComponent.userData.name}</span>
            <span className="handle">@{userComponent.userData.handle}</span>
          </span>
    )
} 

export default User;