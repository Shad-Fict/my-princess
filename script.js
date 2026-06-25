// ===== DATA =====
const reasons = [
    "Your smile can fix my worst day",
    "Your eyes deserve their own galaxy",
    "Your laugh feels like home",
    "You make ordinary moments unforgettable",
    "You are effortlessly beautiful",
    "You make people feel safe",
    "You are stronger than you realize",
    "Your kindness is rare",
    "You are the definition of comfort",
    "You are my favorite human",
    "Your presence makes everything better",
    "You light up every room you enter",
    "Your warmth is contagious",
    "You have the purest heart",
    "You always know what to say",
    "Your hugs heal everything",
    "You make the world a softer place",
    "You are braver than you believe",
    "Your energy is magnetic",
    "You are a walking sunshine",
    "You make sadness feel small",
    "Your voice is my favorite melody",
    "You understand without words",
    "You make me believe in good people",
    "You are the calm in every storm",
    "Your kindness changes lives",
    "You make everything feel magical",
    "You are my peace",
    "You bring out the best in people",
    "Your existence is a gift",
    "You make hard days easier",
    "You are the reason I believe in soulmates",
    "Your heart is made of gold",
    "You make me want to be better",
    "You are my comfort zone",
    "Your spirit is unbreakable",
    "You are the definition of grace",
    "You carry magic in your soul",
    "You are more than enough",
    "You make the universe jealous",
    "Your smile could end wars",
    "You are poetry in motion",
    "You make the stars feel close",
    "Your authenticity is refreshing",
    "You are a masterpiece",
    "You make every second count",
    "Your love language is everything",
    "You are my safe harbor",
    "You turn scars into stars",
    "Your energy is healing",
    "You make the impossible possible",
    "You are my favorite story",
    "Your courage inspires me",
    "You are the definition of love",
    "You make life feel like a dream",
    "Your joy is my joy",
    "You are the answer to every prayer",
    "You make my soul happy",
    "Your light never fades",
    "You are worth every heartbeat",
    "You are the best thing that happened to me",
    "Your tears make me care more",
    "You make patience feel easy",
    "You are the reason I smile",
    "Your honesty is beautiful",
    "You make the ordinary extraordinary",
    "You are the warmest soul I know",
    "Your eyes hold universes",
    "You make every day brighter",
    "You are the definition of loyalty",
    "Your heart beats in rhythm with mine",
    "You make silence comfortable",
    "You are my greatest adventure",
    "Your love is unconditional",
    "You make friendship an art form",
    "You are the reason I trust people",
    "Your presence is all I need",
    "You make the little things matter",
    "You are the light at the end of every tunnel",
    "Your belief in me means everything",
    "You are the reason stars shine",
    "You make vulnerability feel safe",
    "You are my absolute favorite place",
    "Your support is my strength",
    "You make happiness look effortless",
    "You are the reason I believe in forever",
    "Your patience is admirable",
    "You make me feel enough",
    "You are the definition of precious",
    "Your friendship is my treasure",
    "You make love feel simple",
    "You are the reason my heart beats faster",
    "Your laughter is my therapy",
    "You make every moment worth remembering",
    "You are the most beautiful chapter of my life",
    "Your love makes me fearless",
    "You make everything feel possible",
    "You are the poem I'll never finish writing",
    "Your soul shines brighter than any star",
    "You are simply irreplaceable"
];

const reasonsEmoji = [
    "🌸", "✨", "💫", "🌙", "💖", "🦋", "🌺", "💎", "🌹", "💛",
    "🌷", "⭐", "🔮", "💝", "🌻", "🎀", "🌈", "🦋", "💫", "☀️",
    "🌻", "🎵", "🕊️", "✨", "🌊", "💎", "🌟", "☁️", "☀️", "🎁",
    "🌤️", "💫", "💛", "🌱", "🏠", "🔥", "👑", "✨", "🌅", "🌟",
    "🌸", "📜", "💫", "💎", "🖼️", "⏳", "💗", "🏖️", "✨", "🌿",
    "✨", "📖", "🦁", "💕", "💫", "😊", "🙏", "💗", "🕯️", "💓",
    "🌟", "💝", "💧", "⏳", "😊", "🏅", "🌷", "🌙", "☀️", "🤝",
    "💓", "🕊️", "🌈", "💝", "🎭", "🌟", "🏠", "🔦", "💪", "✨",
    "💫", "🏠", "💪", "😊", "💗", "🙌", "✨", "💛", "💎", "💖",
    "💕", "🎵", "📸", "📖", "🦁", "🌟", "✍️", "✨", "💖"
];

