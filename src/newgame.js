const newgame = async()=>{
  const data =  await fetch(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: JSON.stringify({
          name:"guess game"
        }),
      }
    )
     const response = data.json();
     return response
  }

  export default newgame;