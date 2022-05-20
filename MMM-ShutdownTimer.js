Module.register("MMM-ShutdownTimer", {
    defaults: {
        url: "192.168.0.200/5/off", 			       
        hoursLeft: 0,
        minutesLeft: 10,
        secondsLeft: 0,
        updateInterval: 1000,
        timerText: "Zbývající čas do vypnutí",
    },

    getStyles: function () {
        return ["MMM-ShutdownTimer.css"];
    },

    start: function () {
        var self = this;
        Log.info("Starting module: " + this.name);
        
        if(this.config.minutesLeft > 60){
            this.config.minutesLeft = 60;
        }
        if(this.config.secondsLeft > 60){
            this.config.secondsLeft = 60;
        }
        
        this.remainingTime = this.config.hoursLeft*60*60*1000 + this.config.minutesLeft*60*1000 + this.config.secondsLeft*1000 ;
        
        //Lowest update interval can be 1 sec.
        if (this.config.updateInterval < 1000) {
            this.config.updateInterval = 1000;
        }
        
        //Timer cannot be smaller then 1 minute.
        if (this.remainingTime < 60 * 1000) {
            this.remainingTime = 60 * 1000;
        }
        
        this.interval = setInterval(function () {
            self.updateDom();
            }, this.config.updateInterval);
        
    },

    getDom: function () {
        
        this.remainingTime = this.remainingTime - 1000;

        if(this.remainingTime < 1000){
            var website = window.open(this.config.url);
            website.close();
            clearTimeout(this.interval);            
            return;
        }

        var wrapper = document.createElement("div");
        var headerD = document.createElement("span");
        headerD.innerHTML = this.config.timerText + "</br>";
        headerD.className = "timerText";

        var timeLeft = document.createElement("span");
        timeLeft.className = "timeLeft";
        timeLeft.innerHTML = "";
        
        let hours = Math.floor(this.remainingTime/(60*60*1000));
        let minutes = Math.floor((this.remainingTime - (hours*60*60*1000))/(60*1000));
        let seconds = Math.floor((this.remainingTime - (hours*60*60*1000) - (minutes*60*1000))/1000);
        
        if(hours > 0){
            if(hours < 10){
            timeLeft.innerHTML += "0";
            timeLeft.innerHTML += hours;
            timeLeft.innerHTML += ":";
            }else {
                timeLeft.innerHTML += hours;
                timeLeft.innerHTML += ":";
            }
        }else if(this.config.hoursLeft > 0){
            timeLeft.innerHTML += "00:";
        }

        if(minutes < 10){
            timeLeft.innerHTML += "0";
            timeLeft.innerHTML += minutes;
            timeLeft.innerHTML += ":";
        }else {
            timeLeft.innerHTML += minutes;
            timeLeft.innerHTML += ":";
        }
        
        if(seconds < 10){
            timeLeft.innerHTML += "0";
            timeLeft.innerHTML += seconds;
        }else {
            timeLeft.innerHTML += seconds;
        }

        wrapper.appendChild(headerD);
        wrapper.appendChild(timeLeft);
        return wrapper;
        
    },

});
