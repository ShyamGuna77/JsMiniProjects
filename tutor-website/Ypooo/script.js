const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]


const ulParent = document.createElement('ul');

for(let game of warriorsGames){
    const {homeTeam,awayTeam} = game;


    console.log(homeTeam.team,awayTeam.team);

    const liEl = document.createElement('li');
    const {team:hTeam,points:hPoints} = homeTeam;
    const {team:aTeam,points:aPoints} = awayTeam;

const Teamnames= `${aTeam} @ ${hTeam}`;
//   ulParent.appendChild(liEl);
// const scoreLine  = `${aPoints} - ${hPoints}`;
let scoreLine;
    if(aPoints>hPoints){
         scoreLine  = `<b>${aPoints}</b> - ${hPoints}`;

    }else{
         scoreLine  = `${aPoints} - <b>${hPoints}</b>`;
    }

    const warrior = hTeam === 'Golden State' ? homeTeam : awayTeam;

    // Adding the class based on whether the team is the winner
    liEl.classList.add(warrior.isWinner ? 'raidu' : 'naidu');
    
    console.log(warrior);

  liEl.innerHTML = `${Teamnames}  ${scoreLine}`;
    console.log(scoreLine);
    ulParent.appendChild(liEl);
     
      
}

document.body.prepend(ulParent);

