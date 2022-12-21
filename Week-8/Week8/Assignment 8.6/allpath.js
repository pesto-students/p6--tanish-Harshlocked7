let v;

let adjList;

function Graph(vertices)
{
    v = vertices;
    initAdjList();
}
function initAdjList()
{
    adjList = new Array(v);

    for (let i = 0; i < v; i++){
        adjList[i]= [];
    }
}

function addedge(u, v) {
    adjList[u].push(v);
}

function printAllPaths(s,d)
{
    let isVisited = new Array(v);
    for(let i=0; i < v; i++)
    isVisited[i]=false;
    let pathList = [];
    pathList.push(s);
    printAllPathsUtil(s, d, isVisited, pathList);
}

function printAllPathsUtil(u, d, isVisited, localPathList){
    if ( u == (d)) {
        console.log(localPathList+"<br>");
        return;
    }
    isVisited[u] = true;
    for(let i = 0; i < adjList[u].length; i++){
        if(!isVisited[adjList[u][i]]){
            localPathList.push(adjList[u][i]);
            printAllPathsUtil (adjList[u][i],d, isVisited, localPathList);
            localPathList.splice(localPathList.indexOf(adjList[u][i]),1)
        }
    }
    isVisited[u] = false;
}

Graph(4);
addedge(0, 1);
addedge(0, 2);
addedge(0, 3);
addedge(2, 0);
addedge(2, 1);
addedge(1, 3);

let s = 2;
let d = 3;

console.log("Following are the different paths from" + s + "to" + d +"<Br>");
printAllPaths(s, d);

