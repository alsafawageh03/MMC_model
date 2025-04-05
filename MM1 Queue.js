document.getElementById("calculateBtn").addEventListener("click", function () {
  const lambda = parseFloat(document.getElementById("arrivalRate").value);
  const mu = parseFloat(document.getElementById("serviceRate").value);
  const C = parseInt(document.getElementById("numServers").value);

  let n;
  const rho = lambda / (C * mu);
  const P0 = calculateP0(lambda, mu, C);
  const pw = ((1 / (1 - rho)) * P0 * (C * rho) ** C) / factorial(C);
  const P1 = (rho ** (1 - C) * Math.pow(C * rho, C) * P0) / factorial(C);
  const P2 = (rho ** (2 - C) * Math.pow(C * rho, C) * P0) / factorial(C);
  const P3 = (rho ** (3 - C) * Math.pow(C * rho, C) * P0) / factorial(C);
  const P4 = (rho ** (4 - C) * Math.pow(C * rho, C) * P0) / factorial(C);
  const P5 = (rho ** (5 - C) * Math.pow(C * rho, C) * P0) / factorial(C);
  const P6 = (rho ** (6 - C) * Math.pow(C * rho, C) * P0) / factorial(C);
  const ELq = pw * (rho / (1 - rho));
  const EL = ELq + lambda / mu;
  const ES = EL / lambda;
  const EWq = ELq / lambda;
  const EW = EWq + 1 / mu;
  const PWgreter0 = pw;
  const PWgreterMean = pw * Math.exp(-C * mu * (1 - rho) * EW);
  const PWgreterHalfMean = pw * Math.exp(-C * mu * (1 - rho) * 0.5 * EW);
  const PW1greterHalfMean = pw * Math.exp(-C * mu * (1 - rho) * 1.5 * EW);
  const PWgretert = pw * Math.exp(-C * mu * (1 - rho));
  const sub = -C * mu * (1 - rho);

  displayResults(
    rho,
    P0,
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    EL,
    ES,
    ELq,
    pw,
    EWq,
    EW,
    PWgreter0,
    PWgreterMean,
    PWgreterHalfMean,
    PW1greterHalfMean,
    PWgretert,
    sub
  );
});

function calculateP0(lambda, mu, C) {
  let sum = 0;
  for (let n = 0; n < C; n++) {
    sum += Math.pow(lambda / mu, n) / factorial(n);
  }
  sum +=
    (Math.pow(lambda / mu, C) / factorial(C)) * (1 / (1 - lambda / (C * mu)));
  return 1 / sum;
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function displayResults(
  rho,
  P0,
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  EL,
  ES,
  ELq,
  pw,
  EWq,
  EW,
  PWgreter0,
  PWgreterMean,
  PWgreterHalfMean,
  PW1greterHalfMean,
  PWgretert,
  sub
) {
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = `
      <div class="measure">
          <h2>Utilization Rate (ρ)</h2>
          <p>${rho.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability System is Empty (P0)</h2>
          <p>${P0.toFixed(5)}</p>
      </div>
        <div class="measure">
          <h2>Probability Customer has to Wait (Πw)</h2>
          <p>${pw.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability of n Customers (P1)</h2>
          <p>${P1.toFixed(5)}</p>
      </div>
     
      <div class="measure">
          <h2>Probability of n Customers (P(N>6))</h2>
          <p>${(pw - P6).toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Average Customers in System (E(L))</h2>
          <p>${EL.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Average Time in System (E(S))</h2>
          <p>${ES.toFixed(5)} hours</p>
      </div>
      <div class="measure">
          <h2>Average Customers in Queue (E(Lq))</h2>
          <p>${ELq.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Average Time in System (E(W))</h2>
          <p>${EW.toFixed(5)} hours</p>
      </div>
      <div class="measure">
          <h2>Average Waiting Time in Queue (E(Wq))</h2>
          <p>${EWq.toFixed(5)} hours</p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>0))</h2>
          <p>${PWgreter0.toFixed(5)} hours</p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>0.5 mean time))</h2>
          <p>${PWgreterHalfMean.toFixed(5)} hours</p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>1.5 mean time))</h2>
          <p>${PW1greterHalfMean.toFixed(5)}hours</p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>t))</h2>
          <p>${pw.toFixed(5)} * e^(${sub.toFixed(5)}t) hours</p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>t|W>0))</h2>
          <p>${(PWgretert / pw).toFixed(5)}^t hours</p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>t|W>mean time))</h2>
          <p>(${PWgretert.toFixed(5)}^t/${PWgreterMean.toFixed(5)})  hours</p>
      </div>
      `;
}
