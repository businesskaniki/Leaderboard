const name = document.getElementById('name');
const score = document.getElementById('score');


const saveuserAndScores = async() => {
  const data = await fetch (
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IwEVF87OQ5tKZD5aMShN/scores/',
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
          user:name.value,
          score:score.value,
        }),
      }
    )
    const response = await data.json();
    return response;
  }

  export default saveuserAndScores;
