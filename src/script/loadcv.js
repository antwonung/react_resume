fetch("cvdata.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("cvJson-edu").innerHTML = `
        ${data.education.map(function(edu) {
            return `
            <div id="education">
                <h3>| Utbildning : ${edu.school} | Startår: ${edu.startYear} | Slutår: ${edu.endingYear} | Program: ${edu.program}</h3>
            </div>
            `
        }).join('')}
        `
        document.getElementById("cvJson-work").innerHTML = `
        ${data.work.map(function(work) {
            return `
            <div id="work">
                <h3>| Företag: ${work.company} | Befattning: ${work.position} | Startår: ${work.startYear} | Slutår: ${work.endingYear} | Beskr: ${work.desc}  </h3>
            </div>
            `
        }).join('')}
        `
    })