const totalBox = 8;

function RandChoose(){
    const listOpt = GetVVar();
    const random = Math.floor(Math.random() * listOpt.length);
    var alert_text = 'Resultado: \n' + (random, listOpt[random]);
    alert(alert_text);    
}

function GetVVar(){
    var inOpt = [];
    for(var a = 0;a<totalBox;a++){
        const element = document.getElementById('opt'+ (a+1)).value;
        if (element!=''){
                inOpt.push(element);
        }
    }
    console.log(inOpt);
    return inOpt;
}

