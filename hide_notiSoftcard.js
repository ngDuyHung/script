//can css moi hoat dong
 //<style>
        //.sn-notify {
       //     display: none !important;
     //   }
   // </style>
        document.addEventListener('DOMContentLoaded', function() {
            const notifications = document.querySelectorAll('.sn-notify');
            notifications.forEach(function(notification) {
                notification.style.display = 'none';
            });
        });

        // Optional: Add a listener to dynamically hide notifications when they are added
        new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.classList && node.classList.contains('sn-notify')) {
                            node.style.display = 'none';
                        }
                    });
                }
            });
        }).observe(document.body, { childList: true, subtree: true });
