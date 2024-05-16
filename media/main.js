// /////////////////////////
//////////////////
//////////////////////////
///////////////////////filter
let bl1=document.querySelector(".bl1")
let block1=document.querySelector(".blockSl1")
let mmm= document.querySelector(".main__cont5")

let bl2=document.querySelector(".bl2")
let block2=document.querySelector(".blockSl2")

let bl3=document.querySelector(".bl3")
let block3=document.querySelector(".blockSl3")

let bl4=document.querySelector(".bl4")
let block4=document.querySelector(".blockSl4")


let blockAll=document.querySelector(".blAll")
let tovary=document.querySelector(".tovary")
let all__tovary=document.querySelector(".all__tovary")


blockAll.addEventListener("click", () => {
    block4.setAttribute('style','display:none')
    block2.setAttribute('style','display:none')
    block3.setAttribute('style','display:none')
    block1.setAttribute('style','display:none') 
    all__tovary.setAttribute('style','display:block') 
    mmm.setAttribute('style','padding-bottom:-650px') 
  



});
bl1.addEventListener("click", () => {
    block2.setAttribute('style','display:none')
    block3.setAttribute('style','display:none')
    block4.setAttribute('style','display:none')
    block1.setAttribute('style','display:block') 
    tovary.setAttribute('style','height:400px') 
    all__tovary.setAttribute('style','display:none')

});
bl2.addEventListener("click", () => {
    block1.setAttribute('style','display:none')
    block4.setAttribute('style','display:none')
    block3.setAttribute('style','display:none')
    block2.setAttribute('style','display:block') 
    tovary.setAttribute('style','height:400px') 
    all__tovary.setAttribute('style','display:none')
});
bl3.addEventListener("click", () => {
    block4.setAttribute('style','display:none')
    block2.setAttribute('style','display:none')
    block1.setAttribute('style','display:none')
    block3.setAttribute('style','display:block') 
    tovary.setAttribute('style','height:400px') 
    all__tovary.setAttribute('style','display:none')
});
bl4.addEventListener("click", () => {
    block2.setAttribute('style','display:none')
    block1.setAttribute('style','display:none')
    block3.setAttribute('style','display:none') 
    block4.setAttribute('style','display:block')

    tovary.setAttribute('style','height:400px') 
    all__tovary.setAttribute('style','display:none')
});

let bg__vyezj= document.querySelector(".bg__vyezj")
let krest= document.querySelector(".krest")
let krest2= document.querySelector(".krest2")
let krest3= document.querySelector(".krest3")
let krest4= document.querySelector(".krest4")
let krest5= document.querySelector(".krest5")
let krest6= document.querySelector(".krest6")
let krest7= document.querySelector(".krest7")
let krest8= document.querySelector(".krest8")
let krest9= document.querySelector(".krest9")
let krest10= document.querySelector(".krest10")
let krest11= document.querySelector(".krest11")
let krest12= document.querySelector(".krest12")
let krest13= document.querySelector(".krest13")
let krest14= document.querySelector(".krest14")
let krest15= document.querySelector(".krest15")
let krest16= document.querySelector(".krest16")



let block__main5= document.querySelector(".block__main5")
let block__main5__1= document.querySelector(".block__main5__1")
let block__main5__2= document.querySelector(".block__main5__2")
let block__main5__3= document.querySelector(".block__main5__3")
let block__main5__4= document.querySelector(".block__main5__4")
let block__main5__5= document.querySelector(".block__main5__5")
let block__main5__6= document.querySelector(".block__main5__6")
let block__main5__7= document.querySelector(".block__main5__7")
let block__main5__8= document.querySelector(".block__main5__8")
let block__main5__9= document.querySelector(".block__main5__9")
let block__main5__10= document.querySelector(".block__main5__10")
let block__main5__11= document.querySelector(".block__main5__11")
let block__main5__12= document.querySelector(".block__main5__12")

// .......
let block__main5__22= document.querySelector(".block__main5__22")
let block__main5__33= document.querySelector(".block__main5__33")
let block__main5__44= document.querySelector(".block__main5__44")
let block__main5__55= document.querySelector(".block__main5__55")
let block__main5__66= document.querySelector(".block__main5__66")
let block__main5__77= document.querySelector(".block__main5__77")
let block__main5__88= document.querySelector(".block__main5__88")
let block__main5__99= document.querySelector(".block__main5__99")
let block__main5__100= document.querySelector(".block__main5__100")
let block__main5__110= document.querySelector(".block__main5__110")
let block__main5__120= document.querySelector(".block__main5__120")
let block__main5__130= document.querySelector(".block__main5__130")
let block__main5__140= document.querySelector(".block__main5__140")
let block__main5__150= document.querySelector(".block__main5__150")
let block__main5__160= document.querySelector(".block__main5__160")
// .......
let info__tovar= document.querySelector(".info__tovar")
let info__tovar__2= document.querySelector(".info__tovar__2")
let info__tovar__3= document.querySelector(".info__tovar__3")
let info__tovar__4= document.querySelector(".info__tovar__4")
let info__tovar__5= document.querySelector(".info__tovar__5")
let info__tovar__6= document.querySelector(".info__tovar__6")
let info__tovar__7= document.querySelector(".info__tovar__7")
let info__tovar__8= document.querySelector(".info__tovar__8")
let info__tovar__9= document.querySelector(".info__tovar__9")
let info__tovar__10= document.querySelector(".info__tovar__10")
let info__tovar__11= document.querySelector(".info__tovar__11")
let info__tovar__12= document.querySelector(".info__tovar__12") 
let info__tovar__13= document.querySelector(".info__tovar__13") 
let info__tovar__14= document.querySelector(".info__tovar__14") 
let info__tovar__15= document.querySelector(".info__tovar__15") 
let info__tovar__16= document.querySelector(".info__tovar__16") 

 

