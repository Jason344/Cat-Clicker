var counter = 0;
$('.target').click(function(){
    counter++;
    $('#counter').text(counter);
});
//store some cat info
var catNames = ['cat1','cat2','cat3','cat4','cat5','cat6'];
var clicks = {
  'cat1':0,
  'cat2':0,
  'cat3':0,
  'cat4':0,
  'cat5':0,
  'cat6':0
};
for(var i=0;i<catNames.length;i++){
    var newElem = document.createElement('li');
    var newContent = document.createTextNode(catNames[i]);
    newElem.appendChild(newContent);
    $('#catNames').append(newElem);
    newElem.addEventListener('click',(function(nameCopy){
      return function(){
          var newPic = document.createElement('img');
          clicks[nameCopy]++;
          console.log(clicks[nameCopy]);
          var newCount = document.createTextNode(clicks[nameCopy]);
          newPic.src = "img/"+nameCopy+".jpg";
          newPic.alt = nameCopy;
          $('#selectedCats').append(nameCopy,newPic,newCount,'<br>');
      };
    })(catNames[i]));
}