const obsessedItems = [
    { emoji: "💗", text: "Simply... You" },
    { emoji: "💗", text: "Your eyes" },
    { emoji: "💗", text: "Your smile" },
    { emoji: "💗", text: "Your voice" },
    { emoji: "💗", text: "Your laugh" },
    { emoji: "💗", text: "Your personality" },
    { emoji: "💗", text: "Your kindness" },
    { emoji: "💗", text: "Your little habits" },
    { emoji: "💗", text: "Your late-night talks" },
    { emoji: "💗", text: "Your honesty" }
];

const timelineData = [
    { emoji: "🌸", title: "First Conversation", desc: "The universe aligned when our words first connected. That moment changed everything.", color: "from-pink-400 to-rose-400" },
    { emoji: "🌸", title: "First Laugh Together", desc: "Your laugh became my favorite sound in the entire world. I knew right then — this was special.", color: "from-purple-400 to-pink-400" },
    { emoji: "🌸", title: "Favorite Memory", desc: "Every memory with you is precious, but some moments become etched in gold. This is one of them.", color: "from-amber-400 to-pink-400" },
    { emoji: "🌸", title: "Hard Times We Crossed", desc: "Through every storm, we stood together. Your strength and our bond carried us through the darkest nights.", color: "from-blue-400 to-purple-400" },
    { emoji: "🌸", title: "Endless Memories", desc: "And the story continues... every chapter more beautiful than the last. Here's to infinity and beyond. 🌟", color: "from-pink-400 to-amber-400" }
];

const compliments = [
    "You are gorgeous ✨",
    "So beautiful 💖",
    "My favorite person 🌸",
    "Pretty eyes 🌙",
    "Beautiful smile 💫",
    "My comfort 💕",
    "My happiness 🌟",
    "My everything 💗",
    "Forever special 🦋",
    "You amaze me ✨",
    "Pure sunshine ☀️",
    "My safe place 🏠",
    "One in a million 💎",
    "Absolutely stunning 🌹",
    "My heart's favorite 💝",
    "Walking magic ✨",
    "Incredibly precious 💖",
    "My daily joy 💫",
    "Simply perfect 🌸",
    "My whole world 💗"
];

const galleryImages = [];
const categories = ['nature', 'minimal', 'abstract', 'outdoor', 'indoor', 'travel', 'nature', 'minimal', 'abstract', 'outdoor'];
const captions = [
    "Our brightest moments 🌟", "Forever grateful ✨", "Pure happiness 💫",
    "My favorite person 🌸", "Dreamy days 💗", "Heart full of love 💖",
    "Golden memories ✨", "Sweet moments 🍯", "Joy in every frame 🌈",
    "Days to remember 💎"
];

for (let i = 0; i < 10; i++) {
    const cat = categories[i];
    const dims = i % 3 === 0 ? '640x360' : (i % 3 === 1 ? '320x240' : '200x200');
    galleryImages.push({
        url: `http://static.photos/${cat}/${dims}/${i + 1}`,
        caption: captions[i]
    });
}

const playlist = [
    { title: "Timeless", artist: "Dreamwav", freq: [261.63, 329.63, 392.00] },
    { title: "Infinite", artist: "Starlit", freq: [293.66, 349.23, 440.00] },
    { title: "Ethernal", artist: "Moonbeam", freq: [246.94, 311.13, 369.99] },
    { title: "Beloved", artist: "Cloudnine", freq: [277.18, 329.63, 415.30] }
];

