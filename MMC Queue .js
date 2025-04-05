document.getElementById("calculateBtn").addEventListener("click", function () {
  const lambda = parseFloat(document.getElementById("arrivalRate").value);
  const mu = parseFloat(document.getElementById("serviceRate").value);
  const rho = lambda / mu;
  const P0 = 1 - rho;
  const P1 = rho * P0;
  const P2 = Math.pow(rho, 2) * P0;
  const P3 = Math.pow(rho, 3) * P0;
  const P4 = Math.pow(rho, 4) * P0;
  const P5 = Math.pow(rho, 5) * P0;
  const P6 = Math.pow(rho, 6) * P0;
  const EL = rho / (1 - rho);
  const ELq = EL - rho;
  const ES = EL / lambda;
  const EWq = ELq / lambda;
  const EW = ES - 1 / mu;
  //   const EW = EL / lambda;
  const PWgreter0 = rho;
  const PWgreterMean = rho * Math.exp(-mu * (1 - rho) * EWq);
  const PWgreterHalfMean = rho * Math.exp(-mu * (1 - rho) * 0.5 * EWq);
  const PW1greterHalfMean = rho * Math.exp(-mu * (1 - rho) * 1.5 * EWq);
  const PWgretert = rho * Math.exp(-mu * (1 - rho));
  const sub = -mu * (1 - rho);

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
          <h2>Probability of n Customers (P1)</h2>
          <p>${P1.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability of n Customers (P2)</h2>
          <p>${P2.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability of n Customers (P3)</h2>
          <p>${P3.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability of n Customers (P4)</h2>
          <p>${P4.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability of n Customers (P5)</h2>
          <p>${P5.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability of n Customers (P6)</h2>
          <p>${P6.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability of n Customers (P(N>6))</h2>
          <p>${(rho - P6).toFixed(5)}</p>
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
          <p>${EW.toFixed(5)} </p>
      </div>
      <div class="measure">
          <h2>Average Waiting Time in Queue (E(Wq))</h2>
          <p>${EWq.toFixed(5)} </p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>0))</h2>
          <p>${PWgreter0.toFixed(5)} </p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>0.5 mean time))</h2>
          <p>${PWgreterHalfMean.toFixed(5)} </p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>1.5 mean time))</h2>
          <p>${PW1greterHalfMean.toFixed(5)}</p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>t))</h2>
          <p>${rho.toFixed(5)} * e^(${sub.toFixed(5)}t) </p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>t|W>0))</h2>
          <p>${(PWgretert / rho).toFixed(5)}^t</p>
      </div>
      <div class="measure">
          <h2>Probability of  Waiting Time (P(W>t|W>mean time))</h2>
          <p>(${PWgretert.toFixed(5)}^t/${PWgreterMean.toFixed(5)}) </p>
      </div>
      `;
}
