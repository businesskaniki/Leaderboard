const ullist = document.getElementsByClassName('data-ul');

const getdata = async()=>{
    const data =  await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IwEVF87OQ5tKZD5aMShN/scores/'
      )
      try {
        const response = await data.json();
        const list = response.result.sort((a, b) => b.score - a.score);

        list.forEach(item => {
         const li = document.createElement('li');
         li.classList.add('li');
         li.innerHTML = `${item.user}:${item.score}`;  
         ullist[0].appendChild(li)
        });
      } catch (error) {
        return error;
      }
    }

export default getdata;