// ===== STATE =====
let currentSong = 0;
let isPlaying = false;
let audioCtx = null;
let oscillators = [];
let gainNode = null;
let storyStarted = false;
let currentLightboxIndex = 0;
let complimentsInterval = null;

// ===== BACKGROUND STARS =====
function initStars() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let shootingStars = [];
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 5;
    }
    
    function createStars() {
        stars = [];
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 400);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.02 + 0.005,
                phase: Math.random() * Math.PI * 2
            });
        }
    }
    
    resize();
    createStars();
    
    window.addEventListener('resize', () => {
        resize();
        createStars();
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() * 0.001;
        
        stars.forEach(star => {
            const twinkle = Math.sin(time * star.speed * 10 + star.phase) * 0.5 + 0.5;
            const alpha = star.opacity * (0.5 + twinkle * 0.5);
            
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 230, 245, ${alpha})`;
            ctx.fill();
            
            if (star.size > 1.5) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 182, 193, ${alpha * 0.1})`;
                ctx.fill();
            }
        });
        
        // Shooting stars occasionally
        if (Math.random() < 0.002) {
            shootingStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * 0.5,
                length: Math.random() * 80 + 40,
                speed: Math.random() * 8 + 4,
                angle: Math.PI / 4 + Math.random() * 0.5,
                life: 1
            });
        }
        
        shootingStars.forEach((ss, i) => {
            ss.x += Math.cos(ss.angle) * ss.speed;
            ss.y += Math.sin(ss.angle) * ss.speed;
            ss.life -= 0.02;
            
            if (ss.life <= 0) {
                shootingStars.splice(i, 1);
                return;
            }
            
            const gradient = ctx.createLinearGradient(
                ss.x, ss.y,
                ss.x - Math.cos(ss.angle) * ss.length,
                ss.y - Math.sin(ss.angle) * ss.length
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.life})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.moveTo(ss.x, ss.y);
            ctx.lineTo(
                ss.x - Math.cos(ss.angle) * ss.length,
                ss.y - Math.sin(ss.angle) * ss.length
            );
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ===== HERO ANIMATION =====
function animateHero() {
    const name = document.getElementById('heroName');
    const title = document.getElementById('heroTitle');
    const subtitle = document.getElementById('heroSubtitle');
    const btn = document.getElementById('beginBtn');
    
    setTimeout(() => {
        name.style.transition = 'all 1.5s ease';
        name.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        title.style.transition = 'all 1.5s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 600);
    
    setTimeout(() => {
        subtitle.style.transition = 'all 1.5s ease';
        subtitle.style.opacity = '1';
    }, 1300);
    
    setTimeout(() => {
        btn.style.transition = 'all 1.5s ease';
        btn.style.opacity = '1';
    }, 2000);
}

// ===== TYPING ANIMATION =====
function startTyping() {
    const text = `To My Princess, Saniaaaa ✨🫶🏻❤️💞\n\nI don't know if words will ever be enough to explain what you've become to me.\n\nSome people enter your life.\nYou entered my soul.\n\nSomewhere between our conversations, your laughter, your tiny habits, and the way you unknowingly made everything brighter... you became my favorite person, my safest place, my biggest weakness, and the only thought my heart refuses to let go of.\n\nI'm obsessed with you.\nNot in a momentary way.\nIn the kind of way where my heart quietly searches for you in everything.\n\nEvery song reminds me of you.\nEvery beautiful sunset makes me wish you were beside me.\nEvery notification makes me hope it's your name.\nEvery prayer somehow ends with you in it.\n\nYou're my first thought when I wake up.\nYou're the last person my mind whispers about before I fall asleep.\nAnd somehow...\nYou're present in every second in between.\n\nI don't think you realize how deeply you've become a part of me.\n\nSometimes I randomly smile because my heart remembered you.\nSometimes I stare into nothing because I'm imagining conversations with you that haven't even happened.\nSometimes I miss you while you're probably just living your normal day.\n\nThat's what you've done to me.\n\nIf I had one wish, it wouldn't be riches or success.\nIt would simply be more moments with you.\nWalking beside you.\nListening to your endless stories.\nWatching you smile.\nHearing you laugh.\nDoing absolutely nothing...because even your silence feels like home.\n\nIf sadness ever dares to come near you, I wish it would come to me first.\nIf life ever becomes difficult for you, I'd gladly carry half of your pain if it meant seeing you smile again.\nYour happiness somehow feels more important than my own.\n\nThere are billions of people in this world...\nYet somehow, my heart chose you.\nAnd now it refuses to choose anyone else.\nAgain.\nAnd again.\nEvery single day.\n\nAnd somehow, that's more than enough to make my heart completely lose itself.\n\nThank you for unknowingly becoming the reason behind so many of my smiles.\n\nNo matter how busy life becomes...\nNo matter how much time passes...\nNo matter where destiny takes us...\nYou'll always have a place in my heart that no one else could ever replace.\n\nMaybe I don't always know how to explain what I feel.\nMaybe words will always fall short.\nBut if my heart could speak for itself...\nIt would probably say your name over and over again.\nBecause that's what it has been doing all along.\n\nMy Princess.\nBecause somewhere in this world...\nthere's someone who's completely, hopelessly, endlessly obsessed with you...\nand silently carries you in every heartbeat and every prayer.\n\nAlways. 🤍\n\nWith all the love, every heartbeat, and every piece of my soul.\n\nMaybe my heart has one quiet wish...\nto spend this life as your Shoharrrrrrr,\nand if Allah grants us Jannah,\nto find you there too.\n\nSome wishes don't need to be loud.\nThey only need to be true.`;
    
    const container = document.getElementById('typingText');
    const cursor = document.getElementById('cursor');
    let index = 0;
    
    function type() {
        if (index < text.length) {
            const char = text[index];
            if (char === '\n') {
                container.innerHTML += '<br>';
            } else {
                container.innerHTML += char;
            }
            index++;
            
            let delay = 25;
            if (char === '.' || char === '!') delay = 200;
            else if (char === ',') delay = 100;
            else if (char === '\n') delay = 80;
            
            setTimeout(type, delay);
        } else {
            cursor.style.display = 'none';
        }
    }
    
    type();
}

// ===== GALLERY =====
function createGallery() {
    const grid = document.getElementById('galleryGrid');
    
    galleryImages.forEach((img, i) => {
        const rotations = [-3, -1, 0, 1, 2, -2, 0, 3, -1, 1, 0, -2, 2, -1, 0, 1, -3, 2, 0, -1, 1, -2, 3, 0, -1, 2, 0, -1, 1, 0];
        const card = document.createElement('div');
        card.className = 'polaroid-card scroll-reveal';
        card.style.setProperty('--rotation', `${rotations[i]}deg`);
        card.style.animationDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <img src="${img.url}" alt="${img.caption}" loading="lazy" class="gallery-img" data-index="${i}">
            <p class="polaroid-text">${img.caption}</p>
        `;
        card.addEventListener('click', () => openLightbox(i));
        grid.appendChild(card);
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const heartsContainer = document.getElementById('lightboxHearts');
    
    img.src = galleryImages[index].url;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Spawn hearts
    heartsContainer.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'lightbox-heart';
        heart.textContent = ['💖', '💗', '💕', '✨', '🌸', '💫', '💝', '🩷'][i % 8];
        heart.style.left = `${Math.random() * 80 + 10}%`;
        heart.style.top = `${Math.random() * 60 + 20}%`;
        heart.style.animationDelay = `${i * 0.2}s`;
        heartsContainer.appendChild(heart);
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
}

function navigateLightbox(dir) {
    currentLightboxIndex = (currentLightboxIndex + dir + galleryImages.length) % galleryImages.length;
    const img = document.getElementById('lightboxImg');
    img.src = galleryImages[currentLightboxIndex].url;
    
    const heartsContainer = document.getElementById('lightboxHearts');
    heartsContainer.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('div');
        heart.className = 'lightbox-heart';
        heart.textContent = ['💖', '💗', '💕', '✨', '🌸', '💫'][i];
        heart.style.left = `${Math.random() * 80 + 10}%`;
        heart.style.top = `${Math.random() * 60 + 20}%`;
        heart.style.animationDelay = `${i * 0.15}s`;
        heartsContainer.appendChild(heart);
    }
}

document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
document.getElementById('prevPhoto').addEventListener('click', () => navigateLightbox(-1));
document.getElementById('nextPhoto').addEventListener('click', () => navigateLightbox(1));
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('hidden')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    }
});

// ===== TIMELINE =====
function createTimeline() {
    const container = document.getElementById('timelineContainer');
    
    timelineData.forEach((item, i) => {
        const isLeft = i % 2 === 0;
        const card = document.createElement('div');
        card.className = `relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} mb-12 md:mb-16 scroll-reveal`;
        card.innerHTML = `
            <div class="ml-12 md:ml-0 md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}">
                <div class="timeline-card" onclick="this.classList.toggle('expanded')">
                    <div class="flex items-center gap-3 ${isLeft ? 'md:justify-end' : ''}">
                        <span class="text-3xl">${item.emoji}</span>
                        <div>
                            <h3 class="font-playfair text-lg md:text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent">${item.title}</h3>
                        </div>
                    </div>
                    <div class="card-content">
                        <p class="font-quicksand text-pink-200/70 mt-3 text-sm md:text-base">${item.desc}</p>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ===== REASONS GRID =====
function createReasons() {
    const grid = document.getElementById('reasonsGrid');
    
    reasons.forEach((reason, i) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        const emoji = reasonsEmoji[i] || '✨';
        card.innerHTML = `
            <div class="flex items-start gap-2">
                <span class="text-lg flex-shrink-0">${emoji}</span>
                <p class="font-quicksand text-sm md:text-base text-pink-100/90">${reason}.</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== OBSESSED CARDS =====
function createObsessed() {
    const grid = document.getElementById('obsessedGrid');
    
    obsessedItems.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'obsessed-card';
        const isLast = i === obsessedItems.length - 1;
        card.innerHTML = `
            <div class="text-center">
                <span class="text-4xl">${item.emoji}</span>
                <h3 class="font-playfair text-xl md:text-2xl font-bold mt-3 ${isLast ? 'bg-gradient-to-r from-pink-300 to-amber-200 bg-clip-text text-transparent' : 'text-pink-100'}">${item.text}</h3>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== INTERACTIVE HEART =====
function initInteractiveHeart() {
    const heart = document.getElementById('interactiveHeart');
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');
    const message = document.getElementById('heartMessage');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    function createExplosion() {
        canvas.classList.remove('hidden');
        particles = [];
        const colors = ['#ff6b9d', '#ff2d7b', '#FFD700', '#ff69b4', '#ffb6c1', '#fff'];
        const heartEmojis = ['❤️', '💗', '💖', '💕', '🩷', '🌸', '✨', '💫'];
        
        for (let i = 0; i < 200; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 8 + 2;
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                size: Math.random() * 6 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1,
                decay: Math.random() * 0.02 + 0.005,
                gravity: 0.05,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 10,
                type: Math.random() > 0.7 ? 'heart' : 'circle'
            });
        }
        
        // Also create DOM hearts
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heartEl = document.createElement('div');
                heartEl.className = 'heart-sparkle';
                heartEl.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                heartEl.style.left = `${Math.random() * 80 + 10}%`;
                heartEl.style.top = `${Math.random() * 60 + 20}%`;
                heartEl.style.fontSize = `${Math.random() * 20 + 14}px`;
                document.body.appendChild(heartEl);
                setTimeout(() => heartEl.remove(), 2500);
            }, i * 50);
        }
        
        // Confetti
        const confettiCanvas = document.getElementById('confettiCanvas');
        const confCtx = confettiCanvas.getContext('2d');
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
        confettiCanvas.classList.remove('hidden');
        
        let confetti = [];
        for (let i = 0; i < 100; i++) {
            confetti.push({
                x: Math.random() * confettiCanvas.width,
                y: -Math.random() * confettiCanvas.height,
                w: Math.random() * 10 + 5,
                h: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                vy: Math.random() * 3 + 1,
                vx: (Math.random() - 0.5) * 2,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 10
            });
        }
        
        function animateConfetti() {
            confCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            let alive = false;
            confetti.forEach(c => {
                c.y += c.vy;
                c.x += c.vx;
                c.rotation += c.rotSpeed;
                if (c.y < confettiCanvas.height + 20) alive = true;
                
                confCtx.save();
                confCtx.translate(c.x, c.y);
                confCtx.rotate(c.rotation * Math.PI / 180);
                confCtx.fillStyle = c.color;
                confCtx.fillRect(-c.w/2, -c.h/2, c.w, c.h);
                confCtx.restore();
            });
            if (alive) requestAnimationFrame(animateConfetti);
            else confettiCanvas.classList.add('hidden');
        }
        animateConfetti();
        
        // Show message
        message.style.opacity = '0';
        message.style.transform = 'translateY(20px)';
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, 500);
        
        // Play a sound
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
            osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.15);
            osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.8);
        } catch(e) {}
    }
    
    function animateParticles() {
        if (particles.length === 0) {
            canvas.classList.add('hidden');
            return;
        }
        
        canvas.classList.remove('hidden');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles = particles.filter(p => p.life > 0);
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.life -= p.decay;
            p.rotation += p.rotSpeed;
            
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            
            if (p.type === 'heart') {
                ctx.fillStyle = p.color;
                ctx.font = `${p.size * 3}px serif`;
                ctx.fillText('❤', -p.size, p.size);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            }
            
            ctx.restore();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    heart.addEventListener('click', () => {
        createExplosion();
        requestAnimationFrame(animateParticles);
    });
}

