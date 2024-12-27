const bankData = [
    { name: "Post Office", roi: { 1: 6.9, 2: 7, 3: 7, 4: 7, 5: 7.5 } },
    { name: "SBI", roi: { 1: 7.3, 2: 7.25, 3: 7, 4: 7, 5: 6.5 } },
    { name: "Punjab National Bank", roi: { 1: 7.6, 2: 7.8, 3: 7.3, 4: 7.3, 5: 7.3 } },
    { name: "HDFC Bank", roi: { 1: 7.1, 2: 7.65, 3: 7.5, 4: 7.5, 5: 7.75 } },
    { name: "Axis Bank", roi: { 1: 7.6, 2: 7.6, 3: 7.6, 4: 7.6, 5: 7.75 } },
    { name: "ICICI Bank", roi: { 1: 7.65, 2: 7.5, 3: 7.5, 4: 7.5, 5: 7.5 } },
    { name: "Bank of Baroda", roi: { 1: 7.35, 2: 7.75, 3: 7.15, 4: 7.15, 5: 7.5 } },
    { name: "Canara Bank", roi: { 1: 7.35, 2: 7.35, 3: 7.3, 4: 7.3, 5: 7.2 } },
    { name: "Union Bank of India", roi: { 1: 7.25, 2: 7, 3: 7, 4: 7, 5: 7 } },
    { name: "Central Bank of India", roi: { 1: 7.25, 2: 7.5, 3: 7, 4: 7, 5: 6.75 } },
    { name: "Yes Bank", roi: { 1: 6.85, 2: 8.25, 3: 8, 4: 8, 5: 7.75 } },
    { name: "Bandhan Bank", roi: { 1: 7.75, 2: 7.75, 3: 7.75, 4: 7.75, 5: 6.6 } },
    { name: "IDFC Bank", roi: { 1: 8, 2: 7.75, 3: 7.5, 4: 7.5, 5: 7.5 } },
    { name: "Indian Bank", roi: { 1: 6.8, 2: 7.2, 3: 6.75, 4: 6.75, 5: 6.6 } },
    { name: "IndusInd Bank", roi: { 1: 8.25, 2: 8, 3: 8, 4: 8, 5: 8 } },
    { name: "IDBI Bank", roi: { 1: 7.3, 2: 7, 3: 7, 4: 7, 5: 6.75 } },
    { name: "Kotak Mahindra Bank", roi: { 1: 7.7, 2: 7.65, 3: 7.6, 4: 7.6, 5: 6.7 } }
];

function calculateReturns() {
    const amount = parseFloat(document.getElementById('amount').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    if (!amount || !tenure) {
        alert("Please enter valid amount and tenure.");
        return;
    }

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = "";

    bankData.forEach(bank => {
        const rate = bank.roi[Math.min(tenure, 5)] / 100;
        const maturityAmount = amount + (amount * rate * tenure);
        const totalProfit = maturityAmount - amount; // Calculate total profit
        const monthlyReturn = (amount * rate) / 12;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${bank.name}</h3>
            <p><strong>Amount Invested:</strong> ₹${amount.toFixed(2)}</p>
            <p><strong>Rate of Interest:</strong> ${bank.roi[Math.min(tenure, 5)]}%</p>
            <p><strong>Total Profit Earned:</strong> ₹${totalProfit.toFixed(2)}</p>
            <p><strong>Every Month Return:</strong> ₹${monthlyReturn.toFixed(2)}</p>
            <p><strong>Tenure:</strong> ${tenure} years</p>
        `;

        resultsContainer.appendChild(card);
    });
}
