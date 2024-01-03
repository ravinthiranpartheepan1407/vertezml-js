type data = {
    groups: string;
    metrics: Array<string>;
    values: Array<number>;
};

interface IChiSqrTable {
    dfVal: number,
    value: number
}

interface IResult {
    chisqr: number,
    chival:  number,
    dfRes:  number,
    message: string
}

export function chisqr(...dataset: data[]): Array<IResult> {
    var elements: number;
    var mean: number;
    var chiSqrStat: number = 0;
    var alpha: number = 0.05;

    var df: number = (dataset[0].values.length - 1) * (dataset[0].metrics.length - 1);

    var res: Array<IResult> = [];

    var chiTable: Array<IChiSqrTable> = [
        {
            dfVal: 1,
            value: 3.841
        },{
            dfVal: 2,
            value: 5.991
        },{
            dfVal: 3,
            value: 7.815
        }, {
            dfVal: 4,
            value: 9.488
        },{
            dfVal: 5,
            value: 11.070
        }
    ]

    // console.log(`Alpha value: ${alpha}`)

    for (elements = 0; elements < dataset.length; elements++) {
        // console.log(`Groups: ${dataset[elements].groups}`);
        // console.log(`Values: ${dataset[elements].values}`);
        var sum: number = 0;
        if (Array.isArray(dataset[elements].values)) {
            for (const value of dataset[elements].values) {
                sum += value;
            }
            mean = sum / dataset[elements].values.length;
            // console.log(`Mean of group ${dataset[elements].groups}: ${mean}`);
        } else {
            // console.log("Values must be numbers");
        }
    }

    // Calculating Mean for Each Metrics
    const metrics: Array<string> = dataset[0].metrics;
    for (const metric of metrics) {
        var catSum: number = 0;
        var catCount: number = 0;

        for (elements = 0; elements < dataset.length; elements++) {
            const metricIndex: number = dataset[elements].metrics.indexOf(metric);
            if (metricIndex !== -1) {
                catSum += dataset[elements].values[metricIndex];
                catCount++;
            }
        }
        const catMean = catSum / catCount;

        // Calculating Chi-Square Statistics
        for (elements = 0; elements < dataset.length; elements++) {
            const metricIndex: number = dataset[elements].metrics.indexOf(metric);
            if (metricIndex !== -1) {
                const sqrDiff: number = dataset[elements].values[metricIndex] - catMean;
                // console.log(`Diff ${dataset[elements].values[metricIndex]} - ${catMean}`);
                const powDiff: number = Math.pow(sqrDiff, 2)
                const divPow: number = powDiff / dataset[elements].values[metricIndex]
                chiSqrStat += divPow;
            }
        }

        // console.log(`Mean of Each Metrics -> ${metric}: ${catMean}`);
    }

    // console.log(`Degrees of Freedom: ${df}`);
    // console.log(`Chi-Square Statistics: ${chiSqrStat}`)
    for(elements = df-1; elements < df+1; elements++){
        console.log(chiTable[elements])
        if(chiTable[elements].dfVal === df){
            // console.log(chiTable[elements].dfVal)
            if(chiSqrStat > chiTable[elements].value){
                // console.log("Reject Null Hypothesis because the observed values and expected values are significantly different")
                // console.log(chiTable[elements].value)
                res = [
                    {
                        chisqr: chiSqrStat,
                        chival: chiTable[elements].value,
                        dfRes: df,
                        message: "Reject Null Hypothesis because the observed values and expected values are significantly different"
                    }
                ]
                break
            }else{
                // console.log("Cannot reject Null Hypothesis because the observed values and expected values are significantly fit")
                // console.log(chiTable[elements].value)
                res = [
                    {
                        chisqr: chiSqrStat,
                        chival: chiTable[elements].value,
                        dfRes: df,
                        message: "Reject Null Hypothesis because the observed values and expected values are significantly different"
                    }
                ]
                break
            }
        }
    }
    // console.log(res)
    return res;
}
