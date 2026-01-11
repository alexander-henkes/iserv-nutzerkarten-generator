let studentsData = [];

function toggleFileUpload() {
    const password = document.getElementById('excel-password').value;
    const fileUploadArea = document.getElementById('file-upload-area');
    const fileInput = document.getElementById('file-input');

    if (password.trim() !== '') {
        fileUploadArea.classList.remove('disabled');
        fileInput.disabled = false;
    } else {
        fileUploadArea.classList.add('disabled');
        fileInput.disabled = true;
    }
}

function handleFileUploadClick() {
    const fileUploadArea = document.getElementById('file-upload-area');
    if (!fileUploadArea.classList.contains('disabled')) {
        document.getElementById('file-input').click();
    }
}

function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tab + '-tab').classList.add('active');
}

async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const password = document.getElementById('excel-password').value;

    try {
        // Prepare options for xlsx-populate
        const options = password ? { password: password } : undefined;

        // Load the workbook directly from the file
        const workbook = await XlsxPopulate.fromDataAsync(file, options);

        // Get the first sheet
        const sheet = workbook.sheet(0);

        // Get used range and convert to array
        const usedRange = sheet.usedRange();
        if (!usedRange) {
            showError('Die Excel-Datei enthält keine Daten.');
            return;
        }

        const jsonData = usedRange.value();
        processData(jsonData);
    } catch (error) {
        console.error('Error details:', error);
        if (error.message.includes('password') || error.message.includes('encrypted') || error.message.includes('Incorrect password')) {
            showError('Fehler beim Lesen der Excel-Datei: Die Datei ist passwortgeschützt. Bitte geben Sie das korrekte Passwort ein.');
        } else if (error.message.includes('zip')) {
            showError('Fehler beim Lesen der Excel-Datei: Haben Sie das korrekte Schutzkennwort eingegeben?');
        } else {
            showError('Fehler beim Lesen der Excel-Datei: ' + error.message);
        }
    }
}

function handlePasteData() {
    const pasteArea = document.getElementById('paste-area');
    const text = pasteArea.value.trim();

    if (!text) {
        showError('Bitte fügen Sie Daten in das Textfeld ein.');
        return;
    }

    const lines = text.split('\n');
    const data = lines.map(line => line.split('\t'));

    processData(data);
}

function processData(data) {
    // Remove header row if it exists
    const hasHeader = data[0] && data[0].some(cell =>
        typeof cell === 'string' &&
        (cell.toLowerCase().includes('vorname') ||
         cell.toLowerCase().includes('nachname') ||
         cell.toLowerCase().includes('name'))
    );

    const dataRows = hasHeader ? data.slice(1) : data;

    // Filter out empty rows and convert to objects
    studentsData = dataRows
        .filter(row => row && row.length >= 4 && row[0] && row[1])
        .map(row => ({
            vorname: row[0] || '',
            nachname: row[1] || '',
            nutzername: row[2] || '',
            passwort: row[3] || ''
        }));

    if (studentsData.length === 0) {
        showError('Keine gültigen Schülerdaten gefunden. Bitte überprüfen Sie das Format.');
        return;
    }

    // Update preview info
    const pageCount = Math.ceil(studentsData.length / 8);
    document.getElementById('student-count').textContent = studentsData.length;
    document.getElementById('page-count').textContent = pageCount;
    document.getElementById('preview-info').classList.add('show');
    document.getElementById('error-message').classList.remove('show');
    document.getElementById('print-btn').disabled = false;

    generatePreview();
}

function generatePreview() {
    if (studentsData.length === 0) {
        showError('Bitte laden Sie zuerst Schülerdaten hoch.');
        return;
    }

    const options = {
        showVorname: document.getElementById('show-vorname').checked,
        showNachname: document.getElementById('show-nachname').checked,
        showNutzername: document.getElementById('show-nutzername').checked,
        showPasswort: document.getElementById('show-passwort').checked
    };

    // Calculate total pages
    const totalPages = Math.ceil(studentsData.length / 8);

    // Update both print area and preview container
    const printArea = document.getElementById('print-area');
    const previewContainer = document.getElementById('preview-container');
    printArea.innerHTML = '';
    previewContainer.innerHTML = '';

    // Create pages with 8 cards each
    for (let i = 0; i < studentsData.length; i += 8) {
        const pageStudents = studentsData.slice(i, i + 8);
        const currentPage = Math.floor(i / 8) + 1;

        // Create page for print area
        const printPage = createPage(pageStudents, options, currentPage, totalPages);
        printArea.appendChild(printPage);

        // Create page for preview (clone)
        const previewPage = createPage(pageStudents, options, currentPage, totalPages);
        previewContainer.appendChild(previewPage);
    }

    // Show preview section
    document.getElementById('preview-section').classList.add('show');
    document.getElementById('error-message').classList.remove('show');
}

function createPage(students, options, currentPage, totalPages) {
    const page = document.createElement('div');
    page.className = 'page';

    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    students.forEach(student => {
        const card = createCard(student, options);
        grid.appendChild(card);
    });

    // Fill remaining slots with empty cards if needed
    const remainingSlots = 8 - students.length;
    for (let i = 0; i < remainingSlots; i++) {
        const emptyCard = document.createElement('div');
        emptyCard.className = 'card';
        grid.appendChild(emptyCard);
    }

    page.appendChild(grid);

    // Add page number
    const pageNumber = document.createElement('div');
    pageNumber.className = 'page-number';
    pageNumber.textContent = `Seite ${currentPage} von ${totalPages}`;
    page.appendChild(pageNumber);

    return page;
}

function createCard(student, options) {
    const card = document.createElement('div');
    card.className = 'card';

    if (options.showVorname) {
        card.appendChild(createCardRow('Vorname:', student.vorname));
    }

    if (options.showNachname) {
        card.appendChild(createCardRow('Nachname:', student.nachname));
    }

    if (options.showNutzername) {
        card.appendChild(createCardRow('Nutzername/E-Mail-Adresse:', student.nutzername));
    }

    if (options.showPasswort) {
        card.appendChild(createCardRow('Initialpasswort (bitte zügig ändern):', student.passwort));
    }

    return card;
}

function createCardRow(label, value) {
    const row = document.createElement('div');
    row.className = 'card-row';

    const labelSpan = document.createElement('div');
    labelSpan.className = 'card-label';
    labelSpan.textContent = label;

    const valueSpan = document.createElement('div');
    valueSpan.className = 'card-value';
    valueSpan.textContent = value;

    row.appendChild(labelSpan);
    row.appendChild(valueSpan);

    return row;
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    const retryBtn = document.getElementById('retry-btn');

    errorText.textContent = message;
    errorDiv.classList.add('show');
    retryBtn.style.display = 'inline-block';

    document.getElementById('preview-info').classList.remove('show');
    document.getElementById('print-btn').disabled = true;
}

// Initialize drag and drop functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const fileUploadDiv = document.getElementById('file-upload-area');

    fileUploadDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!fileUploadDiv.classList.contains('disabled')) {
            fileUploadDiv.style.background = '#f8f9ff';
        }
    });

    fileUploadDiv.addEventListener('dragleave', () => {
        fileUploadDiv.style.background = '';
    });

    fileUploadDiv.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUploadDiv.style.background = '';

        if (!fileUploadDiv.classList.contains('disabled')) {
            const file = e.dataTransfer.files[0];
            if (file) {
                document.getElementById('file-input').files = e.dataTransfer.files;
                handleFileUpload({ target: { files: [file] } });
            }
        }
    });
});
