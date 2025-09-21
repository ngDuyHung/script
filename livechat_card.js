    
        document.addEventListener('DOMContentLoaded', function() {
            const widget = document.getElementById('livechatvn-livechat');
            const button = widget.querySelector('.livechatvn-livechat-button');
            const menu = widget.querySelector('.livechatvn-livechat-menu');
            const closeIcon = button.querySelector('.close-icon');
            const icons = button.querySelector('.icons');
            const iconsLine = button.querySelector('.icons-line');
            const pulsations = button.querySelectorAll('.pulsation');
            const closeBtn = menu.querySelector('.close-btn');
            const livechatText = widget.querySelector('.livechatvn-livechat-text');

            setTimeout(() => widget.classList.add('active'), 100);

            let iconIndex = 0;
            const iconCount = iconsLine.children.length;
            const iconWidth = 64;
            let isAnimating = false;

            function animateIcons() {
                if (menu.classList.contains('open') || isAnimating) return;

                isAnimating = true;

                iconsLine.style.transform = `translateX(-${iconIndex * iconWidth}px)`;

                const allIcons = iconsLine.querySelectorAll('img');
                allIcons.forEach(icon => icon.classList.remove('shake'));

                const currentIcon = iconsLine.children[iconIndex].querySelector('img');
                currentIcon.classList.add('shake');

                iconIndex = (iconIndex + 1) % iconCount;

                setTimeout(() => {
                    isAnimating = false;
                    animateIcons();
                }, 2000); 
            }

            setTimeout(animateIcons, 1000);

            button.addEventListener('click', () => {
                if (menu.classList.contains('open')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            closeBtn.addEventListener('click', closeMenu);

            document.addEventListener('click', (e) => {
                if (!widget.contains(e.target)) closeMenu();
            });

            function openMenu() {
                widget.classList.add('open');
                menu.classList.add('open');
                pulsations.forEach(p => p.classList.add('stop'));
                closeIcon.classList.add('show');
                icons.classList.add('hide');
                livechatText.classList.add('hide');
            }

            function closeMenu() {
                widget.classList.remove('open');
                menu.classList.remove('open');
                pulsations.forEach(p => p.classList.remove('stop'));
                closeIcon.classList.remove('show');
                icons.classList.remove('hide');
                livechatText.classList.remove('hide');
                iconIndex = 0;
                iconsLine.style.transform = `translateX(0)`;
                setTimeout(animateIcons, 1000);
            }
        });
