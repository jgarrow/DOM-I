window.addEventListener('load', (e) => {
    let docBody = document.querySelector('body');
    docBody.style.display = 'flex';
    docBody.style.flexDirection = 'column';
    docBody.style.width = '100%';

    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'btnContainer');
    buttonContainer.style.width = '150px';
    buttonContainer.style.margin = '0 auto';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-evenly';

    let startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.setAttribute('id', 'startbtn')

    let resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.setAttribute('id', 'resetbtn');

    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(resetButton);

    docBody.appendChild(buttonContainer);

    document.getElementById('startbtn').onclick = function() {
        document.getElementById('startbtn').disabled = true;
        
        if (document.querySelector('.digits').classList.contains('redDigit')) {
            document.querySelector('.digits').classList.remove('redDigit');
        }
        
        let secondTens = document.querySelector("#secondTens");
        let secondOnes = document.querySelector("#secondOnes"); 
        let msHundreds = document.querySelector("#msHundreds");
        let msTens = document.querySelector("#msTens");
        secondTens.textContent = 0;
        secondOnes.textContent = 0;
        msHundreds.textContent = 0;
        msTens.textContent = 0;

        let msTensCounter = 0;
        let msHundredsCounter = 0;
        let secondOnesCounter = 0;
        let secondTensCounter = 0;
        
        let timer = setInterval(function() {

            document.getElementById('resetbtn').onclick = function() {
                clearInterval(timer);
                msTens.textContent = 0;
                msHundreds.textContent = 0;
                secondOnes.textContent = 0;
                secondTens.textContent = 0;

                if (document.querySelector('.digits').classList.contains('redDigit')) {
                    document.querySelector('.digits').classList.remove('redDigit');
                }

                document.getElementById('startbtn').disabled = false;
            }
            
            ++msTensCounter;
            if (msTensCounter === 10) {
                msTensCounter = 0;
                ++msHundredsCounter;
            }

            if (msHundredsCounter === 10) {
                msHundredsCounter = 0;
                ++secondOnesCounter;
            }

            if (secondOnesCounter === 10) {
                secondOnesCounter = 0;
                ++secondTensCounter;
            }

            msTens.textContent = msTensCounter;
            msHundreds.textContent = msHundredsCounter;
            secondOnes.textContent = secondOnesCounter;
            secondTens.textContent = secondTensCounter;

            if (secondTensCounter === 1) {
                let digits = document.querySelector(".digits");
                digits = digits.classList.add("redDigit");
                clearInterval(timer);
                document.getElementById('startbtn').disabled = false;
            }
        }, 10)
    }
})

// set variables for each digit equal to 0
// start a setInverval that goes every 10ms
// Use a series of if statements to add to each of the digits
// once the secondsTens has reached 1, clearInterval