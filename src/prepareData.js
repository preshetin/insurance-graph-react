const prepareData = (chartParams) => {

  chartParams.pacMinusInsuranceCost = getPacMinusInsuranceCost(chartParams);
  chartParams.illnessEventDate = getIllnessEventDate(chartParams);

  let ages = Array.from(Array(parseInt(chartParams.retirementAge)).keys()).slice(parseInt(chartParams.currentAge));

  let data = [];

  ages.forEach( age => {
    let ourPlan;
    let mutualFunds;
    if (age === parseInt(chartParams.currentAge)) {
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
  return parseInt(chartParams.initialInvestment) + chartParams.pacMinusInsuranceCost * 12;
}

const getOurPlanContinue = (age, prevData, chartParams) => {

  let one = 0;
  let two = 0;
  let three = 0;
  if (prevData.age < chartParams.retirementAge) {
     one = prevData.ourPlan * (1 + chartParams.rateOfReturn / 100 - chartParams.ourFees / 100) + 12 * chartParams.pacMinusInsuranceCost;

    if (age === chartParams.illnessEventDate && !chartParams.includePrimaryCIInsurance) {
      two = chartParams.primaryIllness * chartParams.primaryCIAmount;

      if ( ! chartParams.includeSecondaryCIInsurance) {
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

  if (prevData.age < chartParams.retirementAge) {
    one = prevData.mutualFunds * (1 + chartParams.rateOfReturn / 100 - chartParams.theirFees / 100) + chartParams.pacMinusInsuranceCost * 12;

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

const getPacMinusInsuranceCost = (chartParams) => {
  return chartParams.pacMonth - chartParams.primaryCICost * chartParams.includePrimaryCIInsurance - chartParams.secondaryCICost * chartParams.includeSecondaryCIInsurance;
}

const getIllnessEventDate = (chartParams) => {
  const result = Math.floor(parseInt(chartParams.currentAge) + (parseInt(chartParams.retirementAge) - parseInt(chartParams.currentAge)) / 2 );
  return result;
}

export default prepareData
