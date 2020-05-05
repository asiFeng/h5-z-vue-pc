<template>
	<div style="width:100%;">
		<collapse title="Part 1">
			<div class="event-test-container">
				<el-button @click="doWaitEvent">doWaitEvent</el-button>
				<el-button @click="promiseTest">promiseTest</el-button>
				<el-button @click="insertHtml">插入文本</el-button>
				<el-button @click="tryCatch">tryCatch</el-button>
				<el-button @click="evalFunc">evalFunc</el-button>
				<el-input v-model="numRange" placeholder="请输入100以内的值" clearable @change="errorTest"></el-input>

				<el-button @click="rangeErrorTest">rangeErrorTest</el-button>
			</div>

			<div id="outer">
				<span>I am </span>
			</div>

			<div class="event-test-container">
				<el-button @click="scopeTest">Es6 作用域测试</el-button>
				<el-button @click="environmentTest">执行上下文测试</el-button>
				<el-button @click="funcScope">funcScope闭包测试</el-button>
				<el-button @click="forEachTest">forEachTest</el-button>
				<el-button @click="logTable">logTable</el-button>
			</div>

			<div class="event-test-container">
				<el-button @click="hignOrderFunc">高阶函数</el-button>
				<el-button @click="consoleTest">console</el-button>
				<el-button @click="deconstruction">deconstruction</el-button>
				<el-button @click="varLetTest">varLetTest</el-button>
				<el-button @click="restTest">restTest</el-button>
			</div>

			<div class="event-test-container">
				<el-button @click="funcName">funcName</el-button>
				<el-button @click="arrowFunc">arrowFunc</el-button>
				<el-button @click="thisTest">thisTest</el-button>
				<el-button @click="objectTest">objectTest</el-button>
				<el-button @click="symbolTest">symbolTest</el-button>
				<el-button @click="switchTrue">switchTrue</el-button>
				<el-button @click="testIterator">testIterator</el-button>
			</div>

			<div>
				<el-button @click="closureFunc">closureFunc</el-button>
				<el-button @click="moveRigth">moveRigth</el-button>
				<el-button @click="testRegExp">testRegExp</el-button>
				<el-button @click="sliceTest">sliceTest</el-button>
				<el-button @click="sleepTest">sleepTest</el-button>
				<el-button @click="copyTest">copyTest</el-button>

				<el-button @click="proxyTest">proxyTest</el-button>
				<div @click="eventParentTest" style="padding: 30px;border: 2px solid green;" id="parent">
					eventParentTest
					<el-button @click="eventTest" id="children">eventTest</el-button>
				</div>
				<div id="copyEventTestBox" style="display:inline-block;padding:20px;border: 2px solid red;">copyEventTest</div>

				<div class="event-register">123</div>
			</div>

			<div class="event-test-container">
				<el-button @click="asyncFunc">asyncFunc</el-button>
				<el-button @click="testClass">testClass</el-button>
				<el-button @click="testClassExtends">testClassExtends</el-button>
				<el-button @click="collectionTest">collectionTest</el-button>
				<el-button @click="mapArrayTest">mapArrayTest</el-button>
				<el-button @click="asyncExecuteOrder">asyncExecuteOrder</el-button>
				<el-button @click="realizeNewFunc">realizeNewFunc</el-button>
				<el-button @click="testObjToArray">testObjToArray</el-button>
			</div>

		</collapse>
		<!-- style="display:none;"  ------------------  结束 ---------------->
		<collapse title="Part 2：添加box">
			<div>
				<el-button @click="addOneBox">+</el-button>
				<el-button @click="delOneBox" v-if="colorBoxs.length">-</el-button>
			</div>
			<div class="flex-container">
				<div class="flex-item" v-for="(item,index) in colorBoxs" :key="index" :style="{backgroundColor:item.color}"></div>
			</div>
		</collapse>
		<collapse title="Part 3">
			<el-button @click="ArrayTest">ArrayTest</el-button>

			<el-button @click="definePropertyTest">definePropertyTest</el-button>
			<el-button @click="jsonTest" draggable>jsonTest</el-button>
			<!-- <el-button @click=""></el-button> -->


			<div style="width:300px;">
				<article>这是个article</article>
				<header>这是个header</header>
				<footer>这是个footer</footer>
			</div>

			<ul class="ulEle">
				<li>1</li>
			</ul>

			<el-button @click="createTest">createTest</el-button>
			<el-button @click="setTime">setTime</el-button>
		</collapse>


		<collapse title="Part 4： HTML related">
			<div>
				<label for="selectVal">原生js获取select标签值</label>
				<select name="selectVal" id="selectVal" @click="getVal">
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
				</select>
			</div>
		</collapse>

		<collapse title="Part 5: " open>
			<div>scope</div>
		</collapse>





	</div>
</template>

<script>
import { waitEvent } from "@/utils/util.js";
import { setTimeout } from 'timers';
import { setTime } from '@/utils/date';
const mapArray = require('map-array');

