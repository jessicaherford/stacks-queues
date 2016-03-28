function Stack(){
  this.data = [];

}

Stack.prototype.push = function(element){
  this.data[this.data.length] = element;
}

Stack.prototype.top = function(){
    return this.data[this.data.length-1];
}

Stack.prototype.pop = function(){
    this.data.pop();
}




module.exports = Stack;
