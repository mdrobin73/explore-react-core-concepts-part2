export default function Friend({friend}) {
    // console.log(friend);
    const {name, email} = friend;
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
        </div>
    )
}