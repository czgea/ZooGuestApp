

function appTest() {


    $.ajax({
        url: '/show/list',
        type: 'get',
        dataType: 'json',
        async: true,
        success: function (data) {
                var testVar = JSON.stringify(data) // turns object into string
            var testSplic = testVar.slice(10, -2) //formats the obeject string and removes things we dont need
           // var replace = testSplic.replace("{", "")
            //var newStr = replace
           // console.log(newStr)
                var str = testSplic.split(",") // turns strings to arrays at ,
               // var runOut = str//final string output
            console.log(testVar);
            


            var e = ('{"showTime":' + '"' + 10 + ':' + '00' + ':' +'00' + '"');
            //gets current time that matches the string in the final string otuput
            var f = testVar.includes(e) //checks to see if variable e exits in runOut string, which it does but it is not working correctly. It is now, var g needed to be defined before var f.
            console.log (e)
            console.log(f);
                
          
            // testing to see if I can combine the show times and show names
            //so far I can only get it to dispaly as array pairs in the log.
            //This needs to work so we know the appropriate popup to display

            var iterator = [data].values();

            for (var value of iterator) {
                var testArray1 =  //test    
                console.log(value);
            }
            console.log(data);

            var shows = data.shows

            var time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
            //var time ="10:00:00"

            var findShow = (time, shows) => {
                var currentShows = [];
                for (let i = 0; i < shows.length; i++) {
                    if (shows[i].showTime && shows[i].showTime === time) {
                        currentShows.push(shows[i]);
                    }
                }
                return currentShows;
            } 

            var findshows = findShow(time, shows)
            console.log(findshows)


            function getTime() {
                setInterval(function () {

                    var time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

                    var currentShows = findShow(time, shows);
                    if (currentShows.length) {
               
                        for (let i = 0; i < currentShows.length; i++) {
                            Push.create(currentShows[i].showMessage, {
                                body: currentShows[i].showName,
                                icon: '/icon.png',
                                timeout: 4000,
                                onClick: function () {
                                    window.focus();
                                    this.close();
                                }
                            })
                        }
                  

                    }
                    var testVar = JSON.stringify(data)
                    var a = new Date();
                    var b = addZero(a.getHours());
                    var c = addZero(a.getMinutes());
                    var d = addZero(a.getSeconds());
                    var otter = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Otter"');
                    var seaLion = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Sea Lion"');
                    var savannah = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Savannah Talk"');
                    var rhino = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Greater One-Horned Rhino"');
                    var elephant = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"African Elephant"');
                    var reptile = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Reptile"');
                    var lion = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Lion"');
                    var cheetah = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Cheetah"');
                    var alligator = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Alligator"');
                    var shark = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Shark"');
                    var tiger = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Tiger"');
                    var flamingo = ('{"showTime":' + '"' + b + ':' + c + ':' + d + '"' + ',' + '"showName":"Flamingo"');
                    var otterTest = testVar.includes(otter);
                    var seaLionTest = testVar.includes(seaLion);
                    var savannahTest = testVar.includes(savannah);
                    var rhinoTest = testVar.includes(rhino);
                    var elephantTest = testVar.includes(elephant);
                    var reptileTest = testVar.includes(reptile);
                    var lionTest = testVar.includes(lion);
                    var cheetahTest = testVar.includes(cheetah);
                    var alligatorTest = testVar.includes(alligator);
                    var sharkTest = testVar.includes(shark);
                    var tigerTest = testVar.includes(tiger);
                    var flamingoTest = testVar.includes(flamingo);
                    //console.log(otter)
                    //console.log(otterTest)
                    if (otterTest === true) { otterPopup() } //popupdisabled
                    if (seaLionTest === true) { seaLionPopup() } //popupdisabled
                    if (savannahTest === true) { savannahPopup() } //popupdisabled
                    if (rhinoTest === true) { rhinoPopup() } //popupdisabled
                    if (elephantTest === true) { elephantPopup() } //popupdisabled
                    if (reptileTest === true) { reptilePopup() } //popupdisabled
                    if (lionTest === true) { lionPopup() } //popupdisabled
                    if (cheetahTest === true) { cheetahPopup() } //popupdisabled
                    if (alligatorTest === true) { alligatorPopup() } //popupdisabled
                    if (sharkTest === true) { sharkPopup() } //popupdisabled
                    if (tigerTest === true) { tigerPopup() } //popupdisabled
                    if (flamingoTest === true) { flamingoPopup() } //popupdisabled
                    //console.log(flamingoTest)
                4

                }, 1000);
            };
            getTime();
            

            // This function creates a push notification
            function otterPopup() {
                Push.create("otter show starts in 15 minutes", {
                    body: "To the Otter talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function seaLionPopup() {
                Push.create("Sea Lion show starts in 15 minutes", {
                    body: "To the Sea Lion show!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function savannahPopup() {
                Push.create("Savannah Talk is starting soon", {
                    body: "To the Savannah Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function rhinoPopup() {
                Push.create("Greater One Horned Rhino Talk is starting soon", {
                    body: "To the Rhino Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function elephantPopup() {
                Push.create("African Elephant Talk is starting soon", {
                    body: "To the African Elephant Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function reptilePopup() {
                Push.create("Reptile Talk is starting soon", {
                    body: "To the Reptile Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function lionPopup() {
                Push.create("Lion Talk is starting soon", {
                    body: "To the Lion Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function cheetahPopup() {
                Push.create("Cheetah Talk is starting soon", {
                    body: "To the Cheetah Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function alligatorPopup() {
                Push.create("Alligator Talk is starting soon", {
                    body: "To the Alligator Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function sharkPopup() {
                Push.create("Shark Talk is starting soon", {
                    body: "To the Shark Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function tigerPopup() {
                Push.create("Tiger Talk is starting soon", {
                    body: "To the Tiger Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function flamingoPopup() {
                Push.create("Flamingo Talk is starting soon", {
                    body: "To the Flamingo Talk!",
                    icon: '/icon.png',
                    timeout: 4000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            };

            function addZero(i) { //function adds leading zero to minutes and zero's if needed
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }

    
        } //ends the success function

    }); //ends the ajax call

} //ends the appTest function
