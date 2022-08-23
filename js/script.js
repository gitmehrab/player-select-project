
document.getElementById('messi-btn').addEventListener('click',function(){
  const messiId =  getPlayerId('messi-id');
  const selectId = document.getElementById('select-id');
  const li = document.createElement('li'); 
  li.innerText = messiId;
  const playerBtn = document.getElementById('messi-btn');
  if(selectId.childNodes.length< 5){
    selectId.appendChild(li);
    playerBtn.disabled = true;
    playerBtn.style.backgroundColor = 'orange' ;
  }
  else{
    alert("You can't select avobe five player")
    playerBtn.disabled = false;
  } 
     
})


document.getElementById('neymar-btn').addEventListener('click',function(){
  const neymarId =  getPlayerId('neymar-id');
  const selectId = document.getElementById('select-id');
  const li = document.createElement('li'); 
  li.innerText = neymarId;
  const playerBtn = document.getElementById('neymar-btn');
  if(selectId.childNodes.length< 5){
    selectId.appendChild(li);
    playerBtn.disabled = true;
    playerBtn.style.backgroundColor = 'orange' ;
  }
  else{ 
    alert("You can't select avobe five player")
    playerBtn.disabled = false;
  }     
})
document.getElementById('mbappi-btn').addEventListener('click',function(){
  const mbappiId =  getPlayerId('mbappi-id');
  const selectId = document.getElementById('select-id');
  const li = document.createElement('li'); 
  li.innerText = mbappiId;
  const playerBtn = document.getElementById('mbappi-btn');
  if(selectId.childNodes.length< 5){
    selectId.appendChild(li);
    playerBtn.disabled = true;
    playerBtn.style.backgroundColor = 'orange' ; 
  }
  else{
    alert("You can't select avobe five player")
    playerBtn.disabled = false;
  }     
})
document.getElementById('silva-btn').addEventListener('click',function(){
  const silvaId =  getPlayerId('silva-id');
  const selectId = document.getElementById('select-id');
  const li = document.createElement('li'); 
  li.innerText = silvaId;
  const playerBtn = document.getElementById('silva-btn');
  if(selectId.childNodes.length< 5){
    selectId.appendChild(li);
    playerBtn.disabled = true;
    playerBtn.style.backgroundColor = 'orange' ;
  }
  else{
    alert("You can't select avobe five player")
    playerBtn.disabled = false;
  }     
})
document.getElementById('ramos-btn').addEventListener('click',function(){
  const ramosId =  getPlayerId('ramos-id');
  const selectId = document.getElementById('select-id');
  const li = document.createElement('li'); 
  li.innerText = ramosId;
  const playerBtn = document.getElementById('ramos-btn');
  if(selectId.childNodes.length< 5){
    selectId.appendChild(li);
    playerBtn.disabled = true;
    playerBtn.style.backgroundColor = 'orange' ; 
  }
  else{
    alert("You can't select avobe five player")
    playerBtn.disabled = false;
  }     
})
document.getElementById('demaria-btn').addEventListener('click',function(){
  const demariaId =  getPlayerId('demaria-id');
  const selectId = document.getElementById('select-id');
  const li = document.createElement('li'); 
  li.innerText = demariaId;
  const playerBtn = document.getElementById('demaria-btn');
  if(selectId.childNodes.length< 5){
    selectId.appendChild(li);
    playerBtn.disabled = true;
    playerBtn.style.backgroundColor = 'orange' ;
  }
  else{
    alert("You can't select avobe five player")
    playerBtn.disabled = false;
  }     
})
//====================calculate ==================
document.getElementById('calculate').addEventListener('click',function(){
    const selectId = document.getElementById('select-id');
    const selectIdLength = selectId.childNodes.length;
    
    const pricePerplayer = document.getElementById('price-per-player');
    const pricePerplayerString = pricePerplayer.value;
    const pricePerplayerNumber = parseFloat(pricePerplayerString);
    
    const expenseAmount = document.getElementById('expense-amount');

    if(selectIdLength<1){
      alert('please select player');
    }
    else if(isNaN(pricePerplayerNumber)){
      alert('please enter a per player budget');
    } 
    else{
      expenseAmount.innerText = (pricePerplayerNumber * selectIdLength).toFixed(2);
    }
    
})

//====================calculate Total ==================

document.getElementById('calculate-total').addEventListener('click',function(){
    const expenseAmount = document.getElementById('expense-amount');
    const playerExpense = expenseAmount.innerText;
    const playerExpenseNumber = parseFloat(playerExpense);

    const manegerAmount = document.getElementById('maneger-amount');
    const manegerAmountString = manegerAmount.value;
    const manegerAmountNumber = parseFloat(manegerAmountString);
   
   
   const coachAmount = document.getElementById('coach-amount');
   const coachAmountString = coachAmount.value;
   const coachAmountNumber = parseFloat(coachAmountString)
   

    const totalAmount = document.getElementById('total-amount');

    if(playerExpenseNumber <1){
      alert('no amount of player budget');
    }
    else if(isNaN(manegerAmountNumber)){
      alert('please enter amount in maneger');
    }
    else if(isNaN(coachAmountNumber)){
      alert('please enter amount in maneger');
    }
    else{
      totalAmount.innerText = (playerExpenseNumber + manegerAmountNumber + coachAmountNumber).toFixed(2);
    }
    
})





