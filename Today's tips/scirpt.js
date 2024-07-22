document.addEventListener('DOMContentLoaded', function() {
    
    const tips = [
        "Tip 1: Always back up your data.",
        "Tip 2: Use strong, unique passwords for each account.",
        "Tip 3: Keep your software up to date.",
        "Tip 4: Be cautious of phishing attempts.",
        "Tip 5: Enable two-factor authentication where possible.",
        "Tip 6: Regularly review your privacy settings.",
        "Tip 7: Avoid using public Wi-Fi for sensitive activities.",
        "Tip 8: Lock your devices with a secure PIN or password.",
        "Tip 9: Be mindful of what you share on social media.",
        "Tip 10: Trust your instincts when something seems suspicious."
    ];

    
    function* tipGenerator() {
        yield* tips; 
    }

    
    const tipDisplay = document.getElementById('tipDisplay');
    const loopButton = document.getElementById('loopButton');
    const autoButton = document.getElementById('autoButton');

    
    let tipsIterator;

    
    function loopThroughTips() {
        clearInterval(intervalId); 
        tipDisplay.textContent = ''; 

        
        
            tipsIterator = tipGenerator();
        

        
        for (let tip of tipsIterator) {
            tipDisplay.innerHTML += tip + '<br>';
        }
    }

    loopButton.addEventListener('click', function() {
        loopThroughTips();
    });

    
    let intervalId;

    function displayTipsAutomatically() {
        clearInterval(intervalId); 
        tipsIterator = tipGenerator();

        intervalId = setInterval(() => {
            const { value, done } = tipsIterator.next();
            if (!done) {
                tipDisplay.textContent = value;
            } else {
                clearInterval(intervalId); 
            }
        }, 3000);
    }

    
    autoButton.addEventListener('click', function() {
        displayTipsAutomatically(); 
    });

    
    tipDisplay.textContent = tips[0];
});
