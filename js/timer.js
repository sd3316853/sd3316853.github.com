$(function(){ 
        var str="";   
        for(var i=1;i<32;i++){  
                str+="<option value=" + i + "> " + i + "</option>";  
            }  
        $(str).appendTo(".days0");  
        $(".month0").change(function(){  
            var yearstr=$(".year option:selected").val();  
            var monthstr=$(".month0 option:selected").text();  
            var str="";  
          
            if(monthstr=='1' || monthstr=='3' || monthstr=='5' || monthstr=='7' || monthstr=='8' || monthstr=='10' || monthstr=='12'){  
                $(".days0").empty();  
                for(var i=1;i<32;i++){  
                    str+="<option value=" + i + "> " + i + "</option>";  
                }  
                $(str).appendTo(".days0");  
            }else if(monthstr==2){  
                $(".days0").empty();  
                if(yearstr%100!=0 && yearstr%4==0 || yearstr%100==0 && yearstr%400==0){  
                    for(var i=1;i<30;i++){  
                        str+="<option value=" + i + "> " + i + "</option>";  
                    }  
                }else{  
                    for(var i=1;i<29;i++){  
                        str+="<option value=" + i + "> " + i + "</option>";  
                    }  
                }  
                $(str).appendTo(".days0");  
            }else{  
                $(".days0").empty();  
                for(var i=1;i<31;i++){  
                    str+="<option value=" + i + "> " + i + "</option>";  
                }  
                $(str).appendTo(".days0");  
                }  
        });  
        $(".year").change(function(){  
            var yearstr=$(".year option:selected").val();  
            var monthstr=$(".month0 option:selected").text();  
            var str="";  
             if(monthstr==2){  
                $(".days0").empty();  
                if(yearstr%100!=0 && yearstr%4==0 || yearstr%100==0 && yearstr%400==0){  
                    for(var i=1;i<30;i++){  
                        str+="<option value=" + i + "> " + i + "</option>";  
                    }  
                }else{  
                    for(var i=1;i<29;i++){  
                        str+="<option value=" + i + "> " + i + "</option>";  
                    }  
                }  
                $(str).appendTo(".days0");  
            }  
        });  
});  