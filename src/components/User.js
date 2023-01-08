const User = ({ user }) => {
    return (
        <>
            <p>{user.name} {user.password}</p>
        </>
    )
}

export default User