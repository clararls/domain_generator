let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon', 'tous', 'maraio'];
let ext = ['com', 'net', 'us', 'io']

const getElem = (arr,index) => arr[index];
function getlessNoun (str1,str2){
    return str1.slice(-str2.length);
}

for (let i = 0; i < pronoun.length; i++){
    for (let o = 0; o < adj.length; o++){
        for (let p = 0; p < noun.length; p++){
            for (let a = 0; a< ext.length; a++){      
                if (getlessNoun(noun[p],ext[a]) === ext[a]){
                    console.log(pronoun[i]+adj[o]+noun[p].slice(0,noun[p].length-ext[a].length)+"."+ext[a]);
                } else {
                    console.log(pronoun[i]+adj[o]+noun[p]+"."+ext[a]);
                }
            }
        }
    }
}
/* Another way to get the result ^^
(noun[p].slice(-ext[a].length) === ext[a]){
    console.log(pronoun[i]+adj[o]+noun[p].slice(0,noun[p].length-ext[a].length)+"."+ext[a]);
} else {
    console.log(pronoun[i]+adj[o]+noun[p]+"."+ext[a]);
}*/