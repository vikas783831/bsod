$(document).ready(function() {
    // Show elements with delay
    $(".pro_box").delay(400).fadeIn(300);
    $("#mnboxs").delay(2000).fadeIn(400);
    $(".black").delay(1000).fadeIn(800);
    
    // Counter animation
    $('.count-number').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('to')
        }, {
            duration: $(this).data('speed'),
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            }
        });
    });

    // Play sound on click
    function beep1() {
        document.getElementById("websgt").play();
    }

    // Show chat box on mouse move
    function showd2() {
        document.getElementById("chat-box").style.display = "block";
    }

    // Hide chat box
    function hide1() {
        document.getElementById("chat-box").style.display = "none";
    }

    // Play sound when hiding chat
    function playSound1() {
        document.getElementById("websgt").play();
    }

    // Show warning box on click
    $(document).on('click', function() {
        $("#mnboxs").show();
        beep1();
    });

    // Play background sound on interval
    setInterval(function() {
        document.getElementById("infogt").play();
    }, 500);

    // Toggle favicon
    var e = 1;
    setInterval(function() {
        e == 1 ? (document.getElementById("favicon").href = "w3.html", e = 0) : 
                (document.getElementById("favicon").href = "w1.html", e = 1);
    }, 1000);

    // Show elements on mouse over
    $("body").mouseover(function() {
        $("#mnboxs").show();
    });

    // Show chat box on mouse move
    document.getElementById("mycanvas").addEventListener('mousemove', showd2);
});

// Block right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Block keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Block F12, Esc, Alt+F4, Ctrl+W
    if (e.key === 'F12' || e.key === 'Escape' || 
        (e.altKey && e.key === 'F4') || 
        (e.ctrlKey && e.key.toLowerCase() === 'w')) {
        e.preventDefault();
        return false;
    }
});
