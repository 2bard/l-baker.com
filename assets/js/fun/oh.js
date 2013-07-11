var processString = function(rules,string){
	var result = '';
	for(var i = 0; i < string.length; i++) {
		if(string[i - 1] == null){
			result = result + processNeighborhood(rules, '0' + string.substring(i,i + 2));
		} else if(string[i + 1] == null){
			result = result + '0';
		} else {
			result = result + processNeighborhood(rules,string.substring(i - 1,i + 2));
		}
	}
	return result;
}

var processNeighborhood = function(rules,neighborhood){
	for (var i = rules.patterns.length - 1; i >= 0; i--) {
		if(rules.patterns[i].current_state == neighborhood){
			return rules.patterns[i].new_state;
		}
	};
	return 0
}

var RuleSet = function(){
	this.patterns = new Array();
}

RuleSet.prototype.addPattern = function(pattern){
	this.patterns.push(pattern);
}

var Pattern = function(current_state, new_state){
	this.current_state = current_state;
	this.new_state = new_state;
}

var drawString = function(string, y_pos,size){
	
	for(var i = 0; i < string.length; i++) {
		var point = new Point((x_offset) + (i * (size)),y_pos);
		drawCell(string[i],point,size);
	}
}

var drawCell = function(state, position,size){
	var rect = new Path.Rectangle(position, size);
	rect.fillColor = (state == '1') ? 'black' : new Color(Math.random(), Math.random(), Math.random());
}

paper.install(window);
paper.setup('oh');

var rule30 = new RuleSet();
rule30.addPattern(new Pattern('111','0'));
rule30.addPattern(new Pattern('110','0'));
rule30.addPattern(new Pattern('101','0'));
rule30.addPattern(new Pattern('100','1'));
rule30.addPattern(new Pattern('011','1'));
rule30.addPattern(new Pattern('010','1'));
rule30.addPattern(new Pattern('001','1'));
rule30.addPattern(new Pattern('000','0'));
var start_string = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
var x_offset = 0;
var counter = 1;
var size = 5;
var limit = 100;
view.onFrame = function(event) {
	if(counter < limit){
		 drawString(start_string, counter * (size),size);
			start_string = processString(rule30, start_string);
		counter++;
	}
   
}
