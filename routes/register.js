
/*
 * GET home page.
 */

//記事内容の登録
var WikiContent = module.parent.exports
exports.index = function(req, res){
  WikiContent.count({}, function (err, count) {
      new WikiContent({id:  count+1, title:  req.param('title'), body: req.param('body'), date: new Date()}).save( 
        function (){
          res.redirect('/wiki/'+(count+1));
      });       
  });
};
