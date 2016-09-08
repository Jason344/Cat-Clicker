$(function(){
  var model = {
    names:['cat1','cat2','cat3','cat4','cat5','cat6'],
    clickCnts:{
      'cat1':0,
      'cat2':0,
      'cat3':0,
      'cat4':0,
      'cat5':0,
      'cat6':0
    }
  };
  var octopus = {
    getAllNames : function(){
      return model.names;
    },
    getCatByname : function(name){
        var newCat = {
          name : name,
          clickCnt : model.clickCnts[name],
          picSrc : "img/"+name+".jpg"
        };

        return newCat;
    },
    init:function(){
      view.listNames();
    },
    clickCat:function(name){
      model.clickCnts[name]++;
    }
  };
  var view = {
    listNames : function(){
      octopus.getAllNames().forEach(function(name){
        var newBtn = document.createElement("button");
        var newContent = document.createTextNode(name);
        newBtn.id = name;
        newBtn.appendChild(newContent);
        $('#catNames').append(newBtn);
        newBtn.addEventListener('click',(function(nameCopy){
          return function(){
            octopus.clickCat(nameCopy);
            view.listCat(nameCopy);
          }
        })(name))
      });
    },
    listCat : function(name){
      var $selected = $('#selectedCats');
      var cat = octopus.getCatByname(name);

      $selected.html("");
      var content = document.createTextNode(cat.clickCnt + " clicks"+" " + name);
      var img = document.createElement('img');
      img.src = cat.picSrc;
      img.alt = cat.name;
      $selected.append(content,img);
    }
  }
  octopus.init();
});
