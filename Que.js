function Que(){
  this.data = [];
}

Que.prototype.enqueue = function(element){
  this.data.push(element);
}

Que.prototype.front = function (){
  return this.data[0]
}

Que.prototype.dequeue = function (){
  return this.data.shift();
}

Que.prototype.isEmpty = function(){
  if(this.data.length === 0){
    return true
  }
  else{
    return false;
  }
}

Que.prototype.getSize = function(){
  return this.data.length;
}



module.exports = Que;
