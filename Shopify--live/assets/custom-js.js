
(function(){
  console.log(window.location.href)
  let path = window.location.href;
  let pathNameCalculate = window.location.pathname;
  console.log(pathNameCalculate);
  
  if(path){
    //3D模型其它区域监听
    fb_xbike3D_introduce_point_otherClick = null;
    //3D模型是否监听
    xbike3D_introduce_point_addListen = false;
    // 首页xbike动画滚动计数
    homeXbikeScroll = 0;
    // 首页xbike动画图片计数
    homeXbikeImgNum = 0;
    // xbike页tabs点击记录
    fb_Xbike_Tabs_AnchorPoint = "";
//     path = path.split("?")[0];
    console.log(path);
    if(pathNameCalculate === "/"){
      window.onload = function () {
        if(document.getElementById("sct-timer-30729")){
        	document.getElementById("sct-timer-30729").addEventListener("click", function () {
              goXbikeFun();
            })
        }
        if(document.getElementById("block-1629726846f84e76ad-0")){
        	document.getElementById("block-1629726846f84e76ad-0").addEventListener("click", function () {
              goXbikeFun();
            })
        }
        let insta_feed = document.getElementById("shopify-section-template--14935822467257__16294530128e93c0ce");
          let insta_feed_load = setInterval(()=>{
            if (insta_feed && insta_feed.children[1] && insta_feed.children[1].children[0] && insta_feed.children[1].children[0].innerHTML){
              insta_feed.children[1].children[0].innerHTML = 'Follow us on Instagram <a href="https://www.instagram.com/freebeatfit/" target="_blank">@freebeatfit</a>';
              clearInterval(insta_feed_load);
            }
          }, 300);
      }
    }
    if(pathNameCalculate === "/pages/bikes"){
      window.onload = function () {
        let buttons = document.getElementsByClassName("shopify-payment-button__button--unbranded");
        if (buttons) {
          for (let i = 0; i < buttons.length; i++) {
            let item = buttons[i].getAttribute("class");
            buttons[i].setAttribute("class", `${item} fb_commodity_buttonM`)
            console.log(buttons[i].getAttribute("class"));
            console.log("commodity");
          }
        }
        let links = document.getElementsByClassName("Link--underline");
        console.log(links);
        links[0].setAttribute("href", "/pages/lit-bike-klarna");
        links[1].setAttribute("href", "/pages/lit-bike");
        links[2].setAttribute("href", "/pages/bike");
      }
    }
    //添加mixpanel
    if(mixpanel && localStorage.memberUserInfo){
      if(pathNameCalculate !== "/"){
        console.log("mixpanel", pathNameCalculate);
      	mixpanel.track(pathNameCalculate);
      } else {
        console.log("mixpanel", "home");
      	mixpanel.track("home");
      }
    }
    let exerciseInfoMes = getSessionStorage("exerciseInfo");
    console.log(exerciseInfoMes);
    //黑车页面
    if(pathNameCalculate === "/pages/lit-bike"){
      	// 首页xbike动画
// 		fbHomeXbikeAnimation();
      	document.addEventListener("click", function () {
          if(fb_xbike3D_introduce_point_otherClick){
            let xbike3D_img_introduce_point = document.getElementById(`xbike3D_img_introduce_${fb_xbike3D_introduce_point_otherClick}_point`);
            let xbike3D_img_introduce_point_con = document.getElementById(`xbike3D_img_introduce_${fb_xbike3D_introduce_point_otherClick}_point_con`);
            xbike3D_img_introduce_point.style.display = "block";
            xbike3D_img_introduce_point_con.style.display = "none";
            xbike3D_introduce_point_addListen = false;
            fb_xbike3D_introduce_point_otherClick = null;
          }
        });
 
      window.onload = function () {
          let insta_feed = document.getElementById("shopify-block-c4f8ef9e-352c-4b02-831b-216bb074d8a9");
          insta_feed.children[0].sheet.cssRules[1].style.color = "#fff";
          let insta_feed_load = setInterval(()=>{
            if (insta_feed && insta_feed.children[1] && insta_feed.children[1].children[0] && insta_feed.children[1].children[0].innerHTML){
              insta_feed.children[1].children[0].innerHTML = 'Follow us on Instagram <a href="https://www.instagram.com/freebeatfit/" style="color:#fff;" target="_blank">@freebeatfit</a>';
              clearInterval(insta_feed_load);
            }
          }, 300);
      }
    }
    //粉车页面
    if(pathNameCalculate === "/pages/lit-bike-klarna"){
      document.addEventListener("click", function () {
        if(fb_xbike3D_introduce_point_otherClick){
          let xbike3D_img_introduce_point = document.getElementById(`xbike3D_img_introduce_${fb_xbike3D_introduce_point_otherClick}_point`);
          let xbike3D_img_introduce_point_con = document.getElementById(`xbike3D_img_introduce_${fb_xbike3D_introduce_point_otherClick}_point_con`);
          xbike3D_img_introduce_point.style.display = "block";
          xbike3D_img_introduce_point_con.style.display = "none";
          xbike3D_introduce_point_addListen = false;
          fb_xbike3D_introduce_point_otherClick = null;
        }
      });
      window.onload = function () {
          let insta_feed = document.getElementById("shopify-block-c4f8ef9e-352c-4b02-831b-216bb074d8a9");
          let insta_feed_load = setInterval(()=>{
            if (insta_feed && insta_feed.children[1] && insta_feed.children[1].children[0] && insta_feed.children[1].children[0].innerHTML){
              insta_feed.children[1].children[0].innerHTML = 'Follow us on Instagram <a href="https://www.instagram.com/freebeatfit/" target="_blank">@freebeatfit</a>';
              clearInterval(insta_feed_load);
            }
          }, 300);
      }
    }
    //重定向
    if(pathNameCalculate === "/pages/charity"){
      window.location.href = "https://www.freebeatfit.com/products/xbike-coupon";
    }
    //5美元活动券
    if (pathNameCalculate === "/products/xbike-coupon"){
      let urlxbikecoupon = getURLparam();
      if (urlxbikecoupon.tc){
        console.log(document.getElementsByClassName("fb_pop_5DollarActivity_mask"));
        document.getElementsByClassName("fb_pop_5DollarActivity_mask")[0].style.display = "flex";
        setTimeout(()=>{
          document.getElementsByClassName("fb_pop_5DollarActivity_r_button_bg")[0].style.visibility = "visible";
        }, 3000);
      }
      if(urlxbikecoupon.isAssist === "true"){
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_title")[0].innerHTML = "EMAIL ADDRESS HAS ALREADY BEEN REGISTERED";
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_sub")[0].innerHTML = "Thank you again! We'll keep you posted on the latest news, updates and special offers.";
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_mask")[0].style.display = "flex";
      }
      if(urlxbikecoupon.isAssistMax === "true"){
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_title")[0].innerHTML = "Your friend has successfully received 4 free raffle tickets!";
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_sub")[0].innerHTML = "Thanks for participating!";
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_mask")[0].style.display = "flex";
      }
      if(urlxbikecoupon.isSuccess === "true"){
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_title")[0].innerHTML = "YOU’RE ALL SIGNED UP!";
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_sub")[0].innerHTML = "You're one step closer to your xbike...start earning your raffle tickets!";
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_mask")[0].style.display = "flex";
      }
      if(urlxbikecoupon.isSuccess === "false"){
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_title")[0].innerHTML = "REFERRAL UNSUCCESSFUL";
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_sub")[0].innerHTML = "Action unavailable. Please try again later.";
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_mask")[0].style.display = "flex";
      }
      if(urlxbikecoupon.customer_posted === "true" || (urlxbikecoupon["contact%5Btags%5D"] === "newsletter" && urlxbikecoupon.form_type === "customer")){
        document.getElementsByClassName("fb_pop_5DollarActivity_warn_mask")[0].style.display = "flex";
      }
//       if(urlxbikecoupon["contact%5Btags%5D"] === "newsletter" && urlxbikecoupon.form_type === "customer"){
//         document.getElementsByClassName("fb_pop_5DollarActivity_warn_title")[0].innerHTML = "YOU’VE ALREADY SIGNED UP!";
//         document.getElementsByClassName("fb_pop_5DollarActivity_warn_sub")[0].innerHTML = "Start earning your raffle tickets";
//         document.getElementsByClassName("fb_pop_5DollarActivity_warn_mask")[0].style.display = "flex";
//       }
    }
    //落地页1
    if (pathNameCalculate === "/pages/landingpage1" || pathNameCalculate === "/pages/landingpage2"){
      let urlLandingpage1 = getURLparam();
      if(JSON.stringify(urlLandingpage1) === "{}"){
      	let fb_pop_deliveryPlatform_mask = document.getElementsByClassName("fb_pop_deliveryPlatform_mask")[0];
        let fb_pop_deliveryPlatform_close = document.getElementsByClassName("fb_pop_deliveryPlatform_close")[0];
        console.log(fb_pop_deliveryPlatform_mask);
        console.log(fb_pop_deliveryPlatform_close);
        fb_pop_deliveryPlatform_mask.style.display = "flex";
        setTimeout(()=>{
          fb_pop_deliveryPlatform_close.style.visibility = "visible";
        }, 3000);
      }
      if(urlLandingpage1.customer_posted === "true" || (urlLandingpage1["contact%5Btags%5D"] === "newsletter" && urlLandingpage1.form_type === "customer")){
      	let ButtonGroup = document.getElementsByClassName('ButtonGroup__Item');
        console.log(ButtonGroup);
        for(let i = 0; i < ButtonGroup.length; i++){
          if(ButtonGroup[i].innerHTML === "BUY BIKE"){
          ButtonGroup[i].addEventListener("click", function(){
          localStorage.setItem('priceAnimation', 'true');
          ButtonGroup[i].setAttribute("href", "https://www.freebeatfit.com/discount/freebeat50?redirect=/products/xbike");
            });
        }
        }
      }
    }
    //临时针对url参数xbikeaddtocart=false
    if (pathNameCalculate === "/products/xbike"){
//       window.onload = function () {
//           let klarnaPlacement = setInterval(()=>{
//           if (document.getElementsByTagName("klarna-placement").length > 0 && document.getElementsByTagName("klarna-placement")[0].kpsr.children[0].children[1]){
//             document.getElementById("fb_klarnaLoading").style.display = "none";
//             clearInterval(klarnaPlacement);
//           }
//         }, 100);
//       }
      console.log(localStorage.getItem('priceAnimation'));
      let urlxbike = getURLparam();
      if (urlxbike.xbikeaddtocart === "false"){
        document.getElementById("xbike-add-to-cart-main").style.display = "none";
      }
      //  监听xbike页推广
      if (urlxbike.fbclid){
        let fb_pop_deliveryPlatform_mask = document.getElementsByClassName("fb_pop_deliveryPlatform_mask")[0];
        let fb_pop_deliveryPlatform_close = document.getElementsByClassName("fb_pop_deliveryPlatform_close")[0];
        console.log(fb_pop_deliveryPlatform_mask);
        console.log(fb_pop_deliveryPlatform_close);
        fb_pop_deliveryPlatform_mask.style.display = "flex";
        setTimeout(()=>{
          fb_pop_deliveryPlatform_close.style.visibility = "visible";
        }, 3000);
      }
      // 监听xbike页推广订阅
      if (urlxbike.customer_posted === "true" || (urlxbike["contact%5Btags%5D"] === "newsletter" && urlxbike.form_type === "customer") || localStorage.getItem('priceAnimation') === "true"){
        console.log("监听xbike页推广订阅");
        if(localStorage.getItem('priceAnimation') === "true"){
          localStorage.setItem('priceAnimation', 'false');
        }
        let fb_promotionPrice = document.getElementById("fb_promotionPrice");
        fb_promotionPrice.innerHTML = `<div class="fb_pop_container">
            <div>$9</div>
            <ul id="fb_pop_priceRolling" class="fb_pop_priceRolling">
                <li>9</li>
                <li>4</li>
            </ul>
            <div>9</div>
        </div>`;
        document.getElementById("fb_pop_priceRolling").style.animation = "moveUp 4s 1s linear";
        document.getElementById("fb_pop_priceRolling").style.animationFillMode = "forwards";
      }
    }
    if(pathNameCalculate === "/products/xbike-coupon" || pathNameCalculate === "/products/xbike" || pathNameCalculate === "/pages/landingpage1" || pathNameCalculate === "/pages/landingpage2" || pathNameCalculate === "/pages/try-now-sign-up-page" || pathNameCalculate === "/pages/membership"){
      let urlPromote = getURLparam();
      if (pathNameCalculate === "/products/xbike-promote" || urlPromote.fbclid){
        console.log(document.getElementsByClassName("NewsletterPopup"));
        document.getElementsByClassName("NewsletterPopup")[0].style.visibility = "hidden";
        newsletterPopupZoomOutFun();
        document.getElementById("mm-newsletter-button").style.visibility = "hidden";
      } else {
        document.getElementsByClassName("NewsletterPopup")[0].style.display = "none";
      }
    }
//     if(pathNameCalculate === "/pages/membership"){
//       let NewsletterPopupStatus = document.getElementsByClassName("NewsletterPopup")[0].getAttribute("aria-hidden");
//       document.getElementsByClassName("NewsletterPopup")[0].style.display = "none";
//     }
    if(pathNameCalculate === "/pages/calculate"){
//       console.log("比价信息页");
//       console.log(document.getElementById("content-r-button").getAttribute("disabled"));
//原有保存信息逻辑
//       if(exerciseInfoMes){
//         for(let i in exerciseInfoMes){
//           document.getElementById(i).value = exerciseInfoMes[i];
//           document.getElementById(i).setAttribute("data-isValue", "true");
//           let classValItem = document.getElementById(i).getAttribute("class");
//           classValItem = classValItem.replace("prohibitClick", "").replace("exerciseInfo-valueDisabled", "");
//           document.getElementById(i).setAttribute("class", classValItem);
//           console.log(document.getElementById(i));
//           if(document.getElementById(i).id === "exerciseInfoPeople"){
//             console.log("exerciseInfoPeople");
//             let classVal = document.getElementById(i).getAttribute("class");
//             classVal = classVal.replace("exerciseInfo-valueDisabled", "");
//             document.getElementById(i).setAttribute("class", classVal);
//           }
//         }
        //进度条样式
//         document.getElementById("progress1").style.height = `${33.33 * Object.keys(exerciseInfoMes).length}%`;
        //进度置灰效果
//         let exerciseInfoPriceAll = document.getElementById("exerciseInfo-price");
//         let classValPrice = exerciseInfoPriceAll.getAttribute("class");
//         classValPrice = classValPrice.concat(" exerciseInfo-price");
//         exerciseInfoPriceAll.setAttribute("class", classValPrice);
//         let exerciseInfoPriceAll = document.getElementById("exerciseInfo-price");
//         let classValPrice = exerciseInfoPriceAll.getAttribute("class");
//         classValPrice = classValPrice.concat(" exerciseInfo-price");
//         exerciseInfoPriceAll.setAttribute("class", classValPrice);
//         let exerciseInfoWeekAll = document.getElementById("exerciseInfo-week");
//         let classValWeek = exerciseInfoPriceAll.getAttribute("class");
//         classValWeek = classValWeek.concat(" exerciseInfo-week");
//         exerciseInfoWeekAll.setAttribute("class", classValWeek);
//         let contentRButton = document.getElementById("content-r-button");
//   		contentRButton.removeAttribute("disabled");
//         document.getElementById("exerciseInfo-people-arrow").style.borderTopColor = "rgba(51, 51, 51, 1)";
//         document.getElementById("exerciseInfo-week-arrow").style.borderTopColor = "rgba(51, 51, 51, 1)";
//       }
    }
    if(pathNameCalculate === "/pages/calculate-2"){
    	console.log("比价结果页");
      	if(exerciseInfoMes){
          calcPrice("staging");
          for(let i in exerciseInfoMes){
          document.getElementById(`${i}`).value = exerciseInfoMes[i];
      	}
      	}
    }
    if(pathNameCalculate === "/pages/membership"){
      if(localStorage.memberUserInfo){
        getMembership();
      }
    }

}
  
//  bick卖点特效
  function Effect(){
    this.sc_li = document.getElementsByClassName('sc-li');
    this.item_title = document.getElementsByClassName('item-title');
    this.sc_progress = document.getElementsByClassName('sc-progress');
    this.sc_info = document.getElementsByClassName('item-info');
    this.sc_dx = document.getElementsByClassName('sc-dx');
    this.timer = null
    this.proHeight = null
    this.setTimer = null
    this.height = 30
  }
  Effect.prototype = {
    init: function(){
      for (let i = 0; i < this.sc_li.length; i++) {
        this.sc_li[i].addEventListener("click", (e) => {
          this.activeFun(i)
        });
      }
    },
    activeFun: function(index){
      this.height = 30
      this.height2 = 30
      clearInterval(this.timer)
      clearInterval(this.proHeight)
      clearTimeout(this.setTimer)
      this.animation(index)
      let num = index + 1
      if (num === this.sc_progress.length) {
        num = 0
      }
      this.timer = setInterval(() => {
                               clearInterval(this.proHeight)
      clearTimeout(this.setTimer)
      this.animation(num)
      if (num === this.sc_progress.length - 1) {
        num = 0
      } else {
        num++
      }
    }, 5000)
  },
    animation: function(index){
      for (let i = 0; i < this.sc_progress.length; i++) {
        if (i === index) {
          this.sc_dx[i].style.opacity = "1"
          this.sc_progress[i].style.opacity = "1"
          this.sc_info[i].style.opacity = "1"
          this.sc_info[i].style.height = '92px'
          this.sc_li[i].style.pointerEvents = 'none'
          this.item_title[i].style.opacity = "1"
          this.height = 30
          this.proHeight = setInterval(() => {
                                       this.sc_progress[i].style.height = this.height++ + "%"
                                       }, 71.428571)
          this.setTimer = setTimeout(() => {
                                     clearInterval(this.proHeight)
          clearTimeout(this.setTimer)
        }, 5000)

      } else {
        this.height = 30
        this.sc_dx[i].style.opacity = "0"
        this.sc_li[i].style.pointerEvents = 'auto'
        this.sc_progress[i].style.opacity = "0"
        this.sc_progress[i].style.height = "30%"
        this.sc_info[i].style.opacity = 0
        this.sc_info[i].style.height = 0
        this.item_title[i].style.opacity = "0.5"
      }
    }
	}
 }

 var act = new Effect()
  act.init()
  act.activeFun(0)
// -------买点end--------
  
  
//   移动端自定义导航栏
  
  let nav_list = document.getElementsByClassName('nav-list');
	let nav_title = document.getElementsByClassName('nav-title');
	let tw_absolute = document.getElementsByClassName('tw-absolute');
	let arr = []
  for(let i = 0; i < nav_title.length; i++){

      nav_title[i].addEventListener("click",(e)=>{
        console.log(nav_list[i].children.length  )
        if(arr[i]){
        	nav_list[i].style.height = nav_list[i].children.length * 0 +'px'
            tw_absolute[i].classList.remove('icon_turn')
        	arr[i] = false
            
        } else {
        	nav_list[i].style.height = nav_list[i].children.length * 28 +'px'
            tw_absolute[i].classList.add('icon_turn')
        	arr[i] = true
        }
        
      });

    }
// -------移动端自定义导航栏end--------  

	


// 视频播放弹窗
    let play = document.getElementById('playVideo');
	let homeVideo = document.getElementById('video');
    let ButtonGroup = document.getElementsByClassName('ButtonGroup__Item'); 
	
    for(let i = 0; i < ButtonGroup.length; i++){
        if((ButtonGroup[i].getAttribute("href") == '#' || ButtonGroup[i].getAttribute("href") == 'Javascript:void(0)') && pathNameCalculate === "/"){
          ButtonGroup[i].setAttribute("href", "Javascript:void(0)")
          ButtonGroup[i].addEventListener("click", function(){
            if(window.screen.width <= 1024){
              homeVideo.setAttribute("src", "https://freebeat-static.s3.us-east-2.amazonaws.com/FREEBIKE+TVC-Full+ver.mp4");
            }else{
              homeVideo.setAttribute("src", "https://freebeat-static.s3.us-east-2.amazonaws.com/FREEBIKE+TVC-Full+ver.mp4");
            }
//             homeVideo.setAttribute("autoplay", "autoplay");
            homeVideo.play();
            let admin_iframe = document.getElementById('admin-bar-iframe');
// 			console.log(admin_iframe);
//             console.log(window.screen.width);
//             console.log(homeVideo.getAttribute("src"));
            play.style.display = "block";
            admin_iframe.style.display = "none";
            document.body.style.overflow = "hidden"; 
          })
        }
    }
    let close = document.getElementById('colsePlay');
    	close.addEventListener("click", function(){
      let admin_iframe = document.getElementById('admin-bar-iframe');
		console.log(admin_iframe)
      let video = document.getElementById('video');
      video.pause();
      play.style.display = "none";
      admin_iframe.style.display = "block";
      document.body.style.overflow = "auto"; 
    });
	
	let play2 = document.getElementById('playVideo2');
	let homeVideo2 = document.getElementById('video2');
   let Link_underline = document.getElementsByClassName('Link--underline')
   for(let i = 0; i < Link_underline.length; i++){
        if(Link_underline[i].getAttribute("href") == '#' || Link_underline[i].getAttribute("href") == 'Javascript:void(0)'){
          Link_underline[i].setAttribute("href", "Javascript:void(0)")
          Link_underline[i].addEventListener("click", function(){
            homeVideo2.play();
            let admin_iframe = document.getElementById('admin-bar-iframe');
			console.log(admin_iframe)
            play2.style.display = "block";
            admin_iframe.style.display = "none";
            document.body.style.overflow = "hidden"; 
          })
        }
    }
    let close2 = document.getElementById('colsePlay2');
    	close2.addEventListener("click", function(){
      let video2 = document.getElementById('video2');
      video2.pause();
      let admin_iframe = document.getElementById('admin-bar-iframe');
		console.log(admin_iframe)
      play2.style.display = "none";
      admin_iframe.style.display = "block";
      document.body.style.overflow = "auto"; 
    });

	let play3 = document.getElementById('playVideo3');
      let homeVideo3 = document.getElementById('video3');
      let ButtonGroup3 = document.getElementsByClassName('ButtonGroup__Items');
      for(let i = 0; i < ButtonGroup3.length; i++){
      if(ButtonGroup3[i].getAttribute("href") == '#' || ButtonGroup3[i].getAttribute("href") == 'Javascript:void(0)'){
        ButtonGroup3[i].setAttribute("href", "Javascript:void(0)")
        ButtonGroup3[i].addEventListener("click", function(){
          homeVideo3.play();
          let admin_iframe = document.getElementById('admin-bar-iframe');
          console.log(admin_iframe)
          play3.style.display = "block";
          admin_iframe.style.display = "none";
          document.body.style.overflow = "hidden";
        })
      }
      }
      let close3 = document.getElementById('colsePlay3');
      close3.addEventListener("click", function(){
        let video3 = document.getElementById('video3');
        video3.pause();
        let admin_iframe = document.getElementById('admin-bar-iframe');
        console.log(admin_iframe)
        play3.style.display = "none";
        admin_iframe.style.display = "block";
        document.body.style.overflow = "auto";
      });

    let play4 = document.getElementById('playVideo4');
      let homeVideo4 = document.getElementById('video4');
      let ButtonGroup4 = document.getElementsByClassName('ButtonGroup__Item_KlarnaLimitedEdition');
      for(let i = 0; i < ButtonGroup4.length; i++){
        if(ButtonGroup4[i].getAttribute("href") == '#' || ButtonGroup4[i].getAttribute("href") == 'Javascript:void(0)'){
          ButtonGroup4[i].setAttribute("href", "Javascript:void(0)")
          ButtonGroup4[i].addEventListener("click", function(){
            homeVideo4.play();
            let admin_iframe = document.getElementById('admin-bar-iframe');
            console.log(admin_iframe)
            play4.style.display = "block";
            admin_iframe.style.display = "none";
            document.body.style.overflow = "hidden";
          })
        }
      }
      let close4 = document.getElementById('colsePlay4');
      close4.addEventListener("click", function(){
        let video4 = document.getElementById('video4');
        video4.pause();
        let admin_iframe = document.getElementById('admin-bar-iframe');
        console.log(admin_iframe)
        play4.style.display = "none";
        admin_iframe.style.display = "block";
        document.body.style.overflow = "auto";
      });
// -------视频播放end--------



// membership
  let login = document.getElementById('login')
   
  if(login){
      let memberUserInfo = localStorage.memberUserInfo
      if(!memberUserInfo){
          document.getElementById('loginModel').style.display = "block"
          document.getElementById('memeberShip').style.display = "none"
      }else{
          document.getElementById('loginModel').style.display = "none"
          document.getElementById('memeberShip').style.display = "block"
      }

  }



//比价初始化
// 	let exerciseInfoPeople = document.getElementById('exerciseInfoPeople').value;
// 	let exerciseInfoPeopleIsValue = document.getElementById('exerciseInfoPeople').getAttribute('data-isValue');
// 	console.log('exerciseInfoPeople------', exerciseInfoPeople);
// 	console.log('exerciseInfoPeopleIsValue------', exerciseInfoPeopleIsValue);
// console.log('exerciseInfoPeopleIsValue------', typeof exerciseInfoPeopleIsValue);
// if(exerciseInfoPeopleIsValue === "false"){
//   console.log(1);
// document.getElementById('exerciseInfoPeople').className += " unselected";
//   let exerciseInfoArr = ['exerciseInfo-people', 'exerciseInfo-price', 'exerciseInfo-week']
//   loopSettingStyle(exerciseInfoArr, 'unselected');
// }


// setSessionStorage("exerciseInfo", {exerciseInfoPeople: "3", exerciseInfoPrice: 789456856, exerciseInfoWeek: "2"});

//监听数据变化
// let exerciseInfoPeople = document.getElementById('exerciseInfoPeople');
// exerciseInfoPeople.addEventListener('change', addEveListenMes);
// // let exerciseInfoPeople = document.getElementById('exerciseInfoPeople');
// // let aaa = getURLparam();
// // 	let exerciseInfoMesId = 
//   let exerciseInfoMes = getSessionStorage("exerciseInfo");
//   if(exerciseInfoMes){
//     console.log('有数据', exerciseInfoMes);
//     for(let i in exerciseInfoMes){
//       document.getElementById(i).value = exerciseInfoMes[i];
//       document.getElementById(i).setAttribute("data-isValue", "true");
//     }
//     //进度条样式
//     document.getElementById("progress1").style.height = `${33.33 * Object.keys(exerciseInfoMes).length}%`;
//     //按钮样式
    
//   }
console.log('比价页加载');

//比价初始化结束

// ---------------
/* 彩车添加心愿单 */
if(pathNameCalculate === "/pages/lit-bike-colors"){
//   let images = new Array();
//     function preload() {
//       for (i = 0; i < preload.arguments.length; i++) {
//         images[i] = new Image();
//         images[i].src = preload.arguments[i];
//       }
//     }
//     preload(
//       "https://static.freebeatfit.com/campaign/SMOKE_WHITE.gif",
//       "https://static.freebeatfit.com/campaign/AQUA_BLUE.gif",
//       "https://static.freebeatfit.com/campaign/DISCO_BRONZE.gif",
//     );
//获取元素
   
    let optionItems = document.querySelectorAll(".options li");
    let cardItems = document.querySelectorAll(".card li");
    // 给每个选项 绑定单击事件
    for (let i = 0; i < optionItems.length; i++) {
      optionItems[i].index = i; //每个options下的li添加一个index属性
      optionItems[i].onclick = function () {
        for (let j = 0; j < optionItems.length; j++) {
          optionItems[j].classList.remove("active");
          cardItems[j].classList.remove("active");
          optionItems[j].classList.remove("activeM");
          cardItems[j].classList.remove("activeM");
        }
        this.classList.add("active");
        cardItems[this.index].classList.add("active");
        this.classList.add("activeM");
        cardItems[this.index].classList.add("activeM");
      };
    }
    //获取元素
    let pop = document.querySelector(".popFrame");
    let mask = document.querySelector("#mask");
    let addToWish = document.querySelector(".addToWish");
    let closeBtn = document.querySelector("#vote_reject");
    let subBtn = document.querySelector("#vote_resolve");
    let colorCard = document.getElementById("card_color_all");
    let everyColor = document.querySelectorAll(".card_color_all div span");
    let colorBorder = document.querySelectorAll(".card_color_all div");
    let colorDes = document.querySelector(".color_des");
    let email = document.getElementById("e-mail");
    let img_swiper = document.querySelector(".fb_vote_swiper");
    let success = document.querySelector(".success");
    let timestamp = "";
	let imgList = [
      {src: "https://static.freebeatfit.com/campaign/SMOKE_WHITE.gif", isloading: true},
      {src: "https://static.freebeatfit.com/campaign/AQUA_BLUE.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/DISCO_BRONZE.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/CAUTION_MATTE.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/TECHNO_GREY.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/MIDNIGHT_ABYSS.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/SCORCH_RED.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/BLUE_STING.gif", isloading: false},
// 	  {src: "https://static.freebeatfit.com/campaign/RAZZLE_CHROME.gif", isloading: false},
//       {src: "https://static.freebeatfit.com/campaign/PURPLE_PRINCE.gif", isloading: false},
//       第二组
      {src: "https://static.freebeatfit.com/campaign/SMOKE_WHITE.gif", isloading: true},
      {src: "https://static.freebeatfit.com/campaign/AQUA_BLUE.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/DISCO_BRONZE.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/CAUTION_MATTE.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/TECHNO_GREY.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/MIDNIGHT_ABYSS.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/SCORCH_RED.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/BLUE_STING.gif", isloading: false},
// 	  {src: "https://static.freebeatfit.com/campaign/RAZZLE_CHROME.gif", isloading: false},
//       {src: "https://static.freebeatfit.com/campaign/PURPLE_PRINCE.gif", isloading: false},
    ];
    let mbImgList = [
      {src: "https://static.freebeatfit.com/campaign/SMOKE_WHITE_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/AQUA_BLUE_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/DISCO_BRONZE_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/CAUTION_MATTE_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/TECHNO_GREY_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/MIDNIGHT_ABYSS_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/SCORCH_RED_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/BLUE_STING_mb.gif", isloading: false},
//       {src: "https://static.freebeatfit.com/campaign/RAZZLE_CHROME_mb.gif", isloading: false},
//       {src: "https://static.freebeatfit.com/campaign/PURPLE_PRINCE_mb.gif", isloading: false},
//       第二组
      {src: "https://static.freebeatfit.com/campaign/SMOKE_WHITE_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/AQUA_BLUE_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/DISCO_BRONZE_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/CAUTION_MATTE_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/TECHNO_GREY_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/MIDNIGHT_ABYSS_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/SCORCH_RED_mb.gif", isloading: false},
      {src: "https://static.freebeatfit.com/campaign/BLUE_STING_mb.gif", isloading: false},
//       {src: "https://static.freebeatfit.com/campaign/RAZZLE_CHROME_mb.gif", isloading: false},
//       {src: "https://static.freebeatfit.com/campaign/PURPLE_PRINCE_mb.gif", isloading: false}
    ];
   let deviceImgList = []
    
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      deviceImgList = mbImgList
    } else {
      deviceImgList = imgList
    }
  	img_swiper.children[0].setAttribute("src", deviceImgList[0].src);
    //添加边框
      for (let i = 0; i < colorBorder.length; i++) {
      colorBorder[i].onclick = function () {
        for (let j = 0; j < colorBorder.length; j++) {
          colorBorder[j].classList.remove("card_border");
        }
        this.classList.add("card_border");
        
        const teemoimgLoad =  (v) => {
          return new Promise(resolve => {
            const img = new Image()
            img.src = v
            img.onload = () => resolve({width: img.width || '', height: img.height || ''})
          })
        }
        if(!deviceImgList[i].isloading) {
          img_swiper.children[0].setAttribute("src", "");
//           img_swiper.children[1].setAttribute("src", "");
          document.querySelector(".teemo-use-loading").style.display = "block"
//           img_swiper.children[0].style.visibility = "hidden"
          teemoimgLoad(deviceImgList[i].src).then(data=>{
            deviceImgList[i].isloading = true
            document.querySelector(".teemo-use-loading").style.display = "none"
//              img_swiper.children[0].style.visibility = "visible"
            img_swiper.children[0].setAttribute("src", deviceImgList[i].src);
//             img_swiper.children[1].setAttribute("src", mbImgList[i].src);
          }).catch(() => {
            img_swiper.children[0].setAttribute("src", '');
//             img_swiper.children[1].setAttribute("src", '');
          })
        } else {
          document.querySelector(".teemo-use-loading").style.display = "none"
          img_swiper.children[0].setAttribute("src", deviceImgList[i].src);
//           img_swiper.children[1].setAttribute("src", mbImgList[i].src);
        }
      };
    }
    //点击添加心愿單
    addToWish.onclick = function () {
      timestamp = new Date().getTime();
      localStorage.setItem("timestamp", timestamp);
      localStorage.setItem("color", colorDes.innerHTML);
      // https://api.freebeatfit.com/
      fetch("https://api.freebeatfit.com/litbike/submitcolor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "",
          color: colorDes.innerHTML,
          submitTime: timestamp,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.code === 200) {
            console.log(data);
          } else {
            console.log("error");
          }
        });
      pop.style.display = "block";
      mask.style.display = "block";
      console.log(timestamp);
    };
    subBtn.onclick = function () {
      let pattern =
        /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
      if (pattern.test(email.value)) {
        fetch("https://api.freebeatfit.com/litbike/submitcolor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            color: colorDes.innerHTML,
            submitTime: timestamp,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.code === 200) {
              console.log(data);
            } else {
              console.log("error");
            }
          });
        success.style.display = "block";
        let setTimerClose = setTimeout(() => {
          success.style.display = "none";
          mask.style.display = "none";
          clearTimeout(setTimerClose);
        }, 5000);
      } else {
        alert("invalid email");
        mask.style.display = "none";
      }
      email.value = "";
      pop.style.display = "none";
