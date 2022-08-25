import {useState, useEffect} from "react"
import HomeFeedMap from "./HomeFeedMap";

function HomeFeed({user, users, myCheeps}) {
    const [homeFeed, setHomeFeed] = useState([])

    useEffect(() => {
        fetch("/homefeed")
        .then((r) => {
            if (r.ok) {
            r.json().then((user) => setHomeFeed(user));
            }
        });
        }, [user]);


    const homeFeedMap = homeFeed.map((user)=> { return user.cheeps.map((cheep)=> {
        return cheep;
    })})

    
    let cheepArray = []

    if (homeFeedMap.length > 1) {
    for (let i = 0; i < (homeFeedMap.length - 1); i++) {
        cheepArray = homeFeedMap[i].concat(homeFeedMap[i+1])
    }}
    else {
        cheepArray = homeFeedMap
    }
    
    console.log(cheepArray)
    console.log(myCheeps)
    console.log(homeFeedMap)
    console.log(homeFeedMap.length)
    console.log(homeFeed)

    const forSorting = cheepArray.concat(myCheeps)

    const sorted = forSorting.sort((a,b) => a.id > b.id ? -1 : 1)

    const cheepDisplay = sorted.map((cheep) => {
        return <HomeFeedMap cheep ={cheep} users={users} user={user}  />
    })  
  

    return (
        <div>
            <h1>Home</h1>
            <p>{cheepDisplay}</p>
        </div>
    );
}

export default HomeFeed