const { ConcatenationScope } = require("webpack");

let pronoun = ['the','our', "their","thy"];
let adj = ['great', 'big', "red", "small" ];
let noun = ['jogger','racoon', "mountainbike", "baby"];
let ext = [".net", ".com", ".cl", ".org"]
let domain2 = "";


var size = pronoun.length*adj.length*noun.length;

for (i=0; i<pronoun.length; i++){

    for(j=0; j<adj.length; j++){
        
        for (k = 0; k<noun.length; k++){
            for (l=0 ; l< ext.length;l++){
            domain2= pronoun[i]+adj[j]+noun[k] + ext[l];
            console.log(domain2);}
        }
    }
}
