db.students.find({age:{$gt:15}}).limit(5).forEach((doc,i)=>{if(i,5){return db.students.update(doc,{$unset:{first_name:1}})}})
//  mongoose"@"5.11.15 