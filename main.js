let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  let btcBought = document.getElementById('btcBought').value;
  let btcToday = document.getElementById('btcToday').value;
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
  	result = `<p style = "color: green; font-size: 20px; font-weight:bold;">Great! You made a profit of $${profit} (${pp}%).</p>`	
  } else if (profit < 0){
  	result = `<p style = "color: red; font-size: 20px; font-weight:bold;">Oh! You made a loss of $${loss} (${lp}%).</p>`
  } else {
  	result = `<p style = "color: blue; font-size: 20px; font-weight:bold;">Cool, You break even</p>`
  }
  
  message.innerHTML = result;
})