//       mask.style.display = "none";
    };
    closeBtn.onclick = function () {
      pop.style.display = "none";
      mask.style.display = "none";
    };
    for (let i = 0; i < everyColor.length; i++) {
      everyColor[i].onclick = function () {
        // 替换文字
        colorDes.innerHTML = everyColor[i].id.replace("_", " ");
        
      };
    }
}
/* 彩车添加心愿单End */
})()


//推广弹窗关闭
function fbPopClose(){
  newsletterPopupZoomOutFun();
  setTimeout(()=>{
    document.getElementsByClassName("fb_pop_deliveryPlatform_mask")[0].style.display = "none";
  	document.getElementById("mm-newsletter-button").style.visibility = "visible";
  	document.getElementsByClassName("NewsletterPopup")[0].style.visibility = "visible";
  }, 500);
}

//比价开始
//tab 计算价格
function calcPrice(param){
  let fb_xbike_currentPrice = 849;
  let fb_xbike_36installmentsPrice = 23.58;
  let fb_courseMember_originalPricePerMonth = 39;
  let fb_combinedPrice_perMonth36installments = 62.58;
  console.log(param);
  let exerciseInfoMes = getSessionStorage("exerciseInfo");
  console.log(exerciseInfoMes);
  let tabPriceL = document.getElementById("tabPrice-l");
  let costPerWorkoutL = document.getElementById("costPerWorkout-l");
  let costOverTimeL = document.getElementById("costOverTime-l");
  let tabPriceR = document.getElementById("tabPrice-r");
  let tabPriceTextL = document.getElementById("tabPriceText-l");
  let tabPriceTextR = document.getElementById("tabPriceText-r");
  let costPerWorkoutR = document.getElementById("costPerWorkout-r");
  let costOverTimeR = document.getElementById("costOverTime-r");
  let savingsOverTimeR = document.getElementById("savingsOverTime-r");
  let priceInfoAnnotation = document.getElementById("priceInfo-annotation");
  let priceInfoAnnotationAll = document.getElementById("priceInfo-annotation-all");
  let priceInfoAnnotationPrice = document.getElementById("priceInfo-annotationPrice");
  let price = Number(exerciseInfoMes.exerciseInfoPrice);
  let people = Number(exerciseInfoMes.exerciseInfoPeople);
  let week = Number(exerciseInfoMes.exerciseInfoWeek);
  if(exerciseInfoMes){
    tabPriceL.innerHTML = `$${exerciseInfoMes.exerciseInfoPrice}`;
    costPerWorkoutL.children[1].innerHTML = `<td>$${(price * 12 / (people * week * 4 * 12)).toFixed(2)}</td>`;
    costPerWorkoutL.children[2].innerHTML = `<td>$${(price * 12 * 3 / (people * week * 4 * 12 * 3)).toFixed(2)}</td>`;
    costPerWorkoutL.children[3].innerHTML = `<td>$${(price * 12 * 5 / (people * week * 4 * 12 * 5)).toFixed(2)}</td>`;
    costOverTimeL.children[1].innerHTML = `<td>$${price * 12}</td>`;
    costOverTimeL.children[2].innerHTML = `<td>$${price * 12 * 3}</td>`;
    costOverTimeL.children[3].innerHTML = `<td>$${price * 12 * 5}</td>`;
  }
  if(param === "staging"){
    console.log("staging");
  	tabPriceR.innerHTML = `$${35.37}`;
    tabPriceTextL.innerHTML = `After 45 days, your breakdown with xbike is $${fb_combinedPrice_perMonth36installments}/mo. Based on $${fb_xbike_36installmentsPrice}/mo bike financing offer and $${fb_courseMember_originalPricePerMonth}/mo all-access membership.`;
    tabPriceTextR.innerHTML = `After 45 days, your breakdown with xbike is $${fb_combinedPrice_perMonth36installments}/mo. Based on $${fb_xbike_36installmentsPrice}/mo bike financing offer and $${fb_courseMember_originalPricePerMonth}/mo all-access membership.`;
    costPerWorkoutR.children[1].innerHTML = `<td>$${((30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * 10) / (people * week * 4 * 12)).toFixed(2)}</td>`;
    costPerWorkoutR.children[2].innerHTML = `<td>$${((30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * (10 + 12 * 2)) / (people * week * 4 * 12 * 3)).toFixed(2)}</td>`;
    costPerWorkoutR.children[3].innerHTML = `<td>$${(fb_courseMember_originalPricePerMonth * (12 * 5) / (people * week * 4 * 12 * 5)).toFixed(2)}</td>`;
    costOverTimeR.children[1].innerHTML = `<td>$${30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * 10}</td>`;
    costOverTimeR.children[2].innerHTML = `<td>$${30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * (10 + 12 * 2)}*</td>`;
    costOverTimeR.children[3].innerHTML = `<td>$${30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * (10 + 12 * 2) + fb_courseMember_originalPricePerMonth * 12 * 2}</td>`;
    savingsOverTimeR.children[1].innerHTML = `<td>${price * 12 - (30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * 10) > 0 ? `$${price * 12 - (30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * 10)}` : `N/A`}</td>`;
    savingsOverTimeR.children[2].innerHTML = `<td>${price * 12 * 3 - (30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * (10 + 12 * 2)) > 0 ? `$${price * 12 * 3 - (30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * (10 + 12 * 2))}` : `N/A`}</td>`;
    savingsOverTimeR.children[3].innerHTML = `<td>${price * 12 * 5 - (30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * (10 + 12 * 2) + fb_courseMember_originalPricePerMonth * 12 * 2) > 0 ? `$${price * 12 * 5 - (30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * (10 + 12 * 2) + fb_courseMember_originalPricePerMonth * 12 * 2)}` : `N/A`}</td>`;
    priceInfoAnnotationPrice.innerHTML = `*End of 3 years of financing`;
//     let baseYear = Number((price / ((30 + (30 + 19) + (30 + fb_courseMember_originalPricePerMonth) * 10) / 12)).toFixed(2));
//     let priceInfoAnnotationText = "";
//     console.log(baseYear);
//     if(baseYear < 1){
//       console.log("<1");
//       priceInfoAnnotationText = `${Math.floor(baseYear * 12)} month`;
//     } else if(baseYear === 1){
//       console.log("=1");
//       priceInfoAnnotationText = `${baseYear} year`;
//     } else if(baseYear > 1){
//       console.log(">>>>>1");
//       if(baseYear%1 !== 0){
//         let cuttingYear = Math.trunc(baseYear);
//         let cutDecimals = baseYear - cuttingYear;
//         priceInfoAnnotationText = `${cuttingYear} years  ${Math.floor(cutDecimals * 12)} month`;
//       } else {
//         priceInfoAnnotationText = `${baseYear} years`;
//       }
//     }
//     priceInfoAnnotation.innerHTML = priceInfoAnnotationText;
  }
  if(param === "fullSmount"){
  	tabPriceR.innerHTML = `$${0}`;
    tabPriceTextL.innerHTML = `After $${fb_xbike_currentPrice} xbike purchase. $${fb_courseMember_originalPricePerMonth}/mo all-access membership fee after 45-day free trial.`;
    tabPriceTextR.innerHTML = `After $${fb_xbike_currentPrice} xbike purchase. $${fb_courseMember_originalPricePerMonth}/mo all-access membership fee after 45-day free trial.`;
    costPerWorkoutR.children[1].innerHTML = `<td>$${((fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * 10) / (people * week * 4 * 12)).toFixed(2)}</td>`;
    costPerWorkoutR.children[2].innerHTML = `<td>$${( fb_courseMember_originalPricePerMonth * (12 * 3) / (people * week * 4 * 12 * 3)).toFixed(2)}</td>`;
    costPerWorkoutR.children[3].innerHTML = `<td>$${((fb_courseMember_originalPricePerMonth * (12 * 5)) / (people * week * 4 * 12 * 5)).toFixed(2)}</td>`;
    costOverTimeR.children[1].innerHTML = `<td>$${fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * 10}*</td>`;
    costOverTimeR.children[2].innerHTML = `<td>$${fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * (10 + 12 * 2)}</td>`;
    costOverTimeR.children[3].innerHTML = `<td>$${fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * (10 + 12 * 4)}</td>`;
    savingsOverTimeR.children[1].innerHTML = `<td>${price * 12 - (fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * 10) > 0 ? `$${price * 12 - (fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * 10)}` : `N/A`}</td>`;
    savingsOverTimeR.children[2].innerHTML = `<td>${price * 12 * 3 - (fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * (10 + 12 * 2)) > 0 ? `$${price * 12 * 3 - (fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * (10 + 12 * 2))}` : `N/A`}</td>`;
    savingsOverTimeR.children[3].innerHTML = `<td>${price * 12 * 5 - (fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * (10 + 12 * 4)) > 0 ? `$${price * 12 * 5 - (fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * (10 + 12 * 4))}` : `N/A`}</td>`;
    priceInfoAnnotationPrice.innerHTML = `*xbike payment included in Year 1 costs`;
    let baseMonth = Math.floor(fb_xbike_currentPrice / (price - fb_courseMember_originalPricePerMonth));
//     console.log(baseMonth);
    if(baseMonth < 12){
      priceInfoAnnotation.innerHTML = `${baseMonth} months`;
    } else if(baseMonth === 12){
      priceInfoAnnotation.innerHTML = `${1} year`;
    } else if(baseMonth > 12){
      if(baseMonth % 12 === 0){
        priceInfoAnnotation.innerHTML = `${baseMonth / 12} years`;
      } else {
        priceInfoAnnotation.innerHTML = `${Math.trunc(baseMonth / 12)} years  ${baseMonth % 12} months`;
      }
    }
    
//     let baseYear = Number((price / ((fb_xbike_currentPrice + 19 + fb_courseMember_originalPricePerMonth * 10) / 12)).toFixed(2));
//     let priceInfoAnnotationText = "";
//     console.log(baseYear);
//     if(baseYear < 1){
//       console.log("<1");
//       priceInfoAnnotationText = `${Math.floor(baseYear * 12)} month`;
//     } else if(baseYear === 1){
//       console.log("=1");
//       priceInfoAnnotationText = `${baseYear} year`;
//     } else if(baseYear > 1){
//       console.log(">>>>>1");
//       if(baseYear%1 !== 0){
//         let cuttingYear = Math.trunc(baseYear);
//         let cutDecimals = baseYear - cuttingYear;
//         if(Math.floor(cutDecimals * 12) === 0){
//           priceInfoAnnotationText = `${cuttingYear} year`;
//         } else if(Math.floor(cutDecimals * 12) === 12){
//           priceInfoAnnotationText = `${cuttingYear + 1} years`;
//         } else {
//           priceInfoAnnotationText = `${cuttingYear} years  ${Math.floor(cutDecimals * 12)} month`;
//         }
//       } else {
//         priceInfoAnnotationText = `${baseYear} years`;
//       }
//     }
//     priceInfoAnnotation.innerHTML = priceInfoAnnotationText;
  }
  if(price > fb_courseMember_originalPricePerMonth){
      let baseMonth = Math.floor(fb_xbike_currentPrice / (price - fb_courseMember_originalPricePerMonth));
      console.log(baseMonth);
      if(baseMonth < 12){
        priceInfoAnnotation.innerHTML = `${baseMonth} months`;
      } else if(baseMonth === 12){
        priceInfoAnnotation.innerHTML = `${1} year`;
      } else if(baseMonth > 12){
        if(baseMonth % 12 === 0){
          priceInfoAnnotation.innerHTML = `${baseMonth / 12} years`;
        } else {
          priceInfoAnnotation.innerHTML = `${Math.trunc(baseMonth / 12)} years  ${baseMonth % 12} months`;
        }
      }
      let classVal = priceInfoAnnotationAll.getAttribute("class");
      classVal = classVal.replace(/priceInfo-visibility/g, "");
      priceInfoAnnotationAll.setAttribute("class", classVal);
    } else {
      let classVal = priceInfoAnnotationAll.getAttribute("class");
      classVal = classVal.concat(" priceInfo-visibility");
      priceInfoAnnotationAll.setAttribute("class", classVal);
    }
}
//tab切换
function tabSelectedFun(param){
  let tabStaging = document.getElementById("tabStaging");
  let tabFullSmount = document.getElementById("tabFullSmount");
  if(param === "staging"){
  	let classValTabStaging = tabStaging.getAttribute("class");
    classValTabStaging = classValTabStaging.concat(" tab-a-selected");
    tabStaging.setAttribute("class", classValTabStaging);
    
    let classValTabFullSmount = tabFullSmount.getAttribute("class");
    classValTabFullSmount = classValTabFullSmount.replace("tab-a-selected", "");
    tabFullSmount.setAttribute("class", classValTabFullSmount);
    
    calcPrice("staging");
  }
  if(param === "fullSmount"){
    console.log("fullSmount");
    let classValTabStaging = tabStaging.getAttribute("class");
    classValTabStaging = classValTabStaging.replace("tab-a-selected", "");
    tabStaging.setAttribute("class", classValTabStaging);
    
    let classValTabFullSmount = tabFullSmount.getAttribute("class");
    classValTabFullSmount = classValTabFullSmount.concat(" tab-a-selected");
    tabFullSmount.setAttribute("class", classValTabFullSmount);
    
    calcPrice("fullSmount");
  }
}
function exerciseInfoPeoplefocusFun(param){
  console.log(param);
  console.log(typeof param.value);
  if(param.children[0].value === ""){
    param.value = "null";
    param.removeChild(param.children[0]);
  }
}
function exerciseInfoPeopleselectFun(param){
  console.log(param);
}
function exerciseInfoPeopleOptionFun(param){
  console.log(param);
}
//人数
function exerciseInfoPeopleFun(param){
  console.log(param); 
//   let exerciseInfoPeople = document.getElementById('exerciseInfoPeople');
//   console.log(exerciseInfoPeople);
  let classValParam = param.getAttribute("class");
  classValParam = classValParam.replace("exerciseInfo-valueDisabled", "");
  param.setAttribute("class", classValParam);
  param.setAttribute("data-isValue", "true");
  let progress1 = document.getElementById("progress1");
  let exerciseInfoPrice = document.getElementById("exerciseInfoPrice");
  let exerciseInfoPriceAll = document.getElementById("exerciseInfo-price");
  progress1.className += " progress1";
  let classVal = exerciseInfoPrice.getAttribute("class");
  classVal = classVal.replace("prohibitClick", "");
  exerciseInfoPrice.setAttribute("class", classVal);
  let classValAll = exerciseInfoPriceAll.getAttribute("class");
  classValAll = classValAll.concat(" exerciseInfo-price");
  exerciseInfoPriceAll.setAttribute("class", classValAll);
  document.getElementById("exerciseInfo-people-arrow").style.borderTopColor = "rgba(51, 51, 51, 1)";
}
//价格
function exerciseInfoPriceFun(param){
  console.log(param);
  let progress1 = document.getElementById("progress1");
  let exerciseInfoWeek = document.getElementById("exerciseInfoWeek");
  let exerciseInfoWeekAll = document.getElementById("exerciseInfo-week");
  let contentRButton = document.getElementById("content-r-button");
  let content1LButton = document.getElementById("content1-l-button");
  param.value = param.value.replace(/[^\d]/g, "").replace(/\./g, "");
  if(param.value.length > 4){
    let tempValue = String(param.value).slice(0, 4);
//     console.log(tempValue);
    param.value = Number(tempValue);
  }
//   console.log(typeof param.value.length);
//   progress1.className += " progress2";
  if(param.value.length > 0){
  	param.setAttribute("data-isValue", "true");
    let classVal = progress1.getAttribute("class");
  	classVal = classVal.concat(" progress2", "");
  	progress1.setAttribute("class", classVal);
    
    let classValWeek = exerciseInfoWeek.getAttribute("class");
    classValWeek = classValWeek.replace("prohibitClick", "");
    exerciseInfoWeek.setAttribute("class", classValWeek);
    
    let classValWeekAll = exerciseInfoWeekAll.getAttribute("class");
    classValWeekAll = classValWeekAll.concat(" exerciseInfo-week");
    exerciseInfoWeekAll.setAttribute("class", classValWeekAll);
    
    if(exerciseInfoWeek.value !== ""){
      contentRButton.removeAttribute("disabled");
      content1LButton.removeAttribute("disabled");
      progress1.className += " progress3";
    }
  } else {
  	param.setAttribute("data-isValue", "false");
    let classVal = progress1.getAttribute("class");
  	classVal = classVal.replace(/progress2/g, "").replace(/progress3/g, "");
  	progress1.setAttribute("class", classVal);
    
    let classValWeek = exerciseInfoWeek.getAttribute("class");
    classValWeek = classValWeek.concat(" prohibitClick", "");
    exerciseInfoWeek.setAttribute("class", classValWeek);
    
    let classValWeekAll = exerciseInfoWeekAll.getAttribute("class");
    classValWeekAll = classValWeekAll.replace(/exerciseInfo-week/g, "");
    exerciseInfoWeekAll.setAttribute("class", classValWeekAll);
    
    contentRButton.setAttribute("disabled", "disabled");
    content1LButton.setAttribute("disabled", "disabled");
  }
}
//价格 比较页
function exerciseInfoPriceCompareFun(param){
  param.value = param.value.replace(/[^\d]/g, "").replace(/\./g, "");
  if(param.value.length > 4){
    let tempValue = String(param.value).slice(0, 4);
    param.value = Number(tempValue);
  }
  let content1LButton = document.getElementById("content1-l-button");
  if(param.value.length > 0){
    content1LButton.removeAttribute("disabled");
  } else {
    content1LButton.setAttribute("disabled", "disabled");
  }
}
//价格 获取焦点
function exerciseInfoPriceFocusFun(param){
  
}
//时间
function exerciseInfoWeekFun(param){
  let progress1 = document.getElementById("progress1");
  progress1.className += " progress3";
  let classVal = param.getAttribute("class");
  classVal = classVal.replace("prohibitClick", "").replace("exerciseInfo-valueDisabled", "");
  param.setAttribute("class", classVal);
  param.setAttribute("data-isValue", "true");
  let contentRButton = document.getElementById("content-r-button");
  contentRButton.removeAttribute("disabled");
  document.getElementById("exerciseInfo-week-arrow").style.borderTopColor = "rgba(51, 51, 51, 1)";
}
//监听数据变化
function addEveListenMes(e){
//   console.log(e.target.value);
  if(e.target.value.length){
//     let exerciseInfoPeople = document.getElementById('exerciseInfoPeople');
//     console.log(exerciseInfoPeople);
//     exerciseInfoPeople.setAttribute("data-isValue", "true");
  }
}
//数组id循环设置class样式
function loopSettingStyle(arr, className){
  console.log(1333);
  for(let i = 0; i < arr.length; i++){
    document.getElementById(arr[i]).className += ` ${className}`;
  }
}
//跳转比价页
function goCalculate1(){
  let exerciseInfoPeople = document.getElementById("exerciseInfoPeople");
  let exerciseInfoPrice = document.getElementById("exerciseInfoPrice");
  let exerciseInfoWeek = document.getElementById("exerciseInfoWeek");
  if(exerciseInfoPeople.getAttribute("data-isValue") !== "true" || exerciseInfoPrice.getAttribute("data-isValue") !== "true" || exerciseInfoWeek.getAttribute("data-isValue") !== "true") return;
//   setSessionStorage("exerciseInfo", {exerciseInfoPeople: "3", exerciseInfoPrice: 789456856, exerciseInfoWeek: "2"});
  let mes = {
    exerciseInfoPeople: exerciseInfoPeople.value,
    exerciseInfoPrice: exerciseInfoPrice.value,
    exerciseInfoWeek: exerciseInfoWeek.value
  }
  setSessionStorage("exerciseInfo", mes);
  window.location.href=`/pages/calculate-2`;
}
//跳转信息页
function goCalculate(){
//   window.location.href=`/pages/calculate`;
  let exerciseInfoPeople = document.getElementById("exerciseInfoPeople");
  let exerciseInfoPrice = document.getElementById("exerciseInfoPrice");
  let exerciseInfoWeek = document.getElementById("exerciseInfoWeek");
  let mes = {
    exerciseInfoPeople: exerciseInfoPeople.value,
    exerciseInfoPrice: exerciseInfoPrice.value,
    exerciseInfoWeek: exerciseInfoWeek.value
  }
  setSessionStorage("exerciseInfo", mes);
  let currentTab = document.getElementsByClassName("tab-a-selected");
  console.log(currentTab[0].children[0].innerText);
  if(currentTab[0].children[0].innerText === "PAY OVER TIME"){
    console.log("PAY OVER TIME1");
  	calcPrice("staging");
  }
  if(currentTab[0].children[0].innerText === "PAY AT ONCE"){
    console.log("PAY AT ONCE1");
  	calcPrice("fullSmount");
  }
}
//跳转Xbiek页
function goXbikeFun(){
  window.location.href=`/products/xbike`;
}
//sessionStorage存储
function getSessionStorage(mesN){
	return JSON.parse(sessionStorage.getItem(mesN));
}
function setSessionStorage(mesN, mes){
	sessionStorage.setItem(mesN, JSON.stringify(mes));
}
//获取url参数
function getURLparam(key){
    var qstring = window.location.search;
    if (!qstring) return (!key || key == '*') ? {} : null;
    qstring = qstring.replace(/%20/g, ' ');
    qstring = qstring.substr(1); // remove ?
    var param = qstring.split('&');
    var map = new Object();
    for (var i = 0, j = param.length; i < j; i++){ var pl=param[i].split('='); map[pl[0]] = pl[1]; }
    return (!key || key == '*') ? map : map[key];
};
//比价结束

