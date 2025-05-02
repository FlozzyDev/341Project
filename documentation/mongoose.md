# Mongoose
## Mongoose 101

Mongoose is a useful library that makes using MongoDB much easier. Instead of using the default Mongo drivers, we can use Mongoose to shorten some of the connections, such as connect. Additionally, it introduced "schemas" to me, which I realize are not very useful for what we are doing right now (GET) but I wanted to practice making one.

Schema - This is where we can define what our data IS, so when we create/update/ect, we are sending properly validated data that we know the DB will take. (https://mongoosejs.com/docs/guide.html)

Model - This is the constructor for a schema that is set. An instance of a model is called a "document", as in it can be added to the db collection. This is what is used to actually create new documents in the DB or read documents that are already stored.. 

Query - A request made to take an action on the DB. 
    - Can be used 2 ways - in callback or as a promise. 
        - callback - User.findOne({ email: 'dallin@example.com' }, (error, user) => {if / then})
        - promise - User.findOne({ email: 'dallin@example.com' }, (.then/.catch)) (or async function XXX - try / catch)

We are stilling using CRUD commands - a list below: 

Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()

## Syntax Example 
const person = new mongoose.Schema({name: String, age: Number})
const Person = mongoose.model('Person', person)
const query = Person.findOne({age: 30})
const result = await query.exec();
console.log(`${result.name}, ${result.age}`);


## Resources

I absolutely love this guy's videos. He did a great Mongoose breakdown - https://www.youtube.com/watch?v=DZBGEVgL2eE
Mongoose CheatSheet - https://gist.github.com/subfuzion/9236165
Docs - https://mongoosejs.com/docs/queries.html




