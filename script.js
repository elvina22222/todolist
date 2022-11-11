// const arrowdown = document.querySelector('.arrowDown');
// arrowdown.addEventListener('mouseover', (event) => {
//     event.target.style.color = 'black';
// });
// arrowdown.addEventListener('mouseout', (event) => {
//     event.target.style.color = '#C4C4C4';
// });

// const whiteCross = document.querySelector('.whitecross')
// whiteCross.addEventListener('mouseover', (event) => {
//     whiteCross.addEventListener('change' , purpleCross)
//  });  
    // function purpleCross () {
    //   var whitecross = getElementByClassName("whitecross");
    // const whitecross = document.querySelector('.whitecross');
    //   if (whitecross.src == "image/arrowDown.svg" ) {
    //     whitecross.src == "image/whitecross.svg"
    //   } else {
    //     whitecross.src == "image/arrowDown.svg" ;
    //   }
    //}



// document.querySelector("#purplerectangle").click = function(){
    // tbl = document.createElement('table');
    // tbl.style.width = '940px';
    // tbl.style.height = '135px';
    // tbl.style.color = 'red';
    // tbl.style.border = '5px solid #C4C4C4';
    
//   }

  const btn = document.querySelector('button');
  btn.onclick = function() {
    const diiv = document.createElement('div');
    // diiv.innerHTML = `
    // <input class="typetext" type="text">
    // <img src="/image/whitecross.svg" alt="Not found" class="whitecross" >
    // `
    const smallRectangle = document.querySelector('#smallrectangle');
    smallRectangle.append(diiv);
  }
  