// membership登录注册
function BackLogin(){
  document.getElementById('Register').style.display = "none"
	document.getElementById('forgot').style.display = "none"
    document.getElementById('login').style.display = "flex"

}
function forGotPassword(){
  document.getElementById('Register').style.display = "none"
	document.getElementById('forgot').style.display = "flex"
    document.getElementById('login').style.display = "none"

}
function createAccount(){
  document.getElementById('Register').style.display = "flex"
	document.getElementById('forgot').style.display = "none"
    document.getElementById('login').style.display = "none"

}

// 输入验证
function onblurForm(e, index){

	console.log(e.value)
    return
    let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    switch (index){
      case 0:
        if(e.value){
        	if(!reg.test(e.value)){
                alert('邮箱格式不正确')
            }
        }
        
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        if(e.value){
        	if(!reg.test(e.value)){
                alert('邮箱格式不正确')
            }
        }
        break;
      case 5:
        break;
      case 6:
        if(e.value){
        	if(!reg.test(e.value)){
                alert('邮箱格式不正确')
            }
        }
        break;
      default:
        break;
    }
}
//登陆
function memberLogin(event, de){
  
 let email = document.getElementById('memberLoginEmail').value
 let password = document.getElementById('memberLoginPassword').value
 console.log(email, password)
 if(email && password){
   document.getElementById('loadingbeLoading').style.display = "block";
  de.classList.add("noClick");
 	ajax({
      type: 'POST',
      url: 'https://api.freebeatfit.com/thirdparty-api/account/login',
      param: {
        account: email,
        password: password
      },
      success: function(res) {
          console.log(res)
          if(res.code != 200){
            document.getElementById('loadingbeLoading').style.display = "none";
            de.classList.remove("noClick");
          	document.getElementById('errorMSg1').style.display = "block";
            document.getElementById('errorMSg1').innerHTML = res.msg
            return
          }
          localStorage.memberUserInfo = JSON.stringify(res.data)
          location.reload()
//           document.getElementById('loginModel').style.display = "none"
//         	document.getElementById('memeberShip').style.display = "block"
      }
  })
    event.preventDefault(); 
 }
	
};
//注册 已弃用
function createUser(event, de){
  
  var reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{1,16}$/;
  var reg2 =/^\w+\.{0,1}\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
  var reg3 =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
 let username = document.getElementById('memberUsername').value
 let email = document.getElementById('memberEmail').value
 let password = document.getElementById('memberPassword').value
 if(!reg.test(username)){
   console.log(1)
 	return
 }
  if(!reg2.test(email)){
     console.log(2, email)
 	return
 }
  if(!reg3.test(password)){
     console.log(3)
 	return
 }
 
 document.getElementById('createUsergbeLoading').style.display = "block";
  de.classList.add("noClick");
	ajax({
      type: 'POST',
      url: 'https://api.freebeatfit.com/thirdparty-api/account/register',
      param: {
        userName: username,
        email: email,
        password: password
      },
      success: function(res) {
          console.log(res)
          if(res.code != 200){
            document.getElementById('createUsergbeLoading').style.display = "none";
            de.classList.remove("noClick");
          	document.getElementById('errorMSg2').style.display = "block";
            document.getElementById('errorMSg2').innerHTML = res.msg
            return
          }
          localStorage.memberUserInfo = JSON.stringify(res.data)
          location.reload()
//           document.getElementById('loginModel').style.display = "none"
//         	document.getElementById('memeberShip').style.display = "block"
      }
  })
    event.preventDefault(); 
}
function forgetPassword(event, de){
  
	let email =  document.getElementById('forgotPassword').value
    var reg =/^\w+\.{0,1}\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    if(!reg.test(email)){
      return
   	}
	ajax({
      type: 'POST',
      url: 'https://api.freebeatfit.com/thirdparty-api/account/forgot-password',
      param: {
          email: email 
      },
      success: function(res) {
        if(res.code != 200){
          	document.getElementById('errorMSg3').style.display = "block";
            document.getElementById('errorMSg3').innerHTML = res.msg
            
            return
          }
        document.getElementById('success1').style.display = "block";
        document.getElementById('success1').innerHTML = 'A password reset link was sent. Please check your email.'
          console.log(res)
      }
  	})
    event.preventDefault(); 
}
// let regs = /membership/;
// if(regs.test(window.location.href)){
//   console.log(localStorage.memberUserInfo)
//   if(localStorage.memberUserInfo){
//    	getMembership()
//   }
// }
//创建订单
function createOrder(){
   document.getElementById('SubscribeLoading').style.display = 'block'
    document.getElementById('Subscribe').classList.add("noClick");
   
	ajax({
      type: 'POST',
      url: 'https://api.freebeatfit.com/thirdparty-api/create-order',
      param: {
          skuId : '2' 
      },
      success: function(res) {
       
          console.log(res)
          ajax({
              type: 'POST',
              url: 'https://api.freebeatfit.com/thirdparty-api/order/create-payment',
              param: {
                  orderId  : res.data.order.id 
              },
              success: function(ress) {
                 let stripe = Stripe(ress.data.pkKey)
                 let sessionId = ress.data.sessionId 
                 stripe
                 .redirectToCheckout({
                   sessionId: sessionId
                 })
                 .then(handleResult);
                console.log(ress)
              }
          })
      }
  })
};
//退订

