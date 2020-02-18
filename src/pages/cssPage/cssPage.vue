<template>
    <div class="css-page">
        <h1> css Page</h1>

        <!-- 归档元素 -->
        <div  style="display:none;">
            <div class="transform-box">
                <img src="../../assets/images/icon-up.png" />
            </div>

            <div class="demo">
                <div class="aaa">
                    1234
                </div>
            </div>

            <div class="animation-box"></div>

            <!-- <div class="margin-fold">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> -->

            <div class="bullet-screen">
                <div class="block">我是弹幕</div>
                <div class="block item1">我胡汉三又回来了</div>
                <div class="block item2">four, go ahead</div>
            </div>
        </div>

        <!-- 当前显示 -->
        <div>
            <div id="mobile-model"></div>
        </div>

        <div style="border:1px solid #333;padding:20px;line-height:2rem;">
            <div class="triangle"></div>
            <div class="triangle-r"></div><p>asi @ 13/02/2020</p>
            <div class="triangle-top"></div>
        </div>
        <div class="target"></div>
    </div>
</template>

<script> export default { 
    data(){ return {
        bullets: [
            '首弹',
            '你的门牙上有个坑',
            '两点一线',
        ],
        bgColors: [
            'red',
            'yellow',
            'pink',
            'orange',
            'yellow',
            'blue',
            '#ddd',
        ],
    }; },

    methods:{
        setOneBullet(){
            let width =window.innerWidth+'px';
            let from = `{ visibility: visible; transform: translateX(${width}) }`;
            let to = '{ visibility: visible; transform: translateX(-100%); }'
            let style = document.createElement('style');
            document.head.appendChild( style );
            style.sheet.insertRule(`@keyframes barrage01{ from ${from} to ${to}}`);
            console.log('`@keyframes barrage01{ ${from} ${to}}`:   ',`@keyframes barrage01{ ${from} ${to}}`);
        },

        setBulletScreen(){
            let style = document.createElement('style');
            document.head.appendChild( style );
            // style.sheet.insertRule(
            //     ``
            // );
            let settings = [];

            let from = "from";
            let to = "to";

            this.bullets.forEach( (el,idx)=>{
                let div = document.createElement('div');
                div.classList.add("bullet-item");
                div.style.backgroundColor = this.bgColors[
                    Math.floor(Math.random()*this.bgColors.length)
                ];
                document.getElementById('mobile-model').appendChild(div);
                div.innerText = el;
                el.keyframs = "";
                el.class = "";

                console.log('settings:  ', this, '          :');
            }, this);

            

        },
    },

    mounted(){
        // this.setOneBullet();
        this.setBulletScreen();
    }
}
</script>


<style lang="scss">
.target{
    border-radius: 50%;
    width: 130px;
    height: 130px;
    box-shadow: 1px 1px 1PX 5px RED inset,1px 1px 2PX 10px #333 inset;
}

.triangle {
width:0px;
height:0px;
border-top:10px solid red;
border-right:10px solid transparent;
border-left:10px solid transparent;
border-bottom:10px solid transparent;
border-bottom:10px solid green;
}
.triangle-r{
    display: inline-block;
    margin-top: 10px;
    margin-right: 10px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #999;
}

.triangle-top{
    width: 0px;
    height: 0px;
    border-bottom: 120px solid blueviolet;
    border-left: 60px solid transparent; 
    border-right: 10px solid transparent;
    transform: rotate(20deg);
}

.triangle-r+div,
.triangle-r+p{
    display: inline-block;
}


#mobile-model{
    width: calc(375px/2);
    height: calc(667px/2);
    border: 3px dotted #fff;
    border-radius: 10px;
}
.bullet-item{
    padding: 2px 10px;
    border-radius: 20px;
    display: inline-block;
}

@keyframes barrage{
    from{
        left:100%;
        transform: translateX(0)
    }
    to{
        left: 0;
        transform:translateX(-100%)
    }
}
.bullet-screen{
    width: calc(375px/2);
    height: calc(667px/2);
    border: 3px dotted #fff;
    position: relative;
    overflow: hidden;
}
.block{
    white-space: nowrap;
    background-color: #fff;
    border-radius: 20px;
    display: inline-block;
    padding: 3px 8px;
    position: absolute;
    top: 20px;
    animation: barrage 3s infinite ;
}
.block.item1{
    top: 80px;
    animation: barrage 7s infinite;
}
.block.item2{
    visibility: hidden;
    background-color: aquamarine;
    top: 120px;
    animation: barrage01 4s infinite;
}
.margin-fold{
    width: 200px;
    div{
        height: 40px;
        width: 120px;
        border: 2px solid orchid;
        margin: 20px 5px;
        display: block; // 边距折叠
        // display: inline-block; // 边距不折叠
    }
}


@keyframes init_state{
    from{left:0;}
    to{left:100px;}
}
.animation-box{
    position: relative;
    width: 100px;
    height: 30px;
    border: 2px solid #ddd;
    // animation: init_state 5s infinite alternate linear;
    animation: init_state 2s infinite alternate;
    margin-left: 10px;
}

.css-page{
    margin: 0 20px 100px;
}
.transform-box{
    display: inline-block;
    margin: 10px;
    border: 1px solid pink;
}
.transform-box img{
    // transform: scale(2,0.5);
    transform: rotate(0.25turn);
    transform: skewY(10deg);
}


.demo{
    margin-left: 10px;
    overflow: hidden;
    width: 100px;
    height: 100px;
    position: relative;
    border: 1px solid yellowgreen;
}

.aaa{ 
    width: 100%; 
    height: 50px;
    position: absolute; 
    bottom: -50px; 
    opacity: 0;
    -webkit-transition: all 0.85s ease; 
    -moz-transition: all 0.85s ease; 
    -o-transition: all 0.85s ease; 
    -ms-transition: all 0.85s ease; 
    transition: all 0.85s ease; 
}

.demo:hover .aaa{
    opacity: 1;
    bottom: 0;
}

</style>
