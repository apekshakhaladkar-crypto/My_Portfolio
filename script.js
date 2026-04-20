// --- 1. INITIALIZE LIBRARIES ---

// Lucide Icons ko activate karne ke liye
lucide.createIcons();

// AOS (Animate On Scroll) ko start karne ke liye
AOS.init({ 
    duration: 1000, 
    once: true 
});

// --- 2. RESUME MODAL LOGIC ---

const modal = document.getElementById('universalModal');
const viewBtn = document.getElementById('viewResumeBtn');
const closeBtn = document.getElementById('closeModal');

// Jab 'Open Interactive CV' par click ho
if (viewBtn) {
    viewBtn.onclick = () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Scroll rokne ke liye
    };
}

// Close button click handle karne ke liye
if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Scroll wapas shuru karne ke liye
    };
}

// Modal ke bahar click karne par close ho jaye
window.onclick = (e) => { 
    if (e.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// --- 3. SCROLL SPY (ACTIVE NAVIGATION) ---

const sections = document.querySelectorAll('.tab-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check karna ki user screen par kaunsa section dekh raha hai
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // Sidebar links ka color change karna current section ke hisaab se
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// --- 4. FORM SUBMISSION (PREVENT REFRESH) ---

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Transmission Sent! Apeksha will get back to you soon.');
        contactForm.reset();
    });
}