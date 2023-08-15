//console.log("hello world");
var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
let dominainGenerator = [];

for(i=0; i<pronoun.length; i++){
        for(j=0; j<adj.length; j++){
            noun.forEach(item =>  dominainGenerator.push(pronoun[i] +adj[j]+ item +".com"));
            
    }
}
dominainGenerator.forEach(element =>console.log(element));