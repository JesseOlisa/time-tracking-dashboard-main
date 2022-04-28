const statsInfo = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];
// DECLARING VARIABLES
let timeframes = document.querySelectorAll('.timeframe');
let currentStats = document.querySelectorAll('.current-stats');
let previousStats = document.querySelectorAll('.previous-stats');


window.addEventListener('DOMContentLoaded', ()=> {
    updateTimeFrameValues('daily');
});

// ADDING EVENT LISTENER TO EACH TIME FRAMES

timeframes.forEach((timeframe) => {
    timeframe.addEventListener('click', ()=> {
        if(timeframe.id === 'daily') {
            updateActiveClass(timeframe);
            updateTimeFrameValues('daily');
        }
        else if(timeframe.id === 'weekly') {
            updateActiveClass(timeframe);
            updateTimeFrameValues('weekly');
        }
        else {
            updateActiveClass(timeframe);
            updateTimeFrameValues('monthly');
        }
    })
});

// FUNCTIONS
let updateActiveClass = (timeframe)=> {
    for(let i= 0; i< timeframes.length; i++) {
        if(timeframes[i].classList.contains('active')) {
            timeframes[i].classList.remove('active'); 
        }
        
    };
    timeframe.classList.add('active')
}

let updateTimeFrameValues = (timeframe)=> {
    for(let i=0; i < statsInfo.length; i++) {
        let currentStatsValue = statsInfo[i].timeframes[timeframe].current;
        let previousStatsValue = statsInfo[i].timeframes[timeframe].previous;
        
        if (currentStatsValue == 1 && previousStatsValue == 1) {
            currentStats[i].textContent = `${currentStatsValue} hr`;
            previousStats[i].textContent = `${previousStatsValue} hr`;    
        }
        else if(currentStatsValue == 1) {
            currentStats[i].textContent = `${currentStatsValue} hr`;
            previousStats[i].textContent = `${previousStatsValue} hrs`;    
        }
        else if (previousStatsValue == 1) {
            currentStats[i].textContent = `${currentStatsValue} hrs`;
            previousStats[i].textContent = `${previousStatsValue} hr`;    
        }
        else {
            currentStats[i].textContent = `${currentStatsValue} hrs`;
            previousStats[i].textContent = `${previousStatsValue} hrs`;
        }
        
    };

};