/* keep the second nav floating on the top */

$(function() {
    var nav = $('#myTab');
    var paddL = parseFloat(nav.parent().css("margin-left"))+ parseFloat(nav.parent().css("padding-left"));

    var $window = $(window);
    var windowsize = $window.width();
    if (nav.length) {
        var fixmeTop = nav.offset().top;
        $(window).scroll(function () {
            if (windowsize > 766) {
                var currentScroll = $(window).scrollTop() - 70;
                if (currentScroll >= fixmeTop) {
                    
                    $('#myTab').css({
                        position: 'fixed',
                        top: '50px',
                        width: '100%',
                        left: '0px'
                    });
                    $("#myTab").css("padding-top", '0.5em');
                    $("#myTab").css("padding-left", paddL+'px');
                    $("#myTab").css("z-index", '998');
                    $(".logo").css("display",'inline-block');
                    $(".name").css("display",'inline-block');
                    $(".navbar-brand").css("display",'none');
                } else {
                    $('#myTab').css({
                        position: 'static',
                        width:'auto'
                    });
                    $("#myTab").css("padding-top", '0em');
                    $("#myTab").css("padding-left", '0');
                    $(".logo").css("display",'none');
                    $(".name").css("display",'none');
                    $(".navbar-brand").css("display",'inline-block');
                    
                }
            }
            /*else{
                var currentScroll = $(window).scrollTop();
                if (currentScroll >= fixmeTop) {
                    $('#myTab').css({
                        position: 'fixed',
                        top: '50px',
                        width: '100%',
                        left: '0px'
                    });
                    $("#myTab").css("padding-top", '0.5em');
                    $("#myTab").css("padding-left", '2em');
                    $("#myTab").css("z-index", '998');
                } else {
                    $('#myTab').css({
                        position: 'static',
                        width:'auto'
                    });
                    $("#myTab").css("padding-top", '0em');
                    $("#myTab").css("padding-left", '0');
                }
            }*/
        });
    }
})
/* keep the second nav floating on the top */



// /* WordCloud Switch Button */
// $(function(){ 
//     $('.wordcloud' ).on( 'click', function() {
//         /* initiate */  
//         $("[name='timeline']").bootstrapSwitch({ 
//             onText : "Before 2009",      // set ONText
//             offText : "After 2009",    // set OFFText  
//             onColor : "success",// set ONText color    (info/success/warning/danger/primary)  
//             offColor : "danger",  // set OFFText color        (info/success/warning/danger/primary)  `
//             size : "media",    //Set size (mini/small/normal/large)  
//             handleWidth:"80",//set width
//             labelText:"After 2009",
//             // when state change then trigger
//             onSwitchChange : function(event, state) {  
//             var ProductId = event.target.defaultValue;
//                 if (state == true) {
//                     $(".bootstrap-switch-label").text("After 2009");
//                     $("#by2009").css("display", 'block');
//                     $("#af2009").css("display", 'none');
//                 } else {
//                     $(".bootstrap-switch-label").text("Before 2009");
//                     $("#by2009").css("display", 'none');
//                     $("#af2009").css("display", 'block');
//                 }  
//             }  
//         });
//     });
// });
// /* WordCloud Switch Button */


/* Google Citations Charts */
$(function() {
    $('.gcitation' ).on( 'click', function() {
        var mychart_obj =  document.getElementById('citation');
        var wid = $("#myTab").width()*0.95; // this is to solve the echarts resize problem and written by jquery.
        if(wid>1140){
            wid = 1140;
        };
        mychart_obj.style.width = wid+'px';
        mychart_obj.style.float = 'center';
        var myChart = echarts.init(mychart_obj);
        // specify chart configuration item and data
        var option = {
            title: {
                text: '',
                x:'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            
            legend: {
                data:['Annual Citation', 'Total Citation'],
                x:'center'
            },
            xAxis: {
                type: 'category',
                data: ["2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],
                axisPointer: {
                    type: 'shadow'
                },
            },
            yAxis: [
                        {
                            type: 'value',
                            name: 'Annual Citation',
                            min: 0,
                            max: 500,
                            interval: 100,
                            axisLabel: {
                                formatter: '{value}'
                            }
                        },
                        {
                            type: 'value',
                            name: 'Total Citation',
                            min: 0,
                            max: 4500,
                            interval: 900,
                            axisLabel: {
                                formatter: '{value}'
                            }
                        }
                    ],
            series: [{
                name: 'Annual Citation',
                type: 'bar',
                data: [23, 38, 81, 87, 116, 135, 156, 213, 245, 272, 315, 336, 350, 363, 365, 358, 437, 495]
            },
            {
                name: 'Total Citation',
                type: 'line',
                yAxisIndex: 1,
                data: [23, 61, 142, 229, 345, 480, 636, 849, 1094, 1366, 1681, 2017, 2367, 2730, 3095, 3453, 3890, 4385]
            }
        ]
        };

        // use configuration item and data specified to show chart
        myChart.setOption(option);

    })
})
/* Google Citations Charts */