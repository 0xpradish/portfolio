// Define your education data
const educationData = [
    {
        institution: "Karpagam Academy of Higher Education",
        degree: "Bachelor of Technology",
        field: "Artificial Intelligence and Data Science",
        year: "2020-2024",
        gpa: "8.7/10"
    },
    {
        institution: "Stanes Anglo Indian Hr Sec School",
        degree: "HSC",
        field: "Computer Sceince",
        year: "2018-2020",
        gpa: "72%"
    }
    
];

const skillsData = [
    {
        type: "Programming",
        skills: "Python",
        
    },
    {
        type: "Big Data",
        skills: "SQL • Spark • Pyspark • Hadoop • Hive • Pandas",
        
    },
    {
        type: "Amazon Web Services",
        skills: "Glue • S3 • DynamoDB • Lambda • Step Function • Redshift • EC2",
        
    },
    {
        type: "Web Frameworks",
        skills: "FastAPI",
        
    },
    {
        type: "Additional Technologies",
        skills: "Linux • Airflow • Kafka • MySQL • Git • Github • Docker • DuckDB",
        
    }
    
];

const certificatesData = [
    {
        name: "Microsoft Certified - Azure AI Fundamentals",
        link: "",
        
    },
    {
        name: "Microsoft Certified - Azure Fundamentals",
        link: "",
        
    },
    {
        name: "HackerRank - SQL(Advanced)",
        link: "",
        
    },
    
];

const experienceData = [
    {
        Company: "Mindgraph Technologies pvt ltd",
        role: "Data Engineer",
        location: "Coimbatore",
        year: "Jun 2024 - Present",
        responsibility: "Optimized the Customer 360 pipeline with Python, Spark, and AWS, reducing runtime from 8 to 5 hours, and developed APIs with FastAPI for dashboards, enhancing insights for over 150M customers."
    },
    {
        Company: "Mindgraph Technologies pvt ltd",
        role: "Data Engineer Intern",
        location: "Coimbatore",
        year: "Jun 2023 - Jun 2024",
        responsibility: "Optimized the Customer 360 pipeline with Python, Spark, and AWS, reducing runtime from 8 to 5 hours, and developed APIs with FastAPI for dashboards, enhancing insights for over 150M customers."
    },
    {
        Company: "Kyungpook National University",
        role: "Research Intern",
        location: "Daegu, South Korea",
        year: "Feb 2023 - Mar 2023",
        responsibility: "Researched 'Self-Referential Weight Matrix' for innovative neural network architectures and explored advancements in smart contracts for consumer electronics."
    }
    
];

function createModal() {
    const modalHTML = `
        <div class="modal-backdrop" id="modalBackdrop">
            <div class="modal">
                <button class="modal-close" onclick="closeModal()">&times;</button>
                <div class="modal-content" id="modalContent"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Show modal with content
function showModal(content) {
    const modalContent = document.getElementById('modalContent');
    const modalBackdrop = document.getElementById('modalBackdrop');
    modalContent.textContent = content;
    modalBackdrop.style.display = 'block';
}

// Close modal
function closeModal() {
    const modalBackdrop = document.getElementById('modalBackdrop');
    modalBackdrop.style.display = 'none';
}

// Create table from data
function createTable(data) {
    if (!data.length) return "<p>No data found</p>";
    
    let tableHTML = `
        <div class="result-table-wrapper">
            <table class="result-table">
                <thead>
                    <tr>
                        ${Object.keys(data[0]).map(key => 
                            `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`
                        ).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${data.map(row => `
                        <tr>
                            ${Object.values(row).map((value, index) => {
                                const key = Object.keys(row)[index];
                                if (key.toLowerCase() === 'responsibility') {
                                    return `<td><span class="responsibility-link" onclick="showModal('${value.replace(/'/g, "\\'")}')">${value.substring(0, 50)}...</span></td>`;
                                }
                                return `<td>${value}</td>`;
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    return tableHTML;
}

// Database query handler (keep as is)
function handleQuery(query) {
    query = query.toLowerCase().trim();
    if (query === "select * from education") {
        return createTable(educationData);
    }
    else if (query === "select * from experience") {
        return createTable(experienceData);
    }
    else if (query === "select * from skills") {
        return createTable(skillsData);
    }
    else if (query === "select * from certificates") {
        return createTable(certificatesData);
    }
    return "Query not recognized. Try 'SELECT * FROM education' or 'SELECT * FROM experience'";
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Create modal when page loads
    createModal();
    
    // Close modal when clicking outside
    document.getElementById('modalBackdrop').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modalBackdrop')) {
            closeModal();
        }
    });

    // Run query button event listener
    document.getElementById('runQuery').addEventListener('click', () => {
        const query = document.getElementById('queryInput').value;
        const resultSpace = document.querySelector('.result-space');
        resultSpace.innerHTML = handleQuery(query);
    });
});

// Add escape key listener to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});


const hippoIcon = document.querySelector('.hippo-icon');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Show popup on icon click
hippoIcon.addEventListener('click', () => {
    popup.style.display = 'flex'; // Display the popup
});

// Close popup on close button click
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});

// Close popup on clicking outside the content
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none'; // Hide the popup
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Select all collapsible elements
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', () => {
            // Toggle the active class for the clicked item
            const nested = collapsible.nextElementSibling;
            if (nested) {
                nested.classList.toggle('active'); // Reveal or hide the nested elements
            }
            
            // Optionally toggle a class on the element to style it as active
            collapsible.classList.toggle('expanded');
        });
    });
});