block__main5.addEventListener("click", () => {
    info__tovar.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
block__main5__1.addEventListener("click", () => {
    info__tovar.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
bg__vyezj.addEventListener("click", () => {
    info__tovar.setAttribute('style','right:-200%;')
    info__tovar__2.setAttribute('style','right:-200%;')
    info__tovar__3.setAttribute('style','right:-200%;')
    info__tovar__4.setAttribute('style','right:-200%;')
    info__tovar__5.setAttribute('style','right:-200%;')
    info__tovar__6.setAttribute('style','right:-200%;')
    info__tovar__7.setAttribute('style','right:-200%;')
    info__tovar__8.setAttribute('style','right:-200%;')
    info__tovar__9.setAttribute('style','right:-200%;')
    info__tovar__10.setAttribute('style','right:-200%;')
    info__tovar__11.setAttribute('style','right:-200%;')
    info__tovar__12.setAttribute('style','right:-200%;')
    info__tovar__13.setAttribute('style','right:-200%;')
    info__tovar__14.setAttribute('style','right:-200%;')
    info__tovar__15.setAttribute('style','right:-200%;')
    info__tovar__16.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
// ???????????????????????????????????????????????
// /////////////////////////////////////////////////
// ???????????????????????????????????????????????
// /////////////////////////////////////////////////
// ???????????????????????????????????????????????
// /////////////////////////////////////////////////
krest.addEventListener("click", () => {
    info__tovar.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest2.addEventListener("click", () => {
    info__tovar__2.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest3.addEventListener("click", () => {
    info__tovar__3.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest4.addEventListener("click", () => {
    info__tovar__4.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest5.addEventListener("click", () => {
    info__tovar__5.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest6.addEventListener("click", () => {
    info__tovar__6.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest7.addEventListener("click", () => {
    info__tovar__7.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest8.addEventListener("click", () => {
    info__tovar__8.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest9.addEventListener("click", () => {
    info__tovar__9.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest10.addEventListener("click", () => {
    info__tovar__10.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest11.addEventListener("click", () => {
    info__tovar__11.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest12.addEventListener("click", () => {
    info__tovar__12.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest13.addEventListener("click", () => {
    info__tovar__13.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest14.addEventListener("click", () => {
    info__tovar__14.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest15.addEventListener("click", () => {
    info__tovar__15.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});
krest16.addEventListener("click", () => {
    info__tovar__16.setAttribute('style','right:-200%;')
    bg__vyezj.setAttribute('style','display:none;    ')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});


// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__2.addEventListener("click", () => {
    info__tovar__2.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__3.addEventListener("click", () => {
    info__tovar__3.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__4.addEventListener("click", () => {
    info__tovar__4.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__5.addEventListener("click", () => {
    info__tovar__5.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__6.addEventListener("click", () => {
    info__tovar__6.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__7.addEventListener("click", () => {
    info__tovar__7.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__8.addEventListener("click", () => {
    info__tovar__8.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__9.addEventListener("click", () => {
    info__tovar__9.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__10.addEventListener("click", () => {
    info__tovar__10.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__11.addEventListener("click", () => {
    info__tovar__11.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__12.addEventListener("click", () => {
    info__tovar__12.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});


// ,,,,,,,,,,,,,,,,,,,рьспвмобилютыд.ьжбэдлоип ымриотль,,,,,,,,,,,,,,,,,,,,,,,.
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__22.addEventListener("click", () => {
    info__tovar__5.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__33.addEventListener("click", () => {
    info__tovar__13.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__44.addEventListener("click", () => {
    console.log("aaaaaaa")
    info__tovar__12.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__55.addEventListener("click", () => {
    info__tovar__11.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__66.addEventListener("click", () => {
    info__tovar__9.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__77.addEventListener("click", () => {
    info__tovar__7.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__88.addEventListener("click", () => {
    info__tovar__6.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__99.addEventListener("click", () => {
    info__tovar__10.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__100.addEventListener("click", () => {
    info__tovar__3.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__120.addEventListener("click", () => {
    info__tovar__14.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__110.addEventListener("click", () => {
    info__tovar__2.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__130.addEventListener("click", () => {
    info__tovar__12.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__140.addEventListener("click", () => {
    info__tovar__8.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__150.addEventListener("click", () => {
    info__tovar__4.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
// .......................................ююююююююююююю
// .......................................ююююююююююююю
// .......................................ююююююююююююю
block__main5__160.addEventListener("click", () => {
    info__tovar__16.setAttribute('style','right:10px;')
    bg__vyezj.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});

// /////////////////////////
//////////////////
//////////////////////////
///////////////////////basket
let bgkorz=document.querySelector(".bg__basket")
let ico__korz=document.querySelector(".nav__icons__basket")
let cont__backet=document.querySelector(".cont__backet")
ico__korz.addEventListener("click", () => {
    cont__backet.setAttribute('style','right:20px;')
    bgkorz.setAttribute('style','display:block;    ')
    document.body.setAttribute('style','overflow-y: hidden;')
    
});
bgkorz.addEventListener("click", () => {
    cont__backet.setAttribute('style','right:-200%;')
    bgkorz.setAttribute('style','display:none;')
    document.body.setAttribute('style','overflow-y: scroll;')
    
});

