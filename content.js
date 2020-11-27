const interval = setInterval(() => {
    const header = document.querySelector("._2O84H");
    
    if (header) {
        clearInterval(interval);

        // Speed

        var speed = 1.00;

        // Speed container
        const speedContainer = document.createElement("div");
        speedContainer.classList.add("speedContainer");
        header.appendChild(speedContainer);

        // Decrease speed button
        const decreaseSpeedBtn = document.createElement("div");
        decreaseSpeedBtn.setAttribute("role", "button");
        decreaseSpeedBtn.setAttribute("title", "Decrease speed");
        decreaseSpeedBtn.setAttribute("class", "speedBtn");
        decreaseSpeedBtn.innerHTML = "-";
        speedContainer.appendChild(decreaseSpeedBtn); 

        // Speed display
        const speedDisplay = document.createElement("div");
        speedDisplay.innerHTML = speed;
        speedDisplay.classList.add("speedDisplay");
        speedContainer.appendChild(speedDisplay);

        // Increase speed button
        const increaseSpeedBtn = document.createElement("div");
        increaseSpeedBtn.setAttribute("role", "button");
        increaseSpeedBtn.setAttribute("title", "Increase speed");
        increaseSpeedBtn.setAttribute("class", "speedBtn");
        increaseSpeedBtn.innerHTML = "+";
        speedContainer.appendChild(increaseSpeedBtn);

        // Volume (to-do)

        speedDisplay.addEventListener("click", () => {
            resetSpeed();
        });

        decreaseSpeedBtn.addEventListener("click", () => {
            decreaseSpeed();
        });

        increaseSpeedBtn.addEventListener("click", () => {
            increaseSpeed();
        });

        function resetSpeed() {
            speed = 1.00
            updateSpeed(speed);
        }

        function decreaseSpeed() {
            // console.log('decreaseSpeed', speed);
            if (speed > 0) {
                speed = speed - 0.25;
                updateSpeed(speed);
            }
        }

        function increaseSpeed() {
            // console.log('increaseSpeed', speed);
            speed = speed + 0.25;
            updateSpeed(speed);
        }

        function updateSpeed(speed) {
            // console.log('updateSpeed', speed);
            speedDisplay.innerHTML = speed.toFixed(2);

            localStorage.setItem("speed", speed);

            document.addEventListener("click", () => {
                const audios = document.querySelectorAll("audio");
                if (audios) {
                    audios.forEach(audio => {
                        audio.playbackRate = speed;
                    })
                }
            })
        }

        if (localStorage.getItem("speed")) {
            speed = Number(localStorage.getItem("speed"));
            updateSpeed(speed);
        }
    }
}, 1000);