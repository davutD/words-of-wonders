$(function(){

    let array=["B","E","N","D","L"];
    let outputs=["BLEND","LEND","BED","DEN","END","BEND"];

    let copyArray=[];
    let word="";
    let counter=0;
    let hintCounter=0;
    let letterClickCounter=[0,0,0,0,0];
    let wordDisplayCounter=[0,0,0,0,0,0];
    let letterChecker=[];
    let allLetters=["#p1","#p2","#p3","#p4","#p5","#p6","#p7","#p8","#p9","#p10","#p11","#p12","#p13","#p14","#p15","#p16","#p17"];
    let fadeOutLetters=[];

    let valid=false;

    function difference(arr1, arr2) {
        return arr1.filter(x => !arr2.includes(x));
      }

    function fill()
    {
        let newArray=[];

        while(newArray.length<5)
        {
            let randomInt=Math.floor(Math.random()*5);

            if(!newArray.includes(randomInt))
                newArray.push(randomInt);
        }  


        $("#n1").text(array[newArray[0]]).css({"font-size":"50px","align-items":"center"});
        $("#n2").text(array[newArray[1]]).css({"font-size":"50px","align-items":"center"});
        $("#n3").text(array[newArray[2]]).css({"font-size":"50px","align-items":"center"});
        $("#n4").text(array[newArray[3]]).css({"font-size":"50px","align-items":"center"});
        $("#n5").text(array[newArray[4]]).css({"font-size":"50px","align-items":"center"});

        return newArray;
    };

    function empty()
    {
    $("#n1").html("").css({"font-size":"50px","align-items":"center"});
    $("#n2").html("").css({"font-size":"50px","align-items":"center"});
    $("#n3").html("").css({"font-size":"50px","align-items":"center"});
    $("#n4").html("").css({"font-size":"50px","align-items":"center"});
    $("#n5").html("").css({"font-size":"50px","align-items":"center"});
    };


    if($("#n1,#n2,#n3,#n4,#n5").is(":empty"))
    {
        copyArray=fill();
    };

    $("#n1").on("click",function(){
        if(letterClickCounter[0]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#n1").animate({"top":"+=10"},70);
                    $("#n1").animate({"top":"-=10"},70);
                }
        }
       if(counter<5&&!word.includes(array[copyArray[0]]))
       {
        $("#container").append(array[copyArray[0]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"tomato"});
        $(this).css("background-color","cornflowerblue");
        //$(this).animate({"color":"white"},100);
        word=word.concat(array[copyArray[0]]);
        counter++;
        letterClickCounter[0]++;
       }
    });
    $("#n2").on("click",function(){
        if(letterClickCounter[1]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#n2").animate({"top":"+=10"},70);
                    $("#n2").animate({"top":"-=10"},70);
                }
        }
        if(counter<5&&!word.includes(array[copyArray[1]]))
        {
        $("#container").append(array[copyArray[1]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"tomato"});
        $(this).css("background-color","cornflowerblue");
        word=word.concat(array[copyArray[1]]);
        counter++;
        letterClickCounter[1]++;
        }
    });
    $("#n3").on("click",function(){
        if(letterClickCounter[2]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#n3").animate({"top":"+=10"},70);
                    $("#n3").animate({"top":"-=10"},70);
                }
        }
        if(counter<5&&!word.includes(array[copyArray[2]]))
        {
        $("#container").append(array[copyArray[2]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"tomato"});
        $(this).css("background-color","cornflowerblue");
        word=word.concat(array[copyArray[2]]);
        counter++;
        letterClickCounter[2]++;
        }
    });
    $("#n4").on("click",function(){
        if(letterClickCounter[3]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#n4").animate({"top":"+=10"},70);
                    $("#n4").animate({"top":"-=10"},70);
                }
        }
       if(counter<5&&!word.includes(array[copyArray[3]]))
       {
        $("#container").append(array[copyArray[3]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"tomato"});
        $(this).css("background-color","cornflowerblue");
        word=word.concat(array[copyArray[3]]);
        counter++;
        letterClickCounter[3]++;
       }
    });
    $("#n5").on("click",function(){
        if(letterClickCounter[4]!=0)
        {
            for(let i=0;i<3;i++)
                {
                    $("#n5").animate({"top":"+=10"},70);
                    $("#n5").animate({"top":"-=10"},70);
                }
        }
        if(counter<5&&!word.includes(array[copyArray[4]]))
        {
        $("#container").append(array[copyArray[4]]);
        $("#container").css({"width":"+=15px","display":"inline","background-color":"tomato"});
        $(this).css("background-color","cornflowerblue");
        word=word.concat(array[copyArray[4]]);
        counter++;
        letterClickCounter[4]++;
        }
    });

    $("#row2 img").on("mouseover",function(){
       $(this).css("opacity","1");
    });

    $("#row2 img").on("mouseout",function(){
        $(this).css("opacity","0.5");
    });

    $("#row2 img").mousedown(function(event){
      if(word==""&&event.which==1)
      {
        empty();
        $("#n1,#n2,#n3,#n4,#n5").css("background-color","");
        copyArray=fill();
        //$("#container").text("");
        $("#container").css({"width":"50px","display":"none"});
        counter=0;
        letterClickCounter=[0,0,0,0,0];
        //word="";
      }else if((event.which==1&&word!==""))
      {
          
          for(let i=0;i<3;i++)
          {
              $("#row2 img").animate({"left":"+=10"},90);
              $("#row2 img").animate({"left":"-=10"},90);
          }
      }
    });

    $("#row1 div,#row2 div,#row3 div").on("mouseover",function(){
        $(this).css("cursor","pointer");
    });

    $("#hint img").on("mouseover",function(){
        $(this).css("cursor","pointer");
    });

    $("#hint img").on("mouseover",function(){
        $(this).css("opacity","1");
    });

    $("#hint img").on("mouseout",function(){
        $(this).css("opacity","0.8");
    });

    $("#hint img").on("click",function(){
        if(hintCounter==0)
        {
            if( wordDisplayCounter[0]==0)
            {
                $("#p1").fadeIn(1000);
                $("#p5").fadeIn(1000);
                $("#p8").fadeIn(1000);
                $("#p12").fadeIn(1000);
                $("#p16").fadeIn(1000);   
            }
            if( wordDisplayCounter[1]==0)
            {
                $("#p7").fadeIn(1000);
                $("#p8").fadeIn(1000);
                $("#p9").fadeIn(1000);
                $("#p10").fadeIn(1000);   
            }
            if( wordDisplayCounter[2]==0)
            {
                $("#p1").fadeIn(1000);
                $("#p2").fadeIn(1000);
                $("#p3").fadeIn(1000);  
            }
            if( wordDisplayCounter[3]==0)
            {
                $("#p10").fadeIn(1000);
                $("#p13").fadeIn(1000);
                $("#p17").fadeIn(1000); 
            }
            if( wordDisplayCounter[4]==0)
            {
                $("#p13").fadeIn(1000);
                $("#p14").fadeIn(1000);
                $("#p15").fadeIn(1000);
            }
            if( wordDisplayCounter[5]==0)
            {
                $("#p4").fadeIn(1000);
                $("#p6").fadeIn(1000);
                $("#p11").fadeIn(1000);
                $("#p15").fadeIn(1000);  
            }

            hintCounter++;
        }
        else
        {
            fadeOutLetters=difference(allLetters,letterChecker);
            console.log(fadeOutLetters);
            for(let i=0;i<fadeOutLetters.length;i++)
            {
                $(fadeOutLetters[i]).fadeOut(1000);
            }

            hintCounter=0;
        }
    });

    $("#background").contextmenu(function(event){
        event.preventDefault();
        if(word!=="")
        {
            event.preventDefault();
            if(outputs.includes(word))
            {
                switch(word)
                    {
                        case "BLEND":{

                            if( wordDisplayCounter[0]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p1").fadeOut(150).fadeIn(150);
                                    $("#p5").fadeOut(150).fadeIn(150);
                                    $("#p8").fadeOut(150).fadeIn(150);
                                    $("#p12").fadeOut(150).fadeIn(150);
                                    $("#p16").fadeOut(150).fadeIn(150);
                                }
                            }
                            $("#p1").css({"color":"white","opacity":"1"});
                            $("#p1").fadeIn(1000);
                            $("#d1").css({"background-color":"tomato"});

                            $("#p5").css({"color":"white","opacity":"1"});
                            $("#p5").fadeIn(1000);
                            $("#d5").css({"background-color":"tomato"});

                            $("#p8").css({"color":"white","opacity":"1"});
                            $("#p8").fadeIn(1000);
                            $("#d8").css({"background-color":"tomato"});

                            $("#p12").css({"color":"white","opacity":"1"});
                            $("#p12").fadeIn(1000);
                            $("#d12").css({"background-color":"tomato"});

                            $("#p16").css({"color":"white","opacity":"1"});
                            $("#p16").fadeIn(1000);
                            $("#d16").css({"background-color":"tomato"});
                            
                            if(!letterChecker.includes("#p1"))
                                letterChecker.push("#p1");
                            if(!letterChecker.includes("#p5"))
                                letterChecker.push("#p5");
                            if(!letterChecker.includes("#p8"))
                                letterChecker.push("#p8");
                            if(!letterChecker.includes("#p12"))
                                letterChecker.push("#p12");
                            if(!letterChecker.includes("#p16"))
                                letterChecker.push("#p16");

                            valid=true;
                            wordDisplayCounter[0]++;
                        };break;
                        case "LEND":{

                            if( wordDisplayCounter[1]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p7").fadeOut(150).fadeIn(150);
                                    $("#p8").fadeOut(150).fadeIn(150);
                                    $("#p9").fadeOut(150).fadeIn(150);
                                    $("#p10").fadeOut(150).fadeIn(150);
                                }
                            }
                            $("#p7").css({"color":"white","opacity":"1"});
                            $("#p7").fadeIn(1000);
                            $("#d7").css({"background-color":"tomato"});

                            $("#p8").css({"color":"white","opacity":"1"});
                            $("#p8").fadeIn(1000);
                            $("#d8").css({"background-color":"tomato"});

                            $("#p9").css({"color":"white","opacity":"1"});
                            $("#p9").fadeIn(1000);
                            $("#d9").css({"background-color":"tomato"});

                            $("#p10").css({"color":"white","opacity":"1"});
                            $("#p10").fadeIn(1000);
                            $("#d10").css({"background-color":"tomato"});

                            if(!letterChecker.includes("#p7"))
                                letterChecker.push("#p7");
                            if(!letterChecker.includes("#p8"))
                                letterChecker.push("#p8");
                            if(!letterChecker.includes("#p9"))
                                letterChecker.push("#p9");
                            if(!letterChecker.includes("#p10"))
                                letterChecker.push("#p10");

                            valid=true;
                            wordDisplayCounter[1]++;
                        };break;
                        case "BED":{

                            if( wordDisplayCounter[2]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p1").fadeOut(150).fadeIn(150);
                                    $("#p2").fadeOut(150).fadeIn(150);
                                    $("#p3").fadeOut(150).fadeIn(150);
                                }
                            }
                            $("#p1").css({"color":"white","opacity":"1"});
                            $("#p1").fadeIn(1000);
                            $("#d1").css({"background-color":"tomato"});

                            $("#p2").css({"color":"white","opacity":"1"});
                            $("#p2").fadeIn(1000);
                            $("#d2").css({"background-color":"tomato"});

                            $("#p3").css({"color":"white","opacity":"1"});
                            $("#p3").fadeIn(1000);
                            $("#d3").css({"background-color":"tomato"});

                            if(!letterChecker.includes("#p1"))
                                letterChecker.push("#p1");
                            if(!letterChecker.includes("#p2"))
                                letterChecker.push("#p2");
                            if(!letterChecker.includes("#p3"))
                                letterChecker.push("#p3");

                            valid=true;
                            wordDisplayCounter[2]++;
                        };break;
                        case "DEN":{

                            if( wordDisplayCounter[3]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p10").fadeOut(150).fadeIn(150);
                                    $("#p13").fadeOut(150).fadeIn(150);
                                    $("#p17").fadeOut(150).fadeIn(150);
                                }
                            }
                            $("#p10").css({"color":"white","opacity":"1"});
                            $("#p10").fadeIn(1000);
                            $("#d10").css({"background-color":"tomato"});

                            $("#p13").css({"color":"white","opacity":"1"});
                            $("#p13").fadeIn(1000);
                            $("#d13").css({"background-color":"tomato"});

                            $("#p17").css({"color":"white","opacity":"1"});
                            $("#p17").fadeIn(1000);
                            $("#d17").css({"background-color":"tomato"});

                            if(!letterChecker.includes("#p10"))
                                letterChecker.push("#p10");
                            if(!letterChecker.includes("#p13"))
                                letterChecker.push("#p13");
                            if(!letterChecker.includes("#p17"))
                                letterChecker.push("#p17");

                            valid=true;
                            wordDisplayCounter[3]++;
                        };break;
                        case "END":{

                            if( wordDisplayCounter[4]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p13").fadeOut(150).fadeIn(150);
                                    $("#p14").fadeOut(150).fadeIn(150);
                                    $("#p15").fadeOut(150).fadeIn(150);
                                }
                            }
                            $("#p13").css({"color":"white","opacity":"1"});
                            $("#p13").fadeIn(1000);
                            $("#d13").css({"background-color":"tomato"});

                            $("#p14").css({"color":"white","opacity":"1"});
                            $("#p14").fadeIn(1000);
                            $("#d14").css({"background-color":"tomato"});

                            $("#p15").css({"color":"white","opacity":"1"});
                            $("#p15").fadeIn(1000);
                            $("#d15").css({"background-color":"tomato"});

                            if(!letterChecker.includes("#p13"))
                                letterChecker.push("#p13");
                            if(!letterChecker.includes("#p14"))
                                letterChecker.push("#p14");
                            if(!letterChecker.includes("#p15"))
                                letterChecker.push("#p15");

                            valid=true;
                            wordDisplayCounter[4]++;
                        };break;
                        case "BEND":{

                            if( wordDisplayCounter[5]!=0)
                            {
                                for(let i=0;i<3;i++)
                                {
                                    $("#p4").fadeOut(150).fadeIn(150);
                                    $("#p6").fadeOut(150).fadeIn(150);
                                    $("#p11").fadeOut(150).fadeIn(150);
                                    $("#p15").fadeOut(150).fadeIn(150);
                                }
                            }
                            $("#p4").css({"color":"white","opacity":"1"});
                            $("#p4").fadeIn(1000);
                            $("#d4").css({"background-color":"tomato"});

                            $("#p6").css({"color":"white","opacity":"1"});
                            $("#p6").fadeIn(1000);
                            $("#d6").css({"background-color":"tomato"});

                            $("#p11").css({"color":"white","opacity":"1"});
                            $("#p11").fadeIn(1000);
                            $("#d11").css({"background-color":"tomato"});

                            $("#p15").css({"color":"white","opacity":"1"});
                            $("#p15").fadeIn(1000);
                            $("#d15").css({"background-color":"tomato"});

                            if(!letterChecker.includes("#p4"))
                                letterChecker.push("#p4");
                            if(!letterChecker.includes("#p6"))
                                letterChecker.push("#p6");
                            if(!letterChecker.includes("#p11"))
                                letterChecker.push("#p11");
                            if(!letterChecker.includes("#p15"))
                                letterChecker.push("#p15");

                            valid=true;
                            wordDisplayCounter[5]++;
                        };break;
                    }
            }

            if(valid==false)
            {
                for(let i=0;i<3;i++)
                {
                    $("#container").animate({"left":"+=10"},70);
                    $("#container").animate({"left":"-=10"},70);
                }
            }
            

            setTimeout(function() {
                // code block to be executed after 2 seconds

                //empty();
                $("#n1,#n2,#n3,#n4,#n5").css("background-color","");
                //copyArray=fill();
                $("#container").text("");
                $("#container").css({"width":"50px","display":"none"});
                counter=0;
                word="";
                valid=false;
                letterClickCounter=[0,0,0,0,0];

              }, 600);

        }
    });

});