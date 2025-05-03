
const usersData = () => {
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data); // Optional: for debugging
      if (callback && typeof callback === 'function') {
        callback(data);
      }
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}

export default usersData