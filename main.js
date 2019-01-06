let btn = document.getElementById('btn');

//initiate current btc variable;
let btcToday;

//fetching current btc via API;
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let output = data.bpi.USD.rate;
    btcToday = Number(output.replace(/,/g, '')).toFixed(2);
  })

  //Click Event
btn.addEventListener('click', function(){
  document.getElementById('btcToday').value = btcToday;
  let btcBought = document.getElementById('btcBought').value;
  let btcAmount = document.getElementById('btcAmount').value;
  let message = document.getElementById('message');
  let profit = (btcToday * btcAmount) - (btcBought * btcAmount);
  let loss = (btcBought * btcAmount) - (btcToday * btcAmount);
  let profitPercentage = (profit / (btcBought * btcAmount)) * 100;
  let pp = Math.round(profitPercentage);
  let lossPercentage = (loss / (btcBought * btcAmount)) * 100;
  let lp = Math.round(lossPercentage);
  let result;
  if(profit > 0){
  	result = `<p style = "color: green; font-size: 20px; font-weight:bold;">Great! You made a profit of $${profit.toFixed(2)} (${pp}%).</p>`	
  } else if (profit < 0){
  	result = `<p style = "color: red; font-size: 20px; font-weight:bold;">Oh! You made a loss of $${loss.toFixed(2)} (${lp}%).</p>`
  } else {
  	result = `<p style = "color: blue; font-size: 20px; font-weight:bold;">Cool, You break even</p>`
  }
  
  message.innerHTML = result;
})

// function changeColor(){
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
// };

// setInterval('changeColor()', 1000);
// function getRealTimeBitcoinPrice(){
//   let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
//   fetch(url)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(data){
//     let output = data.bpi.USD.rate;
//     btc = Number(output.replace(/,/g, ''));
//     console.log(btc);
//     //console.log(btcToday.value);
//   })
// }