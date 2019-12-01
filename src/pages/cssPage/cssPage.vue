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
