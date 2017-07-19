module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/memo',function(req,res){
        res.render('memo.html');
    });
    app.get('/picture',function(req,res){
       res.render('picture.html')
    });
    app.get('/video',function(req,res){
       res.render('video.html')
    });
}
