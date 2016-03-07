function changeType(type){
    var plot = document.getElementById('plot').contentWindow;
    plot.postMessage( {
    'task': 'restyle',
        'update': {'type': type},
    },
    'https://plot.ly');
}

function newPlot(){
    var plotURL = document.getElementById('plotURL').value + '.embed';
    var iframe = document.getElementById('plot');
    iframe.src = plotURL;   
}