(function(){
    var stage, textStage, form, input;
    var circles, textPixels, textFormed;
    var offsetX, offsetY, text;
    var colors = ['#B2949D', '#FFF578', '#FF5F8D', '#37A9CC', '#188EB2'];

    function init() {
        initStages();
        initCircles();
        animate();
        markHomeNavigation();
        showHome();
    }
    // Init Canvas
    function initStages() {
        offsetX = (window.innerWidth-600)/2;
        offsetY = (window.innerHeight-300)/2;

        stage = new createjs.Stage("stage");
        stage.canvas.width = window.innerWidth;
        stage.canvas.height = window.innerHeight;
    }
    function initCircles() {
        circles = [];
        for(var i=0; i<600; i++) {
            var circle = new createjs.Shape();
            var r = 7;
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*0.5;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
    }
    // animating circles
    function animate() {
        stage.update();
        requestAnimationFrame(animate);
    }
    function tweenCircle(c, dir) {
        if(c.tween) c.tween.kill();
        if(dir == 'in') {
            c.tween = TweenLite.to(c, 0.4, {x: c.originX, y: c.originY, ease:Quad.easeInOut, alpha: 1, radius: 5, scaleX: 0.4, scaleY: 0.4, onComplete: function() {
                c.movement = 'jiggle';
                tweenCircle(c);
            }});
        } else if(dir == 'out') {
            c.tween = TweenLite.to(c, 0.8, {x: window.innerWidth*Math.random(), y: window.innerHeight*Math.random(), ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5, scaleX: 1, scaleY: 1, onComplete: function() {
                c.movement = 'float';
                tweenCircle(c);
            }});
        } else {
            if(c.movement == 'float') {
                c.tween = TweenLite.to(c, 5 + Math.random()*3.5, {x: c.x + -100+Math.random()*200, y: c.y + -100+Math.random()*200, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            } else {
                c.tween = TweenLite.to(c, 0.05, {x: c.originX + Math.random()*3, y: c.originY + Math.random()*3, ease:Quad.easeInOut,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            }
        }
    }
    function markHomeNavigation(){
		document.getElementsByClassName('li_home')[0].classList.add("mark_navigation");
		document.getElementsByClassName('li_home')[0].classList.remove("li_header");
    }
    function explode() {
        for(var i= 0, l=textPixels.length; i<l; i++) {
            tweenCircle(circles[i], 'out');
        }
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, {alpha: 1});
            }
        }
    }
    window.onload = function() { init() };
})();
function showAbout(){
	markNavigation();
	document.getElementsByClassName('li_about')[0].classList.add("mark_navigation");
	document.getElementsByClassName('li_about')[0].classList.remove("li_header");
    document.getElementById("content").innerHTML = "<div id='about'>关于我：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web前端小菜鸟一枚<br/><br/><br/>建站原由：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;记录个人生活<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;记录个人工作<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;记录个人学习<br/><br/><br/>站点相关：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生活<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手作<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前端<br/><br/><br/><br/><br/>2017年10月27日建站</div>";
}
function showLife(){
	markNavigation();
	document.getElementsByClassName('li_life')[0].classList.add("mark_navigation");
	document.getElementsByClassName('li_life')[0].classList.remove("li_header");
    document.getElementById("content").innerHTML = "正在建设中...";
}
function showWork(){
	markNavigation();
	document.getElementsByClassName('li_work')[0].classList.add("mark_navigation");
	document.getElementsByClassName('li_work')[0].classList.remove("li_header");
    document.getElementById("content").innerHTML = "正在建设中...";
}
function showArchives(){
	markNavigation();
	document.getElementsByClassName('li_archives')[0].classList.add("mark_navigation");
	document.getElementsByClassName('li_archives')[0].classList.remove("li_header");
    document.getElementById("content").innerHTML = "正在建设中...";
}
function showHome(){
	markNavigation();
	document.getElementsByClassName('li_home')[0].classList.add("mark_navigation");
	document.getElementsByClassName('li_home')[0].classList.remove("li_header");
    document.getElementById("content").innerHTML = "<div id='life'><div id='life_left'><img src='http://oyiws5ev9.bkt.clouddn.com/-6d508563eb2df07d.jpg'/>欢迎来到我的个人博客</div><div id='life_right'></div></div>";
}
function markNavigation(){
	document.getElementsByClassName('mark_navigation')[0].classList.add("li_header")
	document.getElementsByClassName('mark_navigation')[0].classList.remove("mark_navigation")
}