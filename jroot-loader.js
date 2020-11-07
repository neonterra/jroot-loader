var jroot_form = {
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
				this._options[key] = value;
			}
		}
	},
	render : function (options){
		this._update_options(options);
		this._generate_style();
		var text = this._options.text;
		var loader_html = `<div class="jroot_form jroot_form_modal">
								<div class="jroot_form_modal_cotainer">
									<div class="header">
										<h2>Payment form</h2>
										<button class="jroot_form-close-modal" onclick="jroot_form._jroot_modal_remove('jroot-form-wrapper')">x</button>
									</div
									<div class="jroot_form-body">
										<form action="" method="post">
											<div class="jf-row">
												<div class="jf-form-group">
													<label>Fullname</label>
													<input type="text" name="bacd" placeholder="type here..." >
												</div>
												<div class="jf-form-group">
													<button type="submit">Submit</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>`;
		this._loader_tag = document.createElement("div");
		this._loader_tag.className = 'jroot-form-wrapper';
		this._loader_tag.innerHTML = loader_html;
		this._loader_tag.style.background = this._convert_hex_rgb(this._options.bgColor);
		document.body.appendChild(this._loader_tag);
		
	},
	
	_generate_style: function (){
		var css = document.createElement('style'); 
		var styles = this._basic_style_css;
		css.type = 'text/css'; 
		if (css.styleSheet)  
			css.styleSheet.cssText = styles; 
		else  
			css.appendChild(document.createTextNode(styles)); 
		document.getElementsByTagName("head")[0].appendChild(css); 
	},
	_basic_style_css: `
		.jroot-form-wrapper {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			background: rgb(0 0 0 / 0.6);
			display: flex;
			justify-content: center;
		}

		.jroot-form-wrapper .jroot_form.jroot_form_modal {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			background: #fff;
		}

		.jroot_form_modal_cotainer {
			min-width: 400px;
			display: flex;
			flex-direction: column;
			width: 100%;
		}

		.jroot_form_modal_cotainer .header {
			display: flex;
			align-items: center;
			padding: 0 10px;
			border-bottom: 1px solid #dedede;
		}

		.jroot_form_modal_cotainer .header h2 {
			width: 100%;
			margin: 5px 0;
		}

		.jroot_form_modal_cotainer .jroot_form-body {
			width: 100%;
			float: left;
			padding: 10px 0;
		}

		.jroot_form_modal_cotainer .jroot_form-body form {
			float: left;
			width: 100%;
		}

		.jroot_form_modal_cotainer .jf-row {
			width: 100%;
			float: left;
		}

		.jroot_form_modal_cotainer .jf-form-group {
			display: flex;
			flex-direction: column;
			margin-bottom: 10px;
			padding: 0 20px;
		}

		.jroot_form_modal_cotainer .jf-form-group label {
			width: 100%;
			margin-bottom: 7px;
		}

		.jroot_form_modal_cotainer .jf-form-group input {padding: 10px;border: 1px solid #908e8e;}

		.jroot_form_modal_cotainer .jf-form-group button {
			max-width: 200px;
			padding: 10px;
			margin: 0 auto;
		}
	`,
	_convert_hex_rgb : function(color){
		color = color.replace('#','');
		var aRgbHex = color.match(/.{1,2}/g);
		var aRgb = [
			parseInt(aRgbHex[0], 16),
			parseInt(aRgbHex[1], 16),
			parseInt(aRgbHex[2], 16),
			parseFloat(this._options.bgTransparency/100)
		];
		return aRgb;
	}
	,
	_jroot_modal_remove : function (className){
		var elements = document.getElementsByClassName(className);
		while(elements.length > 0){
			elements[0].parentNode.removeChild(elements[0]);
		}
	}
}

