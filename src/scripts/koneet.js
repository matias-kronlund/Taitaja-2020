let opt = [
    {
        room: '11',
        comp_type: 'Chromebook',
        amount: '2',
        abitti: 'nej',
        color: '#7D3C98\r'
    },
    {
        room: '12',
        comp_type: 'Mac',
        amount: '4',
        abitti: 'nej',
        color: '#2874A6\r'
    },
    {
        room: '13',
        comp_type: 'Chromebook',
        amount: '2',
        abitti: 'nej',
        color: '#7D3C98\r'
    },
    {
        room: '14',
        comp_type: 'Mac',
        amount: '3',
        abitti: 'nej',
        color: '#2874A6\r'
    },
    {
        room: '15',
        comp_type: 'PC',
        amount: '20',
        abitti: 'ja',
        color: '#239B56\r'
    },
    {
        room: '16',
        comp_type: 'Mac',
        amount: '3',
        abitti: 'nej',
        color: '#2874A6\r'
    },
    {
        room: '17',
        comp_type: 'Mac',
        amount: '3',
        abitti: 'nej',
        color: '#2874A6\r'
    },
    {
        room: '18',
        comp_type: 'Chromebook',
        amount: '2',
        abitti: 'nej',
        color: '#7D3C98\r'
    },
    {
        room: '23',
        comp_type: 'Chromebook',
        amount: '2',
        abitti: 'nej',
        color: '#7D3C98\r'
    },
    {
        room: '24',
        comp_type: 'Chromebook',
        amount: '2',
        abitti: 'nej',
        color: '#7D3C98\r'
    },
    {
        room: '25',
        comp_type: 'Mac',
        amount: '3',
        abitti: 'nej',
        color: '#2874A6\r'
    },
    {
        room: '26',
        comp_type: 'Chromebook',
        amount: '2',
        abitti: 'nej',
        color: '#7D3C98\r'
    },
    {
        room: '27',
        comp_type: 'Mac',
        amount: '3',
        abitti: 'nej',
        color: '#2874A6\r'
    },
    {
        room: '28',
        comp_type: 'PC',
        amount: '5',
        abitti: 'ja',
        color: '#239B56'
    }
],
    unopt = [
        {
            room: '11',
            comp_type: 'PC',
            amount: '5',
            abitti: 'ja',
            color: '#239B56\r'
        },
        {
            room: '12',
            comp_type: 'Mac',
            amount: '7',
            abitti: 'nej',
            color: '#2874A6\r'
        },
        {
            room: '13',
            comp_type: 'Chromebook',
            amount: '4',
            abitti: 'nej',
            color: '#7D3C98\r'
        },
        {
            room: '14',
            comp_type: 'PC',
            amount: '3',
            abitti: 'ja',
            color: '#239B56\r'
        },
        {
            room: '15',
            comp_type: 'PC',
            amount: '2',
            abitti: 'ja',
            color: '#239B56\r'
        },
        {
            room: '16',
            comp_type: 'Mac',
            amount: '3',
            abitti: 'nej',
            color: '#2874A6\r'
        },
        {
            room: '17',
            comp_type: 'Mac',
            amount: '3',
            abitti: 'nej',
            color: '#2874A6\r'
        },
        {
            room: '18',
            comp_type: 'Chromebook',
            amount: '4',
            abitti: 'nej',
            color: '#7D3C98\r'
        },
        {
            room: '23',
            comp_type: 'PC',
            amount: '5',
            abitti: 'ja',
            color: '#239B56\r'
        },
        {
            room: '24',
            comp_type: 'Chromebook',
            amount: '4',
            abitti: 'nej',
            color: '#7D3C98\r'
        },
        {
            room: '25',
            comp_type: 'Mac',
            amount: '3',
            abitti: 'nej',
            color: '#2874A6\r'
        },
        {
            room: '26',
            comp_type: 'PC',
            amount: '5',
            abitti: 'ja',
            color: '#239B56\r'
        },
        {
            room: '27',
            comp_type: 'Mac',
            amount: '3',
            abitti: 'nej',
            color: '#2874A6\r'
        },
        {
            room: '28',
            comp_type: 'PC',
            amount: '5',
            abitti: 'ja',
            color: '#239B56'
        }
];
let state = true;
function optfunc(){
    if(state == false){
        document.getElementById("opt-button").innerHTML = "Palauta alkutilanne";
        for(r of opt){
            let cont = "";
            let comp_char;
            if(r.comp_type == "Mac"){
                comp_char = "M";

            }else if(r.comp_type == "PC"){
                comp_char = "P";
            }
            else{
                comp_char = "C";
            }
            if(window.innerWidth < 700){
                comp_char = "";
            }
            for(var i = 0; i < parseInt(r.amount); i++){
                cont += `<p class='comp' style='background: ${r.color};'>${comp_char}</p>`;
            }
            document.getElementById("room-"+r.room).innerHTML = cont;
        }
        state=true;
    }else{
        document.getElementById("opt-button").innerHTML = "Optimoi abittikoneet";
        for(r of unopt){
            let cont = "";
            let comp_char;
            if(r.comp_type == "Mac"){
                comp_char = "M";

            }else if(r.comp_type == "PC"){
                comp_char = "P";
            }
            else{
                comp_char = "C";
            }
            if(window.innerWidth < 700){
                comp_char = "";
            }
            for(var i = 0; i < parseInt(r.amount); i++){
                cont += `<p class='comp' style='background: ${r.color};'>${comp_char}</p>`;
            }
            document.getElementById("room-"+r.room).innerHTML = cont;
        }
        state=false;
    }
    
}
if(innerWidth < 400){
    for(room of opt){
        let margin = $("#room-"+room.room).css("margin-left");
        let intmargin = parseInt(margin.split("px")[0]);
        $("#room-"+room.room).css("margin-left", intmargin * 0.78 + "px");
        $("#room-"+room.room).css("width", "40px");
        console.log(room.room, intmargin);
    }
}