function postUnsubscribe(){
  document.getElementById('SubscribeLoading').style.display = 'block'
   document.getElementById('Unsubscribe').classList.add("noClick");
	ajax({
      type: 'POST',
      url: 'https://api.freebeatfit.com/thirdparty-api/order/subscribe-cancel',
      success: function(res) {
        if(res.code != 200){
          	
            
            return
          }
        location.reload()
//          document.getElementById('UnsubscribeSuccess').style.display = 'block'
//         document.getElementById('UnsubscribeSuccess').innerHTML = res.data
//         getMembership()
//           console.log(res)
      }
  	})

};

//退订触发弹窗
function unsubscribeTrigger(){
  document.getElementById('memeberShip').style.background = "#ccc";
  document.getElementById('memeberShip').style.pointerEvents = "none";
  document.getElementById('unsubscribeConfirmation').style.display = 'flex';
}
//退订确认
function unsubscribeConfirmFun(param){
  if(param === "confirm"){
    postUnsubscribe();
    document.getElementById('unsubscribeConfirmation').style.display = 'none';
    document.getElementById('memeberShip').style.background = "#fff";
  	document.getElementById('memeberShip').style.pointerEvents = "auto";
  }
  if(param === "cancel"){
    document.getElementById('unsubscribeConfirmation').style.display = 'none';
    document.getElementById('memeberShip').style.background = "#fff";
  	document.getElementById('memeberShip').style.pointerEvents = "auto";
  }
}

