const generateCards = teamData => {
 
    const manager = teamData.manager.map(function(job) {
        let managerHtml = `
        <div class="card" style="width: 250px;">
            <h2>${job.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.office}</p>
        </div>
        `
        return managerHtml
    });

    const engineer = teamData.engineer.map(function(job) {
        let engineerHtml = `
        <div class="card" style="width: 225px;">
            <h2>${job.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
        </div>
        `
        return engineerHtml
    })

    const intern = teamData.intern.map(function(job) {
        let internHtml = `
        <div class="card" style="width: 220px;">
            <h2>${job.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> School: ${job.school}</p>
        </div>
        `
        return internHtml
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>My Team</title>
        </head>
        <body>
            <header>
            <h1 class="text-center">The Team</h1>
            </header>
            ${generateCards(templateData)}
        </body>
        </html>    
        `
}

