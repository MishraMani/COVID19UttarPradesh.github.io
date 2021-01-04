        $(document).ready(function(){fetch("https://api.covid19india.org/data.json").then(t=>t.json()).then(t=>{const e=t.statewise[7];$("#totalConfirmed").html(e.confirmed),$("#totalRecovered").html(e.recovered),$("#totalDeaths").html(e.deaths),$("#totalActive").html(e.active),$("#lastUpdate").html(e.lastupdatedtime),$("#deltaConfirmed").html(e.deltaconfirmed),$("#deltaRecovered").html(e.deltarecovered),$("#deltaDeaths").html(e.deltadeaths);const a=t.statewise[0];$("#INconfirmed").html(a.confirmed),$("#INrecovered").html(a.recovered),$("#INdeaths").html(a.deaths),$("#INactive").html(a.active),$("#lastUpdate1").html(a.lastupdatedtime),$("#deltaConfirmed1").html(a.deltaconfirmed),$("#deltaRecovered1").html(a.deltarecovered),$("#deltaDeaths1").html(a.deltadeaths),$(".count").each(function(){var t=$(this);$({Counter:0}).animate({Counter:t.text()},{duration:3e3,easing:"swing",step:function(){t.text(Math.ceil(this.Counter))}})})}).catch(t=>console.log(`Error: ${t}`)),fetch("https://api.covid19india.org/states_daily.json").then(t=>t.json()).then(t=>{let e=totalRecover=totalDeaths=0;const a=t.states_daily,o=a.filter((t,e,a)=>e%3==0),i=a.filter((t,e,a)=>(e+1)%3==0),r=a.filter((t,e,a)=>(e+2)%3==0),n=o.map(t=>t.date),s=o.map(t=>Number(t.up)),d=i.map(t=>Number(t.up)).map(t=>totalDeaths+=t),l=r.map(t=>Number(t.up)).map(t=>totalRecover+=t),c=s.map(t=>e+=t);Highcharts.chart("lineChart",{title:{text:""},subtitle:{text:""},yAxis:{title:{text:""}},xAxis:{accessibility:{rangeDescription:""},categories:n},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:0}},series:[{name:"Confirmed",data:c},{name:"Recovered",color:"#5eba7d",data:l},{name:"Deaths",color:"#e53935",marker:{symbol:"triangle-down"},data:d}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}),Highcharts.chart("barChart",{chart:{type:"column"},title:{text:""},subtitle:{text:""},xAxis:{categories:n,crosshair:!0},yAxis:{min:0,title:{text:""}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"New Cases",data:s}]})}).catch(t=>console.log(`Error: ${t}`)),fetch("https://MishraMani.github.io/COVID19UttarPradesh.github.io/zones.json").then(t=>t.json()).then(t=>{const e=t.zones.filter(t=>"UP"==t.statecode);fetch("https://api.covid19india.org/v2/state_district_wise.json").then(t=>t.json()).then(t=>{const a=t.filter(t=>"UP"==t.statecode)[0].districtData;let o=[];for(let t=0;t<a.length;t++)o.push({...a[t],...e.find(e=>e.district===a[t].district)});const i=o.map(t=>`<tr class="${t.zone}">\n                                    <td><strong>${t.district}</strong></td>\n                                    <td>${t.confirmed}</td>\n                                    <td>${t.recovered}</td>\n                                    <td>${t.deceased}</td>\n                                    <td>${t.active}</td>\n                                </tr>`);$("#tableData").html(i),$("#dataTable").DataTable({responsive:!0,pageLength:25})})}).catch(t=>console.log(`Error: ${t}`)),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.js").then(t=>console.log("service worker registered")).catch(t=>console.log("service worker not registered",t))})});
