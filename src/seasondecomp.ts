export function seasondecomp(x: Array<number>): Array<number>{
    var mean: number;
    var sumMean: number = 0;
    var elements: number;
    var timeSeriesComp: Array<number> = [];
    var seasonIndex: Array<number> = [];
    var seasonComponent: Array<number> = [];
    var residualComponent: Array<number> = [];
    // Calculate mean
    for(elements = 0; elements < x.length; elements++){
        sumMean += x[elements];
    }
    mean = sumMean / x.length;
    // Calculate Season Index
    for(elements = 0; elements < x.length; elements++){
        var index: number = x[elements] / mean;
        seasonIndex.push(index);
    }
    // Calculate Seasonal Component
    for(elements = 0; elements < seasonIndex.length; elements++){
        var component: number = seasonIndex[elements] * mean;
        seasonComponent.push(component)
    }
    // Calculate Residual Component
    for(elements = 0; elements < x.length; elements++){
        var residual: number = x[elements] - seasonComponent[elements]
        residualComponent.push(residual);
    }
    // Recontruct original time-series
    for(elements = 0; elements < x.length; elements++){
        var timeSeries: number = mean + seasonComponent[elements] + residualComponent[elements];
        timeSeriesComp.push(timeSeries);
    }
    return timeSeriesComp;
}