function getMembership(){
	ajax({
      type: 'POST',
      url: 'https://api.freebeatfit.com/thirdparty-api/order/purchase-records',
      success: function(res) {
        let tab1 = document.getElementById('table1')
        let tab2 = document.getElementById('table2')
        let obj = res.data 
        
        if(obj.subscribeOpen){
          	 document.getElementById('Subscribe').style.display = "block"
             
          }else{
          	document.getElementById('Subscribe').style.display = "none"
          }
          if(obj.unSubscribeOpen){
          	document.getElementById('Unsubscribe').style.display = "block"
          }else{
          	document.getElementById('Unsubscribe').style.display = "none"
          }
        
        if(obj.memberInfoList){
        let tr = '<tr>'+
              	'<td>'+ obj.memberInfoList.name +'</td>'+
                '<td>'+ obj.memberInfoList.startDate +'</td>'+
                '<td>'+ obj.memberInfoList.status +'</td>'+
                '<td>'+ obj.memberInfoList.nextDeductionDate +'</td>'+
              '</tr>'	
          
          tab1.insertAdjacentHTML('beforeend',tr);
        }
          
        if(obj.shareWithMe){
        let arr2 = obj.shareWithMe  
        arr2.forEach((item, i)=>{
          let td = '<tr>'+
              	'<td>'+ item.name +'</td>'+
                '<td>'+ item.owner +'</td>'+
                '<td>'+ item.price+'/MO </td>'+
              '</tr>'	
          
          
          
          tab2.insertAdjacentHTML('beforeend',td);
          
        })
        }
        
      }
  })


}
function logout(){

	localStorage.removeItem('memberUserInfo') 
    location.reload()
}

