// Dito itatabi ang mga isasagot niya
let dateSelections = {
    type: '',
    location: '',
    contact: ''
};

// Pagpapalit ng Screen/Steps
function nextStep(current, next) {
    document.getElementById(`step-${current}`).classList.remove('active');
    document.getElementById(`step-${next}`).classList.add('active');
}

// Kapag pinindot ang YES
function acceptProposal() {
    nextStep(2, 3);
    // Mag-aauto-advance papuntang Step 4 pagkatapos ng 2.5 seconds kagaya sa video
    setTimeout(() => {
        nextStep(3, 4);
    }, 2500);
}

// Ang makulit na No button na tumatakas
function flyAway() {
    const noBtn = document.getElementById('no-btn');
    const container = document.getElementById('choice-box');
    
    // Kinukuha ang sukat ng container para hindi lumabas sa screen ang button
    const maxWidth = container.clientWidth - noBtn.clientWidth;
    const maxHeight = 150; // Limitasyon ng taas ng lundag

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight) - 50;

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Pagpili ng uri ng date
function selectDateType(type, icon) {
    dateSelections.type = `${icon} ${type}`;
    nextStep(4, 5);
}

// Pagpili ng lugar
function selectLocation(loc, icon) {
    dateSelections.location = `${icon} ${loc}`;
    nextStep(5, 6);
}

// Pag-submit ng contact information
function submitContact() {
    const inputVal = document.getElementById('contact-input').value.trim();
    if(inputVal === "") {
        alert("Please drop a contact so I can reach you! 😉");
        return;
    }
    dateSelections.contact = inputVal;
    
    // Ipinapakita ang buong detalye sa Receipt screen
    document.getElementById('summary-date').innerText = dateSelections.type;
    document.getElementById('summary-loc').innerText = dateSelections.location;
    document.getElementById('summary-contact').innerText = dateSelections.contact;
    
    nextStep(6, 7);
}

// Pag-reset ng laro pabalik sa simula
function resetForm() {
    dateSelections = { type: '', location: '', contact: '' };
    document.getElementById('contact-input').value = '';
    
    // Ibinabalik ang No button sa orihinal nitong pwesto
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'absolute';
    noBtn.style.left = 'unset';
    noBtn.style.right = '60px';
    noBtn.style.top = 'unset';

    // Tinatanggal ang active class sa lahat, at ibinabalik sa step 1
    for(let i = 1; i <= 7; i++) {
        document.getElementById(`step-${i}`).classList.remove('active');
    }
    document.getElementById('step-1').classList.add('active');
}