// ===== NIGHT SKY =====
function initNightSky() {
    const canvas = document.getElementById('skyCanvas');
    const ctx = canvas.getContext('2d');
    const complimentEl = document.getElementById('skyCompliment');
    let stars = [];
    let mouseStars = [];
    
    function resize() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = 500;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    // Create interactive stars
    const skyCompliments = [
        "You're stunning ✨", "My favorite 🌟", "So precious 💖",
        "Beautiful soul 🌙", "My sunshine ☀️", "Incredible 💎",
        "One of a kind 🦋", "Pure magic ✨", "My everything 💗",
        "Absolutely gorgeous 💕", "Beyond words 🌸", "My happy place 💫"
    ];
    
    for (let i = 0; i < 30; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * 400,
            size: Math.random() * 3 + 1.5,
            glow: Math.random() * 0.5 + 0.5,
            phase: Math.random() * Math.PI * 2,
            clicked: false,
            compliment: skyCompliments[i % skyCompliments.length]
        });
    }
    
    // Moon
    const moon = { x: canvas.width * 0.8, y: 80, radius: 40 };
    
    function drawMoon() {
        const gradient = ctx.createRadialGradient(moon.x, moon.y, 0, moon.x, moon.y, moon.radius * 3);
        gradient.addColorStop(0, 'rgba(255, 250, 230, 0.3)');
        gradient.addColorStop(0.5, 'rgba(255, 250, 230, 0.05)');
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(moon.x, moon.y, moon.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        const moonGrad = ctx.createRadialGradient(moon.x - 10, moon.y - 10, 0, moon.x, moon.y, moon.radius);
        moonGrad.addColorStop(0, '#fffde7');
        moonGrad.addColorStop(0.7, '#fff9c4');
        moonGrad.addColorStop(1, '#fff176');
        ctx.beginPath();
        ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
        ctx.fillStyle = moonGrad;
        ctx.fill();
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() * 0.001;
        
        // Draw gradient sky
        const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        skyGrad.addColorStop(0, '#0a0118');
        skyGrad.addColorStop(0.5, '#150530');
        skyGrad.addColorStop(1, '#1a0533');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        drawMoon();
        
        // Draw stars
        stars.forEach(star => {
            const twinkle = Math.sin(time * 2 + star.phase) * 0.3 + 0.7;
            const alpha = star.glow * twinkle;
            
            // Glow
            const glowGrad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
            glowGrad.addColorStop(0, `rgba(255, 230, 245, ${alpha * 0.5})`);
            glowGrad.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
            ctx.fillStyle = glowGrad;
            ctx.fill();
            
            // Star core
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
            
            if (star.clicked) {
                star.clicked = false;
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        stars.forEach(star => {
            const dx = x - star.x;
            const dy = y - star.y;
            if (Math.sqrt(dx * dx + dy * dy) < star.size * 5) {
                star.clicked = true;
                complimentEl.textContent = star.compliment;
                complimentEl.style.left = `${star.x}px`;
                complimentEl.style.top = `${star.y - 30}px`;
                complimentEl.style.opacity = '1';
                complimentEl.style.transform = 'translateY(-10px)';
                
                // Burst
                star.size = star.size * 2;
                setTimeout(() => {
                    star.size = star.size / 2;
                }, 300);
                
                setTimeout(() => {
                    complimentEl.style.opacity = '0';
                    complimentEl.style.transform = 'translateY(-40px)';
                }, 2000);
            }
        });
    });
}

// ===== FLOATING COMPLIMENTS =====
function startCompliments() {
    const container = document.getElementById('complimentsContainer');
    
    function spawnCompliment() {
        const text = compliments[Math.floor(Math.random() * compliments.length)];
        const el = document.createElement('div');
        el.className = 'floating-compliment';
        el.textContent = text;
        el.style.left = `${Math.random() * 80 + 10}%`;
        el.style.top = `${Math.random() * 80 + 10}%`;
        el.style.fontSize = `${Math.random() * 10 + 14}px`;
        container.appendChild(el);
        
        setTimeout(() => el.remove(), 4000);
    }
    
    complimentsInterval = setInterval(spawnCompliment, 3000);
    setTimeout(spawnCompliment, 1000);
}

// ===== MUSIC PLAYER =====
function initMusicPlayer() {
    const player = document.getElementById('musicPlayer');
    const playPauseBtn = document.getElementById('playPause');
    const titleEl = document.getElementById('songTitle');
    const artistEl = document.getElementById('songArtist');
    
    function createAmbientSound() {
        if (audioCtx) {
            oscillators.forEach(o => { try { o.stop(); } catch(e) {} });
            if (gainNode) gainNode.disconnect();
        }
        
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gainNode.connect(audioCtx.destination);
        
        const song = playlist[currentSong];
        oscillators = [];
        
        song.freq.forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const oscGain = audioCtx.createGain();
            osc.type = i === 0 ? 'sine' : (i === 1 ? 'triangle' : 'sine');
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            oscGain.gain.setValueAtTime(i === 0 ? 0.5 : 0.2, audioCtx.currentTime);
            osc.connect(oscGain);
            oscGain.connect(gainNode);
            osc.start();
            oscillators.push(osc);
        });
        
        // Slow modulation
        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();
        lfo.frequency.setValueAtTime(0.5, audioCtx.currentTime);
        lfoGain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(gainNode.gain);
        lfo.start();
        oscillators.push(lfo);
    }
    
    function updateSongInfo() {
        const song = playlist[currentSong];
        titleEl.textContent = song.title;
        artistEl.textContent = song.artist;
    }
    
    function play() {
        isPlaying = true;
        createAmbientSound();
        document.getElementById('playIcon').setAttribute('data-lucide', 'pause');
        playPauseBtn.classList.add('playing');
        lucide.createIcons();
    }
    
    function pause() {
        isPlaying = false;
        if (audioCtx) {
            oscillators.forEach(o => { try { o.stop(); } catch(e) {} });
            audioCtx.close();
        }
        document.getElementById('playIcon').setAttribute('data-lucide', 'play');
        playPauseBtn.classList.remove('playing');
        lucide.createIcons();
    }
    
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) pause();
        else play();
    });
    
    updateSongInfo();
    player.classList.remove('hidden');
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special: start typing when love letter comes into view
                if (entry.target.id === 'typingContainer') {
                    if (!entry.target.dataset.typed) {
                        entry.target.dataset.typed = 'true';
                        startTyping();
                    }
                }
            }
        });
    }, { threshold: 0.2 });
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal, .reason-card, .obsessed-card, .timeline-card').forEach(el => {
        observer.observe(el);
    });
    
    // Observe typing container
    const typingContainer = document.getElementById('typingContainer');
    if (typingContainer) observer.observe(typingContainer);
}

