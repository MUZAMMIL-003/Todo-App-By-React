
const getUsers = async () => {
  try {
    const data = await fetch('https://dummyjson.com/users')
    .then(res => res.json())
    
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;