export default {
	data() {
		return {
			numRange: '',

			name: '跳跳',
			major: '闹闹',

			selectedId: '02',

			xWidth : '',
			yHeight: '',

			studentsRecords: [
				{ name: '王华1', age: 12 },
				{ name: '王华2', age: 22 },
				{ name: '王华3', age: 44 },
				{ name: '王华4', age: 55 },
				{ name: '王华5', age: 78 },
			],
			colors: this.colorGenerator(),
			colorBoxs:[],
		};
	},

	mounted(){

		const ul = document.getElementsByClassName('ulEle')[0];
		const li = document.createElement('li');
		li.innerHTML ='33333';
		ul.appendChild(li);
		console.log('this.tryArgumentsLength.length:  ', this.tryArgumentsLength.length);
		
		// this.xhrTest();

		// 自定义 axios 有一点问题，没找到为啥不执行 then 或者 catch
		// this.xhrSelf({
		// 	url:'http://www.bing.com/HPImageArchive.aspx',
		// 	method:'GET',
		// 	params:{
		// 		format:'js',
		// 		idx: 1,
		// 		n: 10,
		// 		mkt: 'en-US'
		// 	},
		// 	async: true,
		// }).then( res=>{
		// 	console.log('res  66: ', res);
		// }).catch(err=>{
		// 	console.log('err  00: ', err);
			
		// });


		// event-register
		// let ele = document.getElementsByClassName('event-register');
		// console.log('ele: ',ele);
		// ele[0].addEventListener('click', function(){
		// 	alert(1);
		// }, false);

		// document.getElementsByTagName("body")[0].addEventListener('click', function(){
		// 	alert(3);
		// });
		// console.clear();
		// this.addCopyListener();
	},

	methods: {

		getVal(){
			let ele = document.getElementById("selectVal");
			console.log("ele", ele.value);
			console.log("ele", ele.options[ele.selectedIndex].text);
			
		},

		setTime,

		// 继承
		createTest(){
			// Shape - 父类(superclass)
			function Shape() {
			this.x = 6;
			this.y = 6;
			}

			// 父类的方法
			Shape.prototype.move = function(x, y) {
				this.x += x;
				this.y += y;
			console.info('Shape moved.');
			};

			// Rectangle - 子类(subclass)
			function Rectangle() {
			Shape.call(this); // call super constructor.
			}

			// 子类续承父类
			Rectangle.prototype = Object.create(Shape.prototype);
			Rectangle.prototype.constructor = Rectangle;

			var rect = new Rectangle();

			console.log('Is rect an instance of Rectangle?',
			rect instanceof Rectangle); // true
			console.log('Is rect an instance of Shape?',
			rect instanceof Shape); // true
			rect.move(1, 1); // Outputs, 'Shape moved.'
		},

		jsonTest(){
			const { log } = console;
			let obj = {
				name:"阿肆",
				age: "secret",
				skills:["java","javascript","html","css"],
				boyfriend: undefined,
				date: new Date(),
			};
			log( obj );
			log( JSON.stringify( obj, ["name", "age"] ) );
			log( JSON.stringify( obj, (key, val)=>{
				if(key=="age"){
					return 30;
				}
				return val;
			} ) );
			log( JSON.stringify( obj,null , 4) );
			log( JSON.stringify( obj, null, "----") );

			log( JSON.parse(JSON.stringify(obj)) );
			log( JSON.parse(JSON.stringify(obj), (key,val)=>{
				if(key == "date"){
					val = new Date(val);
				}
				return val;
			}) );
			
		},

		tryArgumentsLength( x,y,z=3){
			console.log('length:   ', this.length);
		},

		

		// XMLHttpRequest
		xhrTest(){
			let paramJson = '';
			let params = {
				format:'js',
				idx: 1,
				n: 10,
				mkt: 'en-US'
			};
			Object.keys(params).forEach( (el, idx)=>{
				let set = (idx?'&':'') + el + '=' + params[el];
				paramJson = paramJson + set;
			})
			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'http://www.bing.com/HPImageArchive.aspx'+'?'+paramJson);

			// xhr.open('GET','http://localhost:4000')
			console.log('JSON.stringify(params):  ', paramJson );
			console.log('JSON.stringify(params):  ', 'format=js&idx=1&n=10&mkt=en-US');
			
			
			xhr.send( paramJson );

			xhr.onload = e => {
				console.table('request success:   e: ', JSON.parse(e.currentTarget.response).images );
			};

			xhr.onreadystatechange = function( res ){
				if(res.status==200){
					console.log('200: ', res.statusText);
				}else{
					console.log('Not 200: ', res.status );
				}
			};

		},

		xhrSelf( config ){
			// debugger
			let { url, method='GET', params, async } = config;
			
			return new Promise( (resolve, reject)=>{
				if(!url) reject;
				method = method.toUpperCase();
				let xhr = new XMLHttpRequest();
				if(method=='GET' && Object.keys(params).length){
					let api = '';
					Object.keys(params).forEach((el,idx)=>{
						api = api + (idx ? '&' : '?')+el+'='+params[el];
					})
					url += api;
					params = null;
				}
				
				xhr.open(method, url);
				xhr.send(params);
				xhr.onLoad = function(){
					console.log('rr:  ', xhr);
				};

				xhr.onreadyStatechange = function(){					
					if(xhr.status==200){
						console.log('200');						
						resolve(JSON.parse(xhr.responseText));
					}else{
						console.log('404');
						reject('Error 4');
					}
				};
			});
		},

		addCopyListener(){
			document.getElementById('copyEventTestBox').addEventListener('copy',function(event){
				console.log('11111:   ', event.clipboardData);
				// event.preventDefault();
				
			});
		},

		eventParentTest( event ){
			// console.log('event.currentTarget: ', event.currentTarget);
			// console.log('event.target:  ', event.target);			
			
			if( event.target == event.currentTarget){
				alert('parent clicked!');
			}

		},

		eventTest( event ){
			// console.log('event:  ', event);
			console.log('event.target.id:  ', event.currentTarget.id);	
			alert('children clicked!');	
			// event.stopPropagation();		
		},

		definePropertyTest(){
			let user = { 
				name: '阿肆',
				getName(){
					return this.name;
				},
			};
			Object.defineProperty( user, 'age', {
				get(){
					return this.value;
				},
				set( val ){
					if(val>22){
						this.value = 22;
					}else{
						this.value = val;
					}
				},
			});

			Object.defineProperty( user, 'name', {
				configurable: false,
				enumerable: false,
			});

			console.log('user.age:  ', user.age);
			user.age = 55;
			console.log('user.age:  ', user.age);
			user.age = 12;
			console.log('user.age:  ', user.age);

			console.log('user name:  ', user.name );
			console.log('user name:  ', user.getName() );

			console.log('------------------------------ Private variable test ------------------------');
			function Product(){
				let name = '阿肆';
				this.getName = function(){
					return name;
				}
			}
			let pro = new Product();
			console.log('pro name: ', pro.name);
			console.log('pro getName: ', pro.getName());
			

			
			
		},

		sleep( ms ){
			return new Promise( (resolve, reject) =>{
				console.log('sleep start-------------------------');
				setTimeout( resolve, ms);				
			})
		},

		// 睡眠函数测试
		async sleepTest(){
			this.sleep(3000).then(()=>{
				console.log('sleep end !!!-------------------------');
			});

			let res = await this.sleep(6000);
			console.log('666 !!!');

			
		},

		// 右移
		moveRigth(){
			let arr = Array.from({length:10}).map((el,i)=>i);
			console.log('arr:    ', arr);
			
			function doMove( arr, k ){
				let temp = arr.slice(k);
				temp.push(...arr.slice(0,k));
				return temp;
			}

			function doMove2( arr, k ){
				let temp = [];
				for(let i = 0; i< arr.length; i++){
					temp[i] = arr[(i+k)%(arr.length)];
				}
				return temp;
			}

			let arr2 = doMove( arr, 3 );
			console.log('arr2  doMove:    ', arr2);

			let arr3 = doMove2( arr, 3 );
			console.log('arr3 doMove2:    ', arr3);

			
		},

		// 闭包测试
		closureFunc(){
			function ToCal( val ){
				this.value = val;
			}
			ToCal.prototype.add = function( num ){
				this.value = (this.value || 0) + Number( num || 0);
				return this;
			}

			ToCal.prototype.minus = function( num ){
				this.value = (this.value || 0) - Number( num || 0);
				return this;
			}

			ToCal.prototype.toString = function(){
				return this.value;
			}

			let res = new ToCal(5).add(3).minus(2);
			console.log('res: ',res.toString());			
		},

		testObjToArray(){
			var obj = {
				'2': 3,
				'3': 4,
				'length': 2,
				'splice': Array.prototype.splice,
				'push': Array.prototype.push
			}
			obj.push(1)
			obj.push(2)
			console.log(obj)
		},

		// 实现 new 函数
		realizeNewFunc(){
			function People( name ){
				this.name = name;
			}
			People.prototype.introduceSelf = function(){
				console.log( `My name is ${this.name}` );
			}

			
			function new2( ...args ){
				let obj = {}, funcName = args.shift();
				funcName.apply(obj, args);
				obj.__proto__ = funcName.prototype;
				return obj;
			}

			let p01 = new2(People,'阿肆');
			console.log('p01:   ', p01);
			p01.introduceSelf();



		},

		// 异步函数执行顺序
		asyncExecuteOrder(){
			async function async1(){
				console.log('async1 start');
				await async2();
				console.log('async1 end');
			}
			async function async2(){
				console.log('async2');
			}
			setTimeout( function(){
				console.log('setTimeout');
			}, 0);
			async1();

			new Promise(function(resolve){
				console.log('promise1');
				resolve();
			}).then(function(){
				console.log('promise2');
			});
			console.log('script end.');
		},
		
		// 第三方库测试
		mapArrayTest(){
			let sourceMap = {
				'200': '充电中',
				'800': '待支付',
				'2000': '已结算'
			};
			let arr = mapArray( sourceMap, (key, val)=> `${key}:  ${val}` );
			console.log('arr: \n', arr);

			console.clear();

			let arrBase = {
				0: 'first',
				2: 'second',
				3: 'third'
			};
			arrBase.length = 4;
			let arrChanged = Array.from(arrBase);
			console.log('arrChanged: ', arrChanged);
			
		},
		
		/** 类继承 */
		testClassExtends(){ 
			class Person{
				static description = 'class name is Person';
				constructor(name='无名氏'){
					console.log('Person: new target:', new.target && new.target.name, this.description);
					this.name = name; // 定义在实例上的属性
				}
			}

			class Student extends Person{
				constructor(name){
					super(name) // super指向父类的原型对象
					console.log('Student: new target:', new.target && new.target.name);
				}
			}

			let p01 = new Person('人');
			let stu01 = new Student('王华');
			console.log('p01 instanceof Person', p01 instanceof Person);
			console.log('p01 instanceof Student', p01 instanceof Student);
			
			console.log('stu01 instanceof Person', stu01 instanceof Person);
			console.log('stu01 instanceof Student', stu01 instanceof Student);

			console.clear();

			class Worker extends Person{
				constructor(name){
					super(name);
					console.log('super name: ', super.name);
					console.log('super description: ', super.description);	
				}
			}
			let woker01 = new Worker('Jimmy');
			console.log('-------------:', Person.description);
			

		},

		addOneBox(){
			this.colorBoxs.push({color:this.colors.next().value});
		},
		delOneBox(){
			this.colorBoxs.pop();
		},

		*colorGenerator(){
			while(true){
				yield 'red';
				yield 'orange';
				yield 'yellow';
				yield 'green';
				yield 'blue';
			}
		},
		// name: 'methods name',

		/**
		 * 类操作
		 * __proto__ 是实例的属性
		 * */
		testClass(){
			class Point{
				constructor(x,y){
					this.x = x;
					this.y = y;
				}
				toString(){
					return `(${this.x},${this.y})`
				}
			}
			let p01 = new Point(2,3);
			p01.__proto__.setArea = function( r ){
				return 3.14*r*r;
			}
			console.log(p01.toString());
			console.log('setArea: ', p01.setArea(5));
			
			
			console.log('----------- getter setter 拦截器 --------------------------');
			class Student{
				constructor(name, score){
					this.name  = name;
					this.score = score;
				}

				get score(){
					console.log('getter');
					return;
				};

				set score( s ){
					console.log( `setter score: ${s}`);
					return;
				}
			}
			let stu1 = new Student('阿肆', 99);
			let s1 = stu1.score;
			console.log('name: ', Student.name);

			console.log('----------- this 指向 --------------------------');
			console.clear();
			class Logger{
				static LoggerName = '哇哈哈';
				// 再构造函数中，绑定 this
				constructor(){
					this.printName = this.printName.bind(this);
				}
				printName( name = 'there'){
					this.print( `Hello ${name}` );
				}
				print( text ){
					console.log(text);					
				}
				static printDate(){
					let day = new Date();
					console.log('date: ', day);
					
				}
			}
			const logger = new Logger();
			const { printName } = logger;
			printName('阿肆');
			Logger.printDate(); // 静态方法，只能通过类名调用
			console.log('static loggerName:',Logger.LoggerName);
			
			


		},

		asyncFunc(){			
			let kk = this.getAge(1);
			console.log(kk);
			kk.then( console.log );
		},

		async getAge( index ){
			let age = await this.studentsRecords[index].age;
			return age;
		},

		testIterator(){
			function makeIterator( array ){
				let arrayIndex = 0;
				return {
					next: function(){
						return arrayIndex < array.length ?
						{ value: array[arrayIndex++]} :
						{ done: true }
					}
				};
			}

			let iterator = makeIterator([1,3,5,7]);
			let nextItem = {};
			while( !nextItem.done){
				console.log('item: ', nextItem );
				nextItem = iterator.next();
			}


			let someString = 'hi';
			let it02 = someString[Symbol.iterator]();
			console.log('it02: ', it02.next());
			console.log('it02: ', it02.next());
			console.log('it02: ', it02.next());


			console.log('-------------- Generator ---------------------------------');
			let obj = {
				*[Symbol.iterator](){
					yield 'hello';
					yield 'word';
				}
			};
			for(let o of obj){
				console.log('o: ', o);				
			}


			console.log('-------------- obj ---------------------------------');
			let array = ['hello','word'];
			for(let o of array ){
				console.log('o2: ', o);				
			}


			var clock = function* (){
				while( true ){
					console.log('Tick!');
					yield;
					console.log('Tock!');
					yield;
				}
			}

			let ck = clock(), i = 0;
			while(i<10){
				ck.next();
				i++;				
			}
			


			
			
		},

		/**
		 * proxy 代理器
		 */
		proxyTest(){
			let proxy = new Proxy( {}, {
				get( target, propertyKey, receiver ){
					if(propertyKey=='name'){
						console.log('GET '+ propertyKey );
						return target.name;
					}else{
						// return "you don't have the access to "+propertyKey;
						console.log(`GET ${propertyKey} !   ${target[propertyKey]}`);
						return target[propertyKey];
					}
				},
				set( target, key, value, receiver ){
					console.log(`setting ${key} !   ${target[key]}`);
					return Reflect.set( target, key, value, receiver )
				}
			} );
			proxy.name = '阿肆';
			console.log('name: ', proxy.name );
			console.log('age: ',  proxy.age );

			console.log('---------------------');
			proxy.age = 5;
			++proxy.age;
			console.log('age: ',  proxy.age );
			
		},


		// 集合测试
		collectionTest(){
			// --------------------- set --------------------- 类数组，成员唯一
			// entries 是 [value, value]的数组
			// 有序
			const s = new Set();
			[2,3,4,5,6,6,6,6,6].forEach( el =>{
				let res = s.add( el );
				console.log('el: ', el, 'result: ', res);
				
			});


			console.log('set: ',s, '  s length = ', s.size, '  entry: ',s.entries());
			// 去重
			let arr01 = [1,1,2,2,3,5,6,8,8,8,8,8];
			let arr02 = [...new Set(arr01)];
			console.log('arr01: ',arr01,'    arr01: ',arr02);

			console.clear();
			let s03 = new Set([1,3,5]);
			let s04 = new Set([2,3,7]);
			console.log('2:', s03.has(2));
			console.log('5:', s03.has(5));

			// set集合运算
			console.clear();
			let s05 = new Set([1,2,3,5,7,11,13,17,19,23,29,31]);
			let s06 = new Set([10,11,12,13,14,15,16,17,18,19]);

			/** 交集 */
			function getIntersection( setA, setB ){
				let sameSet = new Set();
				for(let el of setA){
					if(setB.has(el)){
						sameSet.add(el);
					}
				}
				return sameSet;
			};

			/** 并集 */
			function unionSet( setA, setB ){
				let _unionSet = new Set(setA);
				for( let el of setB ){
					_unionSet.add(el);
				}
				return _unionSet;
			};

			/** 差集 */
			function differentSet( setA, setB ){
				let diffSet = new Set( setA );
				for( let el of setB ){
					if(diffSet.has( setA )){
						diffSet.delete(el);
					}
				}
				return diffSet;
			};
			
			console.log('s05 length:', s05.size);
			console.log('s06 length:', s06.size);
			
			console.log('交集:  ', getIntersection(s05, s06));
			console.log('并集:  ', unionSet(s05, s06));
			console.log('差集:  ', differentSet(s05, s06));


			/** 
			 * WeakSet
			 * 成员只能是对象
			 * 用来存储DOM节点
			*/


			// Map  有序
			console.clear();
			const item = [
				[
					'name', '张三', 
				],[
					'name02', '里斯'
				],[
					'title', 'author'
				]
			];
			let map = new Map( item );
			console.log('map: ', map );

			const map02 = new Map();
			item.forEach(
				([key,value]) => map02.set( key, value)
			);
			console.log('map: ', map02 );
			


			
		},


		switchTrue(){
			var num = 25;
			switch(true){
				case num<10:
			}
		},

		/**
		 * --------------------------------------------------------------
		 * symbol   不是很明确具体的使用
		 * --------------------------------------------------------------
		 */
		symbolTest(){
			let s = Symbol();
			console.log(typeof s);
			
			let s1 = Symbol('foo');
			let s2 = Symbol('bar');
			console.log(s1);
			console.log(s2);
			console.log(s2.description);
			console.clear();

			const log = {};
			log.levels = {
				DEBUG: Symbol('debug'),
				INFO: Symbol('info'),
				WARN: Symbol('warn'),
			};
			console.log( log.levels.DEBUG, ' debug message' );
			console.log( log.levels.INFO,  ' info message' );

			
		},



		// this 理解
		thisTest(){
			let name ="外层";
			function a(){
				let name="测试a";
				console.log(this.name);
				console.log('a',this);
			}
			a.call(window);
			console.log("11:", this);
			console.log("11:", window);

			console.clear();
			function foo(){
				setTimeout(()=>{
					console.log('id:',this.id);
				}, 100);
			}
			var id = 21;
			foo.call({id:42});

			function foo02(){
				setTimeout(function(){
					console.log('id:',this.id);
				}, 100);
			}
			window.id = 666;
			foo02.call({id:42});

		},
		
		// 对象测试
		objectTest(){
			let user = {
				name: 'Ami',
				age: 22
			};
			let foo = {
				bar: 'baz'
			};
			console.log(user,foo);
			console.log({user,foo});

			// 表达式属性
			console.clear();
			let fieldName = 'name';
			let obj = {
				[fieldName]: '阿肆',
			};
			console.log('filed: ', fieldName, JSON.stringify(obj) );
			fieldName = 'age';
			obj[fieldName] = 22;
			console.log('filed: ', fieldName, JSON.stringify(obj) );

			console.log('obj.length: ', obj.length );

			// 属性遍历
			console.clear();
			let obj02 = {
				name: '肆儿',
				age: 22,
				city: 'SH'
			};
			for( let el in obj02 ){
				console.log(el,' -- ', obj02[el]);
			}
			console.log('----------------------------');
			let kk = Object.keys( obj02 );
			kk.forEach( function( k ){
				console.log( k,' -- ', this[k] );				
			}, obj02 );

			// super
			console.clear();
			let obj03 = {
				name: '111',
				show(){
					console.log(super.name);
				},
			};
			console.log('super: ', obj03.show() );

			// 合并对象
			console.clear();
			let obj05 = { 
				a: 1,
				kk: 'kk01'
			};
			let obj06 = { 
				b: 2,
				kk: null
			};
			let obj_01 = Object.assign({}, obj05, obj06);
			let obj_02 = {...obj05, ...obj06};
			console.log('obj_01: ', obj_01);
			console.log('obj_02: ', obj_02);

			let k = Number({a:1}.a);
			console.log( 'is: ',Object.is(k,NaN) );
			
			let k2 = Number({a:'a'}.a);
			console.log( 'is: ',Object.is(k2,NaN) );
			
			// 设置原型对象
			let obj08 = {};
			let obj09 = {
				z:12,
			};
			Object.setPrototypeOf( obj09, obj08 );
			obj08.x = 33;
			obj08.y = 'yellow';
			console.log(`obj09: x=${obj09.x} y=${obj09.y} z=${obj09.z}`);
			
			// keys values
			console.clear();
			
			
		},
		
		// 数组测试
		ArrayTest(){
			let arr = Array.from({length:30},(el,index)=>index+1+'%');
			console.log('arr:',arr);
			
			let kk = arr.find(el=>/5/.test(el));
			console.log('kk:',kk);

			let arr02 = [...'hello'];
			console.log('arr02 扩展运算：',arr02);
			console.log('arr02 数组操作：',arr02.reverse().join('-'));
			const go = function*(){ // Generator 函数返回一个遍历器对象
				yield 1;
				yield 2;
				yield 3;
				yield 4;
				yield 5;
			};
			let arr03 = go();
			let arr04 = [...arr03];
			console.log('arr03: ', arr04);

			let arr05 = [].slice.call(arr04);
			console.log('arr05: ', arr05);

			let set = new Set(['a', 'b']);
			console.log('set:', set);

			console.clear();
			let arr07 = Array.of(3);
			let arr08 = Array(3);

			console.log('arr07 08:', arr07, arr08);

			console.log('--------------- find findIndex  ---------------');
			let arr09 = [
				{value: 1},
				{value: 2},
				{value: 3},
				{value: 4},
			];
			let arr10 = {
				name:'arr10'
			};
			arr09.forEach(function(el){
				console.log('forEach thisArg测试: ', el.value, this);
			}, arr10);

			console.log('findIndex: ', arr09.findIndex(el=>el.value==3));

			console.log('---------------  entries keys values  ---------------');
			let groupName = ['Lily', 'Kate', 'Jone'];
			for( let nn of groupName.entries()){
				console.log('entrie is: ', nn);
			}
			console.log(groupName.includes('Kate',2));
			console.log(groupName.includes('kate'));

			console.log('---------------  flat  ---------------');
			let arr11 = [
				1,2,3,[
					4,5,6,[
						7,8,9
					]
				]
			];
			console.clear();
			console.log(arr11.flat(),arr11.flat(2),arr11.flat(Infinity));

			this.x = '@163';
			console.log( arr11.flatMap( el=>el+this.x ,{x:'***'}) )
			console.log( arr11.flatMap( function(el){
				return el+this.x;
			},{x:'***'}) )


			console.log('---------------  数组空位  ---------------');
			console.clear();

			let arr12 = new Array(3);
			console.log( arr12, arr12[0], arr12.join('-') );

			console.clear();
			arr = [2, 3,5,9];
			let arrThis = {
				name: '阿肆',
				count: 0,
			};
			arr.forEach(el=>{
				console.log('this test:', arrThis);
				arrThis.count++;
				
			}, arrThis)
			
		},
		// 箭头函数
		arrowFunc(){
			let sum = (num1, num2) => { return num1+num2} ;
			console.log('sum:', sum(2,4) );

			let getInfo = (name,age) => {return {name: name, age:age}};
			console.log('info:', getInfo('阿肆, 22') );

			let a = 55;
			let obj = {
				a: 22,
				do: ()=>{
					console.log('this:', a);				
				},
				outer:{
					a:33,
					inner: ()=>{
						console.log('this:', a);
					}
				},
			};
			let func = obj.do;

			obj.do();
			obj.outer.inner();
			func();

			console.clear();
			// function show(){
			// 	this.s1 = 5;
			// 	this.s2 = 2;
			// 	let kk = ()=> console.log('s:',this.s1);
			// 	kk();
			// };

			// show();

			console.log('--------------rest参数--------------');
			const numbers = (...nums) => nums;
			let numArr = numbers(1,2,3,4,5,7,8,9,9,8,8,8);
			console.log('numArr', numArr);

			console.log('测试箭头函数多层嵌套...');

			function insert( value ){
				return { into: function(array){
					return { after: function( index){
						array.splice(index+1, 0, value);
						return array;
					} }
				} }
			}
			let arr = insert( 2 ).into([1,3]).after(0);
			console.log('arr:', arr);

			let insert02 = (value)=>({ into:(array)=>({after:(index)=>{
					array.splice(index+1,0,value);
					return array;
			}})})
			let arr02 = insert02(5).into([1,4]).after(0);
			console.log('arr02:', arr02);

			
			
			
			
			

		},

		// function name 测试 ES6
		funcName(){
			function f01(){
				return '01';
			};
			var f02 = function(){
				return '02';
			};
			let f03 = function(){
				return '03';
			};
			console.log('name', f01.name,'     name:',f02.name,'   name:',f03.name);
		},

		// 用slice将类数组转为数组
		sliceTest(){
			function f(){
				console.log('arguments:   ', arguments, '          ' );
				return [].slice.call(arguments);
				// return Array.prototype.slice.call( arguments );
			}
			let arr = f(1,2,3,4,5,6);
			console.log('arr', arr);			
		},

		// 参数rest测试
		restTest(){
			function add(...value){
				console.log('value length:', value.length, 'value = ', value.join(' - '));
				let k = value.reduce( (sum, val)=> sum+val); // 箭头函数，只要包含在块中，就得加return 字段
				return k;
			}
			let a = add(1,2,3);
			let b = add(1);
			let c = add(1,2,3,4,5,6,7);
			console.log('a b c: ',a,b,c);
			
		},

		//
		varLetTest(){
			var x = 2;
			function f( x, y=function(){ x=77;} ){
				console.log('x1 :', x);				
				var x = 5;
				y();
				console.log('x2 :', x);
			};
			f();
		},
		// 正则
		testRegExp(){
			const regex = new RegExp('name', 'ig');
			let str = "Name Hi, my name is Lily. Nice to meet you!";
			console.log( regex.test( str ) );

			console.log( str.match(regex) );
			console.log( str.replace(regex,'****') );
			console.log( str.search(regex) ); // 找到位置
			console.log( str.split(regex) );

			// 粘连测试
			let str2 = 'aaa_aaa_aa_a';
			let r1 = /a+/g;
			let r2 = /a+/y;

			// console.log( r1.exec(str2));
			// console.log( r2.exec(str2));

			// console.log( r1.exec(str2));
			// console.log( r2.exec(str2));

			console.log( regex.source );
			console.log( regex.flags );

			let kk = /\d+(?=%)/.exec('100% 100% 3% of US presidents have been male.');
			console.log(kk, /^(\d+)(\d+)$/.exec('1053'));
			
			let r3 = /(\d{4})-(\d{2})-(\d{2})/;
			let matchObj = r3.exec('1991-12-31');
			console.log(matchObj)	

			console.log('------------ regExp 断言 -----------------------');			
			// console.clear();
			const reg001 = /x(?=y)/g;
			let str001 = 'xy';
			console.log('/x(?=y)/   ',str001,'    ', reg001.test( str001 ));
			str001 = 'xxxxzy';
			console.log('/x(?=y)/'    ,str001,'    ', reg001.test( str001 ));

			let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];
			let fruitsA = fruits.filter( el=>/^A/g.test(el) );

			console.log('fruits names start with A ', fruitsA);
			console.log('fruits names start with A ', fruits.filter( el=>/^[^A]/g.test(el) ) );
			
			


			

		},

		deconstruction(){
			let data = { xWidth : 'xWidth', yHeight: 'yHeight' };
			console.log('?: ', this.xWidth, this.yHeight);
			({ xWidth: this.xWidth, yHeight:this.yHeight } = { xWidth : 'xWidth', yHeight: 'yHeight' });
			console.log('?: ', this.xWidth, this.yHeight);
		},

		consoleTest(){
			let k;
			console.time('a');
			setTimeout(() => {
				console.timeEnd('a');
			}, 2000);

			// console.trace();
			// console.error('error test');
			// console.warn('warning test');
			// console.info('info test');

			function add(a) {
				function sum(b) { // 使用闭包
					a = a + b; // 累加
					return sum;
				}
				sum.toString = function() { // 重写toString()方法
					return a;
				}
				return sum; // 返回一个函数
			}

			console.group();
			console.log( add(1)(2)(3)(4) );
			console.groupEnd();

			var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
			console.log( arr );
			console.log( JSON.stringify(arr) );
		},

		// 高阶函数
		hignOrderFunc(){
			let isType = type => {
				return obj => Object.prototype.toString.call( obj ) === '[object ' + type + ']';
			}

			console.log( {a:1}.toString() );
			console.log( isType('Object')( {a:1} ) );
			
		},

		// 拷贝测试
		copyTest(){
			var str = "abc";
			// console.log(str[1]="f");    // f
			console.log(str);           // abc

			function deepCopy( obj, res = {} ){
				if(!obj || typeof obj != 'object'){
					return obj;
				}
				let keys = Object.keys( obj );
				for( let key of keys){
					if(typeof obj[key] == 'object'){
						res[key] = deepCopy(obj[key]);
					}else{
						res[key] = obj[key];
					}
				}
				return res;
			};

			let arr = [
				"张三",
				{ name: '阿肆' }
			];
			console.log('arr:  ', arr);
			let arr2 = deepCopy(arr);
			arr2[1].name="阿肆222";
			console.log('arr2:  ', arr2);
			
		},

		// 以表格形式打印数组或者对象
		logTable(){
			let arr = ['1', '2', '3'];
			let obj = {
				name:'阿华',
				age: 22
			};
			console.table(arr);
			console.table(obj);
		},

		// 数组遍历测试
		forEachTest(){
			let k = 16;
			let obj = {
				k: 22,
			}
			let arr1 = [
				{ id: '01', name:'A1' },
				{ id: '02', name:'A2' },
				{ id: '03', name:'A3' },
			];
			arr1.forEach( function(el){
				if(el.id==this.selectedId){
					console.log('you are the right one: ', el.name);
				}
			}, this);
			arr1.forEach(el=>{
				if(el.id==this.selectedId){
					console.log('-- you are the right one: ', el.name);
				}
			}, this);

		},

		// 闭包测试
		funcScope(){

			function outerFunc(){
				let m = 9;
				console.log('outer: m=',m);				
				function innerFunc( n=1 ){
					console.log('inner: n=',n,'  m=',m);					
				};
				return innerFunc;
			};

			let temp = outerFunc();
			console.log('temp:',temp);
			temp();

			function addNumScope(){
				let n = 0;
				return function(){
					return n++;
				}
			}
			let f1 = addNumScope();
			let f2 = addNumScope();
			console.log('f1',f1());
			console.log('f1',f1());
			console.log('f2',f2());
		},
		

		// 执行环境测试
		environmentTest(){
			let name ='kite';
			let major = 'Math';

			let person = {
				name:'Lily',
				major: 'Biology',
				doFunc(){
					console.log('this',this);
					
					console.log('I am',this.name,'. I am majored in ', this.major);
				},
			};
			person.doFunc();


			let globalDofunc = person.doFunc;
			globalDofunc.call(this);

			
		},

		// Es6 作用于测试
		scopeTest(){
			var x = 1;
			{
				var x = 2;
			}
			console.log('var x: ',x);

			let y = 1;
			{
				let y = 2;
			}
			console.log('let y: ',y);

			let num = 3.14;
			function f(){
				return num;
			}

			function g(){
				let num = 3.1415926;
				return f();
			}

			console.log('num in g function is: ', g());
		},

		rangeErrorTest(){
			try{
				let num = 'abs';
				let result = Number.toFixed(num);
				console.log('result', result);
			}catch(e){
				console.log('e', e.message, e.name);				
			}
		},

		// 抛出 error
		errorTest(){
			console.log('numRange 变化了', this.numRange);
			try{
				if(!this.numRange){
					throw new Error('请输入测试值');
				}
				if(this.numRange && this.numRange>100){
					throw new RangeError('测试值不应该大于100');
				}
			}catch(e){
				if(e instanceof RangeError){
					console.log('RangeError', e.message, e.fileName );
				}else if( e instanceof Error){
					console.log('Error', e.message, e.fileName );					
				}
			}
		},

		evalFunc(){
			eval("console.log('打印测试eval');return 6;");
			
		},

		// 代码块抛出异常 处理
		tryCatch(){
			try{
				console.log('try 01');
				throw '抛出错误！'
				console.log('try 02');
			}catch(e){
				console.log('e',e);
			}finally{
				console.log('finally excute!');
			}
		},

		// 插入文本
		insertHtml(){
			let div = document.getElementById('outer');
			div.insertAdjacentHTML('beforeend','<em>Lucy&nbsp;</em>');
		},

		// promise 测试
		promiseTest(){
			let promise = new Promise( function(resolve, reject){
				let tempNo = Math.random();
				// console.log('tempNo', tempNo);
				let response = {
					data:{},
					status: 0,
					error:''
				};
				if( Math.floor(tempNo*10%2)){
					response.data = { num:tempNo }
					resolve( response );
				}else{
					response.status = 400;
					response.error = '乘以10为偶数！';
					response.data = null;
					reject( response);
				}
			});
			
			// 有reject的处理函数，进reject，没有直接进catch函数
			promise.then(
				res=>{
					console.log('resolve -- status:', res.status,'  data:', res.data);
				}, 
				// rej=>{
				// 	console.log('reject -- status:', rej.status, '  data:', rej.data);
				// 	throw '执行错误！';
				// }
			).catch(err=>{
				console.log('-- err --', JSON.stringify(err) );
			});

		},

		// 执行等待事件
		doWaitEvent(){
			let t_start = new Date().getTime();
			console.log("created Here", 0);
			waitEvent(2000).then(() => {
				let t_end = new Date().getTime();
				console.log("waitEvent after 2  ", t_end - t_start, " seconds");
			}).then(res=>{
				waitEvent(6000).then(() => {
					let t_end = new Date().getTime();
					console.log("waitEvent after 6  ", t_end - t_start, " seconds");
				});

			});
		},

	},

};
</script>

<style lang="scss">
.event-register{
	margin: 20px 0;
	width: 130px;
	height: 30px;
	background-color: blanchedalmond;
	line-height: 30px;
	text-align: center;
	color: #fff;
}
.event-test-container{
	display: flex;
	width: 300px;
}

#outer{
	padding-top: 30px;
}
.flex-container{
	margin: 20px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	.flex-item{
		width: 30px;
		height: 30px;
		margin-right: 1px;
	}
	.el-button{
		margin-left: 10px;
	}
}
</style>