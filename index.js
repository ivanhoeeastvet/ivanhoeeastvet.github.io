const fs = require('fs');


fs.readdir('./dev/pages',function(err,res){
  if(err){return console.log(err)}

  console.log(res)
})
