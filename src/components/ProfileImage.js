function ProfileImage (dog) {
    console.log(dog)
    return (
        <div className = "img">
      <img
        src={dog.img}
        className="profile"
        alt="profile"
      />
      </div>
    )
}

export default ProfileImage;