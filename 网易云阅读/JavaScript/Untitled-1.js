window.onload = function(){
    function $(id){
        return document.getElementById(id);
    }
    /*====封装轮播图函数======*/
    function animate(obj,target){
        clearInterval(obj.timer);  // 先清除定时器
        var speed = obj.offsetLeft < target ? 20 : -20;  //若已走过的步长小于路程，speed速度就取20，若大于，则取-20，往回走。
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft; 
            obj.style.left = obj.offsetLeft + speed + "px";
            if(Math.abs(result)<=20)   //如果差值不小于20，就说明到位置了，清除定时器。
            {
                clearInterval(obj.timer);
                obj.style.left = target + "px";  
            }
        },20)
    }
    
    /*======公众号======*/ 
    $("ligzh").onmouseover = function(){
    $("gzh").style.display = "block";
    } 
    $("ligzh").onmouseout = function(){
    $("gzh").style.display = "none";
    }
    

    /*========左边菜单=========*/
    for(var i=0;i<4;i++){
        $("Menu").children[i].onmouseover =function(){
            this.children[1].style.display = "block";
            this.children[0].children[0].children[0].style.display = "none";
        }
        $("Menu").children[i].onmouseout = function(){
            this.children[1].style.display = "none";
            this.children[0].children[0].children[0].style.display = "block";
        }
    }


    /*====轮播图开始====*/

    /*var box = document.getElementById("box");
    var ul = box.children[0];
    var ulLis = ul.children;
    var olLis = $("ol").children;

     /*===鼠标进入左右小盒子浮现===*
    var banner = document.getElementById("banner");
    var arr = document.getElementById("arr");
    banner.onmouseover = function(){
        arr.style.display = "block";
    }
    banner.onmouseout = function(){
        arr.style.display = "none";
    }
    /*===鼠标进入l-btn和r-btn 改变背景图===*
    $("lbtn").onmouseover = function(){
        this.style.backgroundPositionY = -63+"px";
    }
    $("lbtn").onmouseout = function(){
        this.style.backgroundPositionY = 0+"px";
    }
    $("rbtn").onmouseover = function(){
        this.style.backgroundPositionY = -189+"px";
    }
    $("rbtn").onmouseout = function(){
        this.style.backgroundPositionY = -126+"px";
    }

    // 因为我们要做无缝滚动  ，所以要克隆第一张，放到最后一张后面去
    // a.appendchild(b)   把 b 放到 a 的最后面
    ul.appendChild(ul.children[0].cloneNode(true));
    
    //鼠标进入olLis切换图片
    for(var i=0;i<olLis.length;i++){
        olLis[i].index = i;
        olLis[i].onmouseover = function(){
            for(var j=0;j<olLis.length;j++){
                olLis[j].className = "";  //先清除全部current
            }
            this.className = "current";
            //调用轮播图函数,(谁做动画，走多远)
            animate(ul,-this.index*720);
            roundness = key = this.index;
        }
    }

    /*自动播放*
    var timer = null;  //控制播放张数
    var roundness=0;   //控制四个小圆形
    var key = 0;
        timer = this.setInterval(autoPlay,4000);
        function autoPlay(){
            key++;
            if(key > ulLis.length - 1){
                ul.style.left = 0; //调回第一张
                key = 1; /*第六张就是第一张，调回第一张但不播放，要播放第二张，故key不能是0.*
            }
            //再次播放，key直接跳过0，从1开始
            animate(ul,-key*720);

            /*小圆圈*
            roundness++;
              if(roundness > olLis.length -1)
              {
                  roundness = 0;
              }
              for(var i=0;i<olLis.length;i++)   // 先清除所有的
              {
                  olLis[i].className = "";
              }
              olLis[roundness].className = "current";  // 留下当前的
          }
          $("box").onmouseover = function(){
              clearInterval(timer);
          }
          $("box").onmouseout = function(){
              timer = setInterval(autoPlay,4000);
          }*/



        /*主编推荐*/
        var lis = document.getElementById("tab").children[0].children;
        var tabItem = this.document.getElementById("contents").children;
        for(var i=0;i<lis.length;i++){
            lis[i].index = i;
            lis[i].onmouseover = function(){
                for(var j=0;j<lis.length;j++){
                    lis[j].id = "";
                    tabItem[j].id = "";
                }
                this.id = "crt";
                tabItem[this.index].id = "show";
            }
       }
       
        
        

}
