const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },
}
const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer" },
    { name: "Leo", specialization: "Artist" },
]
const salaries2 = {
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },
}
const team2 = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },
]

function calculateTeamFinanceReport(salaries, team) {
    const result = {};
    let totalBudgetTeam = 0;
    const specializations = Object.keys(salaries);
    const salariesAndTaxes = Object.values(salaries);

    specializations.forEach((specialization, index) => {
        const memberCount = team.filter(member => specialization === member.specialization).length;
        const tax = parseInt(salariesAndTaxes[index].tax);
        const totalBudget = memberCount * (salariesAndTaxes[index].salary / (1 - tax * 0.01).toFixed(2));

        result[`totalBudget${specialization}:`] = Math.floor(totalBudget);
        totalBudgetTeam += totalBudget;
    });
    totalBudgetTeam = Math.floor(totalBudgetTeam);

    return { totalBudgetTeam, ...result };
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport1));
console.log(JSON.stringify(financeReport2));


