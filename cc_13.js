//Task 1 - Creating the Base Structure
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Directory</title>
</head>
<body>
    <header>
        <h1>Employee Directory</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div id="employeeContainer">
            <!-- Employee cards will be dynamically added here -->
        </div>
    </main>

    <footer>
        <p>&copy; 2025 Company Name. All rights reserved.</p>
        <address>
            Contact us at: <a href="mailto:info@company.com">info@company.com</a>
        </address>
    </footer>
</body>
</html>


//Task 2 - Adding Employee Cards Dynamically


function createEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
    card.setAttribute('id', `emp-${Date.now()}-${name.toLowerCase().replace(' ', '-')}`);

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = name;

    const positionPara = document.createElement('p');
    positionPara.textContent = position;

    const removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'remove-btn');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        card.remove();
    });

    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    const container = document.getElementById('employeeContainer');
    container.appendChild(card);
}


//Task 3 - Converting NodeLists to Arrays for Bulk Updates
// cc_13.js

function createEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
    card.setAttribute('id', `emp-${Date.now()}-${name.toLowerCase().replace(' ', '-')}`);

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = name;

    const positionPara = document.createElement('p');
    positionPara.textContent = position;

    const removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'remove-btn');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        card.remove();
    });

    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    const container = document.getElementById('employeeContainer');
    container.appendChild(card);
}

function updateAllEmployeeCards() {
   
    const cardsNodeList = document.querySelectorAll('.employee-card');
    const cardsArray = Array.from(cardsNodeList);
    cardsArray.forEach(card => {
        card.classList.add('highlight');
    });
}
.employee-card {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
    max-width: 300px;
}

.remove-btn {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.highlight {
    background-color: #ffffe0;
    border: 2px solid #ffd700;
}



//Task 4 - Implementing Removal of Employee Cards with Event Bubbling
function createEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
    card.setAttribute('id', `emp-${Date.now()}-${name.toLowerCase().replace(' ', '-')}`);

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = name;

    const positionPara = document.createElement('p');
    positionPara.textContent = position;

    const removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'remove-btn');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        card.parentNode.removeChild(card);
    });

    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    const container = document.getElementById('employeeContainer');
    container.appendChild(card);
}

function updateAllEmployeeCards() {
    const cardsNodeList = document.querySelectorAll('.employee-card');
    const cardsArray = Array.from(cardsNodeList);
    cardsArray.forEach(card => {
        card.classList.add('highlight');
    });
}

document.getElementById('employeeContainer').addEventListener('click', (event) => {
    console.log('Employee card container clicked! Target:', event.target);
});


//Task 5 - Inline Editing of Employee Detailsfunction 
function createEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
    card.setAttribute('id', `emp-${Date.now()}-${name.toLowerCase().replace(' ', '-')}`);

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = name;

    const positionPara = document.createElement('p');
    positionPara.textContent = position;

    const removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'remove-btn');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        card.parentNode.removeChild(card);
    });

    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);

    const container = document.getElementById('employeeContainer');
    container.appendChild(card);

    card.addEventListener('dblclick', () => {
        const currentName = nameHeading.textContent;
        const currentPosition = positionPara.textContent;

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = currentName;

        const positionInput = document.createElement('input');
        positionInput.type = 'text';
        positionInput.value = currentPosition;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        card.innerHTML = '';
        card.appendChild(nameInput);
        card.appendChild(positionInput);
        card.appendChild(saveButton);
        card.appendChild(removeButton);

        saveButton.addEventListener('click', () => {
            const newName = nameInput.value;
            const newPosition = positionInput.value;

            card.innerHTML = '';
            nameHeading.textContent = newName;
            positionPara.textContent = newPosition;
            card.appendChild(nameHeading);
            card.appendChild(positionPara);
            card.appendChild(removeButton);
        });
    });
}

function updateAllEmployeeCards() {
    const cardsNodeList = document.querySelectorAll('.employee-card');
    const cardsArray = Array.from(cardsNodeList);
    cardsArray.forEach(card => {
        card.classList.add('highlight');
    });
}

document.getElementById('employeeContainer').addEventListener('click', (event) => {
    console.log('Employee card container clicked! Target:', event.target);
});