function hiddenPassword(e){
  console.log(e)
  e.style.display="none";
  document.getElementById('shou_password').style.display="initial"
  document.getElementById('memberLoginPassword').type = "text"
}
function showPassword(e){
  console.log(e)
  e.style.display="none";
  document.getElementById('hidden_password').style.display="initial"
  document.getElementById('memberLoginPassword').type = "password"
}

// -----membership end-----


// track order

function getTrackOrder(){

 let trackOrder = document.getElementById('trackOrder').value
let list = document.getElementById('trackList')
list.innerHTML = ''
	ajax({
      type: 'GET',
      url: 'https://api.freebeatfit.com/thirdparty-api/swiship/getPackageTrackingDetails?trackingNumber=' + trackOrder,
      
      success: function(res) {
        
        let arr = res.data
        arr.forEach((item, i)=>{
          let day = item.eventDate.substring(0, 10)
          let time = item.eventDate.substring(11, 19)
          let div = '<div>'+
              '<div class="trackTime">'+ day +'</div>'+
              	'<div class="trackInfo">'+
              		'<div class="t-left">'+
              			time +
              		'</div>'+
              		'<div class="t-right">'+
                        '<div>'+item.eventDescription  +'</div>'+
                        '<div class="eventAddress">'+item.eventAddress   +'</div>'+
                    '</div>'+
              	'</div>'+
              '</div>'	
          
          
          
          list.insertAdjacentHTML('beforeend',div);
        
        })
          console.log(res)
      }
  })
}
function getInput(val){
  if(val.value){
   document.getElementById('ResetBtn').style.display = "block"
  }else{
  	document.getElementById('ResetBtn').style.display = "none"
  }
}
function ResetInput(){
	document.getElementById('trackOrder').value = ""
    document.getElementById('ResetBtn').style.display = "none"

}

