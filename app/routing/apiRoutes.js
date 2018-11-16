var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/data/friends",function(req,res){
         var recentUser = friends.length
         recentUser = parseInt(recentUser)
         recentUser--
         var currentLogin = friends[recentUser]
         console.log('name of currently logged in person ' + currentLogin.name)
         var comparison = [];
         var talley1 = 0;
         var talley = 0;

         for (var i in friends){
             talley = 0;
            for (var j in friends[i].scores){
                let test1 = parseInt(friends[i].scores[j], 10)
                let test2  = parseInt(currentLogin.scores[j], 10)
                console.log(typeof test1 === 'number')
                console.log(typeof test2 === 'number')
                console.log(test1 + ' - ' + test2)
                talley1 = test1 - test2
                talley = talley + Math.abs(talley1)
                console.log(test1 + ' - ' + test2 + ' = ' + talley)
            }
            console.log('talley is ' + talley)
            // talley = Math.abs(talley)
            comparison.push(talley) 
             
         }
         console.log(comparison)
         comparison.pop();
         var bestMatch = Math.min.apply(null,comparison)
         var bestMatch = comparison.indexOf(bestMatch)
           
        
         res.json(friends[bestMatch])
        // console.log(friends)
    });

    app.post("/data/friends",function(req,res){
     
      var data = req.body
        console.log(data)
        // data = JSON.parse(data)
        // console.log(data)
        friends.push(data)
        
        //some functionality needs to be issmplemented here
    });

};
