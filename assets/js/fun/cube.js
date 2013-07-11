var Cube = function(position, size, colour, rotate_speed, stroke_width){
	this.stroke_width = stroke_width;
	this.rotate_speed = rotate_speed;
	this.init(position, size, colour);
	this.connectCubes(this.rect,this.rect2);
}

Cube.prototype.init = function(position,size,colour) {
	this.colour = colour;
	this.connects = new Array();
	this.rect = new Path.Rectangle(position, size);
	this.rect.strokeColor = colour;
	this.rect.strokeWidth = this.stroke_width;
	this.rect2 = new Path.Rectangle(new Point(position.x + (Math.random()/2 *size),position.y - (Math.random()/2  * size)), size);
	this.rect2.strokeColor = colour;
	this.rect2.strokeWidth = this.stroke_width;
};

Cube.prototype.connectCubes = function(rect1,rect2){
		for (var i = rect1.segments.length - 1; i >= 0; i--) {
			var connect = new Path.Line(rect1.segments[i].point,rect2.segments[i].point);
			connect.strokeColor = this.colour;
			connect.strokeWidth = this.stroke_width;
			this.connects.push(connect);
		};
	}



Cube.prototype.clearConnects = function() {
	for (var i = this.connects.length - 1; i >= 0; i--) {
		this.connects[i].remove();
	};
};

Cube.prototype.randomRotate = function() {
	this.rotate_speed = (Math.random() <= 0.5) ? (Math.random() * 10)/2 : (-Math.random() * 10)/2;
};


Cube.prototype.rotate = function() {
	this.rect.rotate(this.rotate_speed);
	this.rect2.rotate(this.rotate_speed);
	//this.rect2.position = new Point(this.rect2.position.x - 1, this.rect2.position.y - 1);
	this.clearConnects();
	this.connectCubes(this.rect,this.rect2);
	this.rect.strokeColor = this.colour;
	this.rect2.strokeColor = this.colour;
};

var randomColor = function(){
	return new Color(Math.random(), Math.random(), Math.random());
}

paper.install(window);
paper.setup('cube');

var colour = new Color(Math.random(), Math.random(), Math.random());
var real_center = new Point(40,40);
var cube = new Cube(real_center, 65, colour,3,4);

view.onFrame = function(event){
	cube.rotate();

	if(Math.random() < 0.001){
		cube.rect.fillColor = new Color(Math.random(), Math.random(), Math.random());
	} else {
		cube.rect.fillColor = null;
	}
}

$("a").hover( function(){cube.colour = new Color(Math.random(), Math.random(), Math.random()); });

$("#sitename").hover( function(){cube.randomRotate();});

