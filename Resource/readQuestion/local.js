/* 
* @Author: willclass
* @Date:   2016-01-14 20:18:07
* @Last Modified by:   willclass
* @Last Modified time: 2016-01-14 20:22:07
*/

'use strict';
var urlParaObj = a0Url.get();
(function() {
    h4RequestQList();
    $('secName').setProperty('title', urlParaObj.sna);    
    $('secName').setProperty('html', a0cutstr(urlParaObj.sna,31));
    var type = '';
    switch (urlParaObj.zm) {
        case '0': 
        case '1': type = '期末考试';
            break;
        case '2':
            {
                var _minfoaaa=a0UserClient().get();
                if(_minfoaaa.p_class.substr(0,1)=='g'){
                    type="高考考试";
                }else if(_minfoaaa.p_class.substr(0,1)=='c'||(_minfoaaa.p_edu==1&&_minfoaaa.p_class=='x6')){
                             type="中考考试";
                }else if(_minfoaaa.p_class.substr(0,1)=='x'){
                            type="小考考试";
                }
            }
            break;
    }
    $("kstype").set('html',type);
} ());
function h4RequestQList() {
    var paras = 'act=getQList&sub=' + (urlParaObj.sub || '') + '&type=' + (urlParaObj.zm == undefined ? '' : (urlParaObj.zm.toInt() + 1)) + '&sec=' + (urlParaObj.sid || '') + '&pn=' + (urlParaObj.pn || 1);
    new Request({
        url: '/ajax/aHighFren.ashx',
        data: paras,
        method: 'get',
        noCache: true,
        onSuccess: function(txt) {
        	console.log(a0Url);
        	
            if (txt == 'NL') {

                 window.location.href = mfg_apidomain.uc+'/Account/Login/?href=' + a0Url.encodePara(a0Url.addr() + '?' + a0Url.pToStr());
                        return;
            }
            else if (txt == 'PE') {
//                 window.location.href = '/login.aspx?href=' + a0Url.encodePara(a0Url.addr() + '?' + a0Url.pToStr());
//                        return;
                        var _html='<div class="highfrentip"><div class="highfrentips">该考试类型下，尚未发现历年考查真题！</div> 温馨提示：真题精选为抽样统计，建议在老师的指导下科学使用^_^</div>';
                    $('quesBody').setProperty('html', _html);
            }
            else {
                var totalCt = txt.substr(0, 10).toInt();
                if (totalCt > 0) {
                    window.scrollTo(0,0); 
                    //var myFx = new Fx.Scroll(window).start(0, 0);
                    
                    $('quesBody').setProperty('html', txt.substr(10));
                    JY_make_height_width() ;
                }
                else {
                    //something add here later
                    var _html='<div class="highfrentip"><div class="highfrentips">该考试类型下，尚未发现历年考查真题！</div> 温馨提示：真题精选为抽样统计，建议在老师的指导下科学使用^_^</div>';
                    $('quesBody').setProperty('html', _html);
                }
            }
        }
    }).send();
    a0showBusy("quesBody", 48, "b");
}
function h4PageChange(pn, ct) {
    urlParaObj.pn = pn;
    h4RequestQList();
    //var myFx = new Fx.Scroll(window).start(0, 0);
    a0Url.set('pn', pn);
}