function setCustomValidity(){


}

// 右下pop
function newsletterPopupZoomOutFun(){
  document.getElementById('NewsletterPopup').setAttribute("aria-hidden", "true");
  document.getElementById('mm-newsletter-button').style.display = "block";
}

function mmNewsletterFun(){
  document.getElementById('mm-newsletter-button').style.display = "none";
  document.getElementById('NewsletterPopup').setAttribute("aria-hidden", "false");
  document.getElementById('NewsletterPopup').style.display = "block";
  localStorage.setItem('themePopup', 'true');
}


// 5美元活动 
// 手机端分享
function orderCustomizationShareFun(){
  document.getElementById("fb_orderCustomization_share_platform_img2").style.display = "none";
  let sharePlatform = document.getElementById("fb_orderCustomization_share_platform");
  for (let i= 2; i < 7; i++){
    sharePlatform.children[i].style.display = "block";
  }
}
function fb_pop_5DollarActivityCloseFun(){
  document.getElementsByClassName("fb_pop_5DollarActivity_mask")[0].style.display = "none";
}
function fb_pop_5DollarActivity_warnFun(){
  document.getElementsByClassName("fb_pop_5DollarActivity_warn")[0].style.display = "none";
}
function fb_pop_5DollarActivityFun(){
  let pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
  if (pattern.test(document.getElementById("fb_pop_5DollarActivity_input").value)){
    console.log("邮箱验证通过");
    let urltc = getURLparam();
    fetch(`https://api.freebeatfit.com/blackfriday/assist/user_submit`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: document.getElementById("fb_pop_5DollarActivity_input").value,
        tc: urltc.tc
      })
    })
        .then(res => {return res.json()})
        .then(data => {
          if (data.code === 0){
            console.log(data.data);
            window.location.href = "https://www.freebeatfit.com/products/xbike-coupon?customer_posted=true";
          } else {
          	window.location.href = "https://www.freebeatfit.com/products/xbike-coupon?isSuccess=false";
          }
        });
  }
}

