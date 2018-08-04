class Carousel {
    constructor({el}) {
        this.el = document.querySelector(el);
 
        // 获取盒子的宽度
        this.width = this.el.offsetWidth;
 
        this.imgIndex = 0; // 添加图片下标
        this.btnIndex = 0; // 添加小按钮下标
 
        // 获取list
        this.list = this.el.querySelector('.list_ba');
 
        // 获取direction
        let direction = this.el.querySelector('.direction');
 
        // 添加右侧方向按钮事件
        let leftBtn = this.el.querySelector('.left');
        let rightBtn = this.el.querySelector('.right');
 
        // 获取所有的小按钮
        this.iconBtn = [...this.el.querySelectorAll('.icon-btn a')];
 
        // 无缝滚动准备工作
        let firstLiHtml = this.list.querySelector('li:first-child').outerHTML;
        this.list.innerHTML += firstLiHtml;
        this.list.style.width = this.list.children.length * this.width + 'px';
 
        // 添加鼠标进入/离开事件
        this.el.addEventListener('mouseover', () => {
            clearInterval(this.timer);
            direction.style.display = 'block';
        });
 
        this.el.addEventListener('mouseout', () => {
            this.autoMove();
            direction.style.display = 'none';
        });
 
        leftBtn.addEventListener('click', () => {
            this.leftMove();
        });
 
        rightBtn.addEventListener('click', () => {
            this.rightMove();
        });
 
        this.iconBtn.forEach( (v, k) => {
            v.addEventListener('mouseover', () => {
                this.imgIndex = k;
                this.btnIndex = k;
                this.move();
            });
        });
 
        // 自动轮播
        this.autoMove();
    }
    leftMove() {
        // 切换图片
        this.imgIndex--;
        if(this.imgIndex < 0) {
            let len = this.list.children.length;
            this.list.style.left = -(len - 1) * this.width + 'px';
            this.imgIndex = len - 2;
        }
 
        // 切换按钮
        this.btnIndex--;
        if(this.btnIndex < 0) {
            this.btnIndex = this.iconBtn.length - 1;
        }
 
        this.move();
    }
    rightMove() {
        // 切换图片
        this.imgIndex++;
        if(this.imgIndex >= this.list.children.length) {
            this.list.style.left = 0;
            this.imgIndex = 1;
        }
 
        // 切换小按钮
        this.btnIndex++;
        if(this.btnIndex >= this.iconBtn.length) {
            this.btnIndex = 0;
        }
 
        this.move();
    }
    move() {
        bufferMove(this.list, {left: - this.imgIndex * this.width});
        this.iconBtn.forEach( v => v.classList.remove('active'));
        this.iconBtn[this.btnIndex].classList.add('active');
    }
    autoMove() {
        this.timer = setInterval(() => {
            this.rightMove();
        }, 3000);
    }
}


new Carousel({
    el: '#carou'
});


setInterval(function(){
    var benner = document.getElementsByClassName("benner")[0];
    benner.style.background = "rgb(232, 245, 253)";

},3000)