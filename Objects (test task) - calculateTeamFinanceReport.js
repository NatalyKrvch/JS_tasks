// Task description: 
// The accounting department turned to the IT department with a request to help with the
// financial report on the work of teams on the vendor side. It is known that the teams consist of
// a different number of specialists in different categories. It is also known that each category of
// specialists has its own fixed salary after taxes and this tax rate. Accounting must calculate
// the cost of the services for each specialty and the entire team. Your team leader has
// prepared a function template that will perform the task. You need to implement this function.
// salaries is an object with more information about salaries and taxes by specialist
// categories; minimum specializations amount is 1, maximum up to 10;
// team is an array of objects represented by member of the team with name and
// specialization; minimal team size is 1, maximum up to 100;

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
