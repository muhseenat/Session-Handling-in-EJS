
const {Router} =require('express')

const router=Router();


router.get('/',(req,res)=>{
 
    if( req.session.loggedIn){
         res.set('Cache-Control', 'no-store')
          res.render('home page');
      }else{
      res.set('Cache-Control', 'no-store')
      res.render('index');
  }
  });

  router.post('/user',(req,res)=> {
  
    if(req.body.username=='Muc' && req.body.password == '123456'){
        req.session.loggedIn = true;
    
        console.log(req.session);
        
        res.set('Cache-Control', 'no-store')
    
        res.render('home page');
    }else{  
        res.set('Cache-Control', 'no-store')
        err_msg='Invalid username and password'; 
        
        res.render('index',{err_msg});    }
});


router.get('/logout',(req,res)=>{
    
    delete req.session.loggedIn;
    req.session.destroy();
   
    res.redirect('/');
})




module.exports=router

