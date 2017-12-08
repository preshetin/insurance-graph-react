const prepareData = (chartParams) => {

  let ages = Array.from(Array(65).keys()).slice(30);
  let data = [];

  ages.forEach( age => {
    let ourPlan;
    let mutualFunds;
    if (age === 30) {
      ourPlan     = getPlanStart(chartParams);
      mutualFunds = getPlanStart(chartParams);
    } else {
      ourPlan     = getOurPlanContinue(age, data.slice(-1)[0], chartParams);
      mutualFunds = getMutualFundsContinue(age, data.slice(-1)[0], chartParams);
    }

    data.push({
      name: age,
      age,
      ourPlan,
      mutualFunds
    })
  });

  return data;
}

const getPlanStart = (chartParams) => {
  return Math.round(chartParams.initialInvestment + chartParams.pacMinusInsuranceCost * 12);
}

const getOurPlanContinue = (age, prevData, chartParams) => {

  let one = 0;
  let two = 0;
  let three = 0;
  if (prevData.age < chartParams.currentAgeOldest) {
     one = prevData.ourPlan * (1 + chartParams.rateOfReturn - chartParams.ourFees) + 12 * chartParams.pacMinusInsuranceCost;

    if (age === chartParams.illnessEventDate && !chartParams.includePrimaryCIInsurace) {
      two = chartParams.primaryIllness * chartParams.primaryCIAmount;

      if ( ! chartParams.insculdSecondaryCIInsurance) {
        three = chartParams.secondaryIllness * chartParams.secondaryCIAmount;
      }
    }
  }

  let result = Math.round(one - two + three);

  if (result > 1000000000) {
    result = 1000000000
  }

  return result;
}

const getMutualFundsContinue = (age, prevData, chartParams) => {
  let one = 0;
  let two = 0;

  if (prevData.age < chartParams.currentAgeOldest) {
    one = prevData.mutualFunds * (1 + chartParams.rateOfReturn - chartParams.theirFees) + chartParams.pacMinusInsuranceCost * 12;

    if (age === chartParams.illnessEventDate) {
      two = chartParams.primaryIllness * chartParams.primaryCIAmount + chartParams.secondaryIllness * chartParams.secondaryCIAmount;
    }
  }

  let result = Math.round(one - two);

  if (result > 1000000000) {
    result = 1000000000
  }

  return result;
}

export default prepareData
