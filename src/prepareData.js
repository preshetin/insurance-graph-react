const prepareData = (chartParams) => {

  // let ages = Array.from(Array(65).keys()).slice(30);
  let ages = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
  let data = [];

  ages.forEach( age => {
    let ourPlan;
    let mutualFunds;
    if (age == 30) {
      ourPlan     = getPlanStart(chartParams);
      mutualFunds = getPlanStart(chartParams);
    } else {
      ourPlan = getOurPlanContinue(age, data.slice(-1)[0], chartParams);
      mutualFunds = 200 + age * (0.7 * chartParams.rateOfReturn);
    }

    data.push({
      name: age,
      ourPlan,
      mutualFunds
    })
  });

  return data;
}

const getPlanStart = (chartParams) => {
  return parseInt(chartParams.initialInvestment) + chartParams.pacMinusInsuranceCost * 12;
}

/*
  chartParams: {
    rateOfReturn: 0.5,
    initialInvestment: 75000,
    pacMonth: 550,
    pacMinusInsuranceCost: 470,
    primaryCIAmount: 69000,
    secondaryCIAmount: 92000,
    primaryCICost: 33,
    secondaryCICost: 47,
    includePrimaryCIInsurace: true,
    insculdSecondaryCIInsurance: true,
    currentAgeYongest: 30,
    currentAgeOldest: 65,
    rateOfReturn: 0.5,
    ourFees: 0.5,
    theirFees: 0.023,
    primaryIllness: 1,
    secondaryIllness: 1,
    illnessEventDate: 47
*/
const getOurPlanContinue = (age, prevData, chartParams) => {

  let one = 0;
  let two = 0;
  let three = 0;
  if (age < chartParams.currentAgeOldest) {
     one = prevData.ourPlan * (1 + chartParams.rateOfReturn - chartParams.ourFees) + 12 * chartParams.pacMinusInsuranceCost;

    if (age == chartParams.illnessEventDate && !chartParams.includePrimaryCIInsurace) {
      two = chartParams.primaryIllness * chartParams.primaryCIAmount;

      if ( ! chartParams.insculdSecondaryCIInsurance) {
        three = chartParams.secondaryIllness * chartParams.secondaryCIAmount;
      }
    }

  }

  let result = parseInt(one - two + three);

  if (result > 1000000000) {
    result = 1000000000
  }

  return result;
}

export default prepareData
