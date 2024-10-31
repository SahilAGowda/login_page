//  this is function called from the loop again and again and fetch the detail 
//  from it and then display the appropriate sub and teacher name 
function getSpecificTeacher(subject) {
    const teacherMap = {
        "Analysis and Design of Algorithm": "Dr. Krishna Murthy Sir", // key value pair 
        "Microcontroller": "Pothi Reddy Sir",
        "DBMS": "Rafiq Sir",
        "Graph Theory": "Ravi Sir",
        "Biology": "Varshini Mam"
    };
    return teacherMap[subject] || "Unknown Teacher";
}


// Function to generate the table
function generateTable(event) {
    // Prevent form submission
    event.preventDefault(); 

    const name = document.querySelector('.input-box input[placeholder="Name of Student"]').value;//get the value from the input field
    // get the value from the semester input field
    const semester = document.querySelector('.input-box input[placeholder="Semester"]').value;

    if (!name || !semester) {
        alert("Please enter both name and semester.");
        return;
    }

    if (semester != 4) {
        alert("This feature is only available for semester 4.");
        return;
    }

    const subjects = ["Analysis and Design of Algorithm", "Microcontroller", "DBMS", "Graph Theory", "Biology"];

// Define the table structure Over here so basically 
// we are creating a table with the help of html tags and 
//  basic css styling in line css styling is used
    let tableHtml = `
        <table>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Subject Code</th>
                    <th>Teacher</th>
                    <th>Questions</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Loop through the subjects and add a row for each subject
    subjects.forEach((subject, index) => {
        tableHtml += `
            <tr>                
                <td>${subject}</td>
                <td>21CS51</td>
                <td>${getSpecificTeacher(subject)}</td>
                <td>How is the performance ?</td>
                <td><button onclick="rateTeacher(${index})">Rate</button></td>
            </tr>
        `;
    });

    tableHtml += "</tbody></table>";

    // Open a new window to display the table
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
            <head>
                <title>Student-Teacher Assignment</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    table {
                        border-collapse: collapse;
                        width: 80%;
                        max-width: 800px;
                        background-color: white;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                    }
                    th, td {
                        padding: 12px 15px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    thead {
                        background-color: #4CAF50;
                        color: white;
                    }
                    tr:nth-child(even) {
                        background-color: #f8f8f8;
                    }
                    tr:hover {
                        background-color: #f1f1f1;
                    }
                    button {
                        background-color: #4CAF50;
                        color: white;
                        border: none;
                        padding: 5px 10px;
                        margin:10px;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    button:hover {
                        background-color: #0560ff;
                        
                    }
                </style>
                <script>
                    function rateTeacher(index) {
                        const rating = prompt("Rate this teacher from 1 to 5:");
                        if (rating !== null && rating !== "") {
                            const parsedRating = parseInt(rating);
                            if (parsedRating >= 1 && parsedRating <= 5) {
                                alert("Thank you for rating this teacher " + parsedRating + " stars!");
                            } else {
                                alert("Please enter a valid rating between 1 and 5.");
                            }
                        }
                    }
                   
                  
                </script>
            </head>
            <body>
                <h1>Teacher List</h1>
                ${tableHtml}
                <td><button>Submit</button></td>
            </body>
        </html>
    `);
}

// Add event listener to the form 
document.querySelector('form').addEventListener('submit', generateTable);
