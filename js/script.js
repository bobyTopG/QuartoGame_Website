document.addEventListener("DOMContentLoaded", function () {
    const scrollOffset = 70;
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });

    const burgerMenu = document.getElementById("burger-menu");
    const navButtons = document.querySelector(".buttons");
    burgerMenu.addEventListener("click", () => {
        navButtons.classList.toggle("active");
    });

    const navButtonsContainer = document.getElementById("nav-buttons");
    const userLoggedIn = false;

    if (userLoggedIn) {
        navButtonsContainer.innerHTML = `
            <a href="#game" class="green-btn">Game</a>
            <a href="#statistics" class="blue-btn">Statistics</a>
        `;
    } else {
        navButtonsContainer.innerHTML = `
            <a href="html/login.html" class="green-btn">Login</a>
            <a href="html/signup.html" class="blue-btn">Sign Up</a>
        `;
    }

    fetch('/data/game.json')
        .then(response => response.json())
        .then(data => {
            const table = document.querySelector('#statistics-table');
            data.forEach(player => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${player.name}</td>
                    <td>${player.played}</td>
                    <td>${player.wins}</td>
                    <td>${player.losses}</td>
                    <td>${player.wins_p}</td>
                    <td>${player.avg_moves}</td>
                    <td>${player.avg_duration_per_move}</td>
                `;
                table.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });

        const passwordInput = document.getElementById('real-password');
        const togglePassword = document.getElementById('toggle-password');

        const fakeOverlay = document.createElement('div');
        fakeOverlay.style.position = 'absolute';
        fakeOverlay.style.top = '10px';
        fakeOverlay.style.bottom = '0';
        fakeOverlay.style.padding = '0 12px';
        fakeOverlay.style.zIndex = '2';
        fakeOverlay.style.pointerEvents = 'none';
        fakeOverlay.style.display = 'flex';
        fakeOverlay.style.alignItems = 'center';
        fakeOverlay.style.height = '100%';
        fakeOverlay.style.gap = '4px';

        passwordInput.parentNode.style.position = 'relative';
        passwordInput.style.zIndex = '1';
        passwordInput.style.position = 'relative';
        passwordInput.parentNode.appendChild(fakeOverlay);

        const updateOverlay = (value) => {
            fakeOverlay.innerHTML = '';
            for (let i = 0; i < value.length; i++) {
                const img = document.createElement('img');
                img.src = '../media/hero/Piece' + ((i % 5) + 1) + '.png';
                img.alt = 'piece';
                img.style.height = '20px';
                img.style.objectFit = 'contain';
                img.style.verticalAlign = 'middle';
                fakeOverlay.appendChild(img);
            }
        };

        passwordInput.addEventListener('input', () => {
            updateOverlay(passwordInput.value);
        });

        if (passwordInput && togglePassword) {
            togglePassword.addEventListener('click', () => {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                fakeOverlay.style.display = isPassword ? 'none' : 'flex';
                passwordInput.style.color = isPassword ? '' : 'transparent';
                passwordInput.style.textShadow = isPassword ? '' : 'none';
                passwordInput.style.caretColor = isPassword ? '' : 'transparent';
                togglePassword.textContent = isPassword ? 'Hide Password' : 'Show Password';
            });
        }
});