// ===== NAV DOTS =====
function createNavDots() {
    const sections = ['hero', 'loveLetter', 'gallery', 'timeline', 'reasons', 'obsessed', 'heart', 'secret', 'nightSky', 'ending'];
    const nav = document.getElementById('navDots');
    
    sections.forEach(id => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        dot.addEventListener('click', () => {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        });
        nav.appendChild(dot);
    });
    
    // Update active dot on scroll
    const dots = nav.querySelectorAll('.nav-dot');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        sections.forEach((id, i) => {
            const section = document.getElementById(id);
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                dots.forEach(d => d.classList.remove('active'));
                dots[i].classList.add('active');
            }
        });
    });
}

// ===== SECRET MESSAGE =====
function initSecretMessage() {
    const btn = document.getElementById('secretBtn');
    const envelope = document.getElementById('secretEnvelope');
    
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.8)';
        btn.style.opacity = '0.5';
        setTimeout(() => {
            btn.style.display = 'none';
            envelope.classList.remove('hidden');
            envelope.classList.add('envelope-open');
        }, 400);
    });
}

// ===== BEGIN BUTTON =====
function initBeginButton() {
    const btn = document.getElementById('beginBtn');
    
    btn.addEventListener('click', () => {
        if (storyStarted) return;
        storyStarted = true;
        
        // Start music
        initMusicPlayer();
        setTimeout(() => {
            const playPauseBtn = document.getElementById('playPause');
            playPauseBtn.click();
        }, 500);
        
        // Start compliments
        startCompliments();
        
        // Show nav dots
        document.getElementById('navDots').style.opacity = '1';
        
        // Scroll to love letter
        document.getElementById('loveLetter').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== SPARKLE CURSOR TRAIL =====
function initSparkleTrail() {
    let lastTime = 0;
    
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTime < 80) return;
        lastTime = now;
        
        const sparkle = document.createElement('div');
        sparkle.textContent = Math.random() > 0.5 ? '✨' : '💫';
        sparkle.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            pointer-events: none;
            z-index: 100;
            font-size: ${Math.random() * 12 + 8}px;
            animation: heartFloat ${Math.random() * 1 + 1}s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function initReasonsAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 50);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reason-card').forEach((card, i) => {
        card.style.transitionDelay = `${(i % 8) * 0.05}s`;
        observer.observe(card);
    });
    
    document.querySelectorAll('.obsessed-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
        card.style.transitionDuration = '0.6s';
        observer.observe(card);
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotate(var(--rotation, 0deg))';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px) rotate(var(--rotation, 0deg))';
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(el);
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    animateHero();
    createGallery();
    createTimeline();
    createReasons();
    createObsessed();
    initInteractiveHeart();
    initNightSky();
    initSecretMessage();
    initBeginButton();
    createNavDots();
    initScrollAnimations();
    initSparkleTrail();
    
    // Delayed init for reasons animation
    setTimeout(() => {
        initReasonsAnimation();
        initScrollReveal();
    }, 100);
    
    // Initialize Lucide icons
    lucide.createIcons();
});