// 黑车3D模型弹窗
function fb_xbike3D_pop(){
  let xbike3D_pop = document.getElementById("fb_xbike3D_pop");
  let xbike3D_KeyShotXR = document.getElementById("KeyShotXR");
  if (xbike3D_pop.style.display === "block"){
    if (xbike3D_introduce_point_addListen === false){
      xbike3D_pop.addEventListener("touchmove", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_pop.addEventListener("mousewheel", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_introduce_point_addListen = true;
      fb_xbike3D_pop();
    } else {
      xbike3D_pop.style.display = "none";
      xbike3D_introduce_point_addListen = false;
    }
  } else {
    if (xbike3D_introduce_point_addListen === false){
      xbike3D_pop.addEventListener("touchmove", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_pop.addEventListener("mousewheel", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_introduce_point_addListen = true;
      fb_xbike3D_pop();
    } else {
      xbike3D_pop.style.display = "block";
      xbike3D_introduce_point_addListen = false;
      if (xbike3D_KeyShotXR.innerHTML.length === 0){
        var keyshotXR;

        function initKeyShotXR() {
          var nameOfDiv = "KeyShotXR";
          var folderName = "freebeat_xbikeImg";
          var viewPortWidth = 1920;
          var viewPortHeight = 1080;
          var backgroundColor = "transparent";
          var uCount = 180;
          var vCount = 1;
          var uWrap = true;
          var vWrap = false;
          var uMouseSensitivity = -0.5;
          var vMouseSensitivity = 1;
          var uStartIndex = 90;
          var vStartIndex = 0;
          var minZoom = 1;
          var maxZoom = 1;
          var rotationDamping = 0.96;
          var downScaleToBrowser = true;
          var addDownScaleGUIButton = false;
          var downloadOnInteraction = false;
          var imageExtension = "png";
          var showLoading = true;
          var loadingIcon = "ks_logo.png"; // Set to empty string for default icon.
          var allowFullscreen = true; // Double-click in desktop browsers for fullscreen.
          var uReverse = false;
          var vReverse = false;
          var hotspots = {};
          var isIBooksWidget = false;

          keyshotXR = new window.keyshotXR(nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots,isIBooksWidget);
        }

        // window.onload = initKeyShotXR;
        initKeyShotXR();
      }
    }
  }
}
function fb_xbike3D_popClose() {
  let xbike3D_pop = document.getElementById("fb_xbike3D_pop");
  if (xbike3D_introduce_point_addListen === false){
    xbike3D_pop.addEventListener("touchmove", function(event) {
      event.preventDefault();
    }, {passive: false});
    xbike3D_pop.addEventListener("mousewheel", function(event) {
      event.preventDefault();
    }, {passive: false});
    xbike3D_introduce_point_addListen = true;
    fb_xbike3D_popClose();
  } else {
    xbike3D_pop.style.display = "none";
    xbike3D_introduce_point_addListen = false;
  }
}
// 黑车3D模型介绍点
function fb_xbike3D_introduce_point(num, isOpen) {
  let xbike3D_img_introduce_point = document.getElementById(`xbike3D_img_introduce_${num}_point`);
  let xbike3D_img_introduce_point_con = document.getElementById(`xbike3D_img_introduce_${num}_point_con`);
  if (isOpen === true){
    if (xbike3D_introduce_point_addListen === false){
      xbike3D_img_introduce_point_con.addEventListener("touchmove", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_img_introduce_point_con.addEventListener("mousewheel", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_introduce_point_addListen = true;
      fb_xbike3D_introduce_point(num, isOpen);
    } else {
      xbike3D_img_introduce_point.style.display = "none";
      xbike3D_img_introduce_point_con.style.display = "block";
      xbike3D_introduce_point_addListen = false;
      setTimeout(()=>{
        fb_xbike3D_introduce_point_otherClick = num;
      }, 0);
    }
  } else {
    if (xbike3D_introduce_point_addListen === false){
      xbike3D_img_introduce_point_con.removeEventListener("touchmove", function(event) {
        return true;
      });
      xbike3D_img_introduce_point_con.removeEventListener("mousewheel", function(event) {
        return true;
      });
      xbike3D_introduce_point_addListen = true;
      fb_xbike3D_introduce_point(num, isOpen);
    } else {
      xbike3D_img_introduce_point.style.display = "block";
      xbike3D_img_introduce_point_con.style.display = "none";
      xbike3D_introduce_point_addListen = false;
    }
  }
}

// 首页xbike动画
function fbHomeXbikeAnimation(){
  	let homeXbike_mask = document.getElementById("xbikeAnimation_mask");
    let homeXbike = document.getElementById("xbikeAnimation");
    let homeXbikeImg = document.getElementById("xbikeAnimationImg");
    let homeXbikeImgVideo = document.getElementById("xbikeAnimationVideo");
    let imgLazyload, imgLazyloadArr = [];
    for (let i = 1; i < 101; i ++){
      imgLazyload = new Image();
      imgLazyload.src = `https://static.freebeatfit.com/freebeat_xbikeAnimationImg/${i}.png`;
      imgLazyload.id = "xbikeAnimationImg";
      imgLazyloadArr.push(imgLazyload);
      imgLazyload = undefined;
    }
    document.addEventListener("scroll", function () {
      let homeXbikeImg = document.getElementById("xbikeAnimationImg");
      //滚动条高度+视窗高度 = 可见区域底部高度
      var visibleBottom = window.scrollY + document.documentElement.clientHeight;
      //可见区域顶部高度
      var visibleTop = window.scrollY;
      var centerY = homeXbike.offsetTop+(homeXbike.offsetHeight*0.8);
      if(homeXbike.offsetTop>visibleTop&&centerY<visibleBottom){
        // homeXbike.innerHTML = '区域可见';
//         console.log(homeXbikeImg.getAttribute("src"));
        console.log('区域可见');
//         console.log(window.scrollY);
        if (homeXbikeScroll < window.scrollY) {
          console.log("向下滚动");
          homeXbikeImgNum = homeXbikeImgNum + 1;
        } else {
          console.log("向上滚动");
          homeXbikeImgNum = homeXbikeImgNum - 1;
        }
        console.log(homeXbikeImgNum);
        if (homeXbikeImgNum < imgLazyloadArr.length && homeXbikeImgNum >= 0){
          homeXbikeImgVideo.style.display = "none";
          homeXbike.replaceChild(imgLazyloadArr[homeXbikeImgNum], homeXbikeImg);
        } else if (homeXbikeImgNum > 100){
          console.log("播放视频");
          homeXbikeImgVideo.style.display = "block";
          homeXbike_mask.style.height = `${homeXbike.offsetTop - homeXbike.parentNode.offsetTop + homeXbike.offsetHeight}px`;
        }
      }else{
        // homeXbike.innerHTML = '区域不可见';
        console.log('区域不可见');
      }
      // 首页xbike动画滚动计数
      homeXbikeScroll = window.scrollY;
    })
}

//特点图滚动
function design_title_img_fun(direction) {
  let design_scroll = document.getElementsByClassName("lit-bike_design_scroll")[0];
  console.log(design_scroll);
  switch (direction) {
    case "1":
      design_scroll.scrollLeft -= 300;
      break;
    case "2":
      design_scroll.scrollLeft += 300;
      break;
  }
}
// 粉车3D模型弹窗
function fb_klarnaBike3D_pop(){
  let xbike3D_pop = document.getElementById("fb_klarnaBike3D_pop");
  let xbike3D_KeyShotXR = document.getElementById("KeyShotXR_klarna");
  if (xbike3D_pop.style.display === "block"){
    if (xbike3D_introduce_point_addListen === false){
      xbike3D_pop.addEventListener("touchmove", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_pop.addEventListener("mousewheel", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_introduce_point_addListen = true;
      fb_klarnaBike3D_pop();
    } else {
      xbike3D_pop.style.display = "none";
      xbike3D_introduce_point_addListen = false;
    }
  } else {
    if (xbike3D_introduce_point_addListen === false){
      xbike3D_pop.addEventListener("touchmove", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_pop.addEventListener("mousewheel", function(event) {
        event.preventDefault();
      }, {passive: false});
      xbike3D_introduce_point_addListen = true;
      fb_klarnaBike3D_pop();
    } else {
      xbike3D_pop.style.display = "block";
      xbike3D_introduce_point_addListen = false;
      if (xbike3D_KeyShotXR.innerHTML.length === 0){
        var keyshotXR;

        function initKeyShotXR() {
          var nameOfDiv = "KeyShotXR_klarna";
          var folderName = "freebeat_klarnaBikeImg";
          var viewPortWidth = 1920;
          var viewPortHeight = 1080;
          var backgroundColor = "transparent";
          var uCount = 180;
          var vCount = 1;
          var uWrap = true;
          var vWrap = false;
          var uMouseSensitivity = -0.5;
          var vMouseSensitivity = 1;
          var uStartIndex = 90;
          var vStartIndex = 0;
          var minZoom = 1;
          var maxZoom = 1;
          var rotationDamping = 0.96;
          var downScaleToBrowser = true;
          var addDownScaleGUIButton = false;
          var downloadOnInteraction = false;
          var imageExtension = "png";
          var showLoading = true;
          var loadingIcon = "ks_logo.png"; // Set to empty string for default icon.
          var allowFullscreen = true; // Double-click in desktop browsers for fullscreen.
          var uReverse = false;
          var vReverse = false;
          var hotspots = {};
          var isIBooksWidget = false;

          keyshotXR = new window.keyshotXR(nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots,isIBooksWidget);
        }

        // window.onload = initKeyShotXR;
        initKeyShotXR();
      }
    }
  }
}
function fb_klarnaBike3D_popClose() {
  let xbike3D_pop = document.getElementById("fb_klarnaBike3D_pop");
  if (xbike3D_introduce_point_addListen === false){
    xbike3D_pop.addEventListener("touchmove", function(event) {
      event.preventDefault();
    }, {passive: false});
    xbike3D_pop.addEventListener("mousewheel", function(event) {
      event.preventDefault();
    }, {passive: false});
    xbike3D_introduce_point_addListen = true;
    fb_klarnaBike3D_popClose();
  } else {
    xbike3D_pop.style.display = "none";
    xbike3D_introduce_point_addListen = false;
  }
}