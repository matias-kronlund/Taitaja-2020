document.onload = loadXMLDoc();

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "http://public.bc.fi/katta/taitaja2020/paneeli.xml", true);
  xmlhttp.send();
}
function convertToObjects(xml){
    let panelsMaster = {
        dates:[],
        panels:[]
    };
    for(panel of xml){
        let current_panel = {};
        current_panel.id = panel.getElementsByTagName("id")[0].childNodes[0].nodeValue;
        let datenum = 1;
        while(true){
            try {
                let pvm = panel.getElementsByTagName("pvm_"+datenum)[0].childNodes[0].nodeValue;           
                let tuo = parseInt(panel.getElementsByTagName("tuotanto_"+datenum)[0].childNodes[0].nodeValue);
                let pai = parseInt(panel.getElementsByTagName("paiste_"+datenum)[0].childNodes[0].nodeValue);

                if(!panelsMaster.dates.includes(pvm)){
                    panelsMaster.dates.push(pvm);
                }
                current_panel[pvm] = {
                    tuotanto: tuo,
                    paiste: pai
                }
                datenum++;
            } catch (error) {
                break;          
            }
        }
        panelsMaster.panels.push(current_panel);
    }
    return panelsMaster;
}
function countSolarConsumptionPercentage(a, b) {
    perc = Math.ceil((a / b) * 100);
    if(perc>100 ){ perc = 100 }
    return perc+'%';
}
function countNetConsumptionPercentage(a, b) {
    perc = Math.ceil((a / b) * 100);
    if(perc>100 ){ perc = 100 }
    return 100-perc +'%';
}
function myFunction(xml){
    let panels = convertToObjects(xml.responseXML.getElementsByTagName("paneeli")),
        pc = 25 * 0.03 * 6,
        mac = 19 * 0.03 * 6,
        chrome = 12 * 0.01 * 6,
        computer_tot = pc + mac + chrome,
        table = "";
        
    for(date of panels.dates){
        let suntime = 0,
            prod = 0;
        for(panel of panels.panels){
            suntime += panel[date].paiste;
            prod += panel[date].tuotanto;
        }
        table += '<tr><th colspan="5">Päivämäärä:' + date + ', auringon paistetta keskimäärin '  + suntime + ' tuntia/paneeli</th></tr>';
        table += "<tr><th>Paneelit 1-3</th><th>Tuotanto kWh</th><th>Tietokoneiden kulutus kWh</th><th>Aurinkovoiman kattama %-osuus</th><th>Verkkovirran %-osuus</th></tr>";
        table += "<tr><td>yhteensä</td><td>" + prod + "</td><td>" + computer_tot + "</td><td>" + countSolarConsumptionPercentage(prod, computer_tot) + "</td><td>" + countNetConsumptionPercentage(prod, computer_tot) + "</td></tr>";
    }
    //document.getElementById("table").innerHTML = table;
}