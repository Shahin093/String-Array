
function megaFriend(friends) {
    // isArray
    if (Array.isArray(friends) == false) {
        console.log('Please provide an array');
    }
    // indexOF 
    if (friends.indexOf('tuhin') != -1) {
        // console.log('Lion Exits');
    }
    // includes 
    if (friends.includes("shahin")) {
        // console.log('shahin exits using incueds');
    }
    // concat 
    const first = [1, 4, 2, 4];
    const seco = [1, 6, 8, 1];
    const combined = first.concat(seco);
    // console.log(combined);


    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    // return mega;


}
const friends = ['tuhin', 'shahin', 'ruhin', 'doly', 'nursafa'];
console.log(megaFriend(friends));