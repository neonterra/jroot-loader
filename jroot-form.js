var jroot_loader = {
	_loader_tag : null,
	_options : {
		'text' : 'loading...',
		'icon' : 'icon_1',
		'id' : 'js_jroot_loader_auto',
		'customClass' : '',
		'bgColor':'#000000',
		'bgTransparency':'60',
		'zindex':'999991',
		'timeout':0
	},
	_update_options : function (options){
		for (const [key, value] of Object.entries(options)) {
			if(this._options.hasOwnProperty(key)) {
				console.log('update key' , key , value);
				console.log('old' , this._options[key]);
				this._options[key] = value;
			}
		}
	},
	load : function (options){
		console.log('options',options);
		this._update_options(options);
		console.log('options new',this._options);
		this._generate_style();
		var text = this._options.text;
		var loader_html = `<div id="" class="jroot-loader-wrapper">
								<div class="jroot-loader-innner-container"></div>
								<div class="content">
									<p>`+text+`</p>
								</div>
							</div>`;
		this._loader_tag = document.createElement("div");
		this._loader_tag.className = 'jroot-loader-wrapper';
		this._loader_tag.innerHTML = loader_html;
		this._loader_tag.style.background = this._convert_hex_rgb(this._options.bgColor);
		document.body.appendChild(this._loader_tag);
		if(this._options.timeout > 0){
			var timeout = setTimeout(function (){
				/* const promise1 = new Promise((resolve, reject) => {
				  resolve('Success!');
				}); */
				console.log('remove object');
				this._loader_tag.remove();
			},parseInt(this._options.timeout));
		}
	},
	
	_generate_style: function (){
		var css = document.createElement('style'); 
		var styles = this._basic_style_css;
		styles += this._icons_styles_css[this._options.icon];
		css.type = 'text/css'; 
		if (css.styleSheet)  
			css.styleSheet.cssText = styles; 
		else  
			css.appendChild(document.createTextNode(styles)); 
		document.getElementsByTagName("head")[0].appendChild(css); 
	},
	_basic_style_css: `
		.jroot-loader-wrapper {
		  position: fixed;
		  top: 0;
		  left: 0;
		  width: 100%;
		  height: 100%;
		  z-index: 1000;
		  background: rgba(0, 0, 0,0.6);
		  z-index:999991;
		}
		.jroot-loader-wrapper .content {
		  z-index: 999999;
		  position: absolute;
		  left: 0;
		  right: 0;
		  bottom: 0;
		  top: 0;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  margin-top: 220px;
		  color: #fff;
		}
	`,
	_icons_styles_css: {
		icon_1 : `
		.jroot-loader-wrapper .jroot-loader-innner-container {
		  display: block;
		  position: relative;
		  left: 50%;
		  top: 50%;
		  width: 150px;
		  height: 150px;
		  margin: -75px 0 0 -75px;
		  border-radius: 50%;
		  border: 3px solid transparent;
		  border-top-color: #3498db;
		  -webkit-animation: jroot-loader-ani-spin 2s linear infinite;
		  /* Chrome, Opera 15+, Safari 5+ */
		  animation: jroot-loader-ani-spin 2s linear infinite;
		  /* Chrome, Firefox 16+, IE 10+, Opera */
		}

		.jroot-loader-wrapper .jroot-loader-innner-container:before {
		  content: "";
		  position: absolute;
		  top: 5px;
		  left: 5px;
		  right: 5px;
		  bottom: 5px;
		  border-radius: 50%;
		  border: 3px solid transparent;
		  border-top-color: #e74c3c;
		  -webkit-animation: jroot-loader-ani-spin 3s linear infinite;
		  /* Chrome, Opera 15+, Safari 5+ */
		  animation: jroot-loader-ani-spin 3s linear infinite;
		  /* Chrome, Firefox 16+, IE 10+, Opera */
		}

		.jroot-loader-wrapper .jroot-loader-innner-container:after {
		  content: "";
		  position: absolute;
		  top: 15px;
		  left: 15px;
		  right: 15px;
		  bottom: 15px;
		  border-radius: 50%;
		  border: 3px solid transparent;
		  border-top-color: #f9c922;
		  -webkit-animation: jroot-loader-ani-spin 1.5s linear infinite;
		  /* Chrome, Opera 15+, Safari 5+ */
		  animation: jroot-loader-ani-spin 1.5s linear infinite;
		  /* Chrome, Firefox 16+, IE 10+, Opera */
		}		
		@-webkit-keyframes jroot-loader-ani-spin {
		  0% {
			/* Chrome, Opera 15+, Safari 3.1+ */
			/* IE 9 */
			transform: rotate(0deg);
			/* Firefox 16+, IE 10+, Opera */
		  }

		  100% {
			/* Chrome, Opera 15+, Safari 3.1+ */
			/* IE 9 */
			transform: rotate(360deg);
			/* Firefox 16+, IE 10+, Opera */
		  }
		}

		@keyframes jroot-loader-ani-spin {
		  0% {
			/* Chrome, Opera 15+, Safari 3.1+ */
			/* IE 9 */
			transform: rotate(0deg);
			/* Firefox 16+, IE 10+, Opera */
		  }

		  100% {
			/* Chrome, Opera 15+, Safari 3.1+ */
			/* IE 9 */
			transform: rotate(360deg);
			/* Firefox 16+, IE 10+, Opera */
		  }
		}`
	},
	destory : function (){
		if(this._loader_tag != null) this._loader_tag.remove();
	},
	_convert_hex_rgb : function(color){
		color = color.replace('#','');
		console.log('color',color);
		var aRgbHex = color.match(/.{1,2}/g);
		var aRgb = [
			parseInt(aRgbHex[0], 16),
			parseInt(aRgbHex[1], 16),
			parseInt(aRgbHex[2], 16),
			parseFloat(this._options.bgTransparency/100)
		];
		console.log('aRgbHex',aRgbHex);
		console.log('aRgb',aRgb);
		return aRgb;
	}
